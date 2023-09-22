function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function createTab(options) {
return new Promise(resolve => {

chrome.windows.create(options, resolve);

});
}	


function myAlert(){
	
	alert('robin');
	
}

async function yes(){
	
	
	await sleep(3000);

	const window = await createTab({'url':  "https://mbasic.facebook.com" , 'type': 'popup', 'state':'minimized'});	
	
	
	await sleep(5000);



	chrome.scripting.executeScript(
					{
					  target: {tabId: window.tabs[0].id},
					  func: myAlert,
					
					});
					
					
					
					
					
}

yes();