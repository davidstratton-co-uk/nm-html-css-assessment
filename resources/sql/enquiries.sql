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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for table `nm_enquiries`
--
ALTER TABLE `nm_enquiries`
  ADD PRIMARY KEY (`enquiry_id`);

--
-- AUTO_INCREMENT for table `nm_enquiries`
--
ALTER TABLE `nm_enquiries`
  MODIFY `enquiry_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
