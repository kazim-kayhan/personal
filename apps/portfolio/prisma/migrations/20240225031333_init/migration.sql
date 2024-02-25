-- CreateTable
CREATE TABLE "ContentMeta" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "View" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    CONSTRAINT "View_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "ContentMeta" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Share" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    CONSTRAINT "Share_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "ContentMeta" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Reaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "count" INTEGER DEFAULT 1,
    "section" TEXT,
    "type" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionId" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    CONSTRAINT "Reaction_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "ContentMeta" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ContentMeta_slug_key" ON "ContentMeta"("slug");
