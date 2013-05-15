#pragma strict

var xLength = Screen.width/2;
var yLength = Screen.height/2;

function Start () {

}

function OnGUI(){
	
	//I removed this label since I added a picture for the background showing that game is over.
	//GUI.Label(Rect(xLength-50,yLength-40,100,30),"Game Over");
	
	if (GUI.Button(Rect(xLength-50,yLength,100,30), "Main Menu")) {
		//go back to main menu when button is clicked
		Application.LoadLevel(0);
	}
}

function Update () {

}