export class Field {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  required: boolean;
  constructor(
    id: string,
    type: string,
    label: string,
    placeholder: string,
    required: boolean,
  ) {
    this.id = id;
    this.type = type;
    this.label = label;
    this.placeholder = placeholder;
    this.required = required;
  }
}
