CREATE TABLE "users"(
  "id" bigserial PRIMARY KEY,
  "email" varchar(255) UNIQUE,
  "password" varchar(100)
)