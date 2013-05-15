 #pragma strict
var alien:Rigidbody;
var rows:int;
var columns:int;


function generateAliens(rows:int,columns:int)
{
	transform.position.x = 0;
	var ypos = transform.position.y;
	
	for(var rowscounter=0;rowscounter<rows;rowscounter++)
	{
		var tempAlien:Rigidbody;
		//repeat for columns times
		for(var counter=0;counter<columns;counter++)
		{
			//y position of swarm.  2.5 horizontal spacing.  Can be reduced to 0.
			tempAlien = Instantiate(alien,Vector3(counter*2.5,ypos-(rowscounter*2),1),Quaternion.identity);
			//place this object inside the swarm
			tempAlien.transform.parent = this.transform;
	
		}
	}
}


function Start () {
	generateAliens(rows,columns);
}

function Update () {
	
	if (GameObject.FindGameObjectsWithTag("alien").Length == 0) {
		//when the number of aliens becomes 0 (ie: all hit) it will load the You won page
		Application.LoadLevel(3);
	}

}