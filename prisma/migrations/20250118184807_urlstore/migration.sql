/*
  Warnings:

  - You are about to drop the column `gamefile` on the `Games` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Games" DROP COLUMN "gamefile",
ADD COLUMN     "UploadedUrl" TEXT NOT NULL DEFAULT 'nofile';
