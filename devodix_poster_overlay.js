		var css_devodix = document.createElement("link");
		css_devodix.rel = "stylesheet";
		css_devodix.href ="https://cloud.devodix.com/extern-css/facebook-connection.css?v=1";
		document.getElementsByTagName("head")[0].appendChild(css_devodix);
		
		

		
		
		
		var new_font_devodix = document.createElement("link");
		new_font_devodix.rel = "stylesheet";
		new_font_devodix.href ="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
		document.getElementsByTagName("head")[0].appendChild(new_font_devodix);
		
		var connection_div = document.createElement("div");
		connection_div.style="z-index:9999999999;width:100%;height:100%;background:#21174a;position:fixed;top:0;left:0";
		connection_div.innerHTML="<div style='width:100%;text-align:center;padding:20px;box-sizing:border-box;'><img src='https://cloud.devodix.com/img/poster_logo.png' style='width:400px;height:auto;'><div style='width: 650px; height: 280px; background: white; border-radius: 4px; position: absolute; padding: 20px; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;'><div style='color: black; font-size: 20px; margin: 20px 0 30px 0; text-align: center;font-family: Montserrat, sans-serif;'>Devodix postet aktuell Bitte nicht schlie&szlig;en...</div><div class='loader'></div></div>";
		document.body.parentNode.appendChild(connection_div);