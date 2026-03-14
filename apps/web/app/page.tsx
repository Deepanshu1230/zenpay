"use client"

import { prisma } from "@repo/db";
import { useSession } from "next-auth/react";

export default function Page() {
    const user=useSession();
    if(!user){
      return;
    }

  return (
    <div className="bg-blue-700 w-full h-9 flex flex-row text-blue-500 font-semibold text-3xl">
      hello ji
      <div>My name is Deepanshu</div>
      <pre>{JSON.stringify(user.data)}</pre>
    </div>
  );
}