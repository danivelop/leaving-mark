/*
  Warnings:

  - You are about to drop the `post_likes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `post_likes`;

-- CreateTable
CREATE TABLE `likes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namespace` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `count` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `likes_namespace_slug_key`(`namespace`, `slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
