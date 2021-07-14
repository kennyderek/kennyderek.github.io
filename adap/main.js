// document.getElementById("oscillate1adap").onclick = function() {
//     console.log("here!")
//     document.getElementById("oscillate1adap").src = "file:///Users/kderek/projects/appendix//resources/markov_gifs/2_div_ent0.05_ctx0.2_value_biasFalse_modelContextMult_gamma0.9_01_22_15_15_vs_planned/markov_soccer_playback_" +  Math.floor(Math.random() * 9) + ".gif"
// }


// document.getElementById

modes = ["oscillate1"];
for (var i = 0; i < modes.length; i++) {
    mode = modes[i]
    setOnClick(mode, "adap");
    setOnClick(mode, "vanilla");
};

function reload(mode) {
    setOnClick(mode, "adap");
    setOnClick(mode, "vanilla");
};

function setOnClick(mode, method) {
    document.getElementById(mode + method).onclick = function() {
        var srcbase = document.getElementById(mode + method).src;
        var choice = Math.floor(Math.random() * 10);
        document.getElementById(mode + method).src = srcbase.slice(0, srcbase.length - 5) + choice + ".gif";
        console.log(document.getElementById(mode + method).src);

        document.getElementById(mode + method + "txt").innerHTML = "Sample " + choice;

    };
};





// var sec2triggered = false;

// // This is then function used to detect if the element is scrolled into view
// function elementScrolled(elem)
// {
//   var docViewTop = $(window).scrollTop();
//   var docViewBottom = docViewTop + $(window).height();
//   var elemTop = $(elem).offset().top;
//   return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
// }

// $(window).scroll(function(){
  
//     // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
//     if(elementScrolled('#sec2') && !sec2triggered) {
//         console.log("here!!!!!");
//         $("body").animate({
//             scrollTop: $("#sec2").offset().top
//         },
//         800);
//         sec2triggered = true;
//     }
// });
