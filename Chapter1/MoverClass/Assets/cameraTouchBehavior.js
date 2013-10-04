#pragma strict
	
	
	var guiLog: GUIText;
	// The ID of the touch that began the scroll.
	
	var ScrollTouchID: int = -1;
	// The position of that initial touch
	
	//var ScrollTouchOrigin: Vector2;
	
	private var startTouchPosition : Vector2;

	
	
	private var isTouchDevice : boolean = false;
	
	
	

	function Awake() {
		if (Application.platform == RuntimePlatform.IPhonePlayer) 
			isTouchDevice = true; 
		else
			isTouchDevice = false; 

	}
	
	


	function Start () {

	}

	function LateUpdate () {
	
		//var myTouches:Touch[];
		
    
		handleCamera();
	}



function handleCamera(){
   var sensivility: float = .07;
		
		if (isTouchDevice) { // iphone screen
			var clickDetected: boolean = (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began);
	        
	        if(clickDetected){
	        	startTouchPosition = Input.GetTouch(0).position;
    		}else{
    			var currentTouchPosition: Vector2 = Input.GetTouch(0).position;
    			var finalCameraPosition: Vector2 = (startTouchPosition - currentTouchPosition) * sensivility;
    			startTouchPosition = currentTouchPosition;
    			Camera.main.transform.position += new Vector3(finalCameraPosition.x, finalCameraPosition.y, 0);
    		}
    		
    		//Restore startPosition
    		if(Input.GetTouch(0).phase == TouchPhase.Ended)
    			startTouchPosition *= 0;
    	
    	} else { // mouse 
	        clickDetected = (Input.GetMouseButtonDown(0));
	       if(clickDetected && startTouchPosition.x == 0){
	        	startTouchPosition = Input.mousePosition;
	    	}else if(!clickDetected && startTouchPosition.x != 0 && Input.GetAxis("Mouse X") != 0){
    			currentTouchPosition = Input.mousePosition;
    			finalCameraPosition = (startTouchPosition - currentTouchPosition) * sensivility;
    			Camera.main.transform.position += new Vector3(finalCameraPosition.x, finalCameraPosition.y, 0);
    			startTouchPosition = currentTouchPosition;
    			guiLog.text = finalCameraPosition.x + " : " + finalCameraPosition.y + " : " + Camera.main.transform.position.z;
    		}
	       
	       //Restore startPosition
	       if(Input.GetMouseButtonUp(0))
	       		startTouchPosition *= 0;
	       
	    }
		
	
    

}
