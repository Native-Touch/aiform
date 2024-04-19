"use client";

import { Button } from "~/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "~/components/ui/select";

// import { useState } from "react";
// import React from "react";

export default function OnboardingPage() {
  // const [selectedValue, setSelectedValue] = useState('1');

  // const handleInputChange = (event) => {
  //   setSelectedValue(event.target.value);
  // }

  return(
    <div className="text-center space-y-6 ">
      {/* <div>
        {selectedValue === '1' ? (
          <select value={selectedValue} onChange={handleInputChange}>
            
          </select>
        ) : (
          <select value={selectedValue} onChange={handleInputChange}>

          </select>
        )}
      </div> */}

      <div className="text-6xl font-semibold text-black drop-shadow-md">
         Onboarding
      </div>
      <p className="text-lg">
        Which industy do you work in?
      </p>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center gap-2 w-[200px]">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Industry..." className="flex justify center" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Industry...</SelectLabel>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* TODO: add proper combobox */}

          <Button>Next</Button>
          <Button>Skip</Button>
        </div>
      </div>
    </div>
  );
}
