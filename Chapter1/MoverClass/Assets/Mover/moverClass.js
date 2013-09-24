//Class Mover


var position: Vector3;
var velocity: Vector3;
var acceleration: Vector3;
var mass: float;


function Start () {
	position = Vector3(Random.Range(-4,5),Random.Range(-4,5),Random.Range(-4,5));
	velocity = Vector3(Random.Range(.01,.1),Random.Range(.01,.1),Random.Range(.01,.1));
	acceleration = Vector3(0,0,0);
	mass = .1;
	transform.position = position;
}

function applyForce(force:Vector3){
   //suppose mass=1  --> Force=Acceleration
   //F=M*A
   //F=1*A -- > F=A
   //Accumulate forces 
   // acceleration = 0 ; every frame
   //add force to acceleration.
    acceleration += force;
}

function run() {

	//checkPlane();

	//acceleration = Vector3(Random.Range(-0.001,0.001), 0,Random.Range(-0.001,0.001));

	velocity +=acceleration;
	position += velocity;
	
	Debug.DrawLine(Vector3(0,0,0), position, Color.red);
	
	transform.position = position;
	
	acceleration *= 0;
	
	

}

function checkPlane(){
	var plane: GameObject;
	plane = gameObject.Find("Plane");
	
	if(position.x > (plane.transform.position.x + plane.transform.localScale.x*.5)){
		velocity.x *= -1;
		Debug.Log("change it");
		transform.renderer.material.color = new Color(1,0,0,1);
		
	}
	if(position.x < (plane.transform.position.x - plane.transform.localScale.x*.5)){
		velocity.x *= -1;
		Debug.Log("change it");
		
	}
	
	if(position.z > (plane.transform.position.z + plane.transform.localScale.z*.5)){
		velocity.z *= -1;
		Debug.Log("change it");
		
	}
	if(position.z < (plane.transform.position.z - plane.transform.localScale.z*.5)){
		velocity.z *= -1;
		Debug.Log("change it");
		
	}
}