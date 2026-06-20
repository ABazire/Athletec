/*
  Warnings:

  - You are about to drop the column `categorie` on the `Athletes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Athletes" DROP COLUMN "categorie",
ADD COLUMN     "category" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "color" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "events" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "gender" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "initials" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "mainEvent" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "results" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "name" SET DEFAULT '',
ALTER COLUMN "sexe" SET DEFAULT '';
