#pragma strict
//creating the slot for the enemy laser
var enemyLaser:Rigidbody;

function shootLaser()
{
	//create an instance of enemy laser at the position of each alien
	Instantiate(enemyLaser,transform.position,transform.rotation);
}


//function when laser hit the alien
function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="laserSlot")
	{
		var parent = transform.parent;
		
		//increasing the score and hit when laser hit the alien
		SpaceshipController.score++;
		SpaceshipController.hit++;
		
		//destroy the alien
		Destroy(other.gameObject);
		//destroy the laser
		Destroy(this.gameObject);
		
	}
}

function Start () {
	var delay:float;
	delay = Random.Range(1.0,3.0);
	InvokeRepeating("shootLaser",delay,delay);
}

function Update () {

}