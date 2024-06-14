-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Jun 2024 pada 01.33
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_book`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `book`
--

CREATE TABLE `book` (
  `code` varchar(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `author` varchar(50) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `book`
--

INSERT INTO `book` (`code`, `name`, `author`, `stock`) VALUES
('', 'One Pouch Man', 'Lupa Author', 1),
('FK-1', 'Aku Kamu Dan Samudra', 'Laras', 0),
('JKT-4', 'JKT 48', 'Fikry Ramadhan', 1),
('MNTP-1', 'MANTAP MEN', 'Kuja', 0),
('OPM-1', 'One Pouch Man', 'Lupa Author', 0),
('RP-1', 'Aku Kamu', 'Gillak', 2),
('RPL-1', 'Islam Itu Adalah Surga', 'Fikry Ramadhan', 0),
('SP-2', 'Spiderman 2', 'Oda Sensei', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `booked`
--

CREATE TABLE `booked` (
  `id` int(11) NOT NULL,
  `code` varchar(50) NOT NULL,
  `id_member` int(11) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `deadline_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `booked`
--

INSERT INTO `booked` (`id`, `code`, `id_member`, `created_at`, `deadline_at`) VALUES
(35, 'RPL-1', 4, '2024-06-14', '2024-06-17'),
(41, 'FK-1', 4, '2024-06-14', '2024-06-17'),
(42, 'OPM-1', 5, '2024-06-14', '2024-06-17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `members`
--

CREATE TABLE `members` (
  `id_member` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `status` varchar(11) NOT NULL DEFAULT 'Tidak',
  `status_sanksi` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `members`
--

INSERT INTO `members` (`id_member`, `name`, `email`, `status`, `status_sanksi`) VALUES
(1, 'Junaedi', 'junaedi@rmail.com', 'Tidak', '0000-00-00'),
(2, 'Miftah', 'miftah@gmail,com', 'Tidak', '0000-00-00'),
(3, 'Fikry', 'fikry@gmail.com', 'Sanksi', '2024-06-19'),
(4, 'aldo', 'aldo@gmail,com', 'Tidak', '0000-00-00'),
(5, 'yoga', 'yoga@gmail.com', 'Tidak', '0000-00-00'),
(6, 'ibad', 'ibad@gmail.com', 'Sanksi', '2024-06-21'),
(7, 'FIkry Ramadhan', 'fikryramadhan572@gmail.com', 'Tidak', '0000-00-00'),
(8, 'string', 'string', 'Sanksi', '2024-06-18');

-- --------------------------------------------------------

--
-- Struktur dari tabel `returns`
--

CREATE TABLE `returns` (
  `id` int(11) NOT NULL,
  `code` varchar(11) NOT NULL,
  `id_member` int(11) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'Tidak',
  `created_at` date NOT NULL DEFAULT current_timestamp(),
  `deadline_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `returns`
--

INSERT INTO `returns` (`id`, `code`, `id_member`, `status`, `created_at`, `deadline_at`) VALUES
(4, 'FK-1', 4, 'Sanksi', '2024-06-19', '2024-06-16'),
(5, 'FK-1', 4, 'Sanksi', '2024-06-19', '2024-06-16'),
(6, 'MNTP-1', 1, 'Tidak', '2024-06-15', '2024-06-16'),
(7, 'RP-1', 1, 'Tidak', '2024-06-15', '2024-06-16');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`code`);

--
-- Indeks untuk tabel `booked`
--
ALTER TABLE `booked`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_member` (`id_member`) USING BTREE,
  ADD KEY `code` (`code`) USING BTREE;

--
-- Indeks untuk tabel `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id_member`);

--
-- Indeks untuk tabel `returns`
--
ALTER TABLE `returns`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_members` (`id_member`),
  ADD KEY `code` (`code`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `booked`
--
ALTER TABLE `booked`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT untuk tabel `members`
--
ALTER TABLE `members`
  MODIFY `id_member` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `returns`
--
ALTER TABLE `returns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `booked`
--
ALTER TABLE `booked`
  ADD CONSTRAINT `booked_ibfk_1` FOREIGN KEY (`code`) REFERENCES `book` (`code`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `booked_ibfk_2` FOREIGN KEY (`id_member`) REFERENCES `members` (`id_member`);

--
-- Ketidakleluasaan untuk tabel `returns`
--
ALTER TABLE `returns`
  ADD CONSTRAINT `returns_ibfk_1` FOREIGN KEY (`id_member`) REFERENCES `members` (`id_member`),
  ADD CONSTRAINT `returns_ibfk_2` FOREIGN KEY (`code`) REFERENCES `book` (`code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
