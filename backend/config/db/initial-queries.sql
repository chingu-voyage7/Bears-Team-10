CREATE TABLE "users"(
  "id" uuid PRIMARY KEY,
  "username" varchar(255) UNIQUE,
  "password" varchar(100)
)