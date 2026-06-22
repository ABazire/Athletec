"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createResult(formData: FormData) {
  const athleteId = Number(formData.get("athleteId"));
  const value = formData.get("value")?.toString() ?? "";

  await prisma.result.create({
    data: { athleteId, value },
  });

  revalidatePath("/");
}
