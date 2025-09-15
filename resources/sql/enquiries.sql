-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 15, 2025 at 08:57 AM
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
-- Table structure for table `nm_enquiries`
--

CREATE TABLE `nm_enquiries` (
  `enquiry_id` int(11) NOT NULL,
  `enquiry_name` varchar(50) NOT NULL,
  `enquiry_company` varchar(50) NOT NULL,
  `enquiry_email` varchar(100) NOT NULL,
  `enquiry_phone` varchar(20) NOT NULL,
  `enquiry_message` text NOT NULL,
  `enquiry_marketing` tinyint(1) NOT NULL,
  `enquiry_datetime_sent` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

--
-- Dumping data for table `nm_enquiries`
--

INSERT INTO `nm_enquiries` (`enquiry_id`, `enquiry_name`, `enquiry_company`, `enquiry_email`, `enquiry_phone`, `enquiry_message`, `enquiry_marketing`, `enquiry_datetime_sent`) VALUES
(1, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 07:47:16'),
(2, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 07:48:00'),
(3, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 07:53:42'),
(4, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 07:53:50'),
(5, '', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 07:54:09'),
(6, '', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 07:54:15'),
(7, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 07:56:21'),
(8, '', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 07:56:24'),
(9, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 07:57:23'),
(10, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 07:59:14'),
(11, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:00:32'),
(12, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:03:23'),
(13, '', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:03:54'),
(14, '', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:12:05'),
(15, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:12:58'),
(16, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:13:31'),
(17, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:14:47'),
(18, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:18:28'),
(19, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:18:46'),
(20, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:19:20'),
(21, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:21:17'),
(22, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:21:49'),
(23, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:23:21'),
(24, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:23:48'),
(25, '', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:23:54'),
(26, '', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:24:38'),
(27, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:36:52'),
(28, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:37:30'),
(29, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:37:33'),
(30, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 1, '2025-09-15 08:37:36'),
(31, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:37:46'),
(32, 'Bob', 'Jade', 'bob@jade.com', '07740899502', 'Message!', 0, '2025-09-15 08:38:46'),
(33, 'Bob', 'Jade', 'bob@jade.com', '07740899502#', 'Message!', 0, '2025-09-15 08:40:14'),
(34, 'Bob', 'Jade', 'bob@jade.com', '(01234) 234 234 #222', 'Message!', 0, '2025-09-15 08:41:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nm_enquiries`
--
ALTER TABLE `nm_enquiries`
  ADD PRIMARY KEY (`enquiry_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nm_enquiries`
--
ALTER TABLE `nm_enquiries`
  MODIFY `enquiry_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
