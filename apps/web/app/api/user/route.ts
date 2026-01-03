import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../../lib/auth";
import { is } from "zod/locales";
import { NextResponse } from "next/server";


export async function GET (){
    try{
        const session=await getServerSession(NEXT_AUTH);

        if(session?.user){
            return NextResponse.json({
                user:session.user
            })
        }

    }
    catch(e){

         return NextResponse.json({
            message:"User is Not Logged in"
         },{
            status:403
         }
        
        )
        

    }

     return NextResponse.json({
            message:"User is Not Logged in"
         },{
            status:403
         }
        
        )
        
    

    


}