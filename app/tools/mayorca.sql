-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-05-2024 a las 14:45:48
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mayorca`
--
CREATE DATABASE IF NOT EXISTS `mayorca` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `mayorca`;

DELIMITER //
--
-- Procedimientos
--
DROP PROCEDURE IF EXISTS `sp_BuscarUsuario`//
CREATE PROCEDURE `sp_BuscarUsuario` (IN `_USUARIO` VARCHAR(100))   BEGIN
SELECT USUARIO, CLAVE, NOMBRE, ID FROM USUARIOS WHERE USUARIO = _USUARIO
LIMIT 1;


END//

DROP PROCEDURE IF EXISTS `sp_CrearMarca`//
CREATE PROCEDURE `sp_CrearMarca` (IN `_DESCRIPCION` VARCHAR(20))   BEGIN
INSERT INTO MARCA (DESCRIPCION)
VALUES (_DESCRIPCION);
END//

DROP PROCEDURE IF EXISTS `sp_CrearUsuario`//
CREATE PROCEDURE `sp_CrearUsuario` (IN `_NOMBRE` VARCHAR(100), IN `_USUARIO` VARCHAR(100), IN `_CLAVE` VARCHAR(500))   BEGIN
INSERT INTO USUARIOS (NOMBRE, USUARIO, CLAVE)
VALUES (_NOMBRE, _USUARIO, _CLAVE);
END//

DROP PROCEDURE IF EXISTS `sp_EliminarMarca`//
CREATE PROCEDURE `sp_EliminarMarca` (IN `_ID` INT)   BEGIN
DELETE FROM MARCA 
WHERE ID = _ID;
END//

DROP PROCEDURE IF EXISTS `sp_EliminarUsuario`//
CREATE PROCEDURE `sp_EliminarUsuario` (IN `_ID` INT)   BEGIN

DELETE FROM USUARIOS WHERE ID = _ID;

END//

DROP PROCEDURE IF EXISTS `sp_ListarMarca`//
CREATE PROCEDURE `sp_ListarMarca` ()   BEGIN 
SELECT * FROM MARCA ;
END//

DROP PROCEDURE IF EXISTS `sp_ListarUsuario`//
CREATE PROCEDURE `sp_ListarUsuario` ()   BEGIN

SELECT NOMBRE,USUARIO, CLAVE
FROM USUARIOS;

END//

DROP PROCEDURE IF EXISTS `sp_ModificarMarca`//
CREATE PROCEDURE `sp_ModificarMarca` (IN `_ID` INT, IN `_DESCRIPCION` VARCHAR(20))   BEGIN
UPDATE MARCA 
SET DESCRIPCION = _DESCRIPCION
WHERE ID = _ID;
END//

DROP PROCEDURE IF EXISTS `sp_ModificarUsuario`//
CREATE PROCEDURE `sp_ModificarUsuario` (IN `_ID` INT, IN `_NOMBRE` VARCHAR(100), IN `_USUARIO` VARCHAR(100), IN `_CLAVE` VARCHAR(500))   BEGIN
UPDATE USUARIOS
SET NOMBRE = _NOMBRE,
USUARIO = _USUARIO,
CLAVE = _CLAVE 
WHERE ID = _ID;
END//

DROP PROCEDURE IF EXISTS `sp_MostrarMarca`//
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_MostrarMarca` (IN `_ID` INT)   BEGIN
SELECT * FROM MARCA
WHERE ID =_ID;
END//

DROP PROCEDURE IF EXISTS `sp_MostrarUsuario`//
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_MostrarUsuario` (IN `_ID` INT)   BEGIN

SELECT NOMBRE, USUARIO,CLAVE
FROM USUARIOS WHERE ID = _ID;
END//

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

DROP TABLE IF EXISTS `categoria`;
CREATE TABLE `categoria` (
  `ID` int(100) NOT NULL,
  `DESCRIPCION` varchar(20) NOT NULL,
  `ESTADO` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`ID`, `DESCRIPCION`, `ESTADO`) VALUES
(1, 'DEPORTIVO', 1),
(2, 'CAMION', 1),
(3, 'TRACTOCAMION', 1),
(4, 'MULA', 1),
(5, 'JUGUETE', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

DROP TABLE IF EXISTS `marca`;
CREATE TABLE `marca` (
  `ID` int(11) NOT NULL,
  `DESCRIPCION` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`ID`, `DESCRIPCION`) VALUES
(5, 'MAZDA'),
(4, 'MERCEDES'),
(2, 'mt09'),
(6, 'PORSCHE'),
(1, 'SUZUKI'),
(3, 'TOYOTA'),
(7, 'UMAMI');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prodcprove`
--

DROP TABLE IF EXISTS `prodcprove`;
CREATE TABLE `prodcprove` (
  `ID` int(6) DEFAULT NULL,
  `ID_PRODUCTO` int(3) NOT NULL,
  `ID_PROVEEDORES` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE `producto` (
  `ID` int(6) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL,
  `PRECIO_COMPRA` float DEFAULT 0,
  `PRECIO_VENTA` float DEFAULT 0,
  `STOCK` int(7) DEFAULT 0,
  `UBICADO` varchar(9) DEFAULT 'BODEGA 1',
  `DESCRIPCION` varchar(200) DEFAULT NULL,
  `IMAGEN` blob DEFAULT NULL,
  `FECHA_CREACION` timestamp NOT NULL DEFAULT current_timestamp(),
  `ID_MARCA` int(3) NOT NULL,
  `ID_CATEGORIA` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`ID`, `NOMBRE`, `PRECIO_COMPRA`, `PRECIO_VENTA`, `STOCK`, `UBICADO`, `DESCRIPCION`, `IMAGEN`, `FECHA_CREACION`, `ID_MARCA`, `ID_CATEGORIA`) VALUES
(1, 'VITARA', 98000000, 110000000, 5, 'BODEGA 1', 'CAMIONETA QUE CONSUME MUCHA GASOLINA', NULL, '2024-02-15 15:15:59', 1, 1),
(2, 'KIA SORENTO', 55000000, 100000000, 2, 'BODEGA 1', 'TIENE UN BUEN CILINDRAJE', NULL, '2024-02-15 15:24:12', 2, 2),
(3, 'CONVERTIBLE', 980000000, 1200000000, 1, 'BODEGA 2', '0 KILOMETROS', NULL, '2024-02-15 15:26:38', 1, 1),
(4, 'TOYOTA SUPRA', 750000000, 950000000, 10, 'BODEGA 3', ' El mejor nivel de dirección y suspensión', NULL, '2024-02-15 23:19:06', 4, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
CREATE TABLE `proveedores` (
  `ID` int(6) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL,
  `CONTACTO` varchar(20) NOT NULL,
  `TELEFONO` varchar(10) NOT NULL,
  `CORREO_ELECTRONICO` varchar(20) NOT NULL,
  `DIRECCION` varchar(15) NOT NULL,
  `SITIO_WEB` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(100) NOT NULL,
  `USUARIO` varchar(100) NOT NULL,
  `CLAVE` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`ID`, `NOMBRE`, `USUARIO`, `CLAVE`) VALUES
(1, 'viki', 'vickyr', '3456'),
(3, 'ELIANA', 'ELI', '$2b$04$Cl.mhxTi6Nq7nV0CQHjPu.UsRQ2QFuGSmK4w0jHkdrrvjtfi77HP6'),
(4, 'NATI', 'PARIS', '1235'),
(6, 'Samantha', 'sami', '$2b$04$xmN/K2HeAh7HhCPP30nNHeBO5c.Pg7bNnAdx24kHgFutUEONAUKSu'),
(7, 'Samantha', 'sami', '$2b$04$rwu9z4smv1xtjFw0i6UR.Ox.0K44NYGuPs5DOGQjclsbzXLU6IH2q'),
(8, 'dani', 'daniniños', '$2b$04$QdDYoKo10Oksr.NxPUxCe.G3EoLychgnWqFFuaYzlvNANPwNGDkfS'),
(9, 'rob', 'robert', '6756');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `DESCRIPCION` (`DESCRIPCION`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `DESCRIPCION` (`DESCRIPCION`);

--
-- Indices de la tabla `prodcprove`
--
ALTER TABLE `prodcprove`
  ADD KEY `ID_PRODUCTO` (`ID_PRODUCTO`),
  ADD KEY `ID_PROVEEDORES` (`ID_PROVEEDORES`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `NOMBRE` (`NOMBRE`),
  ADD KEY `ID_MARCA` (`ID_MARCA`),
  ADD KEY `ID_CATEGORIA` (`ID_CATEGORIA`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `NOMBRE` (`NOMBRE`),
  ADD UNIQUE KEY `CONTACTO` (`CONTACTO`),
  ADD UNIQUE KEY `TELEFONO` (`TELEFONO`),
  ADD UNIQUE KEY `CORREO_ELECTRONICO` (`CORREO_ELECTRONICO`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `ID` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `ID` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `prodcprove`
--
ALTER TABLE `prodcprove`
  ADD CONSTRAINT `prodcprove_ibfk_1` FOREIGN KEY (`ID_PRODUCTO`) REFERENCES `producto` (`ID`),
  ADD CONSTRAINT `prodcprove_ibfk_2` FOREIGN KEY (`ID_PROVEEDORES`) REFERENCES `proveedores` (`ID`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`ID_MARCA`) REFERENCES `marca` (`ID`),
  ADD CONSTRAINT `producto_ibfk_2` FOREIGN KEY (`ID_CATEGORIA`) REFERENCES `categoria` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
