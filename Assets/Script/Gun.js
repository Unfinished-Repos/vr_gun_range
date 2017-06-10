#pragma strict
var damage : float = 10f;
var range : float = 100f;
var impactForce : float = 30f;
var fpsCam : Camera;
var muzzleFlash : ParticleSystem;
var impactEffect : GameObject;

function Update () {
	if (Input.GetButtonDown("Fire1")) {
		Shoot();
	}
}

function Shoot () {
	var hit : RaycastHit;
	muzzleFlash.Play();
	if (Physics.Raycast(fpsCam.transform.position, fpsCam.transform.forward, hit, range)) {
		Debug.Log(hit.transform.name);
		
		if (hit.rigidbody != null) {
			hit.rigidbody.AddForce(-hit.normal * impactForce);
		}

		var target : Target = hit.transform.GetComponent("Target");
		if (target != null) {
			target.Checker();
		}

		var impactGO : GameObject = Instantiate(impactEffect, hit.point, Quaternion.LookRotation(hit.normal));
		Destroy(impactGO, 2f);
	}
}