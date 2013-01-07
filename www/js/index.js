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
        
        
            
        