import { cache } from "react";
import { db } from "~/server/db";

export const getFormsForUser = async () => {
  const id = "clv6ss57r0000so69n1b0tlij";
  const forms = await db.form.findMany({
    where: {
      ownerId: id,
    },
  });
  return forms;
};
