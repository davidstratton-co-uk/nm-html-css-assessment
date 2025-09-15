-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 10, 2025 at 08:52 AM
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
-- Table structure for table `nm_news_posts`
--

CREATE TABLE `nm_news_posts` (
  `post_id` int(11) NOT NULL,
  `post_type_id` tinyint(4) NOT NULL,
  `post_author_id` int(11) NOT NULL,
  `post_slug` varchar(50) NOT NULL,
  `post_img` varchar(100) NOT NULL,
  `post_title` varchar(100) NOT NULL,
  `post_excerpt` varchar(200) NOT NULL,
  `post_content` text NOT NULL,
  `post_published_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `nm_news_posts`
--

INSERT INTO `nm_news_posts` (`post_id`, `post_type_id`, `post_author_id`, `post_slug`, `post_img`, `post_title`, `post_excerpt`, `post_content`, `post_published_date`) VALUES
(1, 3, 2, '1st-line-technician', '/2025/6/20/1st-line-technician-1QNr.png', '1st Line Technician', 'Salary Range £25,000 -£29,000 + Pension Hours 40 hours per week, Monday - Friday Location Wymondham,...', 'Salary Range £25,000 -£29,000 + Pension Hours 40 hours per week, Monday - Friday Location Wymondham,', '2025-06-20 00:00:00'),
(2, 2, 1, 'how-can-ai', '2025/6/26/how-can-ai-L9M0.png', 'How Can AI Benefit My Business?', 'The idea of integrating AI into your business operations may seem daunting, but there are undeniable...', 'The idea of integrating AI into your business operations may seem daunting, but there are undeniable advantages', '2025-06-26 09:36:54'),
(3, 2, 1, 'how-much-could', '2025/6/27/how-much-could-vKZG.png', 'How Much Could Bespoke Software Add to Your E...', 'If you\'re a Managing Director or Senior Manager preparing your business for exit, you know that incr', 'If you\'re a Managing Director or Senior Manager preparing your business for exit, you know that increased', '2025-06-27 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nm_news_posts`
--
ALTER TABLE `nm_news_posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `post_type_id` (`post_type_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nm_news_posts`
--
ALTER TABLE `nm_news_posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
