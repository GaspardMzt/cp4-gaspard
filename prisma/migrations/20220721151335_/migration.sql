-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `mainPictureUrl` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `linkGithub` VARCHAR(255) NULL,
    `linkDeployement` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
