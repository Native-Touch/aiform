"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { useState } from "react";
import { type DateRange } from "react-day-picker";

interface DatePickerProps {
  mode: "single" | "range";
  value?: Date;
  onChange: (value: Date | DateRange) => void;
  showIcon?: boolean;
  error?: string;
}

export function DatePicker(props: DatePickerProps) {
  const [date, setDate] = useState<Date | DateRange | undefined>(props.value);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground",
              props.error && "border-red-800",
            )}
          >
            {props.showIcon && <CalendarIcon className="mr-2 h-4 w-4" />}
            {props.mode === "single" ? (
              props.value ? (
                format(date as Date, "MMM dd, yyyy") ?? "Select a date"
              ) : (
                "Select a date"
              )
            ) : (date as DateRange).from && (date as DateRange).to ? (
              <>
                {format((date as DateRange).from ?? "", "MMM dd, yyyy")} -{" "}
                {format((date as DateRange).to ?? "", "MMM dd, yyyy")}
              </>
            ) : (
              "Select a date range"
            )}
          </Button>
          <span className="text-xs text-red-700">{props.error}</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        {/* @ts-expect-error : IDK */}
        <Calendar
          mode={props.mode}
          selected={date}
          onSelect={(date: Date | DateRange | undefined) => {
            if (!date) return;
            setDate(date);
            props.onChange(date);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
