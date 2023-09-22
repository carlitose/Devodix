var random_bild_name;
var img_random;



chrome.storage.local.get(["random_bild_name", "img_random"]).then((result) => {
	
	random_bild_name = result.random_bild_name;
		img_random = result.img_random;
		console.log(random_bild_name);





console.log("ok");

function base64toFile(dataurl, filename = random_bild_name){
	
	var arr = dataurl.split(','),mime = arr[0].match(/:(.*?);/)[1],bstr = atob(arr[1]),n = bstr.length,u8arr = new Uint8Array(n);while (n--) {u8arr[n] = bstr.charCodeAt(n);
	
	
	}
	
	return new File([u8arr], filename, { type: mime });
	
	}
	
	const file = base64toFile(img_random);
	
	const dt = new DataTransfer();dt.items.add(file);
	
	document.querySelector('input[name=file1]').files = dt.files;
	
	});
	
