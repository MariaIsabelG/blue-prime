
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "client" (
"id" SERIAL PRIMARY KEY,
"first_name" VARCHAR(50),
"last_name" VARCHAR(50),
"email" VARCHAR(50),
"state" VARCHAR(25),
"zip_code" INT,
"phone_number" VARCHAR(15),
"comments" TEXT 
);
CREATE TABLE "state" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(25)
);
CREATE TABLE "agent" (
"id" SERIAL PRIMARY KEY,
"first_name" VARCHAR(50),
"last_name" VARCHAR(50),
"email" VARCHAR(50),
"password" VARCHAR(100),
"last_lead" DATE,
"phone_number" VARCHAR(15),
"company" VARCHAR(50),
"access_level" INT DEFAULT 2
);
CREATE TABLE "state_agent" (
"id" SERIAL PRIMARY KEY,
"state_id" SERIAL REFERENCES "state"
ON DELETE CASCADE,
"agent_id" SERIAL REFERENCES "agent"
ON DELETE CASCADE
);
CREATE TABLE "client_agent" (
"id" SERIAL PRIMARY KEY,
"client_id" SERIAL REFERENCES "client"
ON DELETE CASCADE,
"agent_id" SERIAL REFERENCES "agent"
ON DELETE CASCADE,
"status" INT,
"matched_date" DATE
);
INSERT INTO "state" ("name")
VALUES ('Alabama'), ('Alaska'), ('Arizona'), ('Arkansas'), ('California'), ('Colorado'), ('Connecticut'),
('Delaware'), ('Florida'), ('Georgia'), ('Hawaii'), ('Idaho'), ('Illinois'), ('Indiana'), ('Iowa'), ('Kansas'),
('Kentucky'), ('Louisiana'), ('Maine'), ('Maryland'), ('Massachusetts'), ('Michigan'), ('Minnesota'), ('Mississippi'), ('Missouri'), ('Montana'), ('Nebraska'), ('Nevada'), ('New Hampshire'), ('New Jersey'),
('New Mexico'), ('New York'), ('North Carolina'), ('North Dakota'), ('Ohio'), ('Oklahoma'), ('Oregon'), ('Pennsylvania'),
('Rhode Island'), ('South Carolina'), ('South Dakota'), ('Tennessee'), ('Texas'), ('Utah'), ('Vermont'), ('Virginia'), ('Washington'), ('West Virginia'), ('Wisconsin'), ('Wyoming');