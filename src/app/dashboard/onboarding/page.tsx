"use clinet";

import { Button } from "~/components/ui/button";
import { ComboboxDemo } from "~/components/ui/combobox";

// import { useState } from "react";
// import React from "react";

export default function OnboardingPage() {
  // const [inputValue, setInputValue] = useState('1');

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // }

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