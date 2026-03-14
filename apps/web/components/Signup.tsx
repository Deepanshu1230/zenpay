"use client"
import {toast} from "sonner";
import image from "../images/bgimage.png";
import Image from "next/image";
import { UserRound, Mail, LockKeyhole } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const Signup = () => {
  const router=useRouter();
    const [loading,setloading]=useState(false);
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    
  return (
    <div className="relative min-h-screen w-full">
      <Image
        src={image}
        alt="Image"
        fill
        priority
        style={{ objectFit: "cover" }}
        className="-z-10"
      />
      {/* Dark overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />

      <div className="relative min-h-screen  flex items-center justify-center ">
        <div className="flex flex-col z-10 rounded-3xl border border-white/20  backdrop-blur-lg  w-[450px] h-[600px] shadow-2xl bg-white/15  items-center justify-center">
          {/* haeading */}
          <div className="flex flex-col leading-relaxed items-center justify-center text-2xl font-bold tracking-wide text-white">
            Join The Peace
            <div className="flex font-normal leading-relaxed text-sm tracking-wide ">
              Experience the Future of Mindful
            </div>
          </div>

          {/* details */}
          <div>
            <div className="relative flex w-full items-center justify-center mt-6 mb-6">
              <UserRound className="absolute left-2  text-slate-300" />

              <input
                onChange={(e) => {
                    setname(e.target.value);
                }}
                className="w-[350px] placeholder-slate-200  text-white py-3 pl-10 pr-3 rounded-2xl border border-white/20  bg-white/15 outline-none"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="relative flex w-full items-center justify-center mb-6">
              <Mail className="absolute left-2 text-slate-300" />
              <input
              onChange={(e) => {
                    setemail(e.target.value);
                }}
                type="email"
                placeholder="random@gmail.com"
                className="w-[350px] placeholder-slate-200  text-white py-3 pl-10 pr-3 rounded-2xl border border-white/20  bg-white/15 outline-none"
              />
            </div>
            <div className="relative flex w-full items-center justify-center mb-6">
              <LockKeyhole className="absolute left-2 text-slate-300" />
              <input
              onChange={(e) => {
                    setpassword(e.target.value);
                }}
                type="password"
                placeholder="******"
                className="w-[350px] placeholder-slate-200  text-white py-3 pl-10 pr-3 rounded-2xl border border-white/20  bg-white/15 outline-none"
              />
            </div>
          </div>

          {/* button */}
          <div>
            <button 
            onClick={async() => {
              setloading(true);
              const res=await signIn("credentials",{
                email,
                name,
                password,
                redirect:false
              })

              setloading(false);
              if(res?.error){
                toast.error("Error is there");
               

              }
              else{
                toast.success("Account Created");
                router.push("/");

              }

            }}
            className="w-[350px] bg-white/15 text-white px-16 py-4 rounded-3xl hover:bg-white/30 duration-300 transition-all font-medium tracking-wide leading-relaxed cursor-pointer">
              {loading ? "Creating..." : "Create Account"}
            </button>
          </div>

          <div className=" w-[200px] flex items-center gap-3 my-6">
            <div className="h-px flex-1 bg-white/30" />
            <span className="text-white/60 text-sm font-light tracking-wide">
              OR
            </span>
            <div className="h-px flex-1 bg-white/30" />
          </div>

          <div className="flex gap-x-3 items-center justify-center w-[350px] bg-white/15 text-white px-16 py-4 rounded-3xl hover:bg-white/30 duration-300 transition-all">
            <FcGoogle className="w-5 h-5" />
            <button onClick={() => signIn("google", { callbackUrl: "/" })} className="font-medium tracking-wide leading-relaxed  cursor-pointer">
              Sign with Google
            </button>
          </div>

          {/* last text  */}
          <div className="mt-4 text-white/25">
            Already have an account? <span className="underline font-medium text-white cursor-pointer ">Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};
