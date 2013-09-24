#pragma strict
	
	
	var guiLog: GUIText;
	// The ID of the touch that began the scroll.
   var ScrollTouchID: int = -1;
   // The position of that initial touch
   var ScrollTouchOrigin: Vector2;

	private var isTouchDevice : boolean = false;

	function Awake() {
		if (Application.platform == RuntimePlatform.IPhonePlayer) 
			isTouchDevice = true; 
		else
			isTouchDevice = false; 
	}


	function Start () {

	}

	function Update () {
	
		var myTouches:Touch[] = Input.touches;
		
    	for(var i:int=0;i<Input.touchCount;i++)
    	{
        	Debug.Log(myTouches[i].position);
        	Debug.Log(i);
        	guiLog.text = myTouches[i].position.x + " : " + myTouches[i].position.y;
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
