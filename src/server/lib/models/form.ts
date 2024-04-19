import type { Field, Form, Prisma } from "@prisma/client";
import { randomUUID } from "crypto";
import { db } from "~/server/db";
import { FieldHelper } from "./field";

export class FormHelper {
  form: Form;
  fields: Record<string, FieldHelper> = {};
  constructor(form: Form) {
    this.form = form;
  }
  addField(field: Prisma.FieldCreateInput) {
    // Add a field to the form
    const date: Date = new Date();
    const id = randomUUID();
    this.fields[id] = new FieldHelper({
      id: randomUUID(),
      formId: this.form.id,
      placeholder: field.placeholder ? field.placeholder : null,
      createdAt: date,
      updatedAt: date,
      label: field.label,
      type: field.type,
      required: field.required,
    } as Field);
  }
  removeField(fieldId: string) {
    // Remove a field from the form
    delete this.fields[fieldId];
    // this.fields = Object.fromEntries(
    //   Object.entries(this.fields).filter(([id, field]) => id !== fieldId),
    // );
  }
  getFieldHelpers() {
    // Get all fields from the form
    return Object.values(this.fields);
  }
  getFields() {
    // Get all fields from the form
    return Object.values(this.fields).map((field) => field.getField());
  }
  async save() {
    // Save the form and its fields to the database
    const form = await db.form.update({
      data: {
        description: this.form.description,
        title: this.form.title,
        fields: {
          upsert: this.getFields().map((field) => ({
            where: {
              id: field.id,
            },
            update: field,
            create: field,
          })),
        },
      },
      where: {
        id: this.form.id,
      },
    });
    if (!form) {
      throw new Error("Failed to save form.");
    }
  }
}

export async function createForm(form: Prisma.FormCreateInput) {
  // Create a new form
  const createdForm = await db.form.create({
    data: form,
  });
  if (!createdForm) {
    throw new Error("Failed to create form.");
  }
  return new FormHelper(createdForm);
}
