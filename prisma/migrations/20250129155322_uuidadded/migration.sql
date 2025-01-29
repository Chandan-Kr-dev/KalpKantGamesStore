/*
  Warnings:

  - The primary key for the `uploadedgames` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "uploadedgames" DROP CONSTRAINT "uploadedgames_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "uploadedgames_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "uploadedgames_id_seq";
