#pragma strict


var m : GameObject;
var arr = new Array ();


private var o: GameObject;
private var other : moverClass;





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
	
		
	for(var i= 0; i<arr.length; i++){
	//for (var o: GameObject in arr){
		o = arr[i];
		other = o.GetComponent(moverClass);
		//other = new moverClass();
		
		// Call the function DoSomething on the script
		other.applyForce(Vector3(Random.Range(-0.001,0.001),0.0,Random.Range(-0.0001,0.0001)));
		//Debug.Log(i);
		other.run();
		
	}
}

