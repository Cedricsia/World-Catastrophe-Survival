-- Active: 1689174540931@@127.0.0.1@3306@world_catastrophe_survival

DROP TABLE IF EXISTS `item`;

DROP TABLE IF EXISTS `bestiary`;

DROP TABLE IF EXISTS `tutorial`;

DROP TABLE IF EXISTS `shop_item`;

DROP TABLE IF EXISTS `training`;

DROP TABLE IF EXISTS `teacher`;

DROP TABLE IF EXISTS `user`;

create table
    item (
        id int unsigned primary key auto_increment not null,
        title varchar(255) not null
    );

CREATE TABLE
    IF NOT EXISTS `bestiary` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(64) NULL,
        `danger_level` VARCHAR(64) NULL,
        `activity_period` VARCHAR(64) NULL,
        `description` VARCHAR(255) NULL,
        `infos` VARCHAR(255) NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE
    IF NOT EXISTS `tutorial` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(64) NULL,
        `content` VARCHAR(255) NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE
    IF NOT EXISTS `shop_item` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(64) NULL,
        `price` DECIMAL NULL,
        `description` VARCHAR(255) NULL,
        `picture` VARCHAR(255) NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE
    IF NOT EXISTS `teacher` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `firstname` VARCHAR(64) NULL,
        `lastname` VARCHAR(64) NULL,
        `specialty` VARCHAR(64) NULL,
        `available` TINYINT NULL,
        `profilepicture` VARCHAR(255) NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE
    IF NOT EXISTS `user` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `username` VARCHAR(64) NOT NULL,
        `firstname` VARCHAR(64) NOT NULL,
        `lastname` VARCHAR(64) NOT NULL,
        `email` VARCHAR(64) NOT NULL,
        `gender` VARCHAR(64) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE
    IF NOT EXISTS `training` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `start_time` DATETIME NOT NULL,
        `end_time` DATETIME NOT NULL,
        `subject` VARCHAR(64) NOT NULL,
        `teacher_id` INT NOT NULL,
        `user_id` INT NOT NULL,
        PRIMARY KEY (`id`),
        CONSTRAINT `fk_lesson_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_lesson_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;