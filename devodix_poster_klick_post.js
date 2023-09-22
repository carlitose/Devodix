var search_comment_post;

chrome.storage.local.get(["search_comment_id"]).then((result) => {

function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

search_comment_post = result.search_comment_id;

				async function start(){ 
				
				await sleep(1500);
				var links = document.getElementsByTagName('a');
				var profil_stop = 0;
				for(var i = 0; i< links.length; i++)
				{var z = links[i].href;
			var e = links[i].text;if (z.indexOf(search_comment_post) > -1)
					{if(profil_stop <1){z = z.replace("https://m.","https://mbasic.");console.log(z);window.location.href = z;profil_stop++;}}};


				};start()
				
					});