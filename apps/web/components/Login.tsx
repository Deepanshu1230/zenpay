"use client";

import { toast } from "sonner";
import image from "../images/bgimage.png"; // Ensure this path is correct
import Image from "next/image";
import { Mail, LockKeyhole } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="relative min-h-screen w-full">
      <Image
        src={image}
        alt="Background"
        fill
        priority
        style={{ objectFit: "cover" }}
        className="-z-10"
      />
      {/* Dark overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />

      <div className="relative min-h-screen flex items-center justify-center">
        <div className="flex flex-col z-10 rounded-3xl border border-white/20 backdrop-blur-lg w-[450px] py-12 shadow-2xl bg-white/15 items-center justify-center">
          
          {/* Heading */}
          <div className="flex flex-col leading-relaxed items-center justify-center text-2xl font-bold tracking-wide text-white mb-8">
            Welcome Back
            <div className="flex font-normal leading-relaxed text-sm tracking-wide text-white/80 mt-1">
              Log in to continue to Zenpay
            </div>
          </div>

          {/* Input Fields */}
          <div className="w-full flex flex-col items-center">
            <div className="relative flex w-full items-center justify-center mb-6">
              <Mail className="absolute left-[3.5rem] text-slate-300" size={20} />
              <input
                onChange={(e) => setemail(e.target.value)}
                type="email"
                placeholder="random@gmail.com"
                className="w-[350px] placeholder-slate-200 text-white py-3 pl-12 pr-4 rounded-2xl border border-white/20 bg-white/15 outline-none focus:border-white/50 transition-colors"
              />
            </div>

            <div className="relative flex w-full items-center justify-center mb-8">
              <LockKeyhole className="absolute left-[3.5rem] text-slate-300" size={20} />
              <input
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                placeholder="******"
                className="w-[350px] placeholder-slate-200 text-white py-3 pl-12 pr-4 rounded-2xl border border-white/20 bg-white/15 outline-none focus:border-white/50 transition-colors"
              />
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              disabled={loading}
              onClick={async () => {
                if (!email || !password) {
                  toast.error("Please fill in all fields");
                  return;
                }

                setloading(true);
                const res = await signIn("credentials", {
                  email,
                  password,
                  redirect: false,
                });

                setloading(false);
                
                if (res?.error) {
                  toast.error("Invalid email or password");
                } else {
                  toast.success("Logged in successfully");
                  router.push("/"); // Or push to "/dashboard"
                }
              }}
              className="w-[350px] bg-white/15 text-white px-16 py-4 rounded-3xl hover:bg-white/30 duration-300 transition-all font-medium tracking-wide leading-relaxed cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          {/* Divider */}
          <div className="w-[200px] flex items-center gap-3 my-6">
            <div className="h-px flex-1 bg-white/30" />
            <span className="text-white/60 text-sm font-light tracking-wide">
              OR
            </span>
            <div className="h-px flex-1 bg-white/30" />
          </div>

          {/* Google Button */}
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex gap-x-3 items-center justify-center w-[350px] bg-white/15 text-white px-16 py-4 rounded-3xl hover:bg-white/30 duration-300 transition-all font-medium tracking-wide leading-relaxed cursor-pointer"
          >
            <FcGoogle className="w-5 h-5" />
            Sign in with Google
          </button>

          {/* Bottom Link */}
          <div className="mt-8 text-white/50 text-sm">
            Don't have an account?{" "}
            <Link href="/signup">
              <span className="underline font-medium text-white hover:text-white/80 transition-colors cursor-pointer ml-1">
                Sign up
              </span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}