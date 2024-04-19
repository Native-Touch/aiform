import { Field } from "@prisma/client";

export class FieldHelper {
  field: Field;
  constructor(field: Field) {
    this.field = field;
  }
  get id() {
    return this.field.id;
  }
}
