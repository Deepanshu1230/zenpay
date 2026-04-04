"use client"
import ZenpayLanding from "../components/Landing";
import { prisma } from "@repo/db";
import { useSession } from "next-auth/react";

export default function Page() {
    const user=useSession();
    if(!user){
      return;
    }

  return (
    <div >
      <ZenpayLanding/>
     
    </div>
  );
}