import express from "express";
import { prisma } from "@repo/db";
import z from "zod";
const app=express();


app.use(express.json());

app.post("/hdfcWebhook",async(req,res) => {

    const zodSchema=z.object({
        token:z.string(),
        userId:z.number().int(),
        amount:z.number().int()

    })

    
    const paymentInformation={
        token:req.body.token,
        userId:req.body.user_identifier,
        amount:req.body.amount
    }

    const parsed=zodSchema.safeParse(paymentInformation);
    if (!parsed.success) {
    return res.status(400).json({
      message: "Invalid webhook payload",
      errors: parsed.error,
    });
  }
    const { userId, amount,token } = parsed.data;
    
     // we have to put his both into the transaction

     try{
        await prisma.$transaction([
        prisma.balance.update({
        where:{
            userId:userId
        },
        data:{
             amount:{
                increment:amount
             }
        }
    
    }),

    prisma.onRampTransaction.update({
        where:{
            token:token
        },
        data:{
            status:"Success"
        }
    })


     ])
    

     }
     catch(e){
        res.status(411).json({
            message:"Error while Proessing webhook"
        })

     }

     
    res.json({
        message:"captured"
    })


    

})