-- DropIndex
DROP INDEX "Angles_minutes_key";

-- AlterTable
ALTER TABLE "Angles" ALTER COLUMN "minutes" DROP NOT NULL;
