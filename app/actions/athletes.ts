"use server";

import { prisma } from "@/lib/prisma";
import { Category, Gender } from "../../generated/prisma/client";
import { revalidatePath } from "next/cache";

export async function createAthlete(formData: FormData) {
  const name = formData.get("name")?.toString() ?? "";
  const category = formData.get("category")?.toString() as Category;
  const gender = formData.get("gender")?.toString() as Gender;
  const mainEvent = formData.get("mainEvent")?.toString() ?? "";
  const initials = formData.get("initials")?.toString() ?? "";

  await prisma.athletes.create({
    data: {
      name,
      category,
      gender,
      mainEvent,
      initials,
      color: "#1d3557",
    },
  });

  revalidatePath("/athletes");
}

export async function deleteAthlete(id: number) {
  await prisma.$transaction([
    prisma.result.deleteMany({ where: { athleteId: id } }),
    prisma.athletes.delete({ where: { id } }),
  ]);

  revalidatePath("/athletes");
}
