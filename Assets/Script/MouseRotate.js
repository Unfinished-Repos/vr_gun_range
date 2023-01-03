#pragma strict

function Start () {
	
}

function Update () {
	if (Application.platform == RuntimePlatform.WindowsPlayer) {
		transform.Rotate((Input.mousePosition.y - (Screen.height / 2)) * Time.deltaTime * -1, 0, 0); // Up || Down
	}
}	
