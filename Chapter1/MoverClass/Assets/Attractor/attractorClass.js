#pragma strict
class attractorClass extends MonoBehaviour{
	private var mass: float;                //Mass of bodie
	private var G: float;                   //Gravity constant
	private var position: Vector3;          //Localization object
	  
  	private function Attractor() {
	    position = Vector3(1,1,0);
	    transform.position = position;
	    mass = .1;
	    G = .1;
	    transform.renderer.material.color = Color.green;
	}
  
  	function attract (m: moverClass): Vector3{
		// Direction of force
		var force: Vector3 = position - m.position;
		var d: float = force.magnitude;
		
		force.Normalize(); 
		Debug.Log("force x:" + force.x + " y:" + force.y + " z:" + force.z);
		
		//Magnitude of that force
		var strength: float = (G * mass * m.mass) / (d * d);
		strength = Mathf.Clamp(strength,.001, .005);
		//Debug.Log("strength:" + strength);
		// Magnitud & direction together
		force *= strength;
		
		return force;
  }
	
	function Start () {
		Attractor();
	}
	
}