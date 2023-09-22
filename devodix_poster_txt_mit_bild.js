
var posttext1;
var random_bild_name;
var img_random;
chrome.storage.local.get(["posttext1","random_bild_name", "img_random"]).then((result) => {

function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}


async function set_text_to_facebook(){
	
	posttext1 = result.posttext1;
	
		random_bild_name = result.random_bild_name;
		img_random = result.img_random;
		



    
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


	function base64toFile(dataurl, filename = random_bild_name){
		
		const arr = dataurl.split(',');
		const mime = arr[0].match(/:(.*?);/)[1];
		const bstr = atob(arr[1]);
		let n = bstr.length;
		let u8arr = new Uint8Array(n);
		
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);	
		}
		
		return new File([u8arr], filename, { type: mime });
		
	}
	
	const myFile = base64toFile(img_random);

    const dt = new DataTransfer();
    dt.items.add(myFile);
	let inp = document.querySelector('input[name=file1]')
	inp.files = dt.files;
	
	let event = new Event('change', {bubbles: true})
	inp.dispatchEvent(event);



//

await sleep(8500);

document.querySelectorAll('button[value="Posten"]')[1].click();
	
			
}

set_text_to_facebook();

		
		});