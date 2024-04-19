"use client";

import React, { useState } from "react";
import { Plus, File, Rows3, Menu, Grid } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import Link from "next/link";

const Page = () => {
  const [rows, setRows] = useState(false);
  const [view, setView] = useState("grid");

  const toggleView = () => {
    setView(view === "grid" ? "list" : "grid");
  };

  const rowsFlip = () => {
    setRows(!rows);
    toggleView();
  };

  const data = [
    {
      name: "Form Name",
      user: "You",
      date: "19-04-2024 09:19 PM",
      icon: "File",
    },
    {
      name: "Form Name",
      user: "You",
      date: "19-04-2024 09:19 PM",
      icon: "File",
    },
    {
      name: "Form Name",
      user: "You",
      date: "19-04-2024 09:19 PM",
      icon: "File",
    },
    {
      name: "Form Name",
      user: "You",
      date: "19-04-2024 09:19 PM",
      icon: "File",
    },
    {
      name: "Form Name",
      user: "You",
      date: "19-04-2024 09:19 PM",
      icon: "File",
    },
  ];

  return (
    <div className="px-10">
      <div className="">
        <div className="flex justify-between pb-4">
          <p className="text-l font-semibold">Form Responses</p>
          <Button
            variant="ghost"
            title="View Rows"
            onClick={rowsFlip}
            size="icon"
          >
            {view === "grid" ? (
              <Rows3 className="size-5" />
            ) : (
              <Grid className="size-5" />
            )}
          </Button>
        </div>
        {view === "grid" ? (
          <div className="grid grid-cols-5 gap-6">
            <Link href="forms/new" className="flex h-auto w-auto justify-center rounded border py-8">
              <Plus className="size-16" />
            </Link>
            {data.map((item, index) => (
              <div
                key={index}
                className="flex h-auto w-auto justify-center rounded border py-8"
              >
                <File className="size-16" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-rows-5 gap-3">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex h-auto w-auto items-center justify-between rounded border px-2 py-3"
              >
                <File className="size-5" />
                <p className="text-l font-semibold">{item.name}</p>
                <p className="text-l font-semibold">{item.user}</p>
                <p className="text-l font-semibold">{item.date}</p>
                <Popover>
                  <PopoverTrigger>
                    <Menu className="size-4" />
                  </PopoverTrigger>
                  <PopoverContent>Content...</PopoverContent>
                </Popover>
              </div>
            ))}
          </div>
        )}
        <div></div>
      </div>
    </div>
  );
};

export default Page;
