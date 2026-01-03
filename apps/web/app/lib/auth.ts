import z from "zod";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@repo/db";
import GoogleProvider from "next-auth/providers/google";




export const NEXT_AUTH={
providers:[
        CredentialsProvider({
            name:"Email",
            credentials:{
                name:{label:'Username',type:'text',placeholder:"Enter Your name"},
                email:{label:'email', type:'email',placeholder:'random@gmail.com'},
                password:{label:'password',type:'password',placeholder:'******'}


            },
            async authorize(credentials:any){
                
                try{

                    const credentialSchema=z.object({
                   name: z.string().min(3, "Name must be at least 3 characters").optional(),

                    email:z.string().email(),
                    password:z.string().min(6,"Enter minimum 6 valid Length")
                })

                    const parsed=credentialSchema.safeParse(credentials);
                      if(!parsed.success){
                        console.log(parsed.error.flatten());
                        return null;
                      }

                      const {name,email,password}=parsed.data;

                  const existingUser=await prisma.user.findFirst({
                    where:{
                        email:email,
                    }
                  });

                  if(existingUser){
                    const passwordValid=await bcrypt.compare(password,existingUser.password);


                    if(!passwordValid){
                        return null;
                    }

                    return {
                        id:existingUser.id.toString(),
                        name:existingUser.name,
                        email:existingUser.email
                    }


                  }

                  //now the new user 
                  const hashedPassword=await bcrypt.hash(password,10);

                  const newUser=await prisma.user.create({
                      data:{
                         name:name || "",
                         email:email,
                         password:hashedPassword
                      }
                  })

                  if(newUser){

                  return {
                     id:newUser.id.toString(),
                     name:newUser.name,
                     email:newUser.email,
                  };

                }

                return null;


                }
                catch(e){

                    console.log("Authorize error: ",e);
                    return null;


                }
                   
        }
        }),

        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  })
        
    ],
    secret:process.env.NEXTAUTH_SECRET
}