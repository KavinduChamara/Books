CREATE DATABASE book_inventory;

use book_inventory;

CREATE TABLE `books` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `author` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `title` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `year` int(11) NOT NULL DEFAULT '0',
  `description` TEXT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;