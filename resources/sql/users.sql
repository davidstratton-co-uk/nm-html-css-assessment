-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 10, 2025 at 08:53 AM
-- Server version: 11.8.3-MariaDB
-- PHP Version: 8.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `davidstratton_nm`
--

-- --------------------------------------------------------

--
-- Table structure for table `nm_users`
--

CREATE TABLE `nm_users` (
  `user_id` int(11) NOT NULL,
  `user_uuid` uuid NOT NULL,
  `user_first_name` varchar(50) NOT NULL,
  `user_last_name` varchar(50) NOT NULL,
  `user_avatar` varchar(100) NOT NULL,
  `user_join_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `nm_users`
--

INSERT INTO `nm_users` (`user_id`, `user_uuid`, `user_first_name`, `user_last_name`, `user_avatar`, `user_join_date`) VALUES
(1, '4b541e32-8e1e-11f0-9df9-9600027afd3c', 'Netmatters', '', 'avatar_user_1.png', '2025-09-10'),
(2, '4b542597-8e1e-11f0-9df9-9600027afd3c', 'Bethany', 'Shakespeare', 'avatar_user_2.png', '2025-09-10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nm_users`
--
ALTER TABLE `nm_users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nm_users`
--
ALTER TABLE `nm_users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
