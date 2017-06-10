//Stands for First Person Shooter Controller Controller ;)
#pragma strict
var Speed : float = 2f;
var jumpHeight : float = 2f;
var canJump : boolean;

function Update () {

	if (Application.platform == RuntimePlatform.Android) {
		transform.Rotate(Input.acceleration.z * Speed, Input.acceleration.y * Speed, 0);
	}else if (Application.platform == RuntimePlatform.WindowsPlayer) {
		//DEV CONTROLS
		transform.Rotate(0, (Input.mousePosition.x - (Screen.width / 2)) * Time.deltaTime, 0); // Left || Right
		
		if (Input.GetKey(KeyCode.UpArrow) || Input.GetKey(KeyCode.W)) {
			transform.position += transform.forward * Time.deltaTime * Speed;
		}else if (Input.GetKey(KeyCode.DownArrow) || Input.GetKey(KeyCode.S)) {
			transform.position += transform.forward * Time.deltaTime * Speed * -1;
		}
		
		if (Input.GetKey(KeyCode.LeftArrow) || Input.GetKey(KeyCode.A)) {
			transform.position += transform.right * Time.deltaTime * Speed * -1;
		}else if (Input.GetKey(KeyCode.RightArrow) || Input.GetKey(KeyCode.D)) {
			transform.position += transform.right * Time.deltaTime * Speed;
		}
		
		if (Input.GetKey(KeyCode.Space) && canJump == true) {
			GetComponent.<Rigidbody>().velocity.y = jumpHeight;
		}
	}else {
		Debug.Log("ERROR WITH PLATFORM");
		transform.Rotate(0, (Input.mousePosition.x - (Screen.width / 2)) * Time.deltaTime, 0); // Left || Right
		
		if (Input.GetKey(KeyCode.UpArrow) || Input.GetKey(KeyCode.W)) {
			transform.position += transform.forward * Time.deltaTime * Speed;
		}else if (Input.GetKey(KeyCode.DownArrow) || Input.GetKey(KeyCode.S)) {
			transform.position += transform.forward * Time.deltaTime * Speed * -1;
		}
		
		if (Input.GetKey(KeyCode.LeftArrow) || Input.GetKey(KeyCode.A)) {
			transform.position += transform.right * Time.deltaTime * Speed * -1;
		}else if (Input.GetKey(KeyCode.RightArrow) || Input.GetKey(KeyCode.D)) {
			transform.position += transform.right * Time.deltaTime * Speed;
		}
		
		if (Input.GetKey(KeyCode.Space) && canJump == true) {
			GetComponent.<Rigidbody>().velocity.y = jumpHeight;
		}
	}

}

function OnCollisionEnter () {
	canJump = true;
}

function OnCollisionExit () {
	canJump = false;
}