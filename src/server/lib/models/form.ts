import { Field, Form, Prisma } from "@prisma/client";

export class FormHelper {
  form: Form;
  fields: Field[] = [];
  constructor(form: Form) {
    this.form = form;
  }
  addField(field: Prisma.FieldCreateInput) {
    // Add a field to the form
    this.fields.push({});
  }
}
