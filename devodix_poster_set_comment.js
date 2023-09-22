		
		var extract_from_group_link;
		
		var random_comment;
		
		
		chrome.storage.local.get(["extract_from_group_link", "random_comment"]).then((result) => {
	
	extract_from_group_link = result.extract_from_group_link;
	random_comment = result.random_comment;
		



		



function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}

						async function start_comment(){
						await sleep(1500);
						var check_post = window.location.href;
						if (check_post.indexOf(extract_from_group_link) > -1) {
						var links_comment = document.getElementsByTagName('a');
						

						var co = 0;for(var i = 0; i< links_comment.length; i++){
						var z = links_comment[i].href;
						if (z.indexOf('/mbasic/comment/advanced/?target_id') > -1){
						
						co++;}
						}
						
						
						if(co >1){
						
						}

						else{
						
						document.querySelector('textarea[name=comment_text]').value=random_comment;
						
						await sleep(1000);

						document.querySelector('input[value=Kommentar]').click();
						
						await sleep(1500)
						};




						}};start_comment()
						
						});