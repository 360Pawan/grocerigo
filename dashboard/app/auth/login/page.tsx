import Image from "next/image";

import loginBg from "@/assets/images/login/login-bg.jpg";
import { Login } from "@/module/auth/login";

export default function LoginPage() {
  return (
    <section className="min-h-screen grid lg:grid-cols-2">
      <div className="flex justify-center items-center px-5">
        <div className="max-w-lg w-full">
          <h1 className="text-3xl font-semibold">Welcome back admin</h1>
          <Login/>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          className="h-[90vh] object-cover"
          alt="NextUI hero Image with delay"
          src={loginBg}
        />
        <p className="text-center mt-2 italic">
          Image by{" "}
          <a
            href="https://www.freepik.com/free-vector/hand-drawn-one-line-art-illustration_22587404.htm#query=illustartion%20minimal&position=2&from_view=search&track=ais"
            target="_blank"
          >
            Freepik
          </a>
        </p>
      </div>
    </section>
  );
}
