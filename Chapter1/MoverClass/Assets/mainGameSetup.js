#pragma strict


var arr = new Array ();


private var o: GameObject;
private var other : moverClass;

private var attractorObject: GameObject;
private var attractorC: attractorClass;


function Awake(){
	Application.targetFrameRate = 60;
}

function Start () {
	Screen.orientation = ScreenOrientation.LandscapeLeft;
	
	// Init Attractor Class
	attractorObject = GameObject.Find("attractorClass");
	attractorC = attractorObject.GetComponent(attractorClass);
	
	// Init Mover class
	var m: GameObject = GameObject.Find("Mover");
    var currentM : GameObject;
        
    for (var y = 0; y < 5; y++) {
    	currentM = GameObject.Instantiate(m,Vector3(0.0,0.0,0.0),Quaternion.identity);
		arr.Add(currentM);  
    }
    GameObject.Destroy(m);
}

function LateUpdate(){
	
		
	for(var i= 0; i<arr.length; i++){
		
		// Mover
		o = arr[i];
		// get component for invoke function (mover)
		other = o.GetComponent(moverClass);
		
		var force: Vector3 = attractorC.attract(other);
   		other.applyForce(force);
		
		
		
		
		// Call the function DoSomething on the script
		//other.applyForce(Vector3(Random.Range(-0.001,0.001),0.0,Random.Range(-0.0001,0.0001)));
		other.run();
		
	}
}

