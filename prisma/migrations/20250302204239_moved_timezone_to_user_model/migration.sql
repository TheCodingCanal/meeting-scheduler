/*
  Warnings:

  - You are about to drop the column `timezone` on the `IfNeeded` table. All the data in the column will be lost.
  - You are about to drop the column `timezone` on the `Schedule` table. All the data in the column will be lost.
  - Added the required column `timezone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IfNeeded" DROP COLUMN "timezone";

-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "timezone";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "timezone" TEXT NOT NULL;
