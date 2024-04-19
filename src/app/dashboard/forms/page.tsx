"use client";
import React, { useState } from "react";
import { Plus, File, Rows3, Columns3, GripVertical } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

const Page = () => {
  const [rows, setRows] = useState(false);
  const [logo, setLogo] = useState("Rows3");
  const [view, setView] = useState("grid");

  const toggleLogo = () => {
    setLogo(logo === "Rows3" ? "Columns3" : "Rows3");
  };

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
          <button title="View Rows" onClick={rowsFlip}>
            <svg
              className="h-6 w-6"
              onClick={toggleLogo}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {logo === "Rows3" ? <Rows3 /> : <Columns3 />}
            </svg>
          </button>
        </div>
        {view === "grid" ? (
          <div className="grid grid-cols-5 gap-6">
            <div className="flex h-auto w-auto justify-center rounded border bg-white py-8">
              <Plus className="size-16" />
            </div>
            {data.map((item, index) => (
              <div
                key={index}
                className="flex h-auto w-auto justify-center rounded border bg-white py-8"
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
                className="flex h-auto w-auto justify-between rounded border bg-white px-2 py-2"
              >
                <File className="size-4" />
                <p className="text-l font-semibold">{item.name}</p>
                <p className="text-l font-semibold">{item.user}</p>
                <p className="text-l font-semibold">{item.date}</p>
                <Popover>
                  <PopoverTrigger><GripVertical className="size-4" /></PopoverTrigger>
                  <PopoverContent>
                    Content...
                  </PopoverContent>
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
