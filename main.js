let wakeUpValue = $( "#wake-up" ).val()
// wakeUpValue is test
let lunchValue = $( "#lunch-time" ).val()
let napValue = $( "#nap-time" ).val()
// wake up change
$( "#wake-up" ).change(function() {
    wakeUpValue = $("#wake-up").val();


if (wakeUpValue === "7:00 AM to 8:00 AM") {
$("#mainphoto").attr("src", "images/wake-up-cat-text.png");
} else if (wakeUpValue === "10:00 PM to 7:00 AM") {
    $("#mainphoto").attr("src", "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80");

} else if (wakeUpValue === "11:00 AM to 2:00 PM") {
    $("#mainphoto").attr("src", "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80");
}
});
// lunch time change

$( "#lunch-time" ).change(function() {
    lunchValue = $("#lunch-time").val();


if (lunchValue === "11:00 AM to 2:00 PM") {
$("#mainphoto").attr("src", "images/cat_lunch.png");
} else if (lunchValue === "10:00 PM to 7:00 AM") {
    $("#mainphoto").attr("src", "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80");

} else if (lunchValue === "7:00 AM to 8:00 AM") {
    $("#mainphoto").attr("src", "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80");
}


});
// nap time change

$( "#nap-time" ).change(function() {
    napValue = $("#nap-time").val(); 


if (napValue === "10:00 PM to 7:00 AM") {
$("#mainphoto").attr("src", "images/nap_time.png");
} else if (napValue === "11:00 AM to 2:00 PM") {
    $("#mainphoto").attr("src", "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80");

} else if (napValue === "7:00 AM to 8:00 AM") {
    $("#mainphoto").attr("src", "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80");

}

});
let boolean = true;

$( "#partybutton" ).click(function() {
    if (boolean === true) {
        $("#mainphoto").attr("src", "https://images.unsplash.com/photo-1566927467984-6332be7377d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80");
        $(this).text('PARTY OVER'); 
        $(this).css('background-color','#F0803C');
    }
    else if (boolean === false) {
        $("#mainphoto").attr("src", "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80");
        $(this).text('PARTY TIME!'); 
        $(this).css('background-color','#8DDBE0');
    }
    boolean = !boolean
  });
  const time = new Date();
  console.log()
const hours = time.getHours();
console.log()
const minutes = time.getMinutes();
console.log()
const seconds = time.getSeconds();
console.log(hours, minutes, seconds)
const combinedTime = `${hours}:${minutes}:${seconds}`;
console.log(combinedTime)
$( "#clock" ).text(combinedTime);
