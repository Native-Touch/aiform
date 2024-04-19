import type { Prisma, User } from "@prisma/client";
import { db } from "~/server/db";

export class UserHelper {
  user: User;
  constructor(user: User) {
    this.user = user;
  }
  createForm: (form: Prisma.FormCreateInput) => Promise<void> = async (
    form,
  ) => {
    try {
      // Create a form
      const createdForm = await db.form.create({
        data: form,
      });
      if (!createdForm) {
        throw new Error("Form could not be created.");
      } else {
        // Add the form to the user's forms
        const updatedUser = await db.user.update({
          where: { id: this.user.id },
          data: {
            forms: {
              connect: {
                id: createdForm.id,
              },
            },
          },
        });
        if (!updatedUser) {
          throw new Error("Form could not be connected to the user.");
        }
      }
    } catch (e) {
      throw new Error("Unexpected error occured", e);
    }
  };
}
