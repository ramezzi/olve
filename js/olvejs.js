
var collab = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collab.length; i++) {
    collab[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}


var meemilista = [
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xd",
    "xdd",
    "xddd",
    "xdddd :D",
    "xddddd :D",
    "xdddddd :D",
    "xddddddd :D",
    "päriC :D"
];

var d = new Date();
var t = d.getDate();

console.log("Today is the "+t, " day this month. (For debugging purposes)");


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;
console.log("ebinebin1");
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        console.log("ebinebin2");
    } else {
        header.classList.remove("sticky");
    }
}

$(document).ready(function(){
    // jQuery methods go here...

    $(".bannercontainer").mouseenter(function(){
        $("#meme").hide();
    });
    $(".bannercontainer").mouseleave(function(){
        $("#meme").show();
    });

    $(".bannercontainer").ready(function(){
        $(".bannernappi").css("display", "none");
    });

    $(".bannercontainer").mouseenter(function(){
        $(".banner").css("-webkit-filter", "blur(4px)","filter: blur(4px);");
    });

    $(".bannercontainer").mouseleave(function(){
        $(".banner").css("-webkit-filter", "blur(0px)","filter: blur(0px);");
    });

    $(".bannercontainer").mouseenter(function(){
        $(".bannernappi").show();
    });
    $(".bannercontainer").mouseleave(function(){
        $(".bannernappi").hide();
    });
});
