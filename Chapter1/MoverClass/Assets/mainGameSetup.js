#pragma strict


var m : GameObject;
var arr = new Array ();

private var isTouchDevice : boolean = false;

private var o: GameObject;
private var other : moverClass;


function Awake() {
    if (Application.platform == RuntimePlatform.IPhonePlayer) 
        isTouchDevice = true; 
    else
        isTouchDevice = false; 
}

function Start () {
	m = GameObject.Find("Mover");
    
    var currentM : GameObject;
        
    for (var y = 0; y < 5; y++) {
    	currentM = GameObject.Instantiate(m,Vector3(0.0,0.0,0.0),Quaternion.identity);
		arr.Add(currentM);  
    }
    GameObject.Destroy(m);
}

function LateUpdate(){
	
	handleCamera();
	
	for(var i= 0; i<arr.length; i++){
	//for (var o: GameObject in arr){
		o = arr[i];
		other = o.GetComponent(moverClass);
		
		// Call the function DoSomething on the script
		other.applyForce(Vector3(Random.Range(-0.001,0.001),0.0,Random.Range(-0.0001,0.0001)));
		//Debug.Log(i);
		other.run();
		
	}
}

function handleCamera(){
	var clickDetected : boolean;
    var touchPosition : Vector3;
 
    // Detect click and calculate touch position
    if (isTouchDevice) {
        clickDetected = (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began);
        touchPosition = Input.GetTouch(0).position;
    } else {
        clickDetected = (Input.GetMouseButtonDown(0));
        touchPosition = Input.mousePosition;
    }
    

}

