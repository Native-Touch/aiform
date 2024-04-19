import { Field } from "@prisma/client";
import { db } from "~/server/db";

export class FieldHelper {
  field: Field;
  constructor(field: Field) {
    this.field = field;
  }
  get id() {
    return this.field.id;
  }
  updateLabel(label: string) {
    this.field.label = label;
  }
  updatePlaceholder(placeholder: string) {
    this.field.placeholder = placeholder;
  }
  updateRequired(required: boolean) {
    this.field.required = required;
  }
  getField() {
    return this.field;
  }
  async save() {
    // Save the field to the database
    const field = await db.field.update({
      data: this.field,
      where: {
        id: this.field.id,
      },
    });
    if (!field) {
      throw new Error("Failed to save field.");
    }
  }
}
