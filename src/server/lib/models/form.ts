import { Field, Form, Prisma } from "@prisma/client";
import { randomUUID } from "crypto";
import { db } from "~/server/db";
import { FieldHelper } from "./field";

export class FormHelper {
  form: Form;
  fields: Record<string, FieldHelper> = {};
  constructor(id?: string, desc?: string, title?: string, ownerId?: string) {
    if (!id) {
      if (!ownerId) {
        throw new Error("Owner ID is required to create a new form.");
      }
      // Create a new form
      const date: Date = new Date();
      this.form = {
        id: randomUUID(),
        createdAt: date,
        updatedAt: date,
        description: desc ? desc : null,
        title: title ? title : "Untitled Form",
        ownerId: ownerId,
      };
    }
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
    });
  }
  removeField(fieldId: string) {
    // Remove a field from the form
    delete this.fields[fieldId];
    // this.fields = Object.fromEntries(
    //   Object.entries(this.fields).filter(([id, field]) => id !== fieldId),
    // );
  }
  async save() {
    // Save the form and its fields to the database
    const form = await db.form.update({
      data: {
        description: this.form.description,
        title: this.form.title,
        fields: {
          create: this.fields,
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
  return new FormHelper(createdForm.id);
}
