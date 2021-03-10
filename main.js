let wakeUpValue = $( "#wake-up" ).val()
// wakeUpValue is test

$( "#wake-up" ).change(function() {
    wakeUpValue = $("#wake-up").val();

//"7:00 AM to 8:00 AM"
console.log(wakeUpValue);
if (wakeUpValue === "7:00 AM to 8:00 AM") {
$("#mainphoto").attr("src", "images/wake-up-cat-text.png");

}
});
