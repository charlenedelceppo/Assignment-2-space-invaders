#pragma strict

static var level = 1;

static function NextLevel() {
	//set the background scale to 0
	GameObject.Find("Level-1").transform.localScale = Vector3(0, 0, 0);
	GameObject.Find("Level-2").transform.localScale = Vector3(0, 0, 0);
	GameObject.Find("Level-3").transform.localScale = Vector3(0, 0, 0);
	
	//level after level
	level++;  
	
	var swarm = GameObject.Find("swarm").GetComponent(AlienGenerator);
	
	//declare how many aliens you need in the game for each level by columns and rows
	if (level == 2) {
		swarm.generateAliens(3, 5);
	} else if (level == 3) {
		swarm.generateAliens(4, 5);
	} else if (level == 4) {
		Application.LoadLevel(0);
	}
	
	//background scale back to normal.
	GameObject.Find("Level-" + level).transform.localScale = Vector3(4, 1, 4);
}