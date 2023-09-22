function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}	


function createTab(options) {
return new Promise(resolve => {

chrome.windows.create(options, resolve);

});
}


let popupTabId = null;

//Funktion starten
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	
	
	///////start Import Groups Devodix Poster

if(request.msg == "devodix_poster_gruppen_importieren"){
	
	async function devodix_start_import_group(){

	const windowgroups = await createTab({'url':  "https://touch.facebook.com/groups_browse/your_groups/" , 'type': 'popup', 'state':'minimized'});

	await sleep(3000);


	var myCode='alert("ok");';




  chrome.scripting.executeScript(
    {
      target: {tabId: windowgroups.tabs[0].id},
      files: ['devodix_poster_gruppen_importieren.js'],
	
    });


	await sleep(290000);


	chrome.tabs.remove(windowgroups.tabs[0].id);

	}

	devodix_start_import_group();


	}
	
		///////start Import Groups Devodix Poster ENDE
	
	




if(request.msg == "devodix_poster_kampagne_start"){
	
	
	////test
	
	
	    if (popupTabId !== null) {
        // Optionally do stuff with the existing tab here. 
		
		 sendResponse('devodix_poster_aktiv');
        return;
    }
    chrome.tabs.create(
        {url: 'devodix_poster_aktiviert.html'},
        tab => {
            popupTabId = tab.id;
        }
    );
	

	

	
	//chrome.tabs.create({'url': "/devodix_poster_aktiviert.html" } );
	
	
	
	
}



});

chrome.tabs.onRemoved.addListener(
    removedTabId => {
        if (removedTabId === popupTabId) {
            popupTabId = null;
        }
    }
)








