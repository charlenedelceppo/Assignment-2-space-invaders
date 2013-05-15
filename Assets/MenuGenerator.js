#pragma strict

var x:int;
var y:int;

//skin for the menu text
var theme:GUISkin;

//where the user is going to input the name	
var nameInput:boolean;

function Start () {
	nameInput = false;
}

function Update () {

}

function OnGUI(){
	//apply theme
	GUI.skin = theme;
	
	var xLength = Screen.width/2;
	var yLength = Screen.height/2;

	//creating a button
	if(!nameInput){
		if(GUI.Button(Rect(xLength-50,yLength-40,100,30),"New Game"))
		{
			//new game was clicked and name enter
			nameInput=true;

		}
		
		//exit button	
		if(GUI.Button(Rect(xLength-50,yLength,100,30),"Exit"))
		{
			Application.Quit();
		}
	}
	else		
	{		
			//connect to the spaceship controlelr js
			SpaceshipController.playerName = GUI.TextField(Rect(x+345, y+190, 120, 25), SpaceshipController.playerName);
				
			if(GUI.Button(Rect(xLength-50,yLength-40,100,30), "Back"))
			{
				nameInput=false;
			}
			if(GUI.Button(Rect(xLength-50,yLength,100,30), "Ok"))
			{
				//this is reseting all the values to the beginning of the game when click new game
				SpaceshipController.hit=0;
				SpaceshipController.score=0;
				SpaceshipController.health=100;
				SpaceshipController.fired=0;
				
				//when OK is clicked it will proceed to level 1				
				Application.LoadLevel(1);
			}
	}

}//end