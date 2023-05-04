-- CreateTable
CREATE TABLE "Angles" (
    "id" SERIAL NOT NULL,
    "hours" INTEGER NOT NULL,
    "minutes" INTEGER NOT NULL,
    "angle" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Angles_pkey" PRIMARY KEY ("id")
);
