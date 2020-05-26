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

 Date: 21/05/2020 09:44:12
*/


-- ----------------------------
-- Table structure for Region
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Region]') AND type IN ('U'))
	DROP TABLE [dbo].[Region]
GO

CREATE TABLE [dbo].[Region] (
  [Id] int  IDENTITY(1,1) NOT NULL,
  [Name] nvarchar(50) COLLATE Chinese_PRC_CI_AS  NOT NULL
)
GO

ALTER TABLE [dbo].[Region] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'编号',
'SCHEMA', N'dbo',
'TABLE', N'Region',
'COLUMN', N'Id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'服务器区名',
'SCHEMA', N'dbo',
'TABLE', N'Region',
'COLUMN', N'Name'
GO


-- ----------------------------
-- Records of Region
-- ----------------------------
SET IDENTITY_INSERT [dbo].[Region] ON
GO

INSERT INTO [dbo].[Region] ([Id], [Name]) VALUES (N'1', N'11区')
GO

INSERT INTO [dbo].[Region] ([Id], [Name]) VALUES (N'2', N'美服')
GO

INSERT INTO [dbo].[Region] ([Id], [Name]) VALUES (N'3', N'墨西哥服')
GO

INSERT INTO [dbo].[Region] ([Id], [Name]) VALUES (N'4', N'港服')
GO

INSERT INTO [dbo].[Region] ([Id], [Name]) VALUES (N'5', N'欧服')
GO

SET IDENTITY_INSERT [dbo].[Region] OFF
GO


-- ----------------------------
-- Auto increment value for Region
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[Region]', RESEED, 5)
GO


-- ----------------------------
-- Primary Key structure for table Region
-- ----------------------------
ALTER TABLE [dbo].[Region] ADD CONSTRAINT [PK__Region__3214EC07FC64AB62] PRIMARY KEY CLUSTERED ([Id])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO

