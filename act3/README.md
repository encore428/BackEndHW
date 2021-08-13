# Activity 3: SQL Queries
Given payroll and regist tables,
- Write a SQL query to return the top ten jobs by rounded average salary.
Rename the columns ‘job’ and ‘ avg_salary
- Write a SQL query to return the number of users having an email ending
by ‘ ‘.net
- Write a SQL query to return the number of users who do not have a
registered car.
- Write a SQL query to return the users “not having an email” or “having a
car and a salary greater than 13000”.

# Submission
- **Act3.sql** is the main script.  it drop/recreate the required tables, and import test data.  It has the required sql statements.  Before the final answers, there are sql statements to show partial answers to make the presentation clearer.
- **payroll.data** has insert statements to load data to **payroll** table.
- **regist.data** has insert statements to load data to **regist** table.
- **Act3 result.txt** has the test results.

# Test Results
The following are the key test results:

|SELECT 'ANSWER 3.1'         AS answer,      |
|       job                  AS profession,  |
|       ROUND(avg(salary))   AS avg_salary,  |
|	   'Top 10 paying jobs' AS remarks         |
|  FROM payroll                              |
| GROUP BY job                               |
| ORDER BY avg_salary DESC                   |
| LIMIT 10;                                  |

|   answer   |       profession        | avg_salary |      remarks       |
|------------|-------------------------|------------|--------------------|
| ANSWER 3.1 | Web Developer IV        |      19835 | Top 10 paying jobs
| ANSWER 3.1 | Social Worker           |      19689 | Top 10 paying jobs
| ANSWER 3.1 | Media Manager III       |      18033 | Top 10 paying jobs
| ANSWER 3.1 | Graphic Designer        |      17381 | Top 10 paying jobs
| ANSWER 3.1 | Analyst Programmer      |      15072 | Top 10 paying jobs
| ANSWER 3.1 | Senior Quality Engineer |      14547 | Top 10 paying jobs
| ANSWER 3.1 | Assistant Professor     |      14262 | Top 10 paying jobs
| ANSWER 3.1 | Programmer III          |      14136 | Top 10 paying jobs
| ANSWER 3.1 | Financial Analyst       |      14035 | Top 10 paying jobs
| ANSWER 3.1 | Media Manager I         |      10828 | Top 10 paying jobs

|SELECT 'ANSWER 3.2'                     AS answer,
|       COUNT(*),
|       'users have email end with .net' AS remark
|  FROM payroll
| WHERE email LIKE '%.net';

|   answer   | count |             remark
|------------|-------|--------------------------------
| ANSWER 3.2 |     4 | users have email end with .net

|SELECT 'ANSWER 3.3'                     AS answer,
|       COUNT(*),
|       'users have no car' AS remark
|  FROM payroll
|  LEFT
|  JOIN regist
| USING (userid)
| WHERE regist.userid IS NULL;
 
|   answer   | count |      remark
|------------|-------|-------------------
| ANSWER 3.3 |    13 | users have no car

|SELECT 'ANSWER 3.4'                                  AS answer,
|       *,
|       'has no email, or has car and salary > 13000' as remark
|  FROM payroll
| WHERE payroll.email = ''  OR
|       salary > 13000
|   AND userid IN (SELECT userid
|                    FROM regist);

|   answer   | userid |       name       |           job           | salary |               email               |                   remark
|------------|--------|------------------|-------------------------|--------|-----------------------------------|---------------------------------------------
| ANSWER 3.4 |      1 | Geneva Drakers   | Programmer III          |  14136 | gdrakers0@github.net              | has no email, or has car and salary > 13000
| ANSWER 3.4 |      2 | Margarette Frude | Structural Engineer     |  10527 |                                   | has no email, or has car and salary > 13000
| ANSWER 3.4 |      5 | Darryl Barthropp | Senior Quality Engineer |  14547 |                                   | has no email, or has car and salary > 13000
| ANSWER 3.4 |     10 | Karoly Jellyman  | Financial Analyst       |  16592 | kjellyman9@nationalgeographic.com | has no email, or has car and salary > 13000
| ANSWER 3.4 |     13 | Thomasa Coy      | Assistant Professor     |  14262 |                                   | has no email, or has car and salary > 13000
| ANSWER 3.4 |     14 | Powell Lomasney  | Financial Analyst       |  11477 |                                   | has no email, or has car and salary > 13000

