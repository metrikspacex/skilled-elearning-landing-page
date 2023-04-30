-- CreateTable
CREATE TABLE "Data" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "Content" (
    "dataId" INTEGER,
    "heading" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "paragraph" TEXT NOT NULL,
    CONSTRAINT "Content_dataId_fkey" FOREIGN KEY ("dataId") REFERENCES "Data" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
