"use client";

import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import { Button } from "~/components/ui/button";

export default function Example() {
  return (
    <>
      <div className="flex min-h-full w-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 flex justify-center sm:mx-auto sm:w-full sm:max-w-sm">
            <Button variant="outline"
              className="flex w-8/12 gap-2"
              onClick={() => signIn("github").then((res) => console.log(res))}
            >
              <Github></Github> Sign in with GitHub
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
