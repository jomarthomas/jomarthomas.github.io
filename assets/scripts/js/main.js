var data;
var menuWidth;

// setTimeout(function() {
//     Macy({
//         container: "#grid",
//         trueOrder: true,
//         waitForImages: false,
//         margin: 14,
//         columns: 3,
//         breakAt: {
//             1200: 3,
//             940: 2,
//             767: 1
//         }
//     });
// }, 250);

$("img").click(function () {
    data = $(this).attr("src");
    $(this)
        .attr("data-toggle", "modal")
        .attr("data-target", "#modal");
    $("#modal img").attr("src", data);
});

if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i ||
        window.document.innerWidth <= 480)
) {
    menuWidth = "100%";
} else {
    menuWidth = "250px";
}

function openNav() {
    document.getElementById("mySidenav").style.width = menuWidth;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $("#sub-menu, #portfolio-sub-menu").fadeOut();
}

$("#mySidenav > a:nth-child(6)").click(function () {
    if ($("#sub-menu").css("display") === "block") {
        $("#sub-menu").fadeOut();
    } else {
        $("#sub-menu").fadeIn("slow");
    }
});

$("#mySidenav > a:nth-child(4)").click(function () {
    if ($("#portfolio-sub-menu").css("display") === "block") {
        $("#portfolio-sub-menu").fadeOut();
    } else {
        $("#portfolio-sub-menu").fadeIn("slow");
    }
});


// var folder = "assets/images/portraits/";

// $.ajax({
//     url: folder,
//     success: function (data) {
//         $(data).find("a").attr("href", function (i, val) {
//             if (val.match(/\.(jpe?g|jpg|wbm|png|gif)$/)) {
//                 $("body #grid").append("<img class=\"lozad\" src='" + folder + val + "'>");
//             }
//         });
//     }
// });


var today = new Date();
var year = today.getUTCFullYear();

document.getElementById('year').innerText = year;