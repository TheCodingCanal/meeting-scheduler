/*
  Warnings:

  - You are about to drop the column `content` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Schedule` table. All the data in the column will be lost.
  - Added the required column `friday` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monday` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saturday` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sunday` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thursday` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timezone` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tuesday` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wednesday` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedule" DROP COLUMN "content",
DROP COLUMN "title",
ADD COLUMN     "friday" TEXT NOT NULL,
ADD COLUMN     "monday" TEXT NOT NULL,
ADD COLUMN     "saturday" TEXT NOT NULL,
ADD COLUMN     "sunday" TEXT NOT NULL,
ADD COLUMN     "thursday" TEXT NOT NULL,
ADD COLUMN     "timezone" TEXT NOT NULL,
ADD COLUMN     "tuesday" TEXT NOT NULL,
ADD COLUMN     "wednesday" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "IfNeeded" (
    "id" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "sunday" TEXT NOT NULL,
    "monday" TEXT NOT NULL,
    "tuesday" TEXT NOT NULL,
    "wednesday" TEXT NOT NULL,
    "thursday" TEXT NOT NULL,
    "friday" TEXT NOT NULL,
    "saturday" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IfNeeded_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IfNeeded" ADD CONSTRAINT "IfNeeded_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
