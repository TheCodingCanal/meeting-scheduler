/*
  Warnings:

  - Made the column `sunday` on table `IfNeeded` required. This step will fail if there are existing NULL values in that column.
  - Made the column `monday` on table `IfNeeded` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tuesday` on table `IfNeeded` required. This step will fail if there are existing NULL values in that column.
  - Made the column `wednesday` on table `IfNeeded` required. This step will fail if there are existing NULL values in that column.
  - Made the column `thursday` on table `IfNeeded` required. This step will fail if there are existing NULL values in that column.
  - Made the column `friday` on table `IfNeeded` required. This step will fail if there are existing NULL values in that column.
  - Made the column `saturday` on table `IfNeeded` required. This step will fail if there are existing NULL values in that column.
  - Made the column `friday` on table `Schedule` required. This step will fail if there are existing NULL values in that column.
  - Made the column `monday` on table `Schedule` required. This step will fail if there are existing NULL values in that column.
  - Made the column `saturday` on table `Schedule` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sunday` on table `Schedule` required. This step will fail if there are existing NULL values in that column.
  - Made the column `thursday` on table `Schedule` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tuesday` on table `Schedule` required. This step will fail if there are existing NULL values in that column.
  - Made the column `wednesday` on table `Schedule` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nickname` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "IfNeeded" ALTER COLUMN "sunday" SET NOT NULL,
ALTER COLUMN "monday" SET NOT NULL,
ALTER COLUMN "tuesday" SET NOT NULL,
ALTER COLUMN "wednesday" SET NOT NULL,
ALTER COLUMN "thursday" SET NOT NULL,
ALTER COLUMN "friday" SET NOT NULL,
ALTER COLUMN "saturday" SET NOT NULL;

-- AlterTable
ALTER TABLE "Schedule" ALTER COLUMN "friday" SET NOT NULL,
ALTER COLUMN "monday" SET NOT NULL,
ALTER COLUMN "saturday" SET NOT NULL,
ALTER COLUMN "sunday" SET NOT NULL,
ALTER COLUMN "thursday" SET NOT NULL,
ALTER COLUMN "tuesday" SET NOT NULL,
ALTER COLUMN "wednesday" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "nickname" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
