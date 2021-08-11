-- Day 2 Activity 4 submission

-- drop, create, populate all tables

DROP TABLE IF EXISTS Discussion;

CREATE TABLE Discussion(
    topic varchar(50),
    user1 varchar(10),
    user2 varchar(10));

-- import data 

\i 'discussion.data'
    

-- create a temp table to ditch duplicated data
CREATE TEMP TABLE disc(
    topic varchar(50),
    user1 varchar(10),
    user2 varchar(10));

INSERT INTO disc
SELECT DISTINCT topic, user1, user2
  FROM Discussion;

-- list topics discussed by Alice and Bob but not by Alice and Chuck.
SELECT topic, 'discussed by ' as remark, user1, user2 
  FROM Discussion
 WHERE user1 = 'alice'
   AND user2 = 'bob';
 
SELECT topic, 'discussed by ' as remark, user1, user2 
  FROM Discussion
 WHERE user1 = 'alice'
   AND user2 = 'chuck';
 
SELECT 'ANSWER 4.1' AS answer,
       topic, 
       'discussed by alice+bob pair but not by alice+chuck pair' as remark
  FROM Discussion
 WHERE user1 = 'alice'
   AND user2 = 'bob'
   AND topic NOT IN (SELECT topic
                       FROM Discussion
                      WHERE user1 = 'alice'
                        AND user2 = 'chuck');
						

-- count number of topics discussd by more than 10 pairs of users.

SELECT topic, COUNT(*) AS pairs,
       'pairs of users discuss this' as remark
  FROM disc
 GROUP BY topic
 ORDER BY pairs;

SELECT topic, COUNT(*) AS pairs,
       'pairs which is > 10' as remark
  FROM disc
 GROUP BY topic
HAVING COUNT(*) > 10
 ORDER BY pairs;

CREATE TEMP TABLE topics(
    topic VARCHAR(50),
	pairs INTEGER);

INSERT INTO topics
SELECT topic, COUNT(*)
  FROM disc
 GROUP BY topic
HAVING COUNT(*) > 10;

SELECT 'ANSWER 4.2' AS answer,
       COUNT(*),
       'topics have been discussed by more than 10 pairs of users' as remark
  FROM topics;
  
DROP TABLE disc;
DROP TABLE topics;

