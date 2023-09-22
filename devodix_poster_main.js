function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function createTab(options) {
return new Promise(resolve => {

chrome.windows.create(options, resolve);

});
}	
	
	
	
	
//////get all ids

var kampagnen_array

var send_id_kampagne_set;

	chrome.storage.local.get(["id_der_kampagne"]).then((result) => {
		
		id_der_kampagne = result.id_der_kampagne;
		
		kampagnen_array = id_der_kampagne.split(",");
	
	
		
	
	//await sleep(2000);

	
	
	});

//////end get all ids 	
	
	
	var all_time_kamp = 0;
	
	
	async function main() {
		
		await sleep(5000);
		
		all_time_kamp = kampagnen_array.length;
		
		
		for (let iarray = 0; iarray < kampagnen_array.length; iarray++) {
			
			document.getElementById("overlay_devodix_poster_aktiv_first").style.display="block";
			
			check_if_time_or_kampagne = '';
			
			
			
			if (kampagnen_array[iarray].includes("zeit_")) 
			{
				
				check_if_time_or_kampagne = 'zeit';
				
				sleep_time_multi = kampagnen_array[iarray].replace("zeit_","");
				
				sleep_time_multi_2 = kampagnen_array[iarray].replace("zeit_","");
				
				sleep_time_multi = sleep_time_multi*60*1000;
				
			
				
			} else {
				
				
				
			}
			
			
			if(check_if_time_or_kampagne=='zeit'){
				
				document.getElementById("front_name").innerHTML='Multi Kampagne';
				
				
				var display_next_post_2 = new Date(Date.now() +  sleep_time_multi_2 * 60 * 1000).toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, minute: 'numeric' })	

				document.getElementById("display_next_post_time").innerHTML=unescape('N%E4chste Kampagne startet um: ') +display_next_post_2+ ' Uhr';
				
				
				
				
				
				await sleep(sleep_time_multi);
				
				all_time_kamp--;
				continue;
				
				
			}
			
			else{
				
			}
			
			
				chrome.storage.local.set({ id_der_kampagne_set: kampagnen_array[iarray] }).then(() => {
 
});
			


   $(function(){
      $("#DivContent").load("https://cloud.devodix.com/poster/devodix_poster_aktiv/kampagne_bearbeiten?id="+kampagnen_array[iarray]); 
    });


		


    async function control_campaign(){
		
		
		if(document.getElementById("dvx_poster_aktiv_overlay_checker")){
			
		}

			else{
				
				return control_campaign();
				
			}
		
	}
  
  
  ////
  
  var TimeSecond = 60;
  
  for (let isy = 0; isy < 60; isy++) {
 
 
 document.getElementById("myStartTimerNow").innerHTML="Start in "+TimeSecond+" Sekunden";
 
 TimeSecond--;
 
 await sleep(1000);
 
}
		
	

	
	
	document.getElementById("overlay_devodix_poster_aktiv_first").style.display="none";
	
	document.getElementById("overlay_devodix_poster_aktiv").style.display="block";
	
	
	
	
	
	
	
		var counter_txt_1 = 1;
		var counter_txt_2 = 1;
		var counter_txt_3 = 1;
		var counter_txt_4 = 1;
		var counter_txt_5 = 1;
	
		//get Tracking Links
	
	
		var tracking_link_txt_1 = document.getElementById("tracking_link_txt_1").value;
		var tracking_link_txt_2 = document.getElementById("tracking_link_txt_2").value;
		var tracking_link_txt_3 = document.getElementById("tracking_link_txt_3").value;
		var tracking_link_txt_4 = document.getElementById("tracking_link_txt_4").value;
		var tracking_link_txt_5 = document.getElementById("tracking_link_txt_5").value;
		
		var aktuall_kamp_name = document.getElementById("name_kampagne_hier_halt").value;
		
		document.getElementById("front_name").innerHTML='Aktive Kampagne: <b>'+aktuall_kamp_name+'</b>';
	
	
		//End get Tracking Links


		//Gruppen mischen


		var group_array = [];

		var set_new_groups_array = [];

		var get_groups_before_start = document.getElementById("all_groups").value;

		var get_groups_before_start_substring = get_groups_before_start.substring(0, get_groups_before_start.length-1);

		get_groups_before_start_substring = get_groups_before_start_substring.split('"');


		group_array=get_groups_before_start_substring;

		var the_length = group_array.length;


		for (let ixi = 0; ixi < the_length; ixi++) {


			var randomItem = group_array[Math.floor(Math.random()*group_array.length)];



			const index_devodix = group_array.indexOf(randomItem);
			if (index_devodix > -1) { // only splice array when item is found
				group_array.splice(index_devodix, 1); // 2nd parameter means remove one item only
			}

			set_new_groups_array.push(randomItem);



		}

		var set_new_groups_now = '';

		for (let ixix = 0; ixix < set_new_groups_array.length; ixix++) {

			set_new_groups_now+=set_new_groups_array[ixix]+'"';

		}

		document.getElementById("all_groups").value=set_new_groups_now;
		
		
		
		//ende gruppen mischen


		var fb_groups = [];

		var all_txt = [];

		var i ;

		var minTime = document.getElementById("min_post").value;

		var maxTime = document.getElementById("max_post").value;

		var sleep_after_post_check = document.getElementById("sleep_after_post").value;

		var continue_after_sleep_check = document.getElementById("continue_after_sleep").value;

		var stop_after_clock_check = document.getElementById("stop_after_clock").value;

		var my_sleep_counter = 1;

		var set_to_continue;

		var all_groups = document.getElementById("all_groups").value;

		var all_groups_save = document.getElementById("all_groups").value;

		var lka = all_groups.substring(0, all_groups.length-1);

		fb_groups = lka.split('"');



		///////komentar texte


		var comment_box1 = document.getElementById("comment_box1").value;

		var comment_box2 = document.getElementById("comment_box2").value;

		var comment_box3 = document.getElementById("comment_box3").value;

		var comment_box4 = document.getElementById("comment_box4").value;

		var comment_box5 = document.getElementById("comment_box5").value;

		var comment_box6 = document.getElementById("comment_box6").value;

		var comment_box7 = document.getElementById("comment_box7").value;

		var comment_box8 = document.getElementById("comment_box8").value;

		var comment_box9 = document.getElementById("comment_box9").value;

		var comment_box10 = document.getElementById("comment_box10").value;

		var comment_box11 = document.getElementById("comment_box11").value;

		var comment_box12 = document.getElementById("comment_box12").value;

		var comment_box13 = document.getElementById("comment_box13").value;

		var comment_box14 = document.getElementById("comment_box14").value;

		var comment_box15 = document.getElementById("comment_box15").value;


		////// ende kommetar texte




		var txt1 = document.getElementById("txt1").value;

		var txt2 = document.getElementById("txt2").value;

		var txt3 = document.getElementById("txt3").value;

		var txt4 = document.getElementById("txt4").value;

		var txt5 = document.getElementById("txt5").value;



		

		if(txt1 !=""){


			all_txt.push("txt1");

		}

		if(txt2 !=''){


			all_txt.push("txt2");

		}

		if(txt3 !=''){





			all_txt.push("txt3");

		}

		if(txt4 !=''){

		



			all_txt.push("txt4");

		}

		if(txt5 !=''){




			all_txt.push("txt5");

		}

		if_devodix_run ='x';

		

		///check length groups 

		var my_group_counter_for_manage = fb_groups.length;
		
		
		


		////////////




		for (i = 0; i < fb_groups.length; i++) {







			document.getElementById("display_next_post_time").innerHTML='Es wird aktuell gepostet';

			console.log("Gruppen: "+fb_groups.length);

			var hesap = parseInt(maxTime)-parseInt(minTime);



			hesap++;


			var yat =Math.floor(Math.random() * hesap) + parseInt(minTime);






			var go_groupe = fb_groups[i]

			var go_group = go_groupe.replace("https://mbasic.", "https://touch.");
			
		  
			
			console.log('hier '+go_group);



			///extract link for track

			var extract_from_group_link = go_groupe.replace("https://mbasic.facebook.com/groups/", "");

			extract_from_group_link = extract_from_group_link.replace("/?refid=27", "");


			///end extract link for track 
			
				chrome.storage.local.set({ search_comment_id: extract_from_group_link }).then(() => {
 
});




			/////add here new tracking


			//for txt1

			if(tracking_link_txt_1!='' && document.getElementById("txt1").value!=''){

				if(counter_txt_1 ==1){

					var the_orginal_link_txt_1 =  document.getElementById("txt1").value;

					counter_txt_1 =2;


				}



				document.getElementById("txt1").value=the_orginal_link_txt_1;

				var scrap_txt_1 =  document.getElementById("txt1").value;

				var set_new_txt_1 = scrap_txt_1.replace('{LINK}', tracking_link_txt_1+extract_from_group_link);

				set_new_txt_1 = set_new_txt_1.replace('{LINK}', tracking_link_txt_1+extract_from_group_link);

				set_new_txt_1 = set_new_txt_1.replace('{LINK}', tracking_link_txt_1+extract_from_group_link);

				set_new_txt_1 = set_new_txt_1.replace('{LINK}', tracking_link_txt_1+extract_from_group_link);

				set_new_txt_1 = set_new_txt_1.replace('{LINK}', tracking_link_txt_1+extract_from_group_link);

				document.getElementById("txt1").value=set_new_txt_1;




			}

			//end for txt1





			//for txt2

			if( tracking_link_txt_2!='' && document.getElementById("txt2").value!=''){

				if(counter_txt_2 ==1){

					var the_orginal_link_txt_2 =  document.getElementById("txt2").value;

					counter_txt_2 =2;


				}



				document.getElementById("txt2").value=the_orginal_link_txt_2;

				var scrap_txt_2 =  document.getElementById("txt2").value;

				var set_new_txt_2 = scrap_txt_2.replace('{LINK}', tracking_link_txt_2+extract_from_group_link);

				set_new_txt_2 = set_new_txt_2.replace('{LINK}', tracking_link_txt_2+extract_from_group_link);

				set_new_txt_2 = set_new_txt_2.replace('{LINK}', tracking_link_txt_2+extract_from_group_link);

				set_new_txt_2 = set_new_txt_2.replace('{LINK}', tracking_link_txt_2+extract_from_group_link);

				set_new_txt_2 = set_new_txt_2.replace('{LINK}', tracking_link_txt_2+extract_from_group_link);

				document.getElementById("txt2").value=set_new_txt_2;




			}

			//end for txt2			






			//for txt3

			if( tracking_link_txt_3!='' && document.getElementById("txt3").value!=''){

				if(counter_txt_3 ==1){

					var the_orginal_link_txt_3 =  document.getElementById("txt3").value;

					counter_txt_3 =2;


				}



				document.getElementById("txt3").value=the_orginal_link_txt_3;

				var scrap_txt_3 =  document.getElementById("txt3").value;

				var set_new_txt_3 = scrap_txt_3.replace('{LINK}', tracking_link_txt_3+extract_from_group_link);

				set_new_txt_3 = set_new_txt_3.replace('{LINK}', tracking_link_txt_3+extract_from_group_link);

				set_new_txt_3 = set_new_txt_3.replace('{LINK}', tracking_link_txt_3+extract_from_group_link);

				set_new_txt_3 = set_new_txt_3.replace('{LINK}', tracking_link_txt_3+extract_from_group_link);

				set_new_txt_3 = set_new_txt_3.replace('{LINK}', tracking_link_txt_3+extract_from_group_link);

				document.getElementById("txt3").value=set_new_txt_3;




			}

			//end for txt3		





			//for txt4

			if( tracking_link_txt_4!='' && document.getElementById("txt4").value!=''){

				if(counter_txt_4 ==1){

					var the_orginal_link_txt_4 =  document.getElementById("txt4").value;

					counter_txt_4 =2;


				}



				document.getElementById("txt4").value=the_orginal_link_txt_4;

				var scrap_txt_4 =  document.getElementById("txt4").value;

				var set_new_txt_4 = scrap_txt_4.replace('{LINK}', tracking_link_txt_4+extract_from_group_link);

				set_new_txt_4 = set_new_txt_4.replace('{LINK}', tracking_link_txt_4+extract_from_group_link);

				set_new_txt_4 = set_new_txt_4.replace('{LINK}', tracking_link_txt_4+extract_from_group_link);

				set_new_txt_4 = set_new_txt_4.replace('{LINK}', tracking_link_txt_4+extract_from_group_link);

				set_new_txt_4 = set_new_txt_4.replace('{LINK}', tracking_link_txt_4+extract_from_group_link);

				document.getElementById("txt4").value=set_new_txt_4;




			}

			//end for txt4			






			//for txt5

			if( tracking_link_txt_5!='' && document.getElementById("txt5").value!=''){

				if(counter_txt_5 ==1){

					var the_orginal_link_txt_5 =  document.getElementById("txt5").value;

					counter_txt_5 =2;


				}



				document.getElementById("txt5").value=the_orginal_link_txt_5;

				var scrap_txt_5 =  document.getElementById("txt5").value;

				var set_new_txt_5 = scrap_txt_5.replace('{LINK}', tracking_link_txt_5+extract_from_group_link);

				set_new_txt_5 = set_new_txt_5.replace('{LINK}', tracking_link_txt_5+extract_from_group_link);

				set_new_txt_5 = set_new_txt_5.replace('{LINK}', tracking_link_txt_5+extract_from_group_link);

				set_new_txt_5 = set_new_txt_5.replace('{LINK}', tracking_link_txt_5+extract_from_group_link);

				set_new_txt_5 = set_new_txt_5.replace('{LINK}', tracking_link_txt_5+extract_from_group_link);

				document.getElementById("txt5").value=set_new_txt_5;




			}

			//end for txt5			






			/////end here new tracking







			var posttext = all_txt[(Math.random()*all_txt.length)|0];


			var bilder_namen = ["Bild1.jpeg","Bild2.jpeg","Bild3.jpeg","Statur_gold.jpeg","ca64848.jpeg","Canva.jpeg","neues_bild.jpeg","Milka.jpeg","maus.jpeg","hund.jpeg","katze.jpeg","Schiff.jpeg"];


			var random_bild_name = bilder_namen[(Math.random()*bilder_namen.length)|0];

			var mit_bild="";

			var mit_kommentar="";




			/////////



			///Post_TXT_1


			var bildertxt1 = [];

			var commentsbox1 = [];






			if(posttext =="txt1"){


				if(document.getElementById("comment_box1").value !=''){

					mit_kommentar="x";

					commentbox1 = document.getElementById("comment_box1").value;

					commentsbox1.push(commentbox1);


					if(document.getElementById("comment_box2").value !=''){



						commentbox2 = document.getElementById("comment_box2").value;

						commentsbox1.push(commentbox2);

					}


					if(document.getElementById("comment_box3").value !=''){



						commentbox3 = document.getElementById("comment_box3").value;

						commentsbox1.push(commentbox3);

					}


					var random_comment = commentsbox1[(Math.random()*commentsbox1.length)|0];



				



					}











				if(document.getElementById("img1_txt1") || document.getElementById("img2_txt1") || document.getElementById("img3_txt1")){




					mit_bild ="x";


					if(document.getElementById("img1_txt1")){
						txt1_bild1 = document.getElementById("img1_txt1").value;

						bildertxt1.push(txt1_bild1);

					}





					if(document.getElementById("img2_txt1")){

						txt1_bild2 = document.getElementById("img2_txt1").value;

						bildertxt1.push(txt1_bild2);


					}


					if(document.getElementById("img3_txt1")){

						txt1_bild3 = document.getElementById("img3_txt1").value;

						bildertxt1.push(txt1_bild3);




					}






					var img_random = bildertxt1[(Math.random()*bildertxt1.length)|0];
					
				
					
					
					

					posttext1 =  document.getElementById("txt1").value;
					var myCode = "function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}"+

						"async function start(){ await sleep(1500);document.querySelector('textarea[name=xc_message]').value="+JSON.stringify(posttext1)+";await sleep(1000);"+

						"document.querySelector('input[name=view_photo]').click();await sleep(1500);"+







						"};start()"


					var myCodeBild = "function base64toFile(dataurl, filename = '"+JSON.stringify(random_bild_name)+"') {var arr = dataurl.split(','),mime = arr[0].match(/:(.*?);/)[1],bstr = atob(arr[1]),n = bstr.length,u8arr = new Uint8Array(n);while (n--) {u8arr[n] = bstr.charCodeAt(n);}return new File([u8arr], filename, { type: mime });}const file = base64toFile("+JSON.stringify(img_random)+");const dt = new DataTransfer();dt.items.add(file);document.querySelector('input[name=file1]').files = dt.files;"


					var myCodeBildKlick ="document.querySelector('input[name=add_photo_done]').click();"	

					var myCodeBildSubmit = "document.querySelector('input[name=view_post]').click();"		






					}


				else {

					posttext1 =  document.getElementById("txt1").value;
					
					

					
					
					var myCode = "setTimeout(function(){document.querySelector('textarea[name=xc_message]').value=JSON.stringify(posttext1);},1000);setTimeout(function(){document.querySelector('input[name=view_post]').click();},4000);";
				}	




			}




			///POST_TXT_1_ENDE





			///Post_TXT_2


			var bildertxt2 = [];

			var commentsbox2 = [];

			if(posttext =="txt2"){



				if(document.getElementById("comment_box4").value !=''){

					mit_kommentar="x";

					commentbox1 = document.getElementById("comment_box4").value;

					commentsbox2.push(commentbox1);


					if(document.getElementById("comment_box5").value !=''){



						commentbox2 = document.getElementById("comment_box5").value;

						commentsbox2.push(commentbox2);

					}


					if(document.getElementById("comment_box6").value !=''){



						commentbox3 = document.getElementById("comment_box6").value;

						commentsbox2.push(commentbox3);

					}


					var random_comment = commentsbox2[(Math.random()*commentsbox2.length)|0];



	



					}



				if(document.getElementById("img1_txt2") || document.getElementById("img2_txt2") || document.getElementById("img3_txt2")){


					mit_bild ="x";

					if(document.getElementById("img1_txt2")){

						txt2_bild1 = document.getElementById("img1_txt2").value;

						bildertxt2.push(txt2_bild1);

					}


					if(document.getElementById("img2_txt2")){

						txt2_bild2 = document.getElementById("img2_txt2").value;

						bildertxt2.push(txt2_bild2);


					}


					if(document.getElementById("img3_txt2")){

						txt2_bild3 = document.getElementById("img3_txt2").value;

						bildertxt2.push(txt2_bild3);




					}

					var img_random = bildertxt2[(Math.random()*bildertxt2.length)|0];

					posttext1 =  document.getElementById("txt2").value;
					var myCode = "function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}"+

						"async function start(){ await sleep(1500);document.querySelector('textarea[name=xc_message]').value="+JSON.stringify(posttext1)+";await sleep(1000);"+

						"document.querySelector('input[name=view_photo]').click();await sleep(1500);"+







						"};start()"


					var myCodeBild = "function base64toFile(dataurl, filename = '"+JSON.stringify(random_bild_name)+"') {var arr = dataurl.split(','),mime = arr[0].match(/:(.*?);/)[1],bstr = atob(arr[1]),n = bstr.length,u8arr = new Uint8Array(n);while (n--) {u8arr[n] = bstr.charCodeAt(n);}return new File([u8arr], filename, { type: mime });}const file = base64toFile("+JSON.stringify(img_random)+");const dt = new DataTransfer();dt.items.add(file);document.querySelector('input[name=file1]').files = dt.files;"


					var myCodeBildKlick ="document.querySelector('input[name=add_photo_done]').click();"	

					var myCodeBildSubmit = "document.querySelector('input[name=view_post]').click();"		






					}


				else {

					posttext1 =  document.getElementById("txt2").value;
					var myCode = "setTimeout(function(){document.querySelector('textarea[name=xc_message]').value="+JSON.stringify(posttext1)+";},1000);setTimeout(function(){document.querySelector('input[name=view_post]').click();},4000);";
				}	




			}




			///POST_TXT_2_ENDE








			///Post_TXT_3


			var bildertxt3 = [];

			var commentsbox3 = [];

			if(posttext =="txt3"){



				if(document.getElementById("comment_box7").value !=''){

					mit_kommentar="x";

					commentbox1 = document.getElementById("comment_box7").value;

					commentsbox3.push(commentbox1);


					if(document.getElementById("comment_box8").value !=''){



						commentbox2 = document.getElementById("comment_box8").value;

						commentsbox3.push(commentbox2);

					}


					if(document.getElementById("comment_box9").value !=''){



						commentbox3 = document.getElementById("comment_box9").value;

						commentsbox3.push(commentbox3);

					}


					var random_comment = commentsbox3[(Math.random()*commentsbox3.length)|0];







					}




				if(document.getElementById("img1_txt3") || document.getElementById("img2_txt3") || document.getElementById("img3_txt3")){


					mit_bild ="x";

					if(document.getElementById("img1_txt3")){
						txt3_bild1 = document.getElementById("img1_txt3").value;

						bildertxt3.push(txt3_bild1);

					}



					if(document.getElementById("img2_txt3")){

						txt3_bild2 = document.getElementById("img2_txt3").value;

						bildertxt3.push(txt3_bild2);


					}


					if(document.getElementById("img3_txt3")){

						txt3_bild3 = document.getElementById("img3_txt3").value;

						bildertxt3.push(txt3_bild3);




					}

					var img_random = bildertxt3[(Math.random()*bildertxt3.length)|0];

					posttext1 =  document.getElementById("txt3").value;
					var myCode = "function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}"+

						"async function start(){ await sleep(1500);document.querySelector('textarea[name=xc_message]').value="+JSON.stringify(posttext1)+";await sleep(1000);"+

						"document.querySelector('input[name=view_photo]').click();await sleep(1500);"+







						"};start()"


					var myCodeBild = "function base64toFile(dataurl, filename = '"+JSON.stringify(random_bild_name)+"') {var arr = dataurl.split(','),mime = arr[0].match(/:(.*?);/)[1],bstr = atob(arr[1]),n = bstr.length,u8arr = new Uint8Array(n);while (n--) {u8arr[n] = bstr.charCodeAt(n);}return new File([u8arr], filename, { type: mime });}const file = base64toFile("+JSON.stringify(img_random)+");const dt = new DataTransfer();dt.items.add(file);document.querySelector('input[name=file1]').files = dt.files;"


					var myCodeBildKlick ="document.querySelector('input[name=add_photo_done]').click();"	

					var myCodeBildSubmit = "document.querySelector('input[name=view_post]').click();"		






					}


				else {

					posttext1 =  document.getElementById("txt3").value;
					var myCode = "setTimeout(function(){document.querySelector('textarea[name=xc_message]').value="+JSON.stringify(posttext1)+";},1000);setTimeout(function(){document.querySelector('input[name=view_post]').click();},4000);";
				}	




			}




			///POST_TXT_3_ENDE	







			///Post_TXT_4


			var bildertxt4 = [];

			var commentsbox4 = [];

			if(posttext =="txt4"){



				if(document.getElementById("comment_box10").value !=''){

					mit_kommentar="x";

					commentbox1 = document.getElementById("comment_box10").value;

					commentsbox4.push(commentbox1);


					if(document.getElementById("comment_box11").value !=''){



						commentbox2 = document.getElementById("comment_box11").value;

						commentsbox4.push(commentbox2);

					}


					if(document.getElementById("comment_box12").value !=''){



						commentbox3 = document.getElementById("comment_box12").value;

						commentsbox4.push(commentbox3);

					}


					var random_comment = commentsbox4[(Math.random()*commentsbox4.length)|0];







					}



				if(document.getElementById("img1_txt4") || document.getElementById("img2_txt4") || document.getElementById("img3_txt4")){


					mit_bild ="x";

					if(document.getElementById("img1_txt4")){
						txt4_bild1 = document.getElementById("img1_txt4").value;

						bildertxt4.push(txt4_bild1);

					}


					if(document.getElementById("img2_txt4")){

						txt4_bild2 = document.getElementById("img2_txt4").value;

						bildertxt4.push(txt4_bild2);


					}


					if(document.getElementById("img3_txt4")){

						txt4_bild3 = document.getElementById("img3_txt4").value;

						bildertxt4.push(txt4_bild3);




					}

					var img_random = bildertxt4[(Math.random()*bildertxt4.length)|0];

					posttext1 =  document.getElementById("txt4").value;
					var myCode = "function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}"+

						"async function start(){ await sleep(1500);document.querySelector('textarea[name=xc_message]').value="+JSON.stringify(posttext1)+";await sleep(1000);"+

						"document.querySelector('input[name=view_photo]').click();await sleep(1500);"+







						"};start()"


					var myCodeBild = "function base64toFile(dataurl, filename = '"+JSON.stringify(random_bild_name)+"') {var arr = dataurl.split(','),mime = arr[0].match(/:(.*?);/)[1],bstr = atob(arr[1]),n = bstr.length,u8arr = new Uint8Array(n);while (n--) {u8arr[n] = bstr.charCodeAt(n);}return new File([u8arr], filename, { type: mime });}const file = base64toFile("+JSON.stringify(img_random)+");const dt = new DataTransfer();dt.items.add(file);document.querySelector('input[name=file1]').files = dt.files;"


					var myCodeBildKlick ="document.querySelector('input[name=add_photo_done]').click();"	

					var myCodeBildSubmit = "document.querySelector('input[name=view_post]').click();"		






					}


				else {

					posttext1 =  document.getElementById("txt4").value;
					var myCode = "setTimeout(function(){document.querySelector('textarea[name=xc_message]').value="+JSON.stringify(posttext1)+";},1000);setTimeout(function(){document.querySelector('input[name=view_post]').click();},4000);";
				}	




			}




			///POST_TXT_4_ENDE	




			///Post_TXT_5


			var bildertxt5 = [];

			var commentsbox5 = [];

			if(posttext =="txt5"){



				if(document.getElementById("comment_box13").value !=''){

					mit_kommentar="x";

					commentbox1 = document.getElementById("comment_box13").value;

					commentsbox5.push(commentbox1);


					if(document.getElementById("comment_box14").value !=''){



						commentbox2 = document.getElementById("comment_box14").value;

						commentsbox5.push(commentbox2);

					}


					if(document.getElementById("comment_box15").value !=''){



						commentbox3 = document.getElementById("comment_box15").value;

						commentsbox5.push(commentbox3);

					}


					var random_comment = commentsbox5[(Math.random()*commentsbox5.length)|0];







					}

				if(document.getElementById("img1_txt5") || document.getElementById("img2_txt5") || document.getElementById("img3_txt5")){


					mit_bild ="x";

					if(document.getElementById("img1_txt5")){
						txt5_bild1 = document.getElementById("img1_txt5").value;

						bildertxt5.push(txt5_bild1);

					}



					if(document.getElementById("img2_txt5")){

						txt5_bild2 = document.getElementById("img2_txt5").value;

						bildertxt5.push(txt5_bild2);


					}


					if(document.getElementById("img3_txt5")){

						txt5_bild3 = document.getElementById("img3_txt5").value;

						bildertxt5.push(txt5_bild3);




					}

					var img_random = bildertxt5[(Math.random()*bildertxt5.length)|0];

					posttext1 =  document.getElementById("txt5").value;
					var myCode = "function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms));}"+

						"async function start(){ await sleep(1500);document.querySelector('textarea[name=xc_message]').value="+JSON.stringify(posttext1)+";await sleep(1000);"+

						"document.querySelector('input[name=view_photo]').click();await sleep(1500);"+







						"};start()"


					var myCodeBild = "function base64toFile(dataurl, filename = '"+JSON.stringify(random_bild_name)+"') {var arr = dataurl.split(','),mime = arr[0].match(/:(.*?);/)[1],bstr = atob(arr[1]),n = bstr.length,u8arr = new Uint8Array(n);while (n--) {u8arr[n] = bstr.charCodeAt(n);}return new File([u8arr], filename, { type: mime });}const file = base64toFile("+JSON.stringify(img_random)+");const dt = new DataTransfer();dt.items.add(file);document.querySelector('input[name=file1]').files = dt.files;"


					var myCodeBildKlick ="document.querySelector('input[name=add_photo_done]').click();"	

					var myCodeBildSubmit = "document.querySelector('input[name=view_post]').click();"		






					}


				else {

					posttext1 =  document.getElementById("txt5").value;
					var myCode = "setTimeout(function(){document.querySelector('textarea[name=xc_message]').value="+JSON.stringify(posttext1)+";},1000);setTimeout(function(){document.querySelector('input[name=view_post]').click();},4000);";
				}	




			}




			///POST_TXT_5_ENDE	
			
			
			////set all storage
			
		


//////test

	chrome.storage.local.set({ posttext1: posttext1 }).then(() => {
 
});


	chrome.storage.local.set({ random_bild_name: random_bild_name }).then(() => {
 
});


	chrome.storage.local.set({ img_random: img_random }).then(() => {
 
});


	chrome.storage.local.set({ extract_from_group_link: extract_from_group_link }).then(() => {
 
});

	chrome.storage.local.set({ random_comment: random_comment }).then(() => {
 
});

////ende test






			var search_comment_post = go_group.replace("?refid=27", "permalink");



			const window = await createTab({'url':  "https://mbasic.facebook.com" , 'type': 'popup', 'state':'minimized'});




			await sleep(6000);






			chrome.tabs.update(window.tabs[0].id, {url: go_group});	
			
			
			await sleep(3500);
			
			
			
								  chrome.scripting.executeScript(
					{
					  target: {tabId: window.tabs[0].id},
					  files: ['devodix_poster_overlay.js'],
					  
					
					});
					
					
					await sleep(2000);
					
													  chrome.scripting.executeScript(
					{
					  target: {tabId: window.tabs[0].id},
					  files: ['devodix_poster_send_post_data.js'],
					  
					
					});


			await sleep(4500);



					if(mit_bild !="x"){

					  chrome.scripting.executeScript(
					{
					  target: {tabId: window.tabs[0].id},
					  files: ['devodix_poster_txt.js'],
					  
					
					});
					
					}
			

			
			await sleep(4000);
			
			
	


			if(mit_bild =="x"){

				await sleep(9000);

				  chrome.scripting.executeScript(
					{
					  target: {tabId: window.tabs[0].id},
					  files: ['devodix_poster_txt_mit_bild.js'],
					
					});

				
				
				
							////test
			
			await sleep(7000);
			
			await sleep(8000);
			

		
				
				
				
						
			
			await sleep(9000);
			
			
		

				await sleep(16000);

				mit_bild ="";

			}

			else{

				await sleep(16000);

			}




			if(mit_kommentar =="x"){
				
				console.log("comment start");

				await sleep(6000);

				start_page ="https://mbasic.facebook.com/";

				chrome.tabs.update(window.tabs[0].id, {url: start_page});



				await sleep(7000);


				comment_page = "https://touch.facebook.com/allactivity/?refid=17";

				chrome.tabs.update(window.tabs[0].id, {url: comment_page});
				
												  chrome.scripting.executeScript(
					{
					  target: {tabId: window.tabs[0].id},
					  files: ['devodix_poster_overlay.js'],
					  
					
					});



				await sleep(7000);

				chrome.scripting.executeScript(
				{
				target: {tabId: window.tabs[0].id},
				files: ['devodix_poster_klick_post.js'],

				});


				
				
							////test
			
			await sleep(4000);
			
			
											  chrome.scripting.executeScript(
					{
					  target: {tabId: window.tabs[0].id},
					  files: ['devodix_poster_overlay.js'],
					  
					
					});
			



				await sleep(7000);
				
				
				  chrome.scripting.executeScript(
    {
      target: {tabId: window.tabs[0].id},
      files: ['devodix_poster_set_comment.js'],
	
    });


		
				
				
				
							////test
			
			await sleep(9000);
				
				
				await sleep(1100);

				mit_kommentar="";



			}





			chrome.tabs.remove(window.tabs[0].id);




			my_group_counter_for_manage--;


			if(my_group_counter_for_manage==0){

				break;



			}




			/////




			/////



			if(sleep_after_post_check !=0){

				console.log("nicht null");


				if(sleep_after_post_check == my_sleep_counter){

					console.log("nicht null 2");

					var display_next_post_go = new Date(Date.now() +  continue_after_sleep_check * 60 * 1000).toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, minute: 'numeric' })

					document.getElementById("display_next_post_time").innerHTML='Devodix pausiert bis um: '+display_next_post_go+' Uhr';

					var long_sleep_time = continue_after_sleep_check*60*1000;

					await sleep(long_sleep_time);

					my_sleep_counter = 0;

					set_to_continue = 'x';



				}



			}




			var yats = yat*60*1000;


			if(set_to_continue !='x'){


				var display_next_post = new Date(Date.now() +  yat * 60 * 1000).toLocaleTimeString('en-US', { hour: 'numeric', hour12: false, minute: 'numeric' })	

				document.getElementById("display_next_post_time").innerHTML=unescape('N%E4chster Post um: ') +display_next_post+ ' Uhr';



				await sleep(yats);

			}





			set_to_continue = '';



			my_sleep_counter++;


			if(stop_after_clock_check !=''){

				var current_time_now = new Date().toLocaleTimeString('de-DE', { hour12: false, 
																			   hour: "numeric", 
																			   minute: "numeric"});





				if(current_time_now>stop_after_clock_check){

					//location.reload();
					
					break;


				}





			}
			
			
			
			////send last group to database
			
			
			if(my_group_counter_for_manage!=0){

				///send data



			}
			
			
			
			////end send last group to database





		}

		////poster fertig


		if(all_time_kamp==0){
		document.getElementById("overlay_devodix_poster_aktiv").style.display="none";
		document.getElementById("info_load_succes").style.display="block";
		
		}
		
		counter_txt_1 = 1;
		counter_txt_2 = 1;
		counter_txt_3 = 1;
		counter_txt_4 = 1;
		counter_txt_5 = 1;

		if_devodix_run ='';




		/////for multi kampagne
		
		
		/////ende for multi kampagne 



	all_time_kamp--;
	
			if(all_time_kamp==0){
		document.getElementById("overlay_devodix_poster_aktiv").style.display="none";
		document.getElementById("info_load_succes").style.display="block";
		
		}



		}

	}
	
	main();