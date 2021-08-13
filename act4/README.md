# Activity 4: : More SQL Queries
Given the following relation that captures topics discussed by various users.
<br>Discussion(user1, user2, topc)
<br>where user1 always preceedes user2 in alphabetical order.
- Write a SQL query that returns all topics discussed by Alice and Bob, but not discussed by Alice and Chuck.  (Hint: you may want to use the **not in** syntac in SQL,
i.e., select a from R where a not in (select a from S))
- Given the Discussion relation in the previous question.  Write SQL query that returns the number of topics discussed by more than 10 pairs of users.
(Hint: you may want to create a temporary table.)
 

# Submission
- **Act4.sql** is the main script.  it drop/recreate the required table, and import test data.  It has the required sql statements.  
Before the final answers, there are sql statements to show partial answers to make the presentation clearer.
- **discussion.data** has insert statements to load data to **discussion** table.
- **Act4 result.txt** has the test results.

# Test Results
The following are the key test results:

```
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
```
|   answer   |             topic              |                         remark
|------------|--------------------------------|---------------------------------------------------------
| ANSWER 4.1 | Aenean auctor gravida sem      | discussed by alice+bob pair but not by alice+chuck pair
| ANSWER 4.1 | Cras pellentesque volutpat dui | discussed by alice+bob pair but not by alice+chuck pair
| ANSWER 4.1 | Fusce consequat                | discussed by alice+bob pair but not by alice+chuck pair
| ANSWER 4.1 | Mauris sit amet eros           | discussed by alice+bob pair but not by alice+chuck pair
| ANSWER 4.1 | Suspendisse potenti            | discussed by alice+bob pair but not by alice+chuck pair

```
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
  
DROP TABLE topics;
```
|   answer   | count |                          remark
|------------|-------|-----------------------------------------------------------
| ANSWER 4.2 |    17 | topics have been discussed by more than 10 pairs of users

