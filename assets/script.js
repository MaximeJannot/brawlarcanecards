
function managementHealth(health, character) {
	var maxHealth = health;
	var looseHealth = document.getElementById('loose_health_'+character);
	var gainHealth = document.getElementById('gain_health_'+character);
	var totalHealth = document.getElementById('total_health_'+character);

	looseHealth.onclick = function() {
		if (maxHealth > 0) {
			--maxHealth;
		}
		totalHealth.setAttribute('value', maxHealth);
	}
	gainHealth.onclick = function() {
		if (maxHealth < health) {
			++maxHealth;
		}
		totalHealth.setAttribute('value', maxHealth);
	}
}

managementHealth(15, 'mage')