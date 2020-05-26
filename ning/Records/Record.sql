/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : SQL Server
 Source Server Version : 11002100
 Source Host           : localhost:1433
 Source Catalog        : Record
 Source Schema         : dbo

 Target Server Type    : SQL Server
 Target Server Version : 11002100
 File Encoding         : 65001

 Date: 21/05/2020 09:44:01
*/


-- ----------------------------
-- Table structure for Record
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Record]') AND type IN ('U'))
	DROP TABLE [dbo].[Record]
GO

CREATE TABLE [dbo].[Record] (
  [Id] int  IDENTITY(1000,1) NOT NULL,
  [Type] int  NOT NULL,
  [Name] nvarchar(100) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [Region] int  NULL,
  [Price] money  NOT NULL,
  [Freight] money  NULL,
  [Total] money  NOT NULL,
  [TransactionDate] datetime  NOT NULL,
  [Remark] nvarchar(255) COLLATE Chinese_PRC_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[Record] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'记录编号',
'SCHEMA', N'dbo',
'TABLE', N'Record',
'COLUMN', N'Id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'Item类型',
'SCHEMA', N'dbo',
'TABLE', N'Record',
'COLUMN', N'Type'
GO

EXEC sp_addextendedproperty
'MS_Description', N'名称',
'SCHEMA', N'dbo',
'TABLE', N'Record',
'COLUMN', N'Name'
GO

EXEC sp_addextendedproperty
'MS_Description', N'服务区名',
'SCHEMA', N'dbo',
'TABLE', N'Record',
'COLUMN', N'Region'
GO

EXEC sp_addextendedproperty
'MS_Description', N'价格',
'SCHEMA', N'dbo',
'TABLE', N'Record',
'COLUMN', N'Price'
GO

EXEC sp_addextendedproperty
'MS_Description', N'运费',
'SCHEMA', N'dbo',
'TABLE', N'Record',
'COLUMN', N'Freight'
GO

EXEC sp_addextendedproperty
'MS_Description', N'总计',
'SCHEMA', N'dbo',
'TABLE', N'Record',
'COLUMN', N'Total'
GO

EXEC sp_addextendedproperty
'MS_Description', N'交易时间',
'SCHEMA', N'dbo',
'TABLE', N'Record',
'COLUMN', N'TransactionDate'
GO


-- ----------------------------
-- Records of Record
-- ----------------------------
SET IDENTITY_INSERT [dbo].[Record] ON
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1000', N'1', N'Nintendo Switch 主机', N'1', N'1955.0000', NULL, N'1955.0000', N'2018-06-19 19:20:12.000', N'日版机盒')
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1002', N'2', N'ゼルダの伝説 ブレス オブ ザ ワイルド', N'4', N'369.0000', N'12.0000', N'381.0000', N'2018-06-20 13:02:14.000', N'620一单')
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1003', N'2', N'Xenoblade2', N'4', N'445.0000', NULL, N'445.0000', N'2018-06-20 13:02:14.000', N'620一单')
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1004', N'1', N'便携包', NULL, N'75.0000', NULL, N'75.0000', N'2018-07-02 18:56:33.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1006', N'3', N'ゼルダの伝説 ブレス オブ ザ ワイルド 季票', N'2', N'128.0000', NULL, N'128.0000', N'2018-07-02 19:09:40.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1008', N'1', N'闪迪128G SD储存卡', NULL, N'199.0000', NULL, N'199.0000', N'2018-07-13 18:53:17.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1009', N'3', N'Xenoblade2 季票', N'1', N'165.0000', NULL, N'165.0000', N'2018-08-10 20:50:26.000', N'黄金之国')
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1010', N'1', N'喷射2限定pro手柄', NULL, N'449.0000', NULL, N'449.0000', N'2018-08-11 15:04:38.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1011', N'3', N'Splatoon2 完全版', N'1', N'455.0000', NULL, N'455.0000', N'2018-08-20 19:05:40.000', N'本体+dlc')
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1012', N'3', N'Hollow Knight', N'3', N'37.9000', NULL, N'37.9000', N'2018-08-24 18:47:24.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1013', N'3', N'THUMPER リズム・バイオレンスゲーム', N'1', N'50.0000', NULL, N'50.0000', N'2018-09-29 22:23:37.000', N'暴走甲虫')
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1014', N'1', N'国产pro手柄', NULL, N'83.9900', N'8.0000', N'91.9900', N'2018-10-15 09:48:43.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1015', N'2', N'Monster Hunter Double Cross (GU)', N'2', N'313.0000', NULL, N'313.0000', N'2019-02-13 13:32:33.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1016', N'2', N'Diablo 3', N'2', N'335.0000', N'23.0000', N'358.0000', N'2019-04-06 09:20:23.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1017', N'3', N'Cat Quest', N'3', N'25.1100', NULL, N'25.1100', N'2019-04-14 12:55:16.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1018', N'2', N'Labyrinth of Refrain:Coven of Dusk', N'4', N'363.0000', NULL, N'363.0000', N'2019-04-22 12:25:47.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1019', N'3', N'Reigns Game of Thrones', N'2', N'26.8100', NULL, N'26.8100', N'2019-04-22 21:07:34.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1020', N'2', N'ドラゴンズ ドグマ 龙之信条：黑暗觉醒', N'2', N'208.0000', N'23.0000', N'231.0000', N'2019-04-25 12:53:14.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1021', N'3', N'The Way Remastered', N'2', N'6.6900', NULL, N'6.6900', N'2019-05-03 21:41:53.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1022', N'1', N'amiibo卡 塞尔达合集', NULL, N'55.0000', NULL, N'55.0000', N'2019-05-13 09:23:01.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1023', N'2', N'Octopath Traveler', N'5', N'367.0000', NULL, N'367.0000', N'2019-05-17 12:37:26.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1024', N'3', N'Enter The Gungeon', N'3', N'54.6900', NULL, N'54.6900', N'2019-05-21 20:09:40.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1025', N'3', N'Dead Cells', N'2', N'138.6100', NULL, N'138.6100', N'2019-05-24 18:32:56.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1026', N'3', N'Katana ZERO', N'1', N'80.1100', NULL, N'80.1100', N'2019-05-30 20:12:22.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1027', N'3', N'NBA2K19', N'2', N'20.7200', NULL, N'20.7200', N'2019-06-12 18:13:15.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1028', N'1', N'国产异度之刃2限定pro手柄', NULL, N'137.8000', NULL, N'137.8000', N'2019-06-15 12:34:56.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1029', N'1', N'雷克沙 512GB SD储存卡 UHS-I U3 V30 A2 633x', NULL, N'398.8900', NULL, N'398.8900', N'2019-06-18 12:48:08.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1030', N'3', N'Into The Breach', N'3', N'27.9200', NULL, N'27.9200', N'2019-06-29 19:50:20.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1032', N'3', N'Escape Doodland', N'3', N'.0000', NULL, N'.0000', N'2019-06-29 20:12:00.000', N'95个金币兑换 时价:￥6.75')
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1033', N'3', N'墨西哥英雄大混战：完全版', N'3', N'40.3800', NULL, N'40.3800', N'2019-07-06 22:30:25.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1034', N'3', N'墨西哥英雄大混战2：完全版', N'3', N'108.5300', NULL, N'108.5300', N'2019-07-06 22:25:00.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1035', N'3', N'The Friends of Ringo Ishikawa', N'1', N'76.8200', NULL, N'76.8200', N'2019-07-07 20:09:14.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1036', N'2', N'火焰纹章 风花雪月', N'4', N'357.0000', NULL, N'357.0000', N'2019-07-13 12:40:30.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1037', N'3', N'FAST FMX', N'1', N'95.8200', NULL, N'95.8200', N'2019-07-17 21:07:11.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1038', N'3', N'海贼无双3杜蕾斯版', N'2', N'110.2500', NULL, N'110.2500', N'2019-07-18 20:38:10.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1039', N'3', N'火焰纹章风花雪月季票', N'1', N'179.5600', NULL, N'179.5600', N'2019-08-05 19:48:52.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1040', N'3', N'火影忍者疾风传究极忍者风暴3', N'1', N'127.0500', NULL, N'127.0500', N'2019-08-11 18:34:27.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1041', N'2', N'ASTRAL CHAIN', N'4', N'414.9700', NULL, N'414.9700', N'2019-08-19 12:54:00.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1042', N'3', N'Starlink: Battle For Atlas', N'3', N'196.2800', NULL, N'196.2800', N'2019-08-29 18:47:17.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1043', N'3', N'Sayonara Wild Hearts', N'3', N'91.5000', NULL, N'91.5000', N'2019-09-25 11:18:15.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1044', N'3', N'The Messenger', N'2', N'84.5700', NULL, N'84.5700', N'2019-11-29 21:36:02.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1045', N'3', N'Call of Juarez: Gunslinger', N'2', N'128.9700', NULL, N'128.9700', N'2019-12-10 20:04:00.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1046', N'3', N'Super Smash Bros: Ultimate + 季票1', N'2', N'595.5700', NULL, N'595.5700', N'2019-12-16 14:05:55.000', N'$84.98美金点卡购买-淘宝')
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1047', N'3', N'蒸汽世界：冒险', N'1', N'128.9900', NULL, N'128.9900', N'2019-12-31 19:48:00.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1048', N'2', N'幻影异闻录#FE Encore', N'4', N'340.0000', N'18.0000', N'358.0000', N'2020-01-17 14:25:30.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1049', N'3', N'あつまれ　どうぶつの森 Animal Crossing: New Horizons', N'1', N'414.2000', NULL, N'414.2000', N'2020-02-21 18:56:55.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1050', N'1', N'国产pro手柄升级版 大乱斗限定', NULL, N'205.8000', NULL, N'205.8000', N'2020-03-02 13:11:37.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1052', N'1', N'pro遥感轴*10', NULL, N'23.0000', N'12.0000', N'44.0000', N'2020-03-02 13:11:38.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1053', N'3', N'点心世界', N'1', N'67.4100', NULL, N'67.4100', N'2020-03-14 13:30:29.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1054', N'2', N'异度之刃决定版', N'4', N'338.0000', N'12.0000', N'350.0000', N'2020-05-03 15:50:37.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1055', N'3', N'Daemon X Machina', N'4', N'251.3200', NULL, N'251.3200', N'2020-05-03 16:21:00.000', NULL)
GO

INSERT INTO [dbo].[Record] ([Id], [Type], [Name], [Region], [Price], [Freight], [Total], [TransactionDate], [Remark]) VALUES (N'1056', N'3', N'怒之铁拳4', N'4', N'155.0000', NULL, N'155.0000', N'2020-05-03 16:21:00.000', NULL)
GO

SET IDENTITY_INSERT [dbo].[Record] OFF
GO


-- ----------------------------
-- Auto increment value for Record
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[Record]', RESEED, 1056)
GO


-- ----------------------------
-- Primary Key structure for table Record
-- ----------------------------
ALTER TABLE [dbo].[Record] ADD CONSTRAINT [PK__Record__3214EC07D76116DB] PRIMARY KEY CLUSTERED ([Id])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO

