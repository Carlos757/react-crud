/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE simple_crud;
USE simple_crud;


DROP TABLE IF EXISTS `modulo`;
CREATE TABLE `modulo` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `status` tinyint DEFAULT '1',
  `route` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `icon` varchar(64) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `plaza`;
CREATE TABLE `plaza` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `status` tinyint DEFAULT '1',
  `address` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;

DROP TABLE IF EXISTS `sucursal`;
CREATE TABLE `sucursal` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `status` tinyint DEFAULT '1',
  `address` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `plazaId` int unsigned DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `plazaId` (`plazaId`),
  CONSTRAINT `sucursal_ibfk_1` FOREIGN KEY (`plazaId`) REFERENCES `plaza` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

INSERT INTO `modulo` (`id`, `name`, `description`, `status`, `route`, `icon`, `createdAt`, `updatedAt`) VALUES
(1, 'Inicio', 'Bienvenido administrador!', 1, '/inicio', NULL, '2023-09-17 20:17:13', '2023-09-18 20:25:05'),
(2, 'Plazas', 'Modulo de plazas', 1, '/plazas', NULL, '2023-09-17 20:17:13', '2023-09-18 20:24:28'),
(3, 'Sucursales', 'Modulo de sucursales', 0, '/sucursales', NULL, '2023-09-17 20:17:13', '2023-09-18 22:28:43');

INSERT INTO `plaza` (`id`, `name`, `status`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 'Culiacán', 1, 'Calle #23 Adolfo Lopez Mateos', '2023-09-17 19:59:41', '2023-09-17 23:02:01'),
(2, 'Navolato', 1, 'Calle #332 Col. Guadalupe', '2023-09-17 19:59:41', '2023-09-17 23:02:16');

INSERT INTO `sucursal` (`id`, `name`, `status`, `address`, `plazaId`, `createdAt`, `updatedAt`) VALUES
(1, 'Patria', 1, NULL, 1, '2023-09-17 20:00:08', '2023-09-17 20:00:39'),
(2, 'Barrancos', 1, NULL, 1, '2023-09-17 20:00:24', '2023-09-17 20:00:39'),
(3, 'Palmito', 1, NULL, 1, '2023-09-17 20:00:31', '2023-09-17 20:00:39'),
(4, 'Navolato', 1, NULL, 2, '2023-09-17 20:01:17', '2023-09-17 20:01:17');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;