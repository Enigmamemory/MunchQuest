var loot = document.getElementById("lootdungeon");
var hand = document.getElementById("Storage");
var name = document.getElementById("Name");
var aclass = document.getElementById("Class");
var hp = document.getElementById("HP");
var damage = document.getElementById("Damage");
var astr = document.getElementById("Str");
var mag = document.getElementById("Mag");
var res = document.getElementById("Res");
var wis = document.getElementById("Wis");
var spd = document.getElementById("Spd");
var aint = document.getElementById("Int");
var agi = document.getElementById("Agi");
var head = document.getElementById("Head");
var mhand = document.getElementById("MHand");
var shand = document.getElementById("SHand");
var thand = document.getElementById("THand");
var armor = document.getElementById("Armor");
var feet = document.getElementById("Feet");
var doorcards = document.getElementById("Doors");
var treasures = document.getElementById("Treasures");


function startloot(e){
    ajaxwillloot(doorcards)
    ajaxupdateloot();
}

function updateloot(r){
    guy = r.content;
    nhand = guy["Storage"]
    hand.innerHTML = nhand
    ndoors = guy["Doors"]
    doorhands.innerHTML = ndoors
}

function ajaxwillloot(doors) {
    console.log({Treasures: treasures, Doors: doorcards, Name: name, Class: aclass, HP: hp, Damage: damage, Str: astr, Mag: mag, Res: res, Wis: wis, Spd: spd, Int: aint, Agi: agi, Storage: hand, Head: head, MHand: mhand, SHand: shand, THand: thand, Armor: armor, Feet: feet});
    $.ajax({
	type:"POST",
	contentType:"application/json",
	url: "/ajax/loot",
	data: JSON.stringify({Treasures: treasures, Doors: doorcards, Name: name, Class: aclass, HP: hp, Damage: damage, Str: astr, Mag: mag, Res: res, Wis: wis, Spd: spd, Int: aint, Agi: agi, Storage: hand, Head: head, MHand: mhand, SHand: shand, THand: thand, Armor: armor, Feet: feet}),
	dataType: "json",
	success: function(r){debugout.innerHTML=JSON.stringify(r);}
    });
}

function ajaxupdateloot() {
    jQuery.getJSON("/ajax/loot",updateloot);
}

function start(){
    loot.addEventListener("click",startloot);
}

start();
