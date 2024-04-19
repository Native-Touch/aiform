import { Field } from "./field";

class Form {
  id: string;
  fields: Field[];
  metadata: {
    createdAt: Date;
    updatedAt: Date;
    owner: string;
    ownerID: string;
    isPublic: boolean;
    isLive: boolean;
    name: string;
  };
  constructor(
    id: string,
    fields: Field[],
    metadata: {
      createdAt: Date;
      updatedAt: Date;
      owner: string;
      ownerID: string;
      isPublic: boolean;
      isLive: boolean;
      name: string;
    },
  ) {
    this.id = id;
    this.fields = fields;
    this.metadata = metadata;
  }

  addField(field: Field) {
    this.fields.push(field);
  }
}
