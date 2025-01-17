/*
  Warnings:

  - You are about to drop the column `Screenshot1` on the `Games` table. All the data in the column will be lost.
  - You are about to drop the column `Screenshot2` on the `Games` table. All the data in the column will be lost.
  - You are about to drop the column `Screenshot3` on the `Games` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Games" DROP COLUMN "Screenshot1",
DROP COLUMN "Screenshot2",
DROP COLUMN "Screenshot3",
ADD COLUMN     "screenshot1" TEXT NOT NULL DEFAULT 'null',
ADD COLUMN     "screenshot2" TEXT NOT NULL DEFAULT 'null',
ADD COLUMN     "screenshot3" TEXT NOT NULL DEFAULT 'null';
