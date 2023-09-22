		

	chrome.storage.local.get(["id_der_kampagne_set"]).then((result) => {
		
		now_id = result.id_der_kampagne_set;
	


			
				 
				 chrome.storage.local.get(['admin_id_user', 'fb_id']).then((result) => {
      admin_id_user = result.admin_id_user;
	  fb_id = result.fb_id;

var get_name_group = document.title;
var get_link_group = window.location.href;

get_link_group = get_link_group.replace("https://touch.","https://mbasic.");




			$.ajax({ 
				type: "POST", 

				url: "https://cloud.devodix.com/poster/functions/save_post_data.php",
				dataType: "text",
				data: {

					id: admin_id_user,
					group_id: get_link_group,
					group_name: get_name_group,
					camp: now_id




				},
	success: function(data)
	{
		
		console.log(data);
		


	}
			});
			
			
			});	
			
			
});	