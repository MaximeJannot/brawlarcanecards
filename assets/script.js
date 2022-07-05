var mage = ["artful", "astral", "blood", "draconic", "flesh", "green", "luminous", "metallurgist", "mermancer", "necromancer", "noble"];
var minion = ["phantasm", "void", "bloodimp", "drake", "mutant", "forest", "brightling", "automaton", "denizen", "undead", "living"];

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

for (i = 0; i < mage.length; i++) {
	var idmage = 'mage-'+mage[i];
	managementHealth(15, idmage)
}
for (i = 0; i < minion.length; i++) {
	var idminion = 'minion-'+minion[i]+'-1';
	console.log(idminion);
	managementHealth(4, idminion)
}
for (i = 0; i < minion.length; i++) {
	var idminion = 'minion-'+minion[i]+'-2';
	managementHealth(4, idminion)
}
for (i = 0; i < minion.length; i++) {
	var idminion = 'minion-'+minion[i]+'-3';
	managementHealth(4, idminion)
}