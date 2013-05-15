#pragma strict

var laserSlot:Rigidbody;
static var score:int;

//setting health to 100
static var health:int=100;

var colours:Material[];

static var hit: int;
static var fired: int;
static var playerName:String = "";

function start()
{
	
}

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag=="enemyLaser")
	{
		//if player is hit the health will be decreased by 10 
		health-=10;
		
		//if health is 0 load the page game over
		if (health == 0)
		{
			Application.LoadLevel(2);
		}	
	}
	if (other.gameObject.tag== "laserSlot")
	{
		//increasing the number of laser fired
		fired++; 
	}
}


function OnGUI()
{
	var missed = fired-hit;
	
	//the labels will be shown during the whole game on top of the screen
	GUI.color = Color.white;
	GUI.Label(Rect(0,0,100,25),"Score: "+score);
	GUI.Label(Rect(110,0,100,25),"Health: "+health);
	GUI.Label(Rect(220,0,100,25),"Level: "+LevelController.level);
	GUI.Label(Rect(330,0,100,25),"Shots fired: "+fired);
	GUI.Label(Rect(440,0,100,25),"Shots hit: "+hit);
	GUI.Label(Rect(550,0,100,25),"Missed: "+missed);
	GUI.Label(Rect(660,0,100,25),"Player: "+playerName);	
}

function Update () {
	
	//shoot the laser by pressing spacebar
	if(Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(laserSlot,transform.position,transform.rotation);
	}
	
	var border:float=1.0;
	
	if (transform.position.x < BorderController.leftmost + border)
	{
	transform.position.x = BorderController.leftmost + border;
	}
	
	if (transform.position.x > BorderController.rightmost - border)
	{
	transform.position.x = BorderController.rightmost - border;
	}
		
	transform.Translate(Vector3.right * 10 * Time.deltaTime * Input.GetAxis("Horizontal"));
		
}