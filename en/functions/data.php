
INSERT INTO users(id, created_at, updated_at, first_name, last_name, organization, email, sms_number, admin, claims_count, max_claims, encrypted_password, reset_password_token, reset_password_sent_at, remember_created_at, sign_in_count, current_sign_in_at, last_sign_in_at, current_sign_in_ip, last_sign_in_ip) VALUES (1004, now(), now(), 'Nancy Victor', 'David', 'WB', 'navish45@gmail.com','+255782120252', false, 0, 1, md5('password'), md5('token1'),now(), now(), 5, now(), now(), '192.254.235.17', '192.254.235.19'),
(1005, now(), now(), 'Daniel', 'Anderson', 'Danistry', 'mlabwa.dm@gmail.com','+255784393988', 'true', 0, 1, md5('password'), md5('token2'),now(), now(), 5, now(), now(), '192.254.235.18', '192.254.235.17'),

(1006, now(), now(), 'Samwel', 'Twesa', 'WB', 'smwltwesa6@gmail.com','+255765299266', false, 0, 1, 
md5('password'), md5('token3'),now(), now(), 5, now(), now(), '192.254.235.17', '192.254.235.19'),
(1007, now(), now(), 'Edgar', 'Mlowe', 'WB', 'mloweegdarvitus@gmail.com','+25565498847', 'false', 0, 1, md5('password'), md5('token4'),now(), now(), 5, now(), now(), '192.254.235.19', '192.254.235.20')
,(1008, now(), now(), 'Beatrice', 'Mkumbo', 'WB', 'charsbeaty@gmail.com','+255757529054', false, 0, 1, md5('password'), md5('token5'),now(), now(), 5, now(), now(), '192.254.235.17', '192.254.235.19'),

(1009, now(), now(), 'Nancy', 'Navish', 'WB', 'navish456@live.com','+255782120252', false, 0, 1, 
md5('password'), md5('token6'),now(), now(), 5, now(), now(), '192.254.235.17', '192.254.235.19'),
(1010, now(), now(), 'Beatrice', 'Charles', 'WB', 'beatrice@gmail.com','+255687902733', 'false', 0, 1, md5('password'), md5('token7'),now(), now(), 5, now(), now(), '192.254.235.19', '192.254.235.20')
,(1011, now(), now(), 'Kelvin', 'Temba', 'WB', 'kelvintemba@gmail.com','+255714063370', false, 0, 1, md5('password'), md5('token8'),now(), now(), 5, now(), now(), '192.254.235.17', '192.254.235.19');
(1012, now(), now(), 'Grace', 'Georgia', 'WB', 'gracegeorgia@live.com','+255656651444', false, 0, 1, md5('password'), md5('token9'),now(), now(), 5, now(), now(), '192.254.235.17', '192.254.235.19');
(1003, now(), now(), 'Edward', 'Anderson', 'WB', 'edwardanderson@wbgroup.org','+255782120252', false, 0, 1, md5('password'), md5('token10'),now(), now(), 1, now(), now(), '192.254.235.17', '192.254.235.19');

(1013, now(), now(), 'Nancy', 'Navish', 'WB', 'navish45@live.com','+255782120252', false, 0, 1, 
md5('password'), md5('token11'),now(), now(), 5, now(), now(), '192.254.235.17', '192.254.235.19'),
(1014, now(), now(), 'Beatrice', 'Charles', 'WB', 'beatrix@gmail.com','+255687902733', 'false', 0, 1, md5('password'), md5('token12'),now(), now(), 5, now(), now(), '192.254.235.19', '192.254.235.20')
,(1015, now(), now(), 'Kelvin', 'Temba', 'WB', 'kelvin@gmail.com','+255714063370', false, 0, 1, md5('password'), md5('token13'),now(), now(), 5, now(), now(), '192.254.235.17', '192.254.235.19');

(1016, now(), now(), 'Grace', 'Georgia', 'WB', 'grace@live.com','+255656651444', false, 0, 1, md5('password'), md5('token14'),now(), now(), 5, now(), now(), '192.254.235.17', '192.254.235.19');

(1017, now(), now(), 'Edward', 'Anderson', 'WB', 'edward@wbgroup.org','+255782120252', false, 0, 1, md5('password'), md5('token15'),now(), now(), 1, now(), now(), '192.254.235.17', '192.254.235.19');


------------------------------------------
INSERT INTO sidewalk_claims (id, created_at, updated_at, user_id, gid, shoveled, notes) VALUES 
(10002, now(), now(), 1008, 38, true, ''),
(10003, now(), now(), 1009, 4, true, ''),
(10004, now(), now(), 1004, 2, true, 'Very shallow'), 
(10005, now(), now(), 1010, 6, true, ''), 
(10006, now(), now(), 1011, 7, true, ''),
(10007, now(), now(), 1005, 8, true, 'Shallow'), 
(10008, now(), now(), 1007, 10, true, '');


INSERT INTO sidewalk_claims (id, created_at, updated_at, user_id, gid, shoveled, notes) VALUES 
(10018, now(), now(), 1013, 5, true, 'Dirty'), 
(10019, now(), now(), 1014, 8, true, 'Shallow'), 
(10020, now(), now(), 1015, 10, true, ''),
(10021, now(), now(), 1017, 10, true, ''),
(10022, now(), now(), 1016, 4, true, '');
UPDATE sidewalk_claims SET shoveled = false WHERE id = 10008;

//Claims for same drain
INSERT INTO sidewalk_claims (id, created_at, updated_at, user_id, gid, shoveled, notes) VALUES 
(10018, now(), now(), 1012, 120, true, 'Dirty'), 
(10019, now(), now(), 1003, 124, true, 'Shallow'), 
(10020, now(), now(), 1007, 130, true, ''),
(10016, now(), now(), 1006, 104, true, '');


UPDATE mitaroKigogo SET cleared = true WHERE gid = 1;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 2;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 5;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 3;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 4;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 6;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 7;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 8;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 9;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 10;
UPDATE mitaroKigogo SET cleared = false WHERE gid = 11;
UPDATE mitaroKigogo SET cleared = false WHERE gid = 12;
UPDATE mitaroKigogo SET cleared = false WHERE gid = 15;
UPDATE mitaroKigogo SET cleared = false WHERE gid = 13;
UPDATE mitaroKigogo SET cleared = false WHERE gid = 14;
UPDATE mitaroKigogo SET cleared = false WHERE gid = 16;
UPDATE mitaroKigogo SET cleared = false WHERE gid = 17;
UPDATE mitaroKigogo SET cleared = false WHERE gid = 18;
UPDATE mitaroKigogo SET cleared = false WHERE gid = 19;
UPDATE mitaroKigogo SET cleared = false WHERE gid = 20;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 21;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 22;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 23;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 24;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 25;

UPDATE mitaroKigogo SET cleared = false WHERE gid = 26;
UPDATE mitaroKigogo SET cleared = false WHERE gid = 27;
UPDATE mitaroKigogo SET cleared = false WHERE gid = 28;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 31;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 29;
UPDATE mitaroKigogo SET cleared = true WHERE gid = 30;

UPDATE mitaro_dar SET address = 'Tandale' WHERE gid = 100;
UPDATE mitaro_dar SET address = 'Tandale' WHERE gid = 101;
UPDATE mitaro_dar SET address = 'Tandale' WHERE gid = 102;
UPDATE mitaro_dar SET address = 'Tandale' WHERE gid = 1003;
UPDATE mitaro_dar SET address = 'Tandale' WHERE gid = 108;
UPDATE mitaro_dar SET address = 'Tandale' WHERE gid = 109;
UPDATE mitaro_dar SET address = 'Tandale' WHERE gid = 103;
UPDATE mitaro_dar SET address = 'Tandale' WHERE gid = 104;
UPDATE mitaro_dar SET address = 'Tandale' WHERE gid = 106;
UPDATE mitaro_dar SET address = 'Tandale' WHERE gid = 107;
UPDATE mitaro_dar SET address = 'Tandale' WHERE gid = 105;
UPDATE mitaro_dar SET address = 'Tandale' WHERE gid = 1006;

UPDATE users SET sms_number = '+255755923102' WHERE id = 1009;

UPDATE users SET sms_number = '+255654988047' WHERE id = 1007;
***********************************************************************************************************TABLES DESCRIPTIONS
***********************************************************************************************************

Table "public.users"
         Column         |            Type             |                     Modifiers                      
------------------------+-----------------------------+----------------------------------------------------
 id                     | integer                     | not null default nextval('users_id_seq'::regclass)
 created_at             | timestamp without time zone | not null
 updated_at             | timestamp without time zone | not null
 first_name             | character varying(255)      | not null
 last_name              | character varying(255)      | not null
 organization           | character varying(255)      | 
 email                  | character varying(255)      | not null default ''::character varying
 sms_number             | character varying(255)      | 
 admin                  | boolean                     | default false
 claims_count           | integer                     | default 0
 max_claims             | integer                     | 
 encrypted_password     | character varying(255)      | not null default ''::character varying
 reset_password_token   | character varying(255)      | 
 reset_password_sent_at | timestamp without time zone | 
 remember_created_at    | timestamp without time zone | 
 sign_in_count          | integer                     | default 0
 current_sign_in_at     | timestamp without time zone | 
 last_sign_in_at        | timestamp without time zone | 
 current_sign_in_ip     | character varying(255)      | 
 last_sign_in_ip        | character varying(255)      | 
Indexes:
    "users_pkey" PRIMARY KEY, btree (id)
    "index_users_on_email" UNIQUE, btree (email)
    "index_users_on_reset_password_token" UNIQUE, btree (reset_password_token)

-------------------------------------------------------------------------------------------------------

Table "public.sidewalk_claims"
   Column   |            Type             |                          Modifiers                           
------------+-----------------------------+--------------------------------------------------------------
 id         | integer                     | not null default nextval('sidewalk_claims_id_seq'::regclass)
 created_at | timestamp without time zone | not null
 updated_at | timestamp without time zone | not null
 user_id    | integer                     | 
 gid        | integer                     | 
 shoveled   | boolean                     | 
 notes      | character varying(255)      | 
Indexes:
    "sidewalk_claims_pkey" PRIMARY KEY, btree (id)
    "index_sidewalk_claims_on_gid" btree (gid)
    "index_sidewalk_claims_on_user_id" btree (user_id)


--------------------------------------------------------------------------------------------------------

 Table "public.mitarokigogo"
    Column    |              Type              |                         Modifiers                         
--------------+--------------------------------+-----------------------------------------------------------
 gid          | integer                        | not null default nextval('mitarokigogo_id_seq'::regclass)
 the_geom     | geometry(MultiLineString,4326) | 
 full_id      | character varying(254)         | 
 osm_id       | character varying(254)         | 
 osm_type     | character varying(254)         | 
 tunnel       | character varying(254)         | 
 covered      | character varying(254)         | 
 layer        | character varying(254)         | 
 waterway     | character varying(254)         | 
 blockage     | character varying(254)         | 
 diameter     | character varying(254)         | 
 depth        | character varying(254)         | 
 width        | character varying(254)         | 
 name         | character varying(254)         | 
 address      | text                           | 
 cleared      | boolean                        | 
 claims_count | integer                        | 





