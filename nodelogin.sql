-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12-Jul-2020 às 02:58
-- Versão do servidor: 10.4.13-MariaDB
-- versão do PHP: 7.4.7



--
-- Base de datos: `nodelogin`
--

-- --------------------------------------------------------

--
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES
(1, 'demo', 'demo', 'test@test.com'),
(2, 'Moderador', 'Moderador', 'moderador@moderador.com');

--
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

