$( document ).ready(function() {
    console.log( "ready!" );
	//setInterval(this.init, 3000);
	
	//==============================init
	//========기존 생성된 방 가져오기 
	//window.addEventListener('DOMContentLoaded', init);
	this.init = function(){
		console.log( "init!" );
		//var reqJSON = JSON.stringify({"name": "soo"});
		$.ajax({
			//data: reqJSON,
			//dataType: 'json',
			//contentType: 'application/json; charset=utf-8',
	        type: 'GET',
			url: "http://localhost:8081/mv/hello",
			success: function(data){
				//console.log("success, data: ",data);
				//deleteRoomList();
				//initRoomList(data);
				console.log("success",data);		
				//mv.setSrc();
			},
			error: {
				//...
			}
		});
	}
	
	getSrc = function() {
		console.log("getSrc");
		//var reqJSON = JSON.stringify({"name": "soo"});
		$.ajax({
			//data: reqJSON,
			//dataType: 'json',
			//contentType: 'application/json; charset=utf-8',
	        type: 'GET',
			url: "http://localhost:8081/mv/getSrc",
			success: function(data){
				//console.log("success, data: ",data);
				//deleteRoomList();
				//initRoomList(data);
				console.log("success",data);		
				//mv.setSrc();
			},
			error: {
				//...
			}
		});		
	};
	////////////////////
/*
	function moveCctv(camId, x, y) {
		setTimeout(function() {
			var feature = {'code': camId};
			var coordinates = [x*1, y*1];
			openPopupCctv(feature, coordinates);
			map.getView().setCenter(coordinates);
		}, 100);
	};*/
	playMV = function(videoId, hlsUrl, autoPlay, timerYn) {
		videoId = "video"
		hlsUrl = "http://soos1017.hopto.org:8082/static/dragonball/dragonball.m3u8";
		autoPlay ='true';
		timerYn = "N";
		//console.log("play");
		if (nPlayer.isSupported()) {
	    	var video = document.getElementById(videoId);
	    	var liveConfig = { autoStartLoad: true };
	    	var live = new nPlayer(liveConfig);
	    	
	    	live.attachMedia(video);
	    	live.on(nPlayer.Events.MEDIA_ATTACHED, function () {
		        live.loadSource(hlsUrl);
		    	live.on(nPlayer.Events.MANIFEST_PARSED, function() {
		    		live.startLoad();
		    	});
		    });
	    	
	    	video.addEventListener('canplay', function() {
	    		if (autoPlay) {
	    			video.play();
	    		}
	    	});
	    	
	    	if(timerYn == null) {
	    		timerYn = "Y";
	    	}
	    	
	    	if(timerYn == "Y") {
		    	video.addEventListener('durationchange', function() {
		    		for (var i=0; i<video.buffered.length; i++) {
		    			if (video.buffered.end(i) > 20) {
			    			live.stopLoad();
			    		}
		    		}
		    	});
	    	
		    	video.addEventListener('timeupdate', function() {
		    		for (var i=0; i<video.buffered.length; i++) {
		    			if (video.buffered.end(i) > 30) {
			    			live.stopLoad();
			    		}
		    		}
		    		
		    		if (video.currentTime >= 29.5) {
		    			live.detachMedia();
		    			autoPlay = false;
		    			setTimeout(function() {playMV(videoId, hlsUrl, autoPlay, timerYn);}, 500);
		    		}
		    	});
	    	};
	    } else {
	    	alert("해당 브라우저에서 뷰어가 동작하지 않습니다.");
	    }
	}
}); 