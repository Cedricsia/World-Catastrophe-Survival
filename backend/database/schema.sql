-- Active: 1689174540931@@127.0.0.1@3306@world_catastrophe_survival

DROP TABLE IF EXISTS `bestiary`;

DROP TABLE IF EXISTS `tutorial`;

DROP TABLE IF EXISTS `basket_item`;

DROP TABLE IF EXISTS `basket`;

DROP TABLE IF EXISTS `item`;

DROP TABLE IF EXISTS `booked_training`;

DROP TABLE IF EXISTS `user`;

DROP TABLE IF EXISTS `training_time`;

DROP TABLE IF EXISTS `training`;

DROP TABLE IF EXISTS `teacher`;

CREATE TABLE
    IF NOT EXISTS `bestiary` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(64) NOT NULL,
        `danger_level` VARCHAR(64) NOT NULL,
        `activity_period` VARCHAR(64) NOT NULL,
        `description` VARCHAR(255) NOT NULL,
        `infos` VARCHAR(255) NOT NULL,
        `picture` VARCHAR(64),
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE
    IF NOT EXISTS `tutorial` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(255) NOT NULL,
        `category` VARCHAR(64) NOT NULL,
        `difficulty` VARCHAR(64) NOT NULL,
        `content` TEXT NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE
    IF NOT EXISTS `item` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(64) NOT NULL,
        `price` DECIMAL NOT NULL,
        `category` VARCHAR(64) NOT NULL,
        `description` VARCHAR(255) NOT NULL,
        `picture` VARCHAR(255) NULL,
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
        `password` VARCHAR(64) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE
    IF NOT EXISTS `teacher` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `firstname` VARCHAR(64) NOT NULL,
        `lastname` VARCHAR(64) NOT NULL,
        `specialty` VARCHAR(64) NOT NULL,
        `can_visual` TINYINT NOT NULL,
        `can_auditive` TINYINT NOT NULL,
        `can_motor` TINYINT NOT NULL,
        `can_cognitive` TINYINT NOT NULL,
        `profilepicture` VARCHAR(255) NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE
    IF NOT EXISTS `basket` (
        `id` INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE
    IF NOT EXISTS `basket_item` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `basket_id` INT NOT NULL,
        `item_id` INT NOT NULL,
        PRIMARY KEY (`id`),
        CONSTRAINT `fk_shop_basket_has_shop_item_shop_basket` FOREIGN KEY (`basket_id`) REFERENCES `basket` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_shop_basket_has_shop_item_shop_item` FOREIGN KEY (`item_id`) REFERENCES `item` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE
    IF NOT EXISTS `booked_training` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `start_time` DATETIME NOT NULL,
        `end_time` DATETIME NOT NULL,
        `subject` VARCHAR(64) NOT NULL,
        `impairment` VARCHAR(64) NULL,
        `teacher_id` INT NOT NULL,
        `user_id` INT NOT NULL,
        PRIMARY KEY (`id`),
        CONSTRAINT `fk_lesson_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_lesson_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE
    IF NOT EXISTS `training` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(64) NOT NULL,
        `description` VARCHAR(255) NOT NULL,
        `category` VARCHAR(64) NOT NULL,
        `difficulty` VARCHAR(64) NOT NULL,
        `teacher_id` INT NOT NULL,
        PRIMARY KEY (`id`),
        CONSTRAINT `fk_training_teacher` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE
    IF NOT EXISTS `training_time` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `start_time` DATETIME NOT NULL,
        `end_time` DATETIME NOT NULL,
        `training_id` INT NOT NULL,
        PRIMARY KEY (`id`, `training_id`),
        CONSTRAINT `fk_training_time_training` FOREIGN KEY (`training_id`) REFERENCES `training` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4;

INSERT INTO
    `bestiary` (
        `name`,
        `danger_level`,
        `activity_period`,
        `description`,
        `infos`,
        `picture`
    )
VALUES (
        'Giant Mite',
        'Mildly dangerous',
        'All day',
        'Giant mites are oversized, highly dangerous flying insects.',
        'Giant mites are exceptionally venomous, and they tend to hunt in packs. They prefer warm, dry environments and tend to stick to higher elevations such as hillsides, but can venture out of their traditional climes when desperate for prey.',
        'Giantmite.png'
    );

INSERT INTO
    `tutorial` (
        `title`,
        `category`,
        `difficulty`,
        `content`
    )
VALUES (
        'Build your own nuclear shelter',
        'Engineering',
        'Medium',
        'Sample'
    ), (
        'First aid best practice',
        'Medical',
        'Medium',
        'Sample'
    ), (
        'Scouting techniques',
        'Exploration',
        'Easy',
        'Sample'
    ), (
        'Zombies: close combat skills',
        'Combat',
        'Medium',
        'Sample'
    ), (
        'How to deal with humanoid threat',
        'Combat',
        'Medium',
        'Sample'
    ), (
        'Rat cooking course',
        'Exploration',
        'Easy',
        'Sample'
    ), (
        'Limb amputation workshop',
        'Medical',
        'Hard',
        'Sample'
    ), (
        'Build a barricade to protect yourself against zombie hordes',
        'Medium',
        'Engineering',
        'Sample'
    ), (
        'Flying ennemies : how to protect your head',
        'Combat',
        'Medium',
        'Sample'
    ), (
        'Food poisoning : how to cure it with wild roots',
        'Medical',
        'Easy',
        'Sample'
    ), (
        'Firearms maintenance : full course',
        'Engineering',
        'Easy',
        'Sample'
    ), (
        "Safe exploration techniques : you'll never wander in a bear den anymore",
        'Exploration',
        'Hard',
        'Sample'
    );

INSERT INTO
    `item` (
        `name`,
        `price`,
        `category`,
        `description`,
        `picture`
    )
VALUES (
        'Swiss army knife',
        29.99,
        'Tools',
        'A all-around tasks knife with 99 distinct functions.',
        'knife1.png'
    ), (
        'Healing balm',
        '9.99',
        'Consumables',
        'A balm made with aloe vera, great for burns healing.',
        'paumade1.png'
    ), (
        'Connected watch',
        '199.99',
        'Tools',
        'A watch that display time and date, GPS localisation, text messages and step counter.',
        'montre1.png'
    ), (
        'Climbing rope',
        '19.99',
        'Tools',
        'A sturdy rope, ideal to climb hasardous terrains.',
        'corde1.png'
    ), (
        'Carabiner',
        '8.99',
        'Tools',
        'A metal carabiner. Used with a climbing rope, or a set of keys',
        'mousqueton1.png'
    ), (
        'Exploration backpack',
        '82.99',
        'Tools',
        'A convenient and handy backpack.',
        'bag1.png'
    ), (
        'Military vest',
        '99.99',
        'Tools',
        'Ideal to hold magazines and grenades',
        'treillis1.png'
    ), (
        'Tent',
        '129.99',
        'Tools',
        'A tent, can house up to 6 people.',
        'tente1.png'
    ), (
        'Military helmet',
        '159.99',
        'Tools',
        'A military-grade helmet, can resist small caliber bullets.',
        'casque1.png'
    ), (
        'Assault rifle',
        '599.99',
        'Weapons',
        'A 5.56mm assault rifle. Fires 300 rounds per minute.',
        'AR1.png'
    ), (
        'Karambit',
        '97.99',
        'Weapons',
        'A karambit, fits well in the hand for better handling.',
        'PA1.png'
    ), (
        'Sniper rifle',
        '698.99',
        'Weapons',
        'A sniper rifle that can attain targets up to 1200 meters. Fires 7.62mm ammunition.',
        'sniper1.png'
    ), (
        'Tactical knife',
        '109.99',
        'Weapons',
        'A military knife. Hunters love it!',
        'tacticknife1.png'
    ), (
        'Flamethrower',
        '399.99',
        'Weapons',
        'A german-made flamethrower. Handle with extreme caution. Risks of severe burns.',
        'LF1.png'
    ), (
        'Crossbow',
        '199.99',
        'Weapons',
        'A precise crossbow. Fires darts.',
        'arbalete1.png'
    ), (
        'Composite bow',
        '179.99',
        'Weapons',
        'A high-performance bow. Fires arrows.',
        'bow1.png'
    ), (
        '7.62mm bullets',
        '59.99',
        'Ammunitions',
        'Ammunation for sniper rifles. 40 units pack.',
        'BulletAmmunitionSnipe1.png'
    ), (
        '9mm bullets',
        '49.99',
        'Ammunitions',
        'Ammunition for handguns. 100 units pack.',
        'bullet_gun1.png'
    ), (
        'Arrows quiver',
        '39.99',
        'Ammunitions',
        'Contains steel-pointed arrows. 50 units pack.',
        'arbalete1.png'
    ), (
        'Baseball bat',
        '29.99',
        'Weapons',
        'Wooden bat, contondent weapon effective against a wide array of threats. Can also be used to play baseball.',
        'lucile1.png'
    ), (
        'Beef meat',
        '19.99',
        'Consumables',
        '1kg of fresh, healthy beef steak.',
        'meat1.png'
    ), (
        'Field medical bag',
        '109.99',
        'Tools',
        'A complete set of tools for practicing your medical skills in the wild.',
        'medikit1.png'
    ), (
        'Medikit',
        '39.99',
        'Tools',
        'A portable set of medical tools.',
        'smMedikit1.png'
    ), (
        'First aid kit',
        '19.99',
        'Tools',
        'A first aid kit with basic medical materials.',
        'fak1.png'
    ), (
        'Luxury gas mask',
        '299.99',
        'Tools',
        'An almost comfy gas mask, with cow leather and silk. Spare filters not included.',
        'MAG1.png'
    ), (
        'Military gas mask',
        '99.99',
        'Tools',
        'Filters 99% of harmful gases and bacteria.',
        'MAG3.png'
    ), (
        'Epinephrine',
        '19.99',
        'Consumables',
        'Auto-injectable rapid-action adrenaline rush. Makes you stronger. Also treats anaphylaxis. Consume with moderation.',
        'adre1.png'
    ), (
        'Lighter',
        '1.99',
        'Tools',
        'Uses gas. Produces flame. High quality. Older than matches. 3000 ignitions guaranteed.',
        'briquet1.png'
    ), (
        'Gourd',
        '9.99',
        'Tools',
        'Sealable liquid container. 700mL capacity.',
        'gourde1.png'
    );

INSERT INTO
    `user` (
        `username`,
        `firstname`,
        `lastname`,
        `email`,
        `gender`,
        `password`
    )
VALUES (
        'Johnnie Walker',
        'William',
        'Wallace',
        'liberty@haggis.scot',
        'male',
        'password'
    );

INSERT INTO
    `teacher` (
        `firstname`,
        `lastname`,
        `specialty`,
        `can_visual`,
        `can_auditive`,
        `can_motor`,
        `can_cognitive`,
        `profilepicture`
    )
VALUES (
        'Bear',
        'Grylls',
        'Exploration',
        TRUE,
        TRUE,
        FALSE,
        TRUE,
        NULL
    ), (
        'Chuck',
        'Norris',
        'Combat',
        TRUE,
        FALSE,
        TRUE,
        TRUE,
        NULL
    ), (
        'Angus',
        'McGyver',
        'Engineering',
        TRUE,
        TRUE,
        TRUE,
        FALSE,
        NULL
    ), (
        'Didier',
        'Raoult',
        'Medical',
        FALSE,
        TRUE,
        TRUE,
        TRUE,
        NULL
    ), (
        'Doc',
        'Brown',
        'Engineering',
        TRUE,
        TRUE,
        TRUE,
        TRUE,
        NULL
    ), (
        'Negan',
        'Smith',
        'Combat',
        FALSE,
        FALSE,
        FALSE,
        FALSE,
        NULL
    ), (
        'Lara',
        'Croft',
        'Exploration',
        FALSE,
        FALSE,
        TRUE,
        TRUE,
        NULL
    );

INSERT INTO
    `training` (
        `title`,
        `description`,
        `category`,
        `difficulty`,
        `teacher_id`
    )
VALUES (
        'Eliminating the threats',
        'Learn how to annihilate your ennemies.',
        'Combat',
        'Hard',
        2
    ), (
        'How to eat everything you find',
        'In the wilderness, you must be prepared to eat anything, be it raw or still living. Learn how in this interactive workshop.',
        'Exploration',
        'Medium',
        1
    ), (
        'Building on the fly',
        'Learn how to build explosive devices with only bubble-gum and pieces of string.',
        'Engineering',
        'Easy',
        3
    ), (
        'Virology explained',
        'Learn about new viruses and how to defeat them. ',
        'Medical',
        'Medium',
        4
    ), (
        'Repairs & upgrades mastery',
        'Learn how to do repairs on the field and adapt hardware to new functionalities.',
        'Engineering',
        'Easy',
        5
    ), (
        'Armed combat: bat mastery',
        'Learn how to use your best lethal companion to prevent yourself from being harmed.',
        'Combat',
        'Hard',
        6
    ), (
        'Old ruins climbing session',
        'Practice your climbing skills in a challenging environment. Firearms advised.',
        'Exploration',
        'Easy',
        7
    );