
$(document).keypress(function(e){  
  if (e.which === 13){
    e.preventDefault();
      $("#send_button").click();
    }
});

function clear() {
  document.getElementById('mytextbox').value = '';
}

var channel_id;
function getSelectedValue() {
    var selectedValue = document.getElementById("channellist").value;
    channel_id = selectedValue;
}

function getData (form) {
    var messagestring = document.getElementById("mytextbox");
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "", // "{Telegram_Bot_URL}/sendMessage",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "cache-control": "no-cache"
        },
        "data": JSON.stringify({
          "chat_id": channel_id,
          "text": messagestring.value
        })
      }).done(function (response) {
        console.log(response);
    });
    clear();
}