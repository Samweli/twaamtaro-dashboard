-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2017 at 10:31 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sms`
--

-- --------------------------------------------------------

--
-- Table structure for table `adopted_drains`
--

CREATE TABLE `adopted_drains` (
  `drainId` int(11) NOT NULL,
  `citizenId` int(11) NOT NULL,
  `clean` varchar(3) NOT NULL DEFAULT 'No',
  `unclear` varchar(3) NOT NULL DEFAULT 'Yes',
  `help_needed` varchar(3) NOT NULL DEFAULT 'No'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adopted_drains`
--

INSERT INTO `adopted_drains` (`drainId`, `citizenId`, `clean`, `unclear`, `help_needed`) VALUES
(124, 4, 'No', 'Yes', 'No');

-- --------------------------------------------------------

--
-- Table structure for table `citizen`
--

CREATE TABLE `citizen` (
  `id` int(11) NOT NULL,
  `fname` varchar(45) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `house` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `citizen`
--

INSERT INTO `citizen` (`id`, `fname`, `phone`, `house`) VALUES
(1, 'Victor David', '0782120252', 144),
(2, 'Beatrice ', '0782120120', 155),
(3, 'Nathan Victor', '0754440033', 166),
(4, 'Peniel Victor', '+255755923102', 177);

-- --------------------------------------------------------

--
-- Table structure for table `drain`
--

CREATE TABLE `drain` (
  `id` int(11) NOT NULL,
  `lat` int(11) NOT NULL,
  `lon` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `drain`
--

INSERT INTO `drain` (`id`, `lat`, `lon`) VALUES
(121, 1, 1),
(122, 2, 2),
(123, 13, 41),
(124, 13, 40);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adopted_drains`
--
ALTER TABLE `adopted_drains`
  ADD KEY `drainId` (`drainId`),
  ADD KEY `citizenId` (`citizenId`);

--
-- Indexes for table `citizen`
--
ALTER TABLE `citizen`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `drain`
--
ALTER TABLE `drain`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `adopted_drains`
--
ALTER TABLE `adopted_drains`
  ADD CONSTRAINT `adopted_drains_ibfk_1` FOREIGN KEY (`citizenId`) REFERENCES `citizen` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `adopted_drains_ibfk_2` FOREIGN KEY (`drainId`) REFERENCES `drain` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
