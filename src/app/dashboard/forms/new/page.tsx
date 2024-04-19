import { Send, Sparkles } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
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
              <SelectItem value="text">Text</SelectItem>
              <SelectItem value="text">Text</SelectItem>
              <SelectItem value="text">Text</SelectItem>
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Description"
            className="col-span-2 w-full"
            rows={1}
          />
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full items-center justify-center">
        <div className="flex w-[50vw] rounded border bg-background p-4 shadow">
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
