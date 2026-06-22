"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createResult(formData: FormData) {
  const athleteId = Number(formData.get("athleteId"));
  const eventId = Number(formData.get("eventId"));
  const value = formData.get("value")?.toString() ?? "";
  const competition = formData.get("competition")?.toString() ?? "";
  const date = new Date(formData.get("date")?.toString() ?? "");

  await prisma.result.create({
    data: { athleteId, eventId, value, competition, date },
  });

  revalidatePath("/");
}
