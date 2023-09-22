var aktuelle_webseite = window.location.href;
var Array_Facebook_Gruppen = [];
var set_groups_in_board;
var admin_id_user;
var fb_id;



function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}	


function createTab(options) {
return new Promise(resolve => {


	//chrome.tabs.create(options, resolve);
	
	chrome.windows.create(options, resolve);
});
}


if (aktuelle_webseite =='https://cloud.devodix.com/index' || aktuelle_webseite =='https://cloud.devodix.com/' ){
	
	document.getElementById("devodix_extension_ready").style.display="none";


var check_version = document.getElementById("check_version").getAttribute("data-version");

if(check_version =='4'){



}

else{

document.getElementById("check_version_overlay").style.display="block";

}




}



////check Facebook Connection

if (aktuelle_webseite =='https://cloud.devodix.com/poster/account'){
	
	
	

	
	admin_id_user = document.getElementById("admin_id_user").innerHTML;
	fb_id = document.getElementById("fb_id").innerHTML;
	
	
	
		
	chrome.storage.local.set({ 'admin_id_user': admin_id_user, 'fb_id':fb_id}).then(() => {

});
	

	
	

}




if (aktuelle_webseite.includes('devodix_facebook_login')) {
	
	
	async function devodix_check_account(){
	
	document.body.style="overflow:hidden;";
	
	var css_devodix = document.createElement("link");
	css_devodix.rel = "stylesheet";
	css_devodix.href ="https://cloud.devodix.com/poster/extern-css/facebook-connection.css?v=2";
	document.getElementsByTagName("head")[0].appendChild(css_devodix);
	
	
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
	
	
	
	var new_font_devodix = document.createElement("link");
	new_font_devodix.rel = "stylesheet";
	new_font_devodix.href ="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
	document.getElementsByTagName("head")[0].appendChild(new_font_devodix);
	
	var connection_div = document.createElement("div");
	connection_div.style="z-index:99999999999;width:100%;height:100%;background:#21174a;position:fixed;top:0;left:0";
	connection_div.innerHTML="<div style='width:100%;text-align:center;padding:20px;box-sizing:border-box;'><img src='https://cloud.devodix.com/poster/img/poster_logo.png' style='width:400px;height:auto;'><div style='width: 650px; height: 280px; background: white; border-radius: 4px; position: absolute; padding: 20px; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;'><div style='color: black; font-size: 20px; margin: 20px 0 30px 0; text-align: center;font-family: Montserrat, sans-serif;'>Facebook Account wird verbunden einen Moment bitte...</div><div class='loader'></div></div>";
	document.body.parentNode.appendChild(connection_div);
	
	
	
	
	///find img 
	
	
	// Das SVG-Element anhand des aria-label-Attributs auswählen
var svgElement = document.querySelector('svg[aria-label="Profilbild-Handlungen"]');

// Das <image>-Element im SVG finden
var imageElement = svgElement.querySelector('image');

// Die src des Bildes extrahieren
var imageSrc = imageElement.getAttribute('xlink:href');

// Das Ergebnis ausgeben

	
	///end find img 
	
	
	//////find name 
	
	
	// Alle <h1>-Elemente auf der Seite abrufen
var h1Elements = document.getElementsByTagName("h1");

// Durch die <h1>-Elemente iterieren
for (var i = 0; i < h1Elements.length; i++) {
    var h1Text = h1Elements[i].textContent;

    // Überprüfen, ob der Text "Benachrichtigungen" nicht im <h1>-Element enthalten ist
    if (h1Text.indexOf("Benachrichtigungen") === -1) {
        // Das <h1>-Element, das den gesuchten Text nicht enthält, wurde gefunden
        // Text ausgeben
        console.log("Der Text im gefundenen <h1>-Element lautet:", h1Text);
    }
}
	
	/////end find name 
	
	
	
	
	
	var devodix_get_facebook_id = getCookie("c_user");
	
	var devodix_get_profile_img = imageSrc;
	
	
	
	var devodix_get_profile_name = h1Text;

	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	devodix_get_profile_img = devodix_get_profile_img.replace("&", "devodiximg");
	
	await sleep(5000);
	
	
	
	

	window.location.href="https://cloud.devodix.com/poster/sessions/facebook_account?1="+devodix_get_facebook_id+"&2="+devodix_get_profile_img+"&3="+devodix_get_profile_name;


	}
devodix_check_account();
	
	
}


//// end check Facebook Connection


////import groups


if (aktuelle_webseite =='https://cloud.devodix.com/poster/account'){


try{
document.getElementById("import_group").addEventListener("click",function(){






chrome.runtime.sendMessage({ msg: 'devodix_poster_gruppen_importieren' });



});

}

catch{}

}







////end import groups


//detac klick 


if (aktuelle_webseite =='https://cloud.devodix.com/poster/kampagnen' || aktuelle_webseite =='https://cloud.devodix.com/poster/multi_kampagnen'){


try{

$('[id=start_kampagne_now]').on('click',function(){


var get_camp_id_hier = document.getElementById("start_id_kampagne").value;

chrome.storage.local.set({ id_der_kampagne: get_camp_id_hier }).then(() => {
	
	
		
		
		chrome.runtime.sendMessage({msg: "devodix_poster_kampagne_start"}, function (response) {

if(response=='devodix_poster_aktiv'){
	
	document.getElementById("start_div").style.display="none";
	
	document.getElementById("devodixistaktivleider").style.display="block";
	
	
	
	
	
}

else{
	
	document.getElementById("start_div").style.display="none";
	
	
}


});
		

		

		
		
		
	
	

});







});

}

catch{}

}



