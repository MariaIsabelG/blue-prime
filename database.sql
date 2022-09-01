
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
CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"username" VARCHAR (255),
"first_name" VARCHAR(50),
"last_name" VARCHAR(50),
"email" VARCHAR(50),
"password" VARCHAR(100),
"last_lead" DATE,
"phone_number" VARCHAR(15),
"company" VARCHAR(50),
"access_level" INT DEFAULT 2
);

CREATE TABLE "state_user" (
"id" SERIAL PRIMARY KEY,
"state_id" SERIAL REFERENCES "state"
ON DELETE CASCADE,
"user_id" SERIAL REFERENCES "user"
ON DELETE CASCADE
);
CREATE TABLE "client_user" (
"id" SERIAL PRIMARY KEY,
"client_id" SERIAL REFERENCES "client"
ON DELETE CASCADE,
"user_id" SERIAL REFERENCES "user"
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


INSERT INTO "user" ("first_name", "last_name")
VALUES ('Rachel', 'Bruce'), ('SomeOtherGuy', 'Guy'), ('Steve', 'Stevenson');

INSERT INTO "client" ("first_name", "last_name", "email", "state", "zip_code", "phone_number", "comments")
VALUES ('Pickle', 'cat', 'email', 'Minnesota', '55555', '888-888-8888', 'cool guy'),
 ('Beanjamin', 'cat', 'email', 'Nebraska', '55555', '888-888-8888', 'fine young man'),
 ('Peach', 'cat', 'email', 'Minnesota', '55555', '888-888-8888', 'loves insurance'),
 ('Pumpkin', 'cat', 'email', 'Iowa', '55555', '888-888-8888', 'nice'),
 ('Popeye', 'cat', 'email', 'Minnesota', '55555', '888-888-8888', 'very orange'),
 ('Thomas', 'cat', 'email', 'Wisconsin', '55555', '888-888-8888', 'chill dude'),
 ('Mindy', 'cat', 'email', 'Colorado', '55555', '888-888-8888', 'very fluffy'),
 ('Tigger', 'cat', 'email', 'Iowa', '55555', '888-888-8888', 'kind of rude tbh'),
 ('Dorothy', 'cat', 'email', 'Colorado', '55555', '888-888-8888', 'hates insurance and the government'),
 ('Stanley', 'cat', 'email', 'Colorado', '55555', '888-888-8888', 'is very handsome, has the longest whiskers');

 INSERT INTO "client_user" ("client_id", "user_id", "status")
VALUES (9, 3, 4), (1, 3, 1), (2, 3, 2), (4, 2, 4), (5, 3, 1), (6, 2, 2), (7, 3, 4), (8, 3, 3), (10, 3, 2), (3, 3, 3);