/*
  Warnings:

  - You are about to drop the column `file` on the `Games` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Games" DROP COLUMN "file",
ADD COLUMN     "gamefile" TEXT NOT NULL DEFAULT 'nofile';
