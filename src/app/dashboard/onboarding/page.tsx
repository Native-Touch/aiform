"use client";

import { Button } from "~/components/ui/button";
import { ComboboxDemo } from "~/components/ui/combobox";
import { 
  Select,
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
  } from "~/components/ui/select";

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
          <Button>Next</Button>
          <Button>Skip</Button>
        </div>
      </div>
    </div>
  );
}
{/* TODO: add proper combobox */}