$(function(){

    
    $('#keywordsubmit').click(function(){
		// var search_topic = $('#keyword').val();
		// var textNodes = document.querySelectorAll('body, body *:not(script):not(style)');
		// var allText = '';
		// textNodes.forEach(function(node) {
		// 	allText += node.textContent;
		// });

		// var allText = '';
		
		chrome.tabs.executeScript(null, {
			code: `document.all[0].innerText`,
			allFrames: false, // this is the default
			runAt: 'document_start', // default is document_idle. See https://stackoverflow.com/q/42509273 for more details.
		}, function(results) {
			// results.length must be 1
			var allText = results[0];

			chrome.runtime.sendMessage(
				// {topic: search_topic},
				{topic: allText},
				function(response) {
					result = response.farewell;
					alert(result.summary);
					
					var notifOptions = {
						type: "basic",
						// iconUrl: "summary.jpg",
						title: "Text Summary For Your Result",
						message: result.summary
					};
					
					// var notificationId = "WikiNotif" + Data.now();

					chrome.notifications.create('WikiNotif', notifOptions);
					
				});
		});

		// if (search_topic){
        //         chrome.runtime.sendMessage(
		// 			// {topic: search_topic},
		// 			{topic: allText},
		// 			function(response) {
		// 				result = response.farewell;
		// 				alert(result.summary);
						
		// 				var notifOptions = {
		// 					type: "basic",
		// 					// iconUrl: "summary.jpg",
		// 					title: "Text Summary For Your Result",
		// 					message: result.summary
		// 				};
						
        //                 // var notificationId = "WikiNotif" + Data.now();

		// 				chrome.notifications.create('WikiNotif', notifOptions);
						
		// 			});
		// }
			
			
		// $('#keyword').val('');
		
    });
});