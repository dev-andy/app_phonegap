  document.addEventListener("deviceready", onDeviceReady, false);


            function onDeviceReady() {

                // Hide the splach Screen when the device is ready //
                navigator.splashscreen.hide();
                // Show Device info ////
                // Get the Device Properties when phone is ready //
                var element = document.getElementById('deviceProperties');

                element.innerHTML = 'Device Name: ' + device.name + '<br />' +
                    'Device Cordova: ' + device.cordova + '<br />' +
                    'Device Platform: ' + device.platform + '<br />' +
                    'Device UUID: ' + device.uuid + '<br />' +
                    'Device Version: ' + device.version + '<br />';
            }











// Add Js scripts here //

// removing the transition from the page  //
  $(document).bind("mobileinit", function() {
	      $.mobile.page.prototype.options.addBackBtn = true;
	      $.mobile.defaultPageTransition = 'none';
	      $.mobile.useFastClick  = false;
	});
     


// Load the loading spanner on page click //
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
        
        
            
/*************************************************************************
                    You Tube json feed api 
*************************************************************************/

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


function playvideo(id, title, description) {
    var output ='';
   
    output += '<h1>' + title + '</h1>';
     output +='<iframe src="http://www.youtube.com/embed/'+ id +'?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';    
	output += '<p>' + unescape(description) + '</p>';
	$('#myplayer').html(output);
    
}    