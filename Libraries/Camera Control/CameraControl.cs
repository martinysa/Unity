using UnityEngine;
using System.Collections;

public class CameraControl : MonoBehaviour {
	
	//Output log
	public GUIText guiLog;
	
	// Variables
	private bool isDragging;	// Is the camera being dragged?
	private bool releaseDrag;	// just release button / finger
	private bool isZooming;
	private bool isTouchDevice; // If is iPhone screen or MAC-PC screen
	private Vector3 dragOrigin;
	private Vector3 deltaDrag;
	
	//Perspective camera properties
	private float maxview = 90; //the maximum field of view of the camera
    private float minview = 20; //the minimum field of view of the camera
	
	
	//Orthof camera properties
	private float maxSize = 20; //the maximum size of the camera
    private float minSize = 3; //the minimum size of the camera
	
	
    private float maxOffset = 1; //the maximum offset to look at the top of the shape
    private float minOffset = 0; //the normal Y offset
    private float Offset = 0; //the offset of the camera 2 decimal places for smooth curve
 	private float dragSensivility = 0.1f;
	private float zoomSensivility = 1.0f;
	private float zoomDirection = 0.0f; // negative = zoom out // positive = zoom in
	
	bool isOrthof; // is orthographic view
	
	// Check current enviroment at start
	void Start () {
		if (Application.platform == RuntimePlatform.IPhonePlayer) 
			isTouchDevice = true; 
		else
			isTouchDevice = false;
	
	}
	
	// Update is called once per frame
	void Update () {
		
		isOrthof = Camera.main.isOrthoGraphic;
		
		if(isTouchDevice){ // ------------------------iphone screen ---------------------------------
			// TODO !
		
		
		}else{// -------------------------------------mouse------------------------------------------
			
			
			// Get the left mouse button
			if(Input.GetMouseButtonDown(0))
			{
				// Get drag origin
				isDragging = true;
				releaseDrag = false;
				dragOrigin = Input.mousePosition;
			}
			
			// Get the right mouse button
			if(Input.GetMouseButtonDown(1))
			{
				// Get drag origin
				dragOrigin = Input.mousePosition;
				
			}
			
			// Get the wheel mouse road
			if((zoomDirection = Input.GetAxis("Mouse ScrollWheel")) != 0)
			{
				// Get drag origin
				dragOrigin = Input.mousePosition;
				isZooming = true;
				//normalize zoomDirection
				if (zoomDirection < 0) zoomDirection = -1;
				if (zoomDirection > 0) zoomDirection = 1;
			}
			
			// Disable movements on button release
			if (Input.GetMouseButtonUp(0)) isDragging=false; releaseDrag=true;
			if (Input.GetAxis("Mouse ScrollWheel") == 0) isZooming=false;
		}
		
		
		
		HandleCamera();
		
	}
	
	
	void HandleCamera(){
		
		float bValue;
		//-- If camera perspective or orthog. --//
		if(isOrthof){
			bValue = Camera.main.fieldOfView;
		}else{
			bValue = Camera.main.orthographicSize;
		}
		
		// Drag camera
		if(isDragging){
			Vector3 currentTouchPosition = Input.mousePosition;
			Vector3 finalCameraPosition = (dragOrigin - currentTouchPosition);
			deltaDrag = finalCameraPosition * (bValue*.01f);
			finalCameraPosition *=dragSensivility;
			
			Camera.main.transform.position += new Vector3(finalCameraPosition.x, finalCameraPosition.y, 0);
			dragOrigin = currentTouchPosition;
			
		}else if (releaseDrag){ // ------ SlowDown !!
			
			
			if(deltaDrag.magnitude > 0.01){
				if(deltaDrag.magnitude > 0.7f){
					 
					deltaDrag *= bValue*0.005f; //.5f; 
					
				}
				
				float dump = 0.92f;
				deltaDrag *= dump;
				Camera.main.transform.position += new Vector3(deltaDrag.x, deltaDrag.y, 0);
				guiLog.text = "deltaDrag.mag(): " + deltaDrag.magnitude;
			
			
			}
		}
			
		
		if(isZooming){
			zoomDirection *=-1;
			//Debug.Log("fov: " + Camera.main.fieldOfView);
			if(isOrthof){ // Orthographic
				
				Camera.main.orthographicSize +=  zoomDirection * zoomSensivility; //decrease field of view (zoom)
           	
				if(Camera.main.orthographicSize <= minSize){
               	 Camera.main.orthographicSize = minSize;
            	}
            	if(Camera.main.orthographicSize >= maxSize){
                Camera.main.orthographicSize = maxSize;
            	}
				
			}else{ // Perspective
				Camera.main.fieldOfView +=  zoomDirection * zoomSensivility; //decrease field of view (zoom)
           	
				if(Camera.main.fieldOfView <= minview){
               	 	Camera.main.fieldOfView = minview;
            	}
            	if(Camera.main.fieldOfView >= maxview){
                	Camera.main.fieldOfView = maxview;
            	}
			}
			
		}
	
	}
	
}
