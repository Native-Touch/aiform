import { Field } from "@prisma/client";

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
}
