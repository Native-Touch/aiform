import { Plus, File } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="px-10">
      <div className="grid grid-rows-3 gap-8">
        <div className="grid grid-cols-5 gap-6">
          <div className="flex h-auto w-auto justify-center rounded border bg-white py-8">
            <Plus className="size-16"></Plus>
          </div>
          <div className="flex h-auto w-auto justify-center rounded border bg-white py-8">
            <File className="size-16"></File>
          </div>
          <div className="flex h-auto w-auto justify-center rounded border bg-white py-8">
            <File className="size-16"></File>
          </div>
          <div className="flex h-auto w-auto justify-center rounded border bg-white py-8">
            <File className="size-16"></File>
          </div>
          <div className="flex h-auto w-auto justify-center rounded border bg-white py-8">
            <File className="size-16"></File>
          </div>
        </div>
        <div>
            <p className={`text-l font-semibold pb-2`}>Form Responses</p>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Page;
