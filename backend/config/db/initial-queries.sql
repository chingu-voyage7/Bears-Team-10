CREATE TABLE "users"(
  "id" uuid PRIMARY KEY,
  "username" varchar(255) UNIQUE,
  "password" varchar(100),
  "profile_picture" varchar(255),
  "display_name" varchar(100),
  "bio" varchar(255),
  "interests" varchar(255),
  "github" varchar(100)
)
