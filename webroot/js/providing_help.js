// wait for the DOM to be loaded
$(function() {
    var options = {
        target:        '#output1',   // target element(s) to be updated with server response
        success:       showResponse,  // post-submit callback
        error:         showError
    }
    // bind 'myForm' and provide a simple callback function
    $('#myForm').ajaxForm(options);

    // post-submit callback 
    function showResponse(responseText, statusText, xhr, $form)  {
        // for normal html responses, the first argument to the success callback
        // is the XMLHttpRequest object's responseText property

        // if the ajaxForm method was passed an Options Object with the dataType
        // property set to 'xml' then the first argument to the success callback
        // is the XMLHttpRequest object's responseXML property

        // if the ajaxForm method was passed an Options Object with the dataType
        // property set to 'json' then the first argument to the success callback
        // is the json data object returned by the server

        $("#failed").hide()
        $("#success").hide()
    }

    function showError(responseText, statusText, xhr, $form)  {
        $("#failed").show("slow");
    }
});
