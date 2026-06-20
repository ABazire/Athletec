-- CreateTable
CREATE TABLE "Athletes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "sexe" TEXT NOT NULL,
    "categorie" TEXT NOT NULL,

    CONSTRAINT "Athletes_pkey" PRIMARY KEY ("id")
);
