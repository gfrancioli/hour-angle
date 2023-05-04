/*
  Warnings:

  - A unique constraint covering the columns `[hours]` on the table `Angles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[minutes]` on the table `Angles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Angles_hours_key" ON "Angles"("hours");

-- CreateIndex
CREATE UNIQUE INDEX "Angles_minutes_key" ON "Angles"("minutes");
