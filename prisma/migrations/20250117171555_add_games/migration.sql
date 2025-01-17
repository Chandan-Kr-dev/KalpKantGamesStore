-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "ReleasedStatus" TEXT NOT NULL DEFAULT 'Released',
    "Price" TEXT NOT NULL DEFAULT '0',
    "file" TEXT NOT NULL DEFAULT 'nofile',
    "description" TEXT NOT NULL,
    "storelink" TEXT NOT NULL DEFAULT 'null',
    "coverimg" TEXT NOT NULL DEFAULT 'null',
    "trailer" TEXT NOT NULL DEFAULT 'null',
    "Screenshot1" TEXT NOT NULL DEFAULT 'null',
    "Screenshot2" TEXT NOT NULL DEFAULT 'null',
    "Screenshot3" TEXT NOT NULL DEFAULT 'null',
    "userid" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Games_id_key" ON "Games"("id");
