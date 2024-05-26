/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[emailId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `emailId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profilePicture` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
ADD COLUMN     "emailId" TEXT NOT NULL,
ADD COLUMN     "profilePicture" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'user';

-- CreateIndex
CREATE UNIQUE INDEX "User_emailId_key" ON "User"("emailId");
