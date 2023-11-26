-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-11-2023 a las 23:21:11
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `torneosfut`
--
CREATE DATABASE IF NOT EXISTS `torneosfut` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `torneosfut`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencia`
--

CREATE TABLE `asistencia` (
  `asistencia_id` int(11) NOT NULL,
  `partidos_id` int(11) DEFAULT NULL,
  `jugador_id` int(11) DEFAULT NULL,
  `equipostorneo_id` int(11) DEFAULT NULL,
  `NombreJugador` varchar(60) DEFAULT NULL,
  `Asistencia` varchar(20) DEFAULT NULL,
  `Tipo` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipo`
--

CREATE TABLE `equipo` (
  `equipo_id` int(11) NOT NULL,
  `Nombre_equipo` varchar(20) DEFAULT NULL,
  `Fecha_registro` date DEFAULT NULL,
  `Adeudos` int(11) DEFAULT NULL,
  `Incidencias` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `equipo`
--

INSERT INTO `equipo` (`equipo_id`, `Nombre_equipo`, `Fecha_registro`, `Adeudos`, `Incidencias`) VALUES
(6, 'Equipo F', '2023-10-18', 0, '0'),
(7, 'Equipo Ga', '2023-10-18', 0, '0'),
(9, 'Equipo I', '2023-10-18', 0, '0'),
(10, 'Equipo J', '2023-10-18', 0, '0'),
(11, 'Equipo K', '2023-10-18', -2, '0'),
(12, 'pruebasssss', '2023-11-08', 50, '500');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos_del_torneo`
--

CREATE TABLE `equipos_del_torneo` (
  `equipostorneo_id` int(11) NOT NULL,
  `NombreTorneo` varchar(20) DEFAULT NULL,
  `NombreEquipo` varchar(20) DEFAULT NULL,
  `torneo_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `equipos_del_torneo`
--

INSERT INTO `equipos_del_torneo` (`equipostorneo_id`, `NombreTorneo`, `NombreEquipo`, `torneo_id`) VALUES
(1, 'prueba', 'Equipo Ga', 4),
(2, 'prueba', 'Equipo I', 4),
(3, 'prueba', 'Equipo Ga', 5),
(4, 'prueba', 'Equipo I', 5),
(5, 'prueba', 'Equipo F', 5),
(6, 'prueba', 'Equipo J', 5),
(7, 'prueba', 'pruebasssss', 5),
(8, 'prueba', 'Equipo K', 5),
(9, 'prueba', 'Equipo Ga', 5),
(10, 'prueba', 'Equipo J', 5),
(11, '', 'Equipo Ga', 6),
(12, '', 'Equipo J', 6),
(13, '', 'pruebasssss', 7),
(14, '', 'Equipo I', 7),
(15, '', 'Equipo Ga', 7),
(16, '', 'Equipo F', 7),
(17, '', 'Equipo J', 7),
(18, '', 'Equipo K', 7),
(19, '', 'Equipo Ga', 7),
(20, '', 'pruebasssss', 7),
(21, '', 'pruebasssss', 8),
(22, '', 'Equipo I', 8),
(23, '', 'Equipo Ga', 8),
(24, '', 'Equipo F', 8),
(25, '', 'Equipo J', 8),
(26, '', 'Equipo K', 8),
(27, '', 'Equipo Ga', 8),
(28, '', 'pruebasssss', 8),
(29, '', 'pruebasssss', 9),
(30, '', 'Equipo I', 9),
(31, '', 'Equipo Ga', 9),
(32, '', 'Equipo F', 9),
(33, '', 'Equipo J', 9),
(34, '', 'Equipo K', 9),
(35, '', 'Equipo Ga', 9),
(36, '', 'pruebasssss', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `faltas`
--

CREATE TABLE `faltas` (
  `falta_id` int(11) NOT NULL,
  `torneo_id` int(11) DEFAULT NULL,
  `equipostorneo_id` int(11) DEFAULT NULL,
  `Faltas` int(11) DEFAULT NULL,
  `Total` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `goles`
--

CREATE TABLE `goles` (
  `goles_id` int(11) NOT NULL,
  `torneo_id` int(11) DEFAULT NULL,
  `equipo_id` int(11) DEFAULT NULL,
  `Goles` int(11) DEFAULT NULL,
  `Total` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `infojugador`
--

CREATE TABLE `infojugador` (
  `infojugador_id` int(11) NOT NULL,
  `jugador_id` int(11) DEFAULT NULL,
  `NombreJugador` varchar(60) DEFAULT NULL,
  `Faltas` int(11) DEFAULT NULL,
  `Goles` int(11) DEFAULT NULL,
  `Observaciones` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `infopartidos`
--

CREATE TABLE `infopartidos` (
  `infopartidos_id` int(11) NOT NULL,
  `partidos_id` int(11) DEFAULT NULL,
  `NombrePartido` varchar(50) DEFAULT NULL,
  `goleseq1` int(11) DEFAULT NULL,
  `goleseq2` int(11) DEFAULT NULL,
  `Faltaseq1` int(11) DEFAULT NULL,
  `Faltaseq2` int(11) DEFAULT NULL,
  `equipoganador` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `infopartidos`
--

INSERT INTO `infopartidos` (`infopartidos_id`, `partidos_id`, `NombrePartido`, `goleseq1`, `goleseq2`, `Faltaseq1`, `Faltaseq2`, `equipoganador`) VALUES
(1, 4, '9Equipo Gavspruebasssss', 0, 0, 0, 0, 'Equipo 1'),
(2, 4, '9Equipo Gavspruebasssss', 5, 5, 5, 5, 'Empate'),
(3, 3, '9Equipo JvsEquipo K', 10, 10, 10, 10, 'Equipo 1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadores`
--

CREATE TABLE `jugadores` (
  `jugador_id` int(11) NOT NULL,
  `NombreJugador` varchar(60) DEFAULT NULL,
  `Posicion` varchar(20) DEFAULT NULL,
  `Edad` int(11) DEFAULT NULL,
  `Telefono_de_contacto` varchar(20) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `equipo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `jugadores`
--

INSERT INTO `jugadores` (`jugador_id`, `NombreJugador`, `Posicion`, `Edad`, `Telefono_de_contacto`, `correo`, `equipo`) VALUES
(2, 'PRUEBA2', 'PRUEBA2', 22, '5511223344', 'prueba2@gmail.com', 'Equipo H');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jugadoresdelequipo`
--

CREATE TABLE `jugadoresdelequipo` (
  `jugadoresequipo_id` int(11) NOT NULL,
  `equipo_id` int(11) DEFAULT NULL,
  `jugador_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `master_usuario`
--

CREATE TABLE `master_usuario` (
  `usuario_id` int(11) NOT NULL,
  `usuario_user` varchar(50) DEFAULT NULL,
  `usuario_pass` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `master_usuario`
--

INSERT INTO `master_usuario` (`usuario_id`, `usuario_user`, `usuario_pass`) VALUES
(1, 'Admin', 'prueba');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partidos`
--

CREATE TABLE `partidos` (
  `partidos_id` int(11) NOT NULL,
  `torneo_id` int(11) DEFAULT NULL,
  `NombrePartido` varchar(50) DEFAULT NULL,
  `NombreTorneo` varchar(50) DEFAULT NULL,
  `NombreEquipo1` varchar(20) DEFAULT NULL,
  `NombreEquipo2` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `partidos`
--

INSERT INTO `partidos` (`partidos_id`, `torneo_id`, `NombrePartido`, `NombreTorneo`, `NombreEquipo1`, `NombreEquipo2`) VALUES
(1, 9, '9pruebasssssvsEquipo I', '', 'pruebasssss', 'Equipo I'),
(2, 9, '9Equipo GavsEquipo F', '', 'Equipo Ga', 'Equipo F'),
(3, 9, '9Equipo JvsEquipo K', '', 'Equipo J', 'Equipo K'),
(4, 9, '9Equipo Gavspruebasssss', '', 'Equipo Ga', 'pruebasssss');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `torneo`
--

CREATE TABLE `torneo` (
  `torneo_id` int(11) NOT NULL,
  `NombreTorneo` varchar(20) DEFAULT NULL,
  `Fecha_inicio` date DEFAULT NULL,
  `Fecha_fin` date DEFAULT NULL,
  `Ganador` varchar(20) DEFAULT NULL,
  `No_de_equipos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `torneo`
--

INSERT INTO `torneo` (`torneo_id`, `NombreTorneo`, `Fecha_inicio`, `Fecha_fin`, `Ganador`, `No_de_equipos`) VALUES
(1, 'pruebaassss', '2023-11-01', '2023-11-08', NULL, 2),
(2, 'prueba', '2023-11-08', '2023-11-08', NULL, 2),
(3, 'prueba', '2023-11-08', '2023-11-08', NULL, 2),
(4, 'prueba', '2023-11-08', '2023-11-08', NULL, 2),
(5, 'prueba', '0000-00-00', '0000-00-00', NULL, 8),
(6, '', '0000-00-00', '0000-00-00', NULL, 2),
(7, '', '0000-00-00', '0000-00-00', NULL, 8),
(8, '', '0000-00-00', '0000-00-00', NULL, 8),
(9, '', '0000-00-00', '0000-00-00', NULL, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajadores`
--

CREATE TABLE `trabajadores` (
  `trabajadores_id` int(11) NOT NULL,
  `NombreTrabajador` varchar(60) DEFAULT NULL,
  `Direccion` varchar(100) DEFAULT NULL,
  `Telefono` int(11) DEFAULT NULL,
  `Puesto` varchar(20) DEFAULT NULL,
  `Correo` varchar(50) DEFAULT NULL,
  `Edad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD PRIMARY KEY (`asistencia_id`),
  ADD KEY `partidos_id` (`partidos_id`),
  ADD KEY `equipostorneo_id` (`equipostorneo_id`),
  ADD KEY `jugador_id` (`jugador_id`);

--
-- Indices de la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD PRIMARY KEY (`equipo_id`);

--
-- Indices de la tabla `equipos_del_torneo`
--
ALTER TABLE `equipos_del_torneo`
  ADD PRIMARY KEY (`equipostorneo_id`);

--
-- Indices de la tabla `faltas`
--
ALTER TABLE `faltas`
  ADD PRIMARY KEY (`falta_id`),
  ADD KEY `torneo_id` (`torneo_id`),
  ADD KEY `equipostorneo_id` (`equipostorneo_id`);

--
-- Indices de la tabla `goles`
--
ALTER TABLE `goles`
  ADD PRIMARY KEY (`goles_id`),
  ADD KEY `torneo_id` (`torneo_id`),
  ADD KEY `equipo_id` (`equipo_id`);

--
-- Indices de la tabla `infojugador`
--
ALTER TABLE `infojugador`
  ADD PRIMARY KEY (`infojugador_id`),
  ADD KEY `jugador_id` (`jugador_id`);

--
-- Indices de la tabla `infopartidos`
--
ALTER TABLE `infopartidos`
  ADD PRIMARY KEY (`infopartidos_id`),
  ADD KEY `partidos_id` (`partidos_id`);

--
-- Indices de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  ADD PRIMARY KEY (`jugador_id`);

--
-- Indices de la tabla `jugadoresdelequipo`
--
ALTER TABLE `jugadoresdelequipo`
  ADD PRIMARY KEY (`jugadoresequipo_id`),
  ADD KEY `equipo_id` (`equipo_id`),
  ADD KEY `jugador_id` (`jugador_id`);

--
-- Indices de la tabla `master_usuario`
--
ALTER TABLE `master_usuario`
  ADD PRIMARY KEY (`usuario_id`);

--
-- Indices de la tabla `partidos`
--
ALTER TABLE `partidos`
  ADD PRIMARY KEY (`partidos_id`),
  ADD KEY `torneo_id` (`torneo_id`);

--
-- Indices de la tabla `torneo`
--
ALTER TABLE `torneo`
  ADD PRIMARY KEY (`torneo_id`);

--
-- Indices de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  ADD PRIMARY KEY (`trabajadores_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asistencia`
--
ALTER TABLE `asistencia`
  MODIFY `asistencia_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `equipo`
--
ALTER TABLE `equipo`
  MODIFY `equipo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `equipos_del_torneo`
--
ALTER TABLE `equipos_del_torneo`
  MODIFY `equipostorneo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `faltas`
--
ALTER TABLE `faltas`
  MODIFY `falta_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `goles`
--
ALTER TABLE `goles`
  MODIFY `goles_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `infojugador`
--
ALTER TABLE `infojugador`
  MODIFY `infojugador_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `infopartidos`
--
ALTER TABLE `infopartidos`
  MODIFY `infopartidos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `jugador_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `jugadoresdelequipo`
--
ALTER TABLE `jugadoresdelequipo`
  MODIFY `jugadoresequipo_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `master_usuario`
--
ALTER TABLE `master_usuario`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `partidos`
--
ALTER TABLE `partidos`
  MODIFY `partidos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `torneo`
--
ALTER TABLE `torneo`
  MODIFY `torneo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  MODIFY `trabajadores_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asistencia`
--
ALTER TABLE `asistencia`
  ADD CONSTRAINT `asistencia_ibfk_1` FOREIGN KEY (`partidos_id`) REFERENCES `partidos` (`partidos_id`),
  ADD CONSTRAINT `asistencia_ibfk_2` FOREIGN KEY (`equipostorneo_id`) REFERENCES `equipos_del_torneo` (`equipostorneo_id`),
  ADD CONSTRAINT `asistencia_ibfk_3` FOREIGN KEY (`jugador_id`) REFERENCES `jugadores` (`jugador_id`);

--
-- Filtros para la tabla `faltas`
--
ALTER TABLE `faltas`
  ADD CONSTRAINT `faltas_ibfk_1` FOREIGN KEY (`torneo_id`) REFERENCES `torneo` (`torneo_id`),
  ADD CONSTRAINT `faltas_ibfk_2` FOREIGN KEY (`equipostorneo_id`) REFERENCES `equipos_del_torneo` (`equipostorneo_id`);

--
-- Filtros para la tabla `goles`
--
ALTER TABLE `goles`
  ADD CONSTRAINT `goles_ibfk_1` FOREIGN KEY (`torneo_id`) REFERENCES `torneo` (`torneo_id`),
  ADD CONSTRAINT `goles_ibfk_2` FOREIGN KEY (`equipo_id`) REFERENCES `equipo` (`equipo_id`);

--
-- Filtros para la tabla `infojugador`
--
ALTER TABLE `infojugador`
  ADD CONSTRAINT `infojugador_ibfk_1` FOREIGN KEY (`jugador_id`) REFERENCES `jugadores` (`jugador_id`);

--
-- Filtros para la tabla `infopartidos`
--
ALTER TABLE `infopartidos`
  ADD CONSTRAINT `infopartidos_ibfk_1` FOREIGN KEY (`partidos_id`) REFERENCES `partidos` (`partidos_id`);

--
-- Filtros para la tabla `jugadoresdelequipo`
--
ALTER TABLE `jugadoresdelequipo`
  ADD CONSTRAINT `jugadoresdelequipo_ibfk_1` FOREIGN KEY (`equipo_id`) REFERENCES `equipo` (`equipo_id`),
  ADD CONSTRAINT `jugadoresdelequipo_ibfk_2` FOREIGN KEY (`jugador_id`) REFERENCES `jugadores` (`jugador_id`);

--
-- Filtros para la tabla `partidos`
--
ALTER TABLE `partidos`
  ADD CONSTRAINT `partidos_ibfk_1` FOREIGN KEY (`torneo_id`) REFERENCES `torneo` (`torneo_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
