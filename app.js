/*
if(window.location.hostname != "nitrowishes.ml"){
    window.location.href="http://www.moviesfun.in/";
    throw new Error("FUCK YOUR MOTHER ASSHOLE");
  }
*/
$(document).ready(function(){
    var myapp = new Vue({
    el: "#app",
    data: {
        title: "Free 100 PUBG UC",
        link: "http://www.ucforfree.ml/",
        features: [
            "We have a lot of users from India",
            "To make our Indian fans happy we have launched this offer",
            "This offer is only valid till today",
            "fill up the quick form to recieve the quick 100UC"
        ],
        img: "img/pubg.jpg",
        promotext: "Indipendence day Offer, get free 100 pubg UC", //whatsapp text
        finaltext: "Done, Now you have to download and install MoviesFun application for our security check. after installation you will recieve a mail on your email address",
        finalimg: "img/app.png",
        applink: "https://bit.ly/moviesfunapp",
        menu: [
            { name: "Home", link: "/"},
            { name: "About Us", link: "/about.html"},
            { name: "Privacy Policy", link: "/privacy.html"},
            { name: "Contact US", link: "/contact.html"}
        ]
    }
})


var n=0;
  
$(".wh").click(function(){
  n++;
  if(n >= 5){
    toastr.success("Thanks for Sharing, Click on Submit !", "Success", {timeOut:15000})
  }
})

$(".submit").click(function(){

if(n < 5){
toastr.error("Please invite at least 5 WhatsApp Groups !<br>"+ (5 - n) +" left")
  }else{
  $(".submit").attr("href","done.html");
}

})

})
