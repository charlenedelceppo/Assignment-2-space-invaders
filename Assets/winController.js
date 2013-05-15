#pragma strict

//this is the page for the scene You Won.

var xLength = Screen.width/2;
var yLength = Screen.height/2;

function Start () {
	

	
}

function OnGUI(){
	//Create button to load the main menu
	if (GUI.Button(Rect(xLength-50,yLength-40,100,30), "Main Menu")) {
		Application.LoadLevel(0);
	}
}

function Update () {


}