  document.addEventListener("deviceready", onDeviceReady, false);


            function onDeviceReady() {

                // Hide the splach Screen when the device is ready //
                
                
                //navigator.splashscreen.hide();
               
                
                // Show Device info ////
                // Get the Device Properties when phone is ready //
                var element = document.getElementById('deviceProperties');

                element.innerHTML = 'Device Name: ' + device.name + '<br />' +
                    'Device Cordova: ' + device.cordova + '<br />' +
                    'Device Platform: ' + device.platform + '<br />' +
                    'Device UUID: ' + device.uuid + '<br />' +
                    'Device Version: ' + device.version + '<br />';
                
                
                
                
                  checkConnection();
            }







          
         
         
   

    function checkConnection() {
        //var networkState = navigator.network.connection.type; 
         var networkState = navigator.network.connection.type;
       // var states = {};
        //states[Connection.UNKNOWN]  = 'Unknown connection';
        //states[Connection.ETHERNET] = 'Ethernet connection';
        //states[Connection.WIFI]     = 'WiFi connection';
        //states[Connection.CELL_2G]  = 'Cell 2G connection';
        //states[Connection.CELL_3G]  = 'Cell 3G connection';
        //states[Connection.CELL_4G]  = 'Cell 4G connection';
        //states[Connection.NONE]     = 'No network connection';

       // alert('Connection type: ' + states[networkState]);
       // alert('Connection type: ' + networkState);
        
        
    if (networkState == Connection.NONE) {
        showAlert();
        }
    }
             
             
             
             
             
    // alert dialog dismissed
    function alertDismissed() {
        // do something
        window.location.href = "index.html";
         navigator.app.exitApp();`
    }

    // Show a custom alertDismissed
    //
    function showAlert() {
        //if (!networkState == Connection.NONE) {
        navigator.notification.alert(
            'You have no network ... ',  // message
            alertDismissed,         // callback
            'Error',            // title
            'Ok'                  // buttonName
        ); 
  
             }
             
        











// Add Js scripts here //

/


// Load the loading spanner on page click //
/*
          $(document).on("click", ".show-page-loading-msg", function() {
            var $this = $( this ),
                theme = $this.jqmData("theme") || $.mobile.loader.prototype.options.theme,
                msgText = $this.jqmData("msgtext") || $.mobile.loader.prototype.options.text,
                textVisible = $this.jqmData("textvisible") || $.mobile.loader.prototype.options.textVisible,
                textonly = !!$this.jqmData("textonly");
                html = $this.jqmData("html") || "";
            $.mobile.loading( 'show', {
                    text: msgText,
                    textVisible: textVisible,
                    theme: theme,
                    textonly: textonly,
                    html: html
            });
        })
        .on("click", ".hide-page-loading-msg", function() {
            $.mobile.loading( 'hide' );
        });
        
        */
            
/*************************************************************************
                    You Tube json feed api 
*************************************************************************/

/*

function listvideos(data) {
    console.log(data);
    
    var output = '';
    
    for ( var i=0; i<data.feed.entry.length; i++) {
    
    // Load the first title on youtube //
    var title = data.feed.entry[i].title.$t;
    
    //load the description from youtube  //
    var description = data.feed.entry[i].media$group.media$description.$t;
    // Load image //
    var thumbnail = data.feed.entry[i].media$group.media$thumbnail[0].url;
    // id of the video //
    var id = data.feed.entry[i].id.$t.substring(38);
    
        
        var blocktype = ((i % 2)===1) ? 'b': 'a';
        
        output += '<div class="ui-block-' + blocktype + '">';
        output += '<a href="#videoplayer" data-transition="none" onclick="playvideo(\'' +  id +'\',\'' + title + '\',\'' + escape(description) + '\')">';
        output += '<h3 class="movietitle">'+ title +'</h3>';
        output += '<img src="' + thumbnail + '"  alt="'+ title +'" />';
        output += '</a>';
        output += '</div>';
        
       
        
    } 
     
     $('#videolist').html(output);
   
}
*/



/*
 $('#start').click(function() {
    
     
      $.ajax({
        url: 'http://gdata.youtube.com/feeds/users/writtlecollege1/uploads?alt=json-in-script&max-results=30&callback"',
        dataType: 'jsonp',
        jsonp: 'callback',
        timeout: 5000,
        success: function(data, status){
            //data loaded
            
              $.mobile.showPageLoadingMsg();
             var output = '';
        
        for ( var i=0; i<data.feed.entry.length; i++) {
        
        // Load the first title on youtube //
        var title = data.feed.entry[i].title.$t;
        
        //load the description from youtube  //
        var description = data.feed.entry[i].media$group.media$description.$t;
        // Load image //
        var thumbnail = data.feed.entry[i].media$group.media$thumbnail[0].url;
        // id of the video //
        var id = data.feed.entry[i].id.$t.substring(38);
        
            
            var blocktype = ((i % 2)===1) ? 'b': 'a';
            
            output += '<div class="ui-block-' + blocktype + '">';
            output += '<a href="#videoplayer" data-transition="none" onclick="playvideo(\'' +  id +'\',\'' + title + '\',\'' + escape(description) + '\')">';
            output += '<h3 class="movietitle">'+ title +'</h3>';
            output += '<img src="' + thumbnail + '"  alt="'+ title +'" />';
            output += '</a>';
            output += '</div>';
            
           
        
    } 
     
     $('#videolist').html(output);
        
       //$.mobile.hidePageLoadingMsg();
        
        
        
        
	},
	error: function(){
		//error loading data
        
        
        $('#videolist').html('Error Loading...');
        
        
	}
});
     
     
     
     
     
     
     
 });  
*/


