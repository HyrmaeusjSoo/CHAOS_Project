/* 创建词典数据库 */
DROP DATABASE IF EXISTS SoosTerminologyofEra;
CREATE DATABASE SoosTerminologyofEra;

USE SoosTerminologyofEra;
/* 分类表 */
DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category`(
    `category_id` INT UNSIGNED AUTO_INCREMENT COMMENT '类别编号',
    `category_title` VARCHAR(50) NOT NULL COMMENT '类别标题',
    `category_summary` VARCHAR(150) NOT NULL COMMENT '类别摘要',
    `category_entry_date` datetime NOT NULL COMMENT '记录时间',
    PRIMARY KEY (`category_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* 出自/来源 */
DROP TABLE IF EXISTS `origin_link`;
CREATE TABLE IF NOT EXISTS `origin_link`(
    `origin_id` INT UNSIGNED AUTO_INCREMENT COMMENT '来源编号',
    `origin_title` VARCHAR(50) NOT NULL COMMENT '源名词',
    `origin_summary` VARCHAR(150) NOT NULL COMMENT '来源摘要',
    `origin_entry_date` datetime COMMENT '记录时间',
    PRIMARY KEY (`origin_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/* 词条 */
DROP TABLE IF EXISTS `terms_doc`;
CREATE TABLE IF NOT EXISTS `terms_doc`(
    `terms_id` INT UNSIGNED AUTO_INCREMENT COMMENT '词条编号',
    `terms_title` VARCHAR(50) NOT NULL COMMENT '名词',
    `terms_summary` VARCHAR(150) NOT NULL COMMENT '词条摘要',
    `origin_id` INT NOT NULL COMMENT '来源',
    `category_id` INT NOT NULL COMMENT '分类',
    `terms_entry_date` datetime COMMENT '记录时间',
    PRIMARY KEY (`terms_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `origin_link`(`origin_title`,`origin_summary`,`origin_entry_date`) VALUES 
('The Elder Scrolls V: Skyrim','You know That,you fucking know that right?',NOW())

INSERT INTO `category`(`category_title`,`category_summary`,`category_entry_date`) VALUES
('biological','世界观-生物',NOW())

INSERT INTO `terms_doc`(`terms_title`,`terms_summary`,`origin_id`,`category_id`,`terms_entry_date`) VALUES
('1','1',0,0,NOW())



