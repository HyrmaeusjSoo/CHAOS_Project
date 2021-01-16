
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for record
-- ----------------------------
DROP TABLE IF EXISTS `record`;
CREATE TABLE `record`  (
  `Id` int(0) NOT NULL COMMENT '记录编号',
  `Type` int(0) NOT NULL COMMENT 'Item类型',
  `Name` varchar(155) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '名称',
  `Region` int(0) NULL DEFAULT NULL COMMENT '服务区名',
  `Price` decimal(10, 2) NOT NULL COMMENT '价格',
  `Freight` decimal(10, 2) NOT NULL COMMENT '运费',
  `Total` decimal(10, 2) NOT NULL COMMENT '总计',
  `TransactionDate` datetime(0) NULL DEFAULT NULL COMMENT '交易时间',
  `Remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '备注说明',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of record
-- ----------------------------
INSERT INTO `record` VALUES (1000, 1, 'Nintendo Switch 主机', 1, 1955.00, 0.00, 1955.00, '2018-06-19 19:20:12', '日版机盒');
INSERT INTO `record` VALUES (1002, 2, 'ゼルダの伝説 ブレス オブ ザ ワイルド', 4, 369.00, 12.00, 381.00, '2018-06-20 13:02:14', '620一单');
INSERT INTO `record` VALUES (1003, 2, 'Xenoblade2', 4, 445.00, 0.00, 445.00, '2018-06-20 13:02:14', '620一单');
INSERT INTO `record` VALUES (1004, 1, '便携包', 0, 75.00, 0.00, 75.00, '2018-07-02 18:56:33', '');
INSERT INTO `record` VALUES (1006, 3, 'ゼルダの伝説 ブレス オブ ザ ワイルド 季票', 2, 128.00, 0.00, 128.00, '2018-07-02 19:09:40', '');
INSERT INTO `record` VALUES (1008, 1, '闪迪128G SD储存卡', 0, 199.00, 0.00, 199.00, '2018-07-13 18:53:17', '');
INSERT INTO `record` VALUES (1009, 3, 'Xenoblade2 季票', 1, 165.00, 0.00, 165.00, '2018-08-10 20:50:26', '黄金之国');
INSERT INTO `record` VALUES (1010, 1, '喷射2限定pro手柄', 0, 449.00, 0.00, 449.00, '2018-08-11 15:04:38', '');
INSERT INTO `record` VALUES (1011, 3, 'Splatoon2 完全版', 1, 455.00, 0.00, 455.00, '2018-08-20 19:05:40', '本体+dlc');
INSERT INTO `record` VALUES (1012, 3, 'Hollow Knight', 3, 37.90, 0.00, 37.90, '2018-08-24 18:47:24', '');
INSERT INTO `record` VALUES (1013, 3, 'THUMPER リズム・バイオレンスゲーム', 1, 50.00, 0.00, 50.00, '2018-09-29 22:23:37', '暴走甲虫');
INSERT INTO `record` VALUES (1014, 1, '国产pro手柄', 0, 83.99, 8.00, 91.99, '2018-10-15 09:48:43', '');
INSERT INTO `record` VALUES (1015, 2, 'Monster Hunter Double Cross (GU)', 2, 313.00, 0.00, 313.00, '2019-02-13 13:32:33', '');
INSERT INTO `record` VALUES (1016, 2, 'Diablo 3', 2, 335.00, 23.00, 358.00, '2019-04-06 09:20:23', '');
INSERT INTO `record` VALUES (1017, 3, 'Cat Quest', 3, 25.11, 0.00, 25.11, '2019-04-14 12:55:16', '');
INSERT INTO `record` VALUES (1018, 2, 'Labyrinth of Refrain:Coven of Dusk', 4, 363.00, 0.00, 363.00, '2019-04-22 12:25:47', '');
INSERT INTO `record` VALUES (1019, 3, 'Reigns Game of Thrones', 2, 26.81, 0.00, 26.81, '2019-04-22 21:07:34', '');
INSERT INTO `record` VALUES (1020, 2, 'ドラゴンズ ドグマ 龙之信条：黑暗觉醒', 2, 208.00, 23.00, 231.00, '2019-04-25 12:53:14', '');
INSERT INTO `record` VALUES (1021, 3, 'The Way Remastered', 2, 6.69, 0.00, 6.69, '2019-05-03 21:41:53', '');
INSERT INTO `record` VALUES (1022, 1, 'amiibo卡 塞尔达合集', 0, 55.00, 0.00, 55.00, '2019-05-13 09:23:01', '');
INSERT INTO `record` VALUES (1023, 2, 'Octopath Traveler', 5, 367.00, 0.00, 367.00, '2019-05-17 12:37:26', '');
INSERT INTO `record` VALUES (1024, 3, 'Enter The Gungeon', 3, 54.69, 0.00, 54.69, '2019-05-21 20:09:40', '');
INSERT INTO `record` VALUES (1025, 3, 'Dead Cells', 2, 138.61, 0.00, 138.61, '2019-05-24 18:32:56', '');
INSERT INTO `record` VALUES (1026, 3, 'Katana ZERO', 1, 80.11, 0.00, 80.11, '2019-05-30 20:12:22', '');
INSERT INTO `record` VALUES (1027, 3, 'NBA2K19', 2, 20.72, 0.00, 20.72, '2019-06-12 18:13:15', '');
INSERT INTO `record` VALUES (1028, 1, '国产异度之刃2限定pro手柄', 0, 137.80, 0.00, 137.80, '2019-06-15 12:34:56', '');
INSERT INTO `record` VALUES (1029, 1, '雷克沙 512GB SD储存卡 UHS-I U3 V30 A2 633x', 0, 398.89, 0.00, 398.89, '2019-06-18 12:48:08', '');
INSERT INTO `record` VALUES (1030, 3, 'Into The Breach', 3, 27.92, 0.00, 27.92, '2019-06-29 19:50:20', '');
INSERT INTO `record` VALUES (1032, 3, 'Escape Doodland', 3, 0.00, 0.00, 0.00, '2019-06-29 20:12:00', '95个金币兑换 时价:￥6.75');
INSERT INTO `record` VALUES (1033, 3, '墨西哥英雄大混战：完全版', 3, 40.38, 0.00, 40.38, '2019-07-06 22:30:25', '');
INSERT INTO `record` VALUES (1034, 3, '墨西哥英雄大混战2：完全版', 3, 108.53, 0.00, 108.53, '2019-07-06 22:25:00', '');
INSERT INTO `record` VALUES (1035, 3, 'The Friends of Ringo Ishikawa', 1, 76.82, 0.00, 76.82, '2019-07-07 20:09:14', '');
INSERT INTO `record` VALUES (1036, 2, '火焰纹章 风花雪月', 4, 357.00, 0.00, 357.00, '2019-07-13 12:40:30', '');
INSERT INTO `record` VALUES (1037, 3, 'FAST FMX', 1, 95.82, 0.00, 95.82, '2019-07-17 21:07:11', '');
INSERT INTO `record` VALUES (1038, 3, '海贼无双3杜蕾斯版', 2, 110.25, 0.00, 110.25, '2019-07-18 20:38:10', '');
INSERT INTO `record` VALUES (1039, 3, '火焰纹章风花雪月季票', 1, 179.56, 0.00, 179.56, '2019-08-05 19:48:52', '');
INSERT INTO `record` VALUES (1040, 3, '火影忍者疾风传究极忍者风暴3', 1, 127.05, 0.00, 127.05, '2019-08-11 18:34:27', '');
INSERT INTO `record` VALUES (1041, 2, 'ASTRAL CHAIN', 4, 414.97, 0.00, 414.97, '2019-08-19 12:54:00', '');
INSERT INTO `record` VALUES (1042, 3, 'Starlink: Battle For Atlas', 3, 196.28, 0.00, 196.28, '2019-08-29 18:47:17', '');
INSERT INTO `record` VALUES (1043, 3, 'Sayonara Wild Hearts', 3, 91.50, 0.00, 91.50, '2019-09-25 11:18:15', '');
INSERT INTO `record` VALUES (1044, 3, 'The Messenger', 2, 84.57, 0.00, 84.57, '2019-11-29 21:36:02', '');
INSERT INTO `record` VALUES (1045, 3, 'Call of Juarez: Gunslinger', 2, 128.97, 0.00, 128.97, '2019-12-10 20:04:00', '');
INSERT INTO `record` VALUES (1046, 3, 'Super Smash Bros: Ultimate + 季票1', 2, 595.57, 0.00, 595.57, '2019-12-16 14:05:55', '$84.98美元点卡购买-淘宝');
INSERT INTO `record` VALUES (1047, 3, '蒸汽世界：冒险', 1, 128.99, 0.00, 128.99, '2019-12-31 19:48:00', '');
INSERT INTO `record` VALUES (1048, 2, '幻影异闻录#FE Encore', 4, 340.00, 18.00, 358.00, '2020-01-17 14:25:30', '');
INSERT INTO `record` VALUES (1049, 3, 'あつまれ　どうぶつの森 Animal Crossing: New Horizons', 1, 414.20, 0.00, 414.20, '2020-02-21 18:56:55', '');
INSERT INTO `record` VALUES (1050, 1, '国产pro手柄升级版 大乱斗限定', 0, 205.80, 0.00, 205.80, '2020-03-02 13:11:37', '');
INSERT INTO `record` VALUES (1052, 1, 'pro遥感轴*10', 0, 23.00, 12.00, 44.00, '2020-03-02 13:11:38', '');
INSERT INTO `record` VALUES (1053, 3, '点心世界', 1, 67.41, 0.00, 67.41, '2020-03-14 13:30:29', '');
INSERT INTO `record` VALUES (1054, 2, '异度之刃决定版', 4, 338.00, 12.00, 350.00, '2020-05-03 15:50:37', '');
INSERT INTO `record` VALUES (1055, 3, 'Daemon X Machina', 4, 251.32, 0.00, 251.32, '2020-05-03 16:21:00', '');
INSERT INTO `record` VALUES (1056, 3, '怒之铁拳4', 4, 155.00, 0.00, 155.00, '2020-05-03 16:21:00', '');
INSERT INTO `record` VALUES (1057, 1, 'CFORCE15.6英寸 CF011XPro便携式显示屏', 0, 968.00, 0.00, 968.00, '2020-06-13 03:29:37', '');
INSERT INTO `record` VALUES (1058, 3, 'Super Smash Bros.™ Ultimate: Fighters Pass Vol. 2', 2, 212.38, 0.00, 212.38, '2020-06-30 18:09:00', '$29.99美元点卡充值购买');
INSERT INTO `record` VALUES (1059, 3, '无主之地传奇合集', 2, 255.00, 0.00, 255.00, '2020-07-04 16:15:00', '$50美元点卡购买');
INSERT INTO `record` VALUES (1060, 3, '狙击精英3', 1, 54.03, 0.00, 54.03, '2020-07-13 17:54:00', '1071金币+821円');
INSERT INTO `record` VALUES (1061, 3, '神鸭特攻', 3, 0.00, 0.00, 0.00, '2020-07-13 18:24:00', '191金币兑换 时价￥11.85');
INSERT INTO `record` VALUES (1062, 3, 'Not Not - A Brain Buster', 3, 0.00, 0.00, 0.00, '2020-07-13 18:42:00', '98金币兑换 时价￥6.08');
INSERT INTO `record` VALUES (1063, 1, '国产pro手柄升级版 大乱斗限定', 0, 209.00, 0.00, 209.00, '2020-07-20 13:13:10', '');
INSERT INTO `record` VALUES (1064, 3, 'Hades', 2, 134.99, 0.00, 134.99, '2020-09-18 17:59:46', '$19.99点卡购买，时价￥116.00');
INSERT INTO `record` VALUES (1065, 3, 'Overcooked2：美食家版', 1, 155.25, 0.00, 155.25, '2020-10-31 21:24:49', '2,450円-42金币，含税219円');
INSERT INTO `record` VALUES (1066, 3, 'What Remains of Edith Finch', 2, 0.00, 0.00, 0.00, '2020-12-31 19:21:33', '金币兑换，时价$5.99、￥38.66');
INSERT INTO `record` VALUES (1067, 3, 'Need for Speed™ Hot Pursuit Remastered', 2, 129.03, 0.00, 129.03, '2020-12-31 22:05:11', '时价$19.99');
INSERT INTO `record` VALUES (1068, 3, 'MudRunner - American Wilds', 2, 48.34, 0.00, 48.34, '2020-12-31 22:11:52', '总价$7.49，金币兑换$4.26，支付$3.23');
INSERT INTO `record` VALUES (1069, 3, 'MONSTER HUNTER RISE 豪華版', 4, 456.16, 0.00, 456.16, '2020-01-11 17:31:00', '时价HKD543.00');

SET FOREIGN_KEY_CHECKS = 1;
