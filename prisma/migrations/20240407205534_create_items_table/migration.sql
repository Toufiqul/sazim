-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT,
    "owner" TEXT NOT NULL,
    "lentTo" TEXT,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);
