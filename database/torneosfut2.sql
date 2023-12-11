-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-12-2023 a las 01:33:23
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.1.17

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restablecertokens`
--

CREATE TABLE `restablecertokens` (
  `correo` varchar(100) NOT NULL DEFAULT '',
  `token` varchar(100) NOT NULL,
  `fecha_expiracion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

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
  ADD PRIMARY KEY (`equipo_id`),
  ADD UNIQUE KEY `equipo_id` (`equipo_id`),
  ADD UNIQUE KEY `Nombre_equipo` (`Nombre_equipo`);

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
  ADD PRIMARY KEY (`jugador_id`),
  ADD UNIQUE KEY `NombreJugador` (`NombreJugador`);

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
-- Indices de la tabla `restablecertokens`
--
ALTER TABLE `restablecertokens`
  ADD PRIMARY KEY (`correo`);

--
-- Indices de la tabla `torneo`
--
ALTER TABLE `torneo`
  ADD PRIMARY KEY (`torneo_id`),
  ADD UNIQUE KEY `NombreTorneo` (`NombreTorneo`);

--
-- Indices de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  ADD PRIMARY KEY (`trabajadores_id`),
  ADD UNIQUE KEY `trabajadores_id` (`trabajadores_id`),
  ADD UNIQUE KEY `NombreTrabajador` (`NombreTrabajador`);

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
  MODIFY `equipo_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `equipos_del_torneo`
--
ALTER TABLE `equipos_del_torneo`
  MODIFY `equipostorneo_id` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `infopartidos_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jugadores`
--
ALTER TABLE `jugadores`
  MODIFY `jugador_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jugadoresdelequipo`
--
ALTER TABLE `jugadoresdelequipo`
  MODIFY `jugadoresequipo_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `master_usuario`
--
ALTER TABLE `master_usuario`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `partidos`
--
ALTER TABLE `partidos`
  MODIFY `partidos_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `torneo`
--
ALTER TABLE `torneo`
  MODIFY `torneo_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  MODIFY `trabajadores_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
