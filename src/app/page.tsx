import { Github } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function Example() {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 w-full">
          <div className="">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
            <h2 className="mt-5 text-center text-5xl font-bold leading-9 tracking-tight">
              FormMatic
            </h2>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
              Sign in to your account
            </h2>
          </div>
  
          <div className="flex justify-center mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <Button variant="outline" className="w-8/12 flex gap-2">
            <Github></Github>  Sign in with GitHub
          </Button>
          </div>
          </div>
        </div>
      </>
    )
  }
  