/*
  Warnings:

  - You are about to drop the `Games` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Games";

-- CreateTable
CREATE TABLE "uploadedgames" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "ReleasedStatus" TEXT NOT NULL DEFAULT 'Released',
    "Price" TEXT NOT NULL DEFAULT '0',
    "gamelink" TEXT NOT NULL DEFAULT 'nofile',
    "description" TEXT NOT NULL,
    "storelink" TEXT NOT NULL DEFAULT 'null',
    "coverimg" TEXT NOT NULL DEFAULT 'null',
    "trailer" TEXT NOT NULL DEFAULT 'null',
    "screenshot1" TEXT NOT NULL DEFAULT 'null',
    "screenshot2" TEXT NOT NULL DEFAULT 'null',
    "screenshot3" TEXT NOT NULL DEFAULT 'null',
    "userid" INTEGER NOT NULL,
    "developer" TEXT NOT NULL DEFAULT 'null',

    CONSTRAINT "uploadedgames_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "uploadedgames_id_key" ON "uploadedgames"("id");
