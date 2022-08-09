SELECT ACTOR_ID, DIRECTOR_ID
	FROM ActorDirector
GROUP BY ACTOR_ID, DIRECTOR_ID
	HAVING COUNT(*) >= 3
