
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for region
-- ----------------------------
DROP TABLE IF EXISTS `region`;
CREATE TABLE `region`  (
  `Id` int(0) NOT NULL COMMENT '编号',
  `Name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '服务器区名',
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of region
-- ----------------------------
INSERT INTO `region` VALUES (1, '11区');
INSERT INTO `region` VALUES (2, '美服');
INSERT INTO `region` VALUES (3, '墨西哥服');
INSERT INTO `region` VALUES (4, '港服');
INSERT INTO `region` VALUES (5, '欧服');

SET FOREIGN_KEY_CHECKS = 1;
