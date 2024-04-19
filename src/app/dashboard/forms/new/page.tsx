"use client";

import { Copy, NotepadText, Plus, Rows2, Sparkles, Trash2 } from "lucide-react";
import { Fragment, useState } from "react";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Separator } from "~/components/ui/separator";
import { Skeleton } from "~/components/ui/skeleton";
import { Textarea } from "~/components/ui/textarea";
import { generateResponse } from "~/server/lib/ai";

export type question = {
  label: string;
  type: string;
  required: boolean;
  placeholder: string | null;
  options?: string[];
  min?: number;
  max?: number;
};

export default function NewFormPage() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<question[]>([]);
  const [prompt, setPrompt] = useState<string>();
  // let loading = false;

  return (
    <div className="relative flex h-screen flex-col items-center gap-4 px-8 pt-4">
      <div className="flex w-[50vw] flex-col items-center gap-8 pb-40">
        <div className="flex w-full flex-col gap-2 rounded border p-4 shadow">
          <Input placeholder="Form Title" className="w-full" />
          <Textarea
            placeholder="Form Description"
            className="h-fit min-h-0 w-full"
            rows={1}
          />
        </div>
        {loading && (
          <>
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
          </>
        )}
        {questions && (
          <>
            {questions.map((question, index) => (
              <div
                key={index}
                className="grid w-full grid-cols-2 gap-4 rounded border p-4 shadow"
              >
                <Input
                  placeholder="Question"
                  className="w-full"
                  value={question.label}
                />
                <Select value={question.type}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={question.type}>
                      {question.type}
                    </SelectItem>
                    <SelectItem value="text">Text</SelectItem>
                    <SelectItem value="number">Number</SelectItem>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="time">Time</SelectItem>
                  </SelectContent>
                </Select>
                {question.type === "MULTIPLECHOICE" && (
                  <RadioGroup className="col-span-2">
                    {question.options?.map((op) => (
                      <div className="flex items-center space-x-2" key={op}>
                        <RadioGroupItem id={`radio ${op}`} value={op} />
                        <Label htmlFor={`radio ${op}`}>{op}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}
                {/* <Textarea
                  placeholder="Description"
                  className="col-span-2 w-full"
                  rows={1}
                /> */}
                <div className="flex items-center">
                  <Button variant="ghost" size="icon" className="group">
                    <Copy className="size-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="group">
                    <Trash2 className="size-4 text-destructive" />
                  </Button>
                  <Separator orientation="vertical" className="mx-2" />
                  <div className="flex items-center">
                    <Checkbox
                      className="ml-2"
                      id="required"
                      value={question.required}
                    />
                    <Label className="ml-2" htmlFor="required">
                      Required
                    </Label>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {/* <div className="flex w-full items-center gap-4">
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
        </div> */}
      </div>
      <div className="fixed bottom-0 flex w-full items-center justify-center">
        <div className="flex w-[50vw] rounded border bg-background p-2 shadow">
          <Textarea
            placeholder="Prompt"
            className="w-full border-0"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            variant="ghost"
            size="icon"
            className="group ml-auto"
            onClick={async () => {
              if (!prompt) return;
              setLoading(true);
              setQuestions([]);
              const questions = await generateResponse([
                {
                  role: "SYSTEM",
                  content: `"Hello you are an expert at realizing data needs for google forms app. Consider the following prompts and generate a form in the following format.
               Provide a list of objects as response. These objects should follow the type: {
                label: string;
                type: FieldType;
                required: boolean;
                placeholder: string | null;
              }
               where FieldType is
               {
                TEXT
                TEXTAREA
                NUMBER
                EMAIL
                PASSWORD
                MULTIPLECHOICE
                CHECKBOX
                DROPDOWN
                DATE
                SCALE
              }
  
              For fields "multiple choice", "checkbox", and "dropdown", you should also provide a "options" field which is an array of strings.
              For field "scale", you should also provide a "min" and "max" field which are numbers.
  
               ONLY REPLY WITH A VALID JSON JAVASCRIPT PARSABLE OBJECT NOTHING ELSE, ABSOLUTELY NOTHING ELSE"`,
                },
                {
                  role: "USER",
                  content: prompt,
                },
              ]);
              setQuestions(
                JSON.parse(questions.replace(/\\n|\\/g, "")) as question[],
              );
              setLoading(false);
            }}
          >
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
