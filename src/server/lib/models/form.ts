import { Form } from "@prisma/client";

export class FormHelper {
  form: Form;
  constructor(form: Form) {
    this.form = form;
  }
}
