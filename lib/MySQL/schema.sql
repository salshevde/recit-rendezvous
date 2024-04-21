DROP DATABASE IF EXISTS trialproject;

CREATE DATABASE trialproject;

USE trialproject;

-- Saves user Authentication Information
CREATE TABLE
    Users (
        UserID VARCHAR(40) PRIMARY KEY,
        Username VARCHAR(50) UNIQUE NOT NULL,
        Email VARCHAR(100) UNIQUE NOT NULL,
        FirstName VARCHAR(100),
        LastName VARCHAR(100),
        RegistrationDate DATETIME DEFAULT CURRENT_TIMESTAMP
    );

-- User posts
CREATE TABLE
    Posts (
        PostID VARCHAR(40) PRIMARY KEY,
        UserID VARCHAR(40),
        Content VARCHAR(255) NOT NULL,
        MediaURL VARCHAR(255),
        PostDate DATETIME DEFAULT CURRENT_TIMESTAMP,
        likeCount INT DEFAULT 0,
        commentCount INT DEFAULT 0
       
        --  ,FOREIGN KEY (UserID) REFERENCES Users (UserID)
    );

-- Content Library
CREATE TABLE
    ContentLibrary (
        ContentID VARCHAR(40) PRIMARY KEY,
        Contentname VARCHAR(100) NOT NULL,
        DateAdded DATETIME DEFAULT CURRENT_TIMESTAMP
    );

-- Personal Profile 
CREATE TABLE
    MyList (
        MyListID VARCHAR(40) PRIMARY KEY,
        UserID VARCHAR(40),
        ContentID VARCHAR(40),
        Contentname VARCHAR(100) NOT NULL,
        DateAdded DATETIME DEFAULT CURRENT_TIMESTAMP
        -- ,FOREIGN KEY (UserID) REFERENCES Users (UserID)
        -- FOREIGN KEY (ContentID) REFERENCES Posts (PostID) ON DELETE CASCADE,
        -- FOREIGN KEY (ContentID) REFERENCES ContentLibrary (ContentID) ON DELETE CASCADE,
        -- FOREIGN KEY (Contentname) REFERENCES ContentLibrary (Contentname) ON DELETE CASCADE
    );

CREATE TABLE
    Followers (
        follower_id VARCHAR(40),
        followed_id VARCHAR(40),
        DateFollowed DATETIME DEFAULT CURRENT_TIMESTAMP
        -- , FOREIGN KEY (followed_id) REFERENCES Users (UserID),
        -- FOREIGN KEY (followed_id) REFERENCES Users (UserID)
    );



CREATE TABLE
    DirectMessage (
        user_id1 VARCHAR(40),
        user_id2 VARCHAR(40),
        PRIMARY KEY (user_id1,user_id2)
        -- ,FOREIGN KEY (user_id1) REFERENCES Users (UserID),
        -- FOREIGN KEY (user_id2) REFERENCES Users (UserID)
    );