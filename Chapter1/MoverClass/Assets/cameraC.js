var maxview = 60; //the maximum field of view of the camera
    var minview = 10; //the minimum field of view of the camera
    var target1 : Transform; //the shape your looking at
    var maxOffset = 1; //the maximum offset to look at the top of the shape
    var minOffset = 0; //the normal Y offset
    var Offset = 0.00; //the offset of the camera 2 decimal places for smooth curve
 
    function Update () {    
        if (Input.GetAxis("Mouse ScrollWheel") < 0) { //if scroll is less than 0
                Camera.main.fieldOfView += 1; //add field of view (increase sight
                Offset -= 0.02; //number = maxOffset/(maxview - minview);
                if(Camera.main.fieldOfView >= maxview){
                    Camera.main.fieldOfView = maxview; //clamp to max field of view
 
                }
                if(Offset <= minOffset){
                    Offset = minOffset; //decrease offset until min offset
                }
 
            }
 
            if (Input.GetAxis("Mouse ScrollWheel") > 0) { //if scroll is more than 0
                Camera.main.fieldOfView -= 1; //decrease field of view (zoom)
                Offset += 0.02; //number = maxOffset/(maxview - minview);
                if(Camera.main.fieldOfView <= minview){
                    Camera.main.fieldOfView = minview;
                }
                if(Offset >= maxOffset){
                    Offset = maxOffset;
                }
            }
            
            if (Input.GetKey("w")) { //if scroll is less than 0
                //Camera.main.fieldOfView += 1; //add field of view (increase sight
                Camera.main.transform.position.z +=0.1;
            }
 			if (Input.GetKey("s")) { //if scroll is less than 0
                //Camera.main.fieldOfView += 1; //add field of view (increase sight
                Camera.main.transform.position.z -=0.1;
            }
 
            
            
            var target2 = target1.position + Vector3(0, Offset, 0);
 
    transform.LookAt(target2); //look at target + offset
}