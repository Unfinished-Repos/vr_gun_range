#pragma strict
var Instructions : UnityEngine.UI.Text;
var HighScore : UnityEngine.UI.Text;
var CurrentScore : UnityEngine.UI.Text;
var GameStatus : UnityEngine.UI.Text;
var started : boolean;
var Quantity : int;
var MaxQuantity : int;
var Enemy : GameObject;
var EnemySpawnPoint : Vector3;
var BlankQuaternion : Quaternion;
var XSpawn : float;
var ZSpawn : float;

function Start () {
	PlayerPrefs.SetString("GameStatus", "false");
}

function Update () {
	HighScore.text = "HighScore: " + PlayerPrefs.GetInt("HighScore");
	CurrentScore.text = "Current Score: " + PlayerPrefs.GetInt("CurrentScore");

	if (PlayerPrefs.GetInt("CurrentScore") > PlayerPrefs.GetInt("HighScore")) {
		PlayerPrefs.SetInt("HighScore", PlayerPrefs.GetInt("CurrentScore"));
	}

	if (PlayerPrefs.GetString("GameStatus") == "false") {
		Instructions.text = "Shoot to start";
		PlayerPrefs.SetInt("CurrentScore", 0);
		started = false;
		if (Input.GetButtonDown("Fire1")) {
			PlayerPrefs.SetString("GameStatus", "true");
		}
	}else if (PlayerPrefs.GetString("GameStatus") == "true") {
		Instructions.text = "Shoot the moving blocks!";
		if (started == false) {
			Spawner();
			started = true;
		}
	}
}

function Spawner () {
	MaxQuantity = 4;
	while (PlayerPrefs.GetString("GameStatus") == "true") {
		Quantity = Random.Range(1, (MaxQuantity / 2));
		MaxQuantity++;
		while (Quantity > 0) {
			if (Random.Range(1, 3) == 1) {
				XSpawn = Random.Range(4f, 8.5f);
			}else {
				XSpawn = Random.Range(-4f, -8.5f);
			}

			if (Random.Range(1, 3) == 1) {
				ZSpawn = Random.Range(4f, 8.5f);
			}else {
				ZSpawn = Random.Range(-4f, -8.5f);
			}
			EnemySpawnPoint.Set(XSpawn, .25, ZSpawn);
			Instantiate(Enemy, EnemySpawnPoint, BlankQuaternion);
			Quantity--;
		}
		yield WaitForSeconds (3);
	}
}