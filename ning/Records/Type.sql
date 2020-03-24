/*
 Target Server Type    : SQL Server
 Target Server Version : 11002100
 File Encoding         : 65001

 Date: 23/03/2020 10:54:55
*/


-- ----------------------------
-- Table structure for Type
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Type]') AND type IN ('U'))
	DROP TABLE [dbo].[Type]
GO

CREATE TABLE [dbo].[Type] (
  [Id] int  NOT NULL,
  [Name] nvarchar(50) COLLATE Chinese_PRC_CI_AS  NOT NULL
)
GO

ALTER TABLE [dbo].[Type] SET (LOCK_ESCALATION = TABLE)
GO

EXEC sp_addextendedproperty
'MS_Description', N'编号',
'SCHEMA', N'dbo',
'TABLE', N'Type',
'COLUMN', N'Id'
GO

EXEC sp_addextendedproperty
'MS_Description', N'Item名称',
'SCHEMA', N'dbo',
'TABLE', N'Type',
'COLUMN', N'Name'
GO


-- ----------------------------
-- Records of Type
-- ----------------------------
INSERT INTO [dbo].[Type] ([Id], [Name]) VALUES (N'1', N'配置')
GO

INSERT INTO [dbo].[Type] ([Id], [Name]) VALUES (N'2', N'卡带')
GO

INSERT INTO [dbo].[Type] ([Id], [Name]) VALUES (N'3', N'数字')
GO

INSERT INTO [dbo].[Type] ([Id], [Name]) VALUES (N'5', N'其他')
GO


-- ----------------------------
-- Primary Key structure for table Type
-- ----------------------------
ALTER TABLE [dbo].[Type] ADD CONSTRAINT [PK__Type__3214EC07DF4D28E8] PRIMARY KEY CLUSTERED ([Id])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO

