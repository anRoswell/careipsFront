-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-02-2022 a las 03:16:28
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `careips`
--
CREATE DATABASE IF NOT EXISTS `careips` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `careips`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `access`
--

DROP TABLE IF EXISTS `access`;
CREATE TABLE IF NOT EXISTS `access` (
  `id` int(10) NOT NULL,
  `profileId` int(10) NOT NULL,
  `menuId` int(10) NOT NULL,
  `create` tinyint(1) NOT NULL,
  `update` tinyint(1) NOT NULL,
  `delete` tinyint(1) NOT NULL,
  `all` tinyint(1) NOT NULL,
  `list` tinyint(1) NOT NULL,
  `upload` tinyint(1) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `disabled` tinyint(1) NOT NULL,
  `createdAt` datetime(1) NOT NULL,
  `updatedAt` datetime(1) NOT NULL DEFAULT current_timestamp(1) ON UPDATE current_timestamp(1),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `access`
--

INSERT INTO `access` (`id`, `profileId`, `menuId`, `create`, `update`, `delete`, `all`, `list`, `upload`, `admin`, `disabled`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '2021-12-09 20:36:00.0', '2021-12-09 20:36:03.7'),
(2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, '0000-00-00 00:00:00.0', '2021-12-09 20:38:19.7'),
(3, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, '0000-00-00 00:00:00.0', '2021-12-09 20:38:43.7'),
(4, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, '2021-12-09 20:39:02.0', '2021-12-09 20:39:04.7'),
(5, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, '2021-12-09 20:39:14.0', '2021-12-09 20:39:17.0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menus`
--

DROP TABLE IF EXISTS `menus`;
CREATE TABLE IF NOT EXISTS `menus` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `url` varchar(120) DEFAULT '#',
  `icon` varchar(60) DEFAULT NULL,
  `menuId` int(10) UNSIGNED DEFAULT NULL,
  `order` tinyint(3) UNSIGNED DEFAULT 0,
  `divider` tinyint(3) UNSIGNED DEFAULT 0,
  `disabled` tinyint(3) UNSIGNED DEFAULT 0,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `menuId` (`menuId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `menus`
--

INSERT INTO `menus` (`id`, `name`, `url`, `icon`, `menuId`, `order`, `divider`, `disabled`, `createdAt`, `updatedAt`) VALUES
(1, 'Registros', '#', 'icon icon-cog', NULL, 1, 0, 0, '2020-06-20 15:37:50', NULL),
(2, 'Reportes', '#', 'icon icon-cog', NULL, 5, 0, 0, '2020-06-20 15:37:50', NULL),
(3, 'Pacientes', '/admin/patients/list', 'icon', 1, 1, 0, 0, '2020-06-20 15:37:50', NULL),
(4, 'Usuarios', '/configuraciones/usuarios', 'icon', 1, 2, 0, 0, '2020-06-20 15:37:50', NULL),
(5, 'Accesos', '/configuraciones/accesos', 'icon', 1, 3, 0, 0, '2020-06-20 15:37:50', NULL),
(6, 'Tipos de identificación', '/parametros/tipos-identificacion', 'icon', 2, 2, 1, 0, '2020-06-20 15:37:50', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patienthistory`
--

DROP TABLE IF EXISTS `patienthistory`;
CREATE TABLE IF NOT EXISTS `patienthistory` (
  `numIdentificacion` varchar(15) COLLATE utf8_spanish_ci NOT NULL DEFAULT '',
  `idMonth` int(11) DEFAULT NULL,
  `idYear` int(11) DEFAULT NULL,
  `fechaAtencion` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `idModalidadAtencion` int(11) DEFAULT NULL,
  `escalaDolor` int(11) DEFAULT NULL,
  `encuestaCalidadVida` int(11) DEFAULT NULL,
  `karnofsky` int(11) DEFAULT NULL COMMENT 'Resultado de la  escala  que evalúa diferentes dimensiones de un individuo como nivel de actividad, capacidad de trabajo, nivel de cuidados requeridos, gravedad y progresión de la enfermedad y necesidad de hospitalización. Esta escala va de 100 (salud normal) a 0 (muerte), descendiendo en valores de 10 en 10',
  `esas` int(11) DEFAULT NULL COMMENT 'Resultado de escala de calificación numérica para evaluar la intensidad de los síntomas en una escala entre 0 (menor grado de síntomas) y 10 (peor grado de síntomas) y también puede ser convertido a una escala numérica de intervalos.',
  `sgtoMedicinaAlternativa` int(11) DEFAULT NULL,
  `sgtoEnfermeria` int(11) DEFAULT NULL,
  `atencionesAuxiliarEnfermeria` int(11) DEFAULT NULL,
  `sgtoPsicologia` tinyint(1) DEFAULT NULL,
  `sgtoNutricion` tinyint(1) DEFAULT NULL,
  `sgtoTrabajoSocial` tinyint(1) DEFAULT NULL,
  `sgtoGuiaEspiritual` tinyint(1) DEFAULT NULL,
  `sgtoTerapiaFisica` tinyint(1) DEFAULT NULL,
  `totalActividadesMes` tinyint(1) DEFAULT NULL,
  `oxigenoterapia` tinyint(1) DEFAULT NULL,
  `administracionMxDolor` tinyint(1) DEFAULT NULL,
  `opioides` tinyint(1) DEFAULT NULL,
  `nombreMedicamento` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `miligramosMes` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `otrosMedicamentosInsumosTecnologias` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `idNovedad` int(11) DEFAULT NULL COMMENT 'Defina cualquier cambio generado en el paciente durante la consulta ',
  `justificacionNovedad` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL COMMENT 'Describir las razones, signos, sintomas, resultados de examenes, evolución, condiciones personales y administrativas que dieron origen a la novedad del paciente, descrita en la variable anterior.',
  `valorFacturaMesTotal` decimal(10,0) DEFAULT NULL COMMENT 'Cantidad en pesos por el cual se genero factura por ese paciente en el mes ',
  PRIMARY KEY (`numIdentificacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patients`
--

DROP TABLE IF EXISTS `patients`;
CREATE TABLE IF NOT EXISTS `patients` (
  `consecutivo` int(11) NOT NULL,
  `nitPrestador` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nombrePrestador` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `tipoIdentificacion` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `numIdentificacion` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `primerApellido` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `segundoApellido` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `sexo` char(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8_spanish_ci DEFAULT NULL,
  `idRegional` int(11) DEFAULT NULL,
  `fechaRemision` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `responsableRemision` int(11) DEFAULT NULL,
  `fechaAsignacionValoracionInicial` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `asiste` bit(1) DEFAULT NULL,
  `fechaConsultaPrimeraVezCuidadosPaleativos` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `modalidadAtencion` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `idCIE10` int(11) DEFAULT NULL,
  `diagnostico` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `oncologico` bit(1) DEFAULT NULL,
  `indiceBarthel` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `escalaDownton` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `escalaBorg` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `escalaReisberg` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `karnofsky` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `esas` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `ecaf` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `enese` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `pffeifer` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `ramsay` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `resultadoInstrumentoNECPAL` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `ingresoAlPrograma` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `justificacion` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fechaIngresoAlPrograma` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `evaluadoJuntaClinicaPaliativaDeIngreso` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `idcpal` varchar(255) COLLATE utf8_spanish_ci DEFAULT '',
  `escalaDeDolorEvaInicial` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `escalaCalidadVidaPosInicial` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nivel` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `ambito` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `consultaSeguimiento` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `medicinaPaliativa` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `periodicidadMedicinaPaleativa` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `enfermeria` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `periodicidadEnfermeria` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nutricion` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `periodicidadNutricion` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `trabajoSocial` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `periodicidadTrabajoSocial` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `psicologia` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `periodicidadPsicologia` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fisioterapia` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `periodicidadFisioterapia` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `guiaEspiritual` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `periodicidadGuiaEspiritual` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `manejoDelDolor` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `medicamentosOpioides` varchar(255) COLLATE utf8_spanish_ci DEFAULT '',
  `ordenamientoMedicamentosInsumos` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `manejoOxigenotepraia` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `tiempoEstimadoTratamiento` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `estadoActual` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fechaEstado` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `estanciaEnPrograma` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `promedioCostoMesAntesIngreso` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`numIdentificacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `patients`
--

INSERT INTO `patients` (`consecutivo`, `nitPrestador`, `nombrePrestador`, `tipoIdentificacion`, `numIdentificacion`, `name`, `primerApellido`, `segundoApellido`, `edad`, `sexo`, `address`, `phone`, `idRegional`, `fechaRemision`, `responsableRemision`, `fechaAsignacionValoracionInicial`, `asiste`, `fechaConsultaPrimeraVezCuidadosPaleativos`, `modalidadAtencion`, `idCIE10`, `diagnostico`, `oncologico`, `indiceBarthel`, `escalaDownton`, `escalaBorg`, `escalaReisberg`, `karnofsky`, `esas`, `ecaf`, `enese`, `pffeifer`, `ramsay`, `resultadoInstrumentoNECPAL`, `ingresoAlPrograma`, `justificacion`, `fechaIngresoAlPrograma`, `evaluadoJuntaClinicaPaliativaDeIngreso`, `idcpal`, `escalaDeDolorEvaInicial`, `escalaCalidadVidaPosInicial`, `nivel`, `ambito`, `consultaSeguimiento`, `medicinaPaliativa`, `periodicidadMedicinaPaleativa`, `enfermeria`, `periodicidadEnfermeria`, `nutricion`, `periodicidadNutricion`, `trabajoSocial`, `periodicidadTrabajoSocial`, `psicologia`, `periodicidadPsicologia`, `fisioterapia`, `periodicidadFisioterapia`, `guiaEspiritual`, `periodicidadGuiaEspiritual`, `manejoDelDolor`, `medicamentosOpioides`, `ordenamientoMedicamentosInsumos`, `manejoOxigenotepraia`, `tiempoEstimadoTratamiento`, `estadoActual`, `fechaEstado`, `estanciaEnPrograma`, `promedioCostoMesAntesIngreso`, `createdAt`) VALUES
(1, '10203045', '', NULL, '73197546', 'Alfonso', 'Navarro', 'Alcalá', 38, 'M', NULL, '3117051171', NULL, '2021-12-10 10:43:26', NULL, '2021-12-10 10:43:26', NULL, '2021-12-10 10:43:26', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-10 10:43:26', NULL, NULL, '2021-12-10 10:43:26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profiles`
--

DROP TABLE IF EXISTS `profiles`;
CREATE TABLE IF NOT EXISTS `profiles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(20) NOT NULL,
  `disabled` tinyint(3) UNSIGNED DEFAULT 0,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `profiles`
--

INSERT INTO `profiles` (`id`, `name`, `disabled`, `createdAt`, `updatedAt`) VALUES
(1, 'Super', 0, '2020-06-07 12:15:38', NULL),
(2, 'Admin', 0, '2020-06-20 09:02:11', NULL),
(3, 'Usuario', 0, '2020-06-20 09:35:02', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `cedula` varchar(20) CHARACTER SET utf8 NOT NULL,
  `primerNombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `segundoNombre` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `apellidoPaterno` varchar(100) COLLATE utf8_spanish_ci NOT NULL DEFAULT '',
  `apellidoMaterno` varchar(100) COLLATE utf8_spanish_ci DEFAULT NULL,
  `email` varchar(150) CHARACTER SET utf8 NOT NULL,
  `password` varchar(250) CHARACTER SET utf8 NOT NULL,
  `mobile` varchar(12) CHARACTER SET utf8 DEFAULT NULL,
  `profileId` int(10) UNSIGNED DEFAULT NULL,
  `lastDateLogin` datetime DEFAULT NULL,
  `lastIpLogin` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `status` tinyint(3) UNSIGNED DEFAULT 1,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='Registro de los usuarios que pueden hacer login al sistema';

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `cedula`, `primerNombre`, `segundoNombre`, `apellidoPaterno`, `apellidoMaterno`, `email`, `password`, `mobile`, `profileId`, `lastDateLogin`, `lastIpLogin`, `status`, `createdAt`, `updatedAt`) VALUES
(1, '73197546', 'Alfonso', NULL, 'Navarro', 'Alcalá', 'anroswell@gmail.com', '$2a$10$VH.Bw/HrWu/x8xEqGMhubeI0cV7tX/FpECdqDKnIwqsowD55j6eUS', '3117051171', 1, '2022-02-10 20:57:51', '::1', 1, '2021-12-09 17:42:41', '2022-02-10 20:57:51');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
