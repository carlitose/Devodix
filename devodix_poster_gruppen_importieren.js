	
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}	


function createTab(options) {
return new Promise(resolve => {

chrome.windows.create(options, resolve);

});
}


	async function devodix_import_groups(){
		
		
		
		var css_devodix = document.createElement("link");
		css_devodix.rel = "stylesheet";
		css_devodix.href ="https://cloud.devodix.com/extern-css/facebook-connection.css";
		document.getElementsByTagName("head")[0].appendChild(css_devodix);
		
		

		
		
		
		var new_font_devodix = document.createElement("link");
		new_font_devodix.rel = "stylesheet";
		new_font_devodix.href ="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
		document.getElementsByTagName("head")[0].appendChild(new_font_devodix);
		
		var connection_div = document.createElement("div");
		connection_div.style="width:100%;height:100%;background:#21174a;position:fixed;top:0;left:0";
		connection_div.innerHTML="<div style='width:100%;text-align:center;padding:20px;box-sizing:border-box;'><img src='https://cloud.devodix.com/img/poster_logo.png' style='width:400px;height:auto;'><div style='width: 650px; height: 280px; background: white; border-radius: 4px; position: absolute; padding: 20px; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;'><div style='color: black; font-size: 20px; margin: 20px 0 30px 0; text-align: center;font-family: Montserrat, sans-serif;'>Facebook Gruppen werden importiert einen Moment bitte...</div><div class='loader'></div></div>";
		document.body.parentNode.appendChild(connection_div);
		
		
		await sleep(2000);
		
		for (let scrollcount = 0; scrollcount < 100; scrollcount++) {
		
		scrollBy(0,1800);
		
		await sleep(2000);
		
		    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
     //  break;
    }
		
		
		
		}
		
		
		
			
			var links = document.getElementsByTagName('a');

			for(var i = 0; i< links.length; i++){


			if (links[i].href.indexOf('group_browse') > -1) {


			facebook_group_link = links[i].href;

			facebook_group_link = facebook_group_link.replace('m.','mbasic.');
			
			facebook_group_link = facebook_group_link.replace('touch.','mbasic.');

			facebook_group_link = facebook_group_link.replace('?ref=group_browse','?refid=27');

			facebook_group_text = links[i].lastChild.lastChild.lastChild.firstChild.textContent;
			
			
			
			facebook_group_text = facebook_group_text.replace(',','-');
			
			facebook_group_text = facebook_group_text.replace(',','-');
			
			facebook_group_text = facebook_group_text.replace(',','-');
			
			facebook_group_text = facebook_group_text.replace(',','-');
			
			facebook_group_text = facebook_group_text.replace(',','-');
			
			facebook_group_text = facebook_group_text.replace(',','-');
			
			facebook_group_text = facebook_group_text.replace(',','-');
			
			facebook_group_text = facebook_group_text.replace(',','-');
			
			facebook_group_text = facebook_group_text.replace(',','-');
			
			facebook_group_text = facebook_group_text.replace(',','-');
			
			facebook_group_text = facebook_group_text.replace(',','-');
			
			facebook_group_text = facebook_group_text.replace(',','-');
			
			////
			
		facebook_group_text = facebook_group_text.replace('"',"'");
		facebook_group_text = facebook_group_text.replace('"',"'");
		facebook_group_text = facebook_group_text.replace('"',"'");
		facebook_group_text = facebook_group_text.replace('"',"'");
		facebook_group_text = facebook_group_text.replace('"',"'");
		facebook_group_text = facebook_group_text.replace('"',"'");
		facebook_group_text = facebook_group_text.replace('"',"'");
		facebook_group_text = facebook_group_text.replace('"',"'");
		facebook_group_text = facebook_group_text.replace('"',"'");
		facebook_group_text = facebook_group_text.replace('"',"'");
		facebook_group_text = facebook_group_text.replace('"',"'");
		facebook_group_text = facebook_group_text.replace('"',"'");
			



			Array_Facebook_Gruppen.push([facebook_group_text,facebook_group_link]);}}
			
			Array_Facebook_Gruppen = JSON.stringify(Array_Facebook_Gruppen);
			
			chrome.storage.local.get(['admin_id_user', 'fb_id']).then((result) => {
			
		
      admin_id_user = result.admin_id_user;
	  fb_id = result.fb_id;
	  
	  console.log(admin_id_user);
    
			
			
			
			
$.ajax({
	type: "POST",
	url: 'https://cloud.devodix.com/poster/functions/save_fb_groups.php',
	data: {
		send_groups: Array_Facebook_Gruppen,
		admin_id: admin_id_user,
		facebook_id: fb_id


	},
	success: async function(data)
	{
		
		console.log(data);
		console.log("groups_imported");

await sleep(3000);
			
			//window.location.href="https://cloud.devodix.com/poster";

	}
});
	
			

		});	
			
			
	
			



		


		}
devodix_import_groups();