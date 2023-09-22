function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}






async function start() {
	
	
	chrome.storage.local.get(["id_der_kampagne"]).then((result) => {
		
		id_der_kampagne = result.id_der_kampagne;
	
	
		
	
	//await sleep(2000);
   $(function(){
      $("#DivContent").load("https://cloud.devodix.com/poster/devodix_poster_aktiv/kampagne_bearbeiten?id="+id_der_kampagne); 
    });
	
	
	});
}
	start();