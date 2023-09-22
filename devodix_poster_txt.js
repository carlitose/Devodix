
var posttext1;
chrome.storage.local.get(["posttext1"]).then((result) => {

function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}


async function set_text_to_facebook(){
	
	posttext1 = result.posttext1;
		



    
	document.querySelector('div[role="button"]').click();
	
	await sleep(6000);
	
	var search_input_for_text = document.getElementsByTagName("input");

for(var i=0;i<search_input_for_text.length;i++){

if(search_input_for_text[i].getAttribute("name") == 'message'){

search_input_for_text[i].value=posttext1;
break;

}

}


await sleep(2000);

document.querySelectorAll('button[value="Posten"]')[1].click();
	
			
}

set_text_to_facebook();

		
		});