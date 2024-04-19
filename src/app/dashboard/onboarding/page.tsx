"use clinet";

import { Button } from "~/components/ui/button";
import { ComboboxDemo } from "~/components/ui/combobox";

const industries = [
  "Student",
  "Option2",
];

export default function OnboardingPage() {
  return(
    <div className="text-center space-y-6 ">
      <div className="text-6xl font-semibold text-black drop-shadow-md">
        Onboarding
      </div>
      <p className="text-lg">
        Which industy do you work in?
      </p>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center gap-2 w-[200px]">
          <ComboboxDemo />
          <Button>Next</Button>
          <Button>Skip</Button>
        </div>
      </div>
    </div>
  );
}