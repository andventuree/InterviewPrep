-- Going through workshop to learn SQL

-- CAR

SELECT *
FROM movies
WHERE name LIKE 'Car %';

-- # LIKE - lets you run reg ex (% means anything is allowed after this point)

-- Birth year

SELECT *
FROM movies
WHERE year = 1965;

-- 1982

SELECT *
FROM movies
GROUP BY year;

SELECT COUNT(*),
FROM movies
WHERE year = 1982
GROUP BY year;

-- Stacktors

SELECT *
FROM actors
WHERE last_name LIKE '%stack%';

------------- EASY ONES ^

-- Popular Names

SELECT first_name, COUNT(*)
FROM actors
GROUP BY first_name;

-- Issue we run into here is that we can't sort a column that doesn't have a name (count), so we need to use an alias
SELECT first_name, COUNT(*) as occurences
FROM actors
GROUP BY first_name
ORDER BY occurences DESC
LIMIT 10;

SELECT last_name, COUNT(*)
FROM actors
GROUP BY last_name;

  -- Order by to sort
  -- LIMIT to reduce the results

-- Prolific - doing a join

SELECT first_name, last_name, COUNT(*) as num_roles
FROM actors
INNER JOIN roles ON actors.id = roles.actor_id --results wanted
GROUP BY actors.id -- create a group
ORDER BY num_roles DESC -- sort descending order for row alias num_roles
LIMIT 100; --limit to 100 roles

-- BOTTOM OF THE BARREL

SELECT genre, COUNT(*) as popularity
FROM movies_genre
GROUP BY genre
ORDER BY popularity ASC;

-- Braveheart
-- need multiple joins

-- Time 39:46


SELECT *
FROM movies AS m
  INNER JOIN movies_genres AS mg
    ON m.id = mg.movie_id --conditional 1 to join table    --if stmt 1
    AND mg.genre = 'Film-Noir' -- && conditional 2 to apply actual filter
      INNER JOIN movies_directors AS md --if stmt 2
        ON m.id = md.movie_id --conditional 1 to join table
        INNER JOIN directors AS d --if stmt 3
          ON md.director_id = d.id; --conditional 1 to join table


-- Notice that Joins really just import the other table ON (aka) where two columns match
-- That's how you combine tables!



SELECT COUNT(DISTINCT roles.role) as num_roles_in_movies, *
FROM actors
  INNER JOIN roles ON roles.actors


-- https://sqlbolt.com/lesson/select_queries_with_outer_joins

-- SELECT DISTINCT building_name, role FROM buildings
-- LEFT JOIN employees ON building_name = building;

-- -- Even though role is on the other table that hasn't been imported yet, you can use it as long as you import later!

-- List all buildings and the distinct employee roles in each building (including empty buildings) ✓
