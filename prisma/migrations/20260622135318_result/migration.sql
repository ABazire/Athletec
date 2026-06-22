/*
  Warnings:

  - You are about to drop the column `results` on the `Athletes` table. All the data in the column will be lost.
  - You are about to drop the column `sexe` on the `Athletes` table. All the data in the column will be lost.
  - The `category` column on the `Athletes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `gender` column on the `Athletes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Hommes', 'Femmes');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Senior', 'U20', 'U18', 'U17');

-- AlterTable
ALTER TABLE "Athletes" DROP COLUMN "results",
DROP COLUMN "sexe",
DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL DEFAULT 'Senior',
DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'Hommes';

-- CreateTable
CREATE TABLE "Result" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "athleteId" INTEGER NOT NULL,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athletes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
