#pragma strict

var gameOver:boolean=false;

function Start () {
	//when the game is loaded level1 will be the start
	LevelController.level = 1;
}

function Update () {
	
	if (GameObject.FindGameObjectsWithTag("alien").Length == 0) {
		//once all aliens are hit the next level will be loaded
		LevelController.NextLevel();
		//score will be reset in every level
		SpaceshipController.score = 0;
	}
}