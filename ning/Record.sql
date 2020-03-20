


/* Region */
CREATE TABLE [dbo].[Region] (
  [Id] int  IDENTITY(1,1) NOT NULL,
  [Name] nvarchar(50) COLLATE Chinese_PRC_CI_AS  NULL,
  CONSTRAINT [PK__Region__3214EC07FC64AB62] PRIMARY KEY CLUSTERED ([Id])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
)  
ON [PRIMARY]
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


/* Type */
CREATE TABLE [dbo].[Type] (
  [Id] int IDENTITY(1,1) NOT NULL,
  [Name] nvarchar(50) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  CONSTRAINT [PK__Type__3214EC07DF4D28E8] PRIMARY KEY CLUSTERED ([Id])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
)  
ON [PRIMARY]
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


/* Record */
CREATE TABLE [dbo].[Record] (
  [Id] int  IDENTITY(1000,1) NOT NULL,
  [Type] int  NOT NULL,
  [Name] nvarchar(100) COLLATE Chinese_PRC_CI_AS  NOT NULL,
  [Region] int  NULL,
  [Price] money  NOT NULL,
  [Freight] money  NULL,
  [Total] money  NOT NULL,
  [TransactionDate] datetime  NOT NULL,
  CONSTRAINT [PK__Record__3214EC07D76116DB] PRIMARY KEY CLUSTERED ([Id])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
)  
ON [PRIMARY]
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










