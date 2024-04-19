import { Field, Form, Prisma, Stage } from "@prisma/client";
import { db } from "~/server/db";

export class StageHelper {
  stage: Stage;
  fields: Field[] = [];
  constructor() {
    this.stage = {};
    this.fields = db.field.findMany({
      where: {
        stageId: this.stage.id,
      },
    });
  }
}
