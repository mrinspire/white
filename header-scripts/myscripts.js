// JavaScript Document

/* Start Auto Focus fallback for all browsers */

    $(document).bind('autofocus_ready', function() {
      if (!("autofocus" in document.createElement("input"))) {
        $("#firstname").focus();
      }
    });
/* 
Note: The rest of the script to trigger it if needed is in my footer scripts
($(document).trigger('autofocus_ready');)  
*/

/* End Auto Focus fallback for all browsers */