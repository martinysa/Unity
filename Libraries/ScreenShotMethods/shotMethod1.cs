using UnityEngine;
using System.Collections;

//Works fine in unity3d and unity3d Pro



public class shotMethod1 : MonoBehaviour {
	
	int counter = 0;

	void LateUpdate () {
	
		if(Input.GetKeyDown("1")){
			Application.CaptureScreenshot("shotMethod1-"+counter+".png");
			Debug.Log("shotMethod1-"+counter+".png");
			counter++;
		}
	}
}
