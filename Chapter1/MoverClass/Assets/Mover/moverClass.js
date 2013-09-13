//Class Mover


var position: Vector3;
var velocity: Vector3;
var acceleration: Vector3;


function Start () {
	position = Vector3(0,.5,0);
	velocity = Vector3(0,0,0);
	transform.position = position;
}

function LateUpdate () {

	checkPlane();

	acceleration = Vector3(Random.Range(-0.001,0.001), 0,Random.Range(-0.001,0.001));

	velocity +=acceleration;
	position += velocity;
	
	
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