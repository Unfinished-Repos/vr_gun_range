#pragma strict
var life : int = 3;
var Player : GameObject;
var Speed : float = 1f;
var LifeCounter : UnityEngine.UI.Text;

function Start () {
	Player = GameObject.Find("FPS Controller");
}

function Update () {
	transform.LookAt(Player.transform);
	transform.position += transform.forward * Time.deltaTime * Speed;
	transform.position.y = .25;
	LifeCounter.text = life.ToString();
	if (PlayerPrefs.GetString("GameStatus") == "false") {
		Destroy (gameObject);
	}
}

function Checker () {
	if (transform.name == "Enemy(Clone)") {
		if (life == 1) { 
			PlayerPrefs.SetInt("CurrentScore", PlayerPrefs.GetInt("CurrentScore") + 1);
			Destroy (gameObject);
		}else {
			life--;
		}
	}else {
		//I dont know why I have this here
		//Perhaps it will make sense in the future ;) 
	}
}

function OnCollisionEnter (collision : Collision) {
	if (collision.collider.gameObject == Player) {
		PlayerPrefs.SetString("GameStatus", "false");
	}
}
