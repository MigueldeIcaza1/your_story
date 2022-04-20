USE [Writings]
GO

/****** Object:  Table [dbo].[Pet]    Script Date: 4/20/2022 11:29:39 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Story](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nchar](500) NOT NULL,
	[UserName] [nchar](50) NOT NULL,
	[TagName] [nchar](500) NULL,
	[Description] [nvarchar](max) NOT NULL,
	[IsAnonymous] [bit] NULL DEFAULT 0
 CONSTRAINT [PK_Story] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


