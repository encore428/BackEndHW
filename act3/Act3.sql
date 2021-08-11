-- Day 2 Activity 3 submission

-- drop, create, populate all tables

DROP TABLE IF EXISTS regist;
DROP TABLE IF EXISTS payroll;

CREATE TABLE payroll(
    userid BIGSERIAL    NOT NULL PRIMARY KEY,
    name   VARCHAR(50)  NOT NULL,
    job    VARCHAR(50)  NOT NULL,
    salary INTEGER      NOT NULL,
    email  VARCHAR(150) NOT NULL);

CREATE TABLE regist(
    userid BIGINT       NOT NULL,
    car    VARCHAR(50)  NOT NULL,
    PRIMARY KEY (userid, car),
    FOREIGN KEY (userid) REFERENCES payroll (userid));


-- import data 

\i 'payroll.data'

\i 'regist.data'


-- The top 10 jobs by rounded average salary.

SELECT 'ANSWER 3.1'         AS answer,
       job                  AS profession, 
       ROUND(avg(salary))   AS avg_salary,
	   'Top 10 paying jobs' AS remarks
  FROM payroll
 GROUP BY job
 ORDER BY avg_salary DESC
 LIMIT 10;

-- number of users having email ending by .net
SELECT *, 'has email ending with .net' as remark
  FROM payroll
 WHERE email LIKE '%.net';

SELECT 'ANSWER 3.2'                     AS answer,
       COUNT(*),
       'users have email end with .net' AS remark
  FROM payroll
 WHERE email LIKE '%.net';

-- number of users wihtout a registered car.
SELECT *, 'all data' as remark
  FROM payroll
  LEFT
  JOIN regist
 USING (userid)
 ORDER BY userid;

SELECT *,
       'has no car ' as remark
  FROM payroll
  LEFT
  JOIN regist
 USING (userid)
 WHERE regist.userid IS NULL
 ORDER BY userid;

SELECT 'ANSWER 3.3'                     AS answer,
       COUNT(*),
       'users have no car' AS remark
  FROM payroll
  LEFT
  JOIN regist
 USING (userid)
 WHERE regist.userid IS NULL;


-- users “not having an email” or “having a car and a salary greater than 13000”.
SELECT *,
       'has no email' as remark
  FROM payroll
 WHERE payroll.email = '';
 
SELECT *,
       'has car and salary > 13000' as remark
  FROM payroll
 WHERE salary > 13000
   AND userid IN (SELECT userid
                    FROM regist);


SELECT 'ANSWER 3.4'                                  AS answer,
       *,
       'has no email, or has car and salary > 13000' as remark
  FROM payroll
 WHERE payroll.email = ''  OR
       salary > 13000
   AND userid IN (SELECT userid
                    FROM regist);

