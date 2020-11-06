
create database test;
use test;
SET SQL_SAFE_UPDATES = 0;

-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.9-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table misdev_40_50_25_06.pending_emp_basic_details
CREATE TABLE IF NOT EXISTS `pending_emp_basic_details` (
  `emp_no` varchar(12) NOT NULL,
  `auth_id` varchar(10) NOT NULL,
  `designation` varchar(11) NOT NULL,
  `office_no` bigint(11) DEFAULT NULL,
  `fax` bigint(11) DEFAULT NULL,
  `joining_date` date NOT NULL,
  `retirement_date` date NOT NULL,
  `employment_nature` varchar(150) NOT NULL,
  PRIMARY KEY (`emp_no`),
  KEY `auth_id` (`auth_id`),
  KEY `auth_id_2` (`auth_id`),
  KEY `auth_id_3` (`auth_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.pending_emp_education_details
CREATE TABLE IF NOT EXISTS `pending_emp_education_details` (
  `emp_no` varchar(12) NOT NULL,
  `sno` int(11) NOT NULL,
  `exam` varchar(250) NOT NULL,
  `specialization` varchar(150) NOT NULL,
  `institute` varchar(250) NOT NULL,
  `year` varchar(4) NOT NULL,
  `grade` varchar(4) NOT NULL,
  `division` varchar(20) NOT NULL,
  PRIMARY KEY (`emp_no`,`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.pending_emp_family_details
CREATE TABLE IF NOT EXISTS `pending_emp_family_details` (
  `emp_no` varchar(11) NOT NULL,
  `sno` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `relationship` varchar(20) NOT NULL,
  `profession` varchar(150) NOT NULL,
  `present_post_addr` text NOT NULL,
  `photopath` varchar(150) NOT NULL,
  `dob` date NOT NULL,
  `active_inactive` varchar(10) NOT NULL,
  `emp_dep_allergy` varchar(30) DEFAULT NULL,
  `emp_dep_disease` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`emp_no`,`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.pending_emp_last5yrstay_details
CREATE TABLE IF NOT EXISTS `pending_emp_last5yrstay_details` (
  `emp_no` varchar(12) NOT NULL,
  `sno` int(11) NOT NULL,
  `from` date NOT NULL,
  `to` date NOT NULL,
  `res_addr` text NOT NULL,
  `dist_hq_name` text NOT NULL,
  PRIMARY KEY (`emp_no`,`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.pending_emp_pay_details

CREATE TABLE IF NOT EXISTS `pending_emp_pay_details` (
  `emp_no` varchar(12) NOT NULL,
  `pay_code` varchar(20) NOT NULL,
  `basic_pay` bigint(11) NOT NULL,
  `grade_pay` bigint(11) NOT NULL,
  PRIMARY KEY (`emp_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.pending_emp_prev_exp_details
CREATE TABLE IF NOT EXISTS `pending_emp_prev_exp_details` (
  `emp_no` varchar(12) NOT NULL,
  `sno` int(11) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `from` date NOT NULL,
  `to` date NOT NULL,
  `pay_scale` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `remarks` text,
  PRIMARY KEY (`emp_no`,`sno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.pending_faculty_details
CREATE TABLE IF NOT EXISTS `pending_faculty_details` (
  `emp_no` varchar(12) NOT NULL,
  `research_interest` text NOT NULL,
  PRIMARY KEY (`emp_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.pending_user_address
CREATE TABLE IF NOT EXISTS `pending_user_address` (
  `id` varchar(50) NOT NULL,
  `line1` text NOT NULL,
  `line2` text NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(150) NOT NULL,
  `pincode` bigint(20) NOT NULL,
  `country` varchar(150) NOT NULL,
  `contact_no` bigint(20) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`,`type`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.pending_user_details

CREATE TABLE IF NOT EXISTS `pending_user_details` (
  `id` varchar(11) NOT NULL,
  `salutation` varchar(5) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `middle_name` varchar(150) DEFAULT NULL,
  `last_name` varchar(150) DEFAULT NULL,
  `sex` varchar(1) NOT NULL,
  `category` varchar(10) NOT NULL,
  `allocated_category` varchar(10) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(150) NOT NULL,
  `photopath` varchar(150) NOT NULL,
  `signature` varchar(150) NOT NULL,
  `marital_status` varchar(20) NOT NULL,
  `physically_challenged` varchar(5) NOT NULL,
  `dept_id` varchar(11) NOT NULL,
  `updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `dept_id` (`dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
-- Dumping structure for table misdev_40_50_25_06.pending_user_other_details
CREATE TABLE IF NOT EXISTS `pending_user_other_details` (
  `id` varchar(12) NOT NULL,
  `religion` varchar(100) NOT NULL,
  `nationality` varchar(100) NOT NULL,
  `kashmiri_immigrant` varchar(10) NOT NULL,
  `hobbies` text,
  `fav_past_time` text,
  `birth_place` varchar(150) NOT NULL,
  `mobile_no` bigint(20) NOT NULL,
  `father_name` varchar(150) NOT NULL,
  `mother_name` varchar(150) NOT NULL,
  `bank_name` varchar(60) DEFAULT NULL,
  `bank_accno` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;