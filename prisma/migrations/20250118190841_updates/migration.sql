/*
  Warnings:

  - You are about to drop the column `UploadedUrl` on the `Games` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Games" DROP COLUMN "UploadedUrl",
ADD COLUMN     "gamelink" TEXT NOT NULL DEFAULT 'nofile';
