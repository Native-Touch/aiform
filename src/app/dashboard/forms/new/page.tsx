"use client";

import {
  Copy,
  NotepadText,
  Plus,
  Rows2,
  Sparkles,
  Trash2,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Separator } from "~/components/ui/separator";
import { Textarea } from "~/components/ui/textarea";

export default function NewFormPage() {
  return (
    <div className="relative flex h-screen flex-col items-center gap-4 px-8 pt-4">
      <div className="flex w-[50vw] flex-col items-center gap-8">
        <div className="flex w-full flex-col gap-2 rounded border p-4 shadow">
          <Input placeholder="Form Title" className="w-full" />
          <Textarea
            placeholder="Form Description"
            className="h-fit min-h-0 w-full"
            rows={1}
          />
        </div>
        <div className="grid w-full grid-cols-2 gap-4 rounded border p-4 shadow">
          <Input placeholder="Question" className="w-full" />
          <Select>
            <SelectTrigger>
              <SelectValue>Text</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="text">Text</SelectItem>
              <SelectItem value="number">Number</SelectItem>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="time">Time</SelectItem>
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Description"
            className="col-span-2 w-full"
            rows={1}
          />
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="group">
              <Copy className="size-4" />
            </Button>
            <Button variant="ghost" size="icon" className="group">
              <Trash2 className="size-4 text-destructive" />
            </Button>
            <Separator orientation="vertical" className="mx-2" />
            <div className="flex items-center">
              <Checkbox className="ml-2" id="required" />
              <Label className="ml-2" htmlFor="required">
                Required
              </Label>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-4">
          <Button variant="default" className="w-full gap-2">
            <Plus className="size-4" />
            Add Question
          </Button>
          <Button variant="secondary" className="w-full gap-2">
            <NotepadText className="size-4" />
            Add Title/Descripion/Image
          </Button>
          <Button variant="secondary" className="w-full gap-2">
            <Rows2 className="size-4" />
            Add Section
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full items-center justify-center">
        <div className="flex w-[50vw] rounded border bg-background p-2 shadow">
          <Textarea placeholder="Prompt" className="w-full border-0" />
          <Button variant="ghost" size="icon" className="group ml-auto">
            <Sparkles
              size={24}
              className="text-muted-foreground group-hover:text-foreground"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
