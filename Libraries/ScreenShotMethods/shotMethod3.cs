using UnityEngine;
using System.Collections;
using System.IO;
 

//--Method 3 -- Using readPixel -- UNITY3D PRO ONLY --//

public class shotMethod3 : MonoBehaviour
{
	
	public int width = Screen.width;
	public int height = Screen.height;
	
    private int count = 0;
 
    void LateUpdate()
    {
        if (Input.GetKeyDown("3"))
			
            StartCoroutine(ScreenshotEncode());
    }
 
    IEnumerator ScreenshotEncode()
    {	// Call a coroutine let me know when all objects
		// have finished being rendered on screen 
       
		
		// -- that's not a another thread -- !!
		
		 // wait for graphics to render
        yield return new WaitForEndOfFrame();
 
        // create a texture to pass to encoding
        Texture2D texture = new Texture2D(width, height, TextureFormat.RGB24, false);
 
        // put buffer into texture
		
        texture.ReadPixels(new Rect(0, 0, width, height), 0, 0);
        texture.Apply();
 
        // split the process up--ReadPixels() and the GetPixels()
		// call inside of the encoder are both pretty heavy
        yield return 0;
 
        byte[] bytes = texture.EncodeToPNG();
 
        // save to HD
        File.WriteAllBytes(Application.dataPath + "/../shotMethod3-" + count + ".png", bytes);
        
 
        //Release memory
        DestroyObject( texture );
 
        Debug.Log( Application.dataPath + "/../shotMethod3-" + count + ".png" );
		count++;
    }
}