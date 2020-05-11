$(document).ready(function () {

    //Mail Function
    $("form").on("submit", function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "https://formcarry.com/s/Y2j7afa-r1c",
            dataType: "text",
            data: $('form').serialize(),
            success: function () {
                $('#confirmEmail').modal('show')
            }
        });
        // console.log($(this).serialize());
    });

    //Footer Year display
    var d = new Date();
    var y = d.getFullYear();
    $("#year").text(y);

    //Macy options
    setTimeout(function() {
        Macy({
            container: ".gallery",
            trueOrder: false,
            waitForImages: false,
            margin: 14,
            columns: 3,
            breakAt: {
                1200: 3,
                940: 2,
                400: 1
            }
        });
    }, 250);

    //For Gallery 4 only 
    setTimeout(function()  {
        Macy({
            container: ".gallery2",
            trueOrder: false,
            waitForImages: false,
            margin: 14,
            columns: 3,
            breakAt: {
                1200: 3,
                940: 2,
                400: 1
            }
        });
    }, 250);

    setTimeout(function()  {
        Macy({
            container: ".gallery3",
            trueOrder: false,
            waitForImages: false,
            margin: 14,
            columns: 3,
            breakAt: {
                1200: 3,
                940: 2,
                400: 1
            }
        });
    }, 250);

    //Macy and Mansory Setup
    // var pathName = window.location.pathname;
    // var match = pathName.match(/\d/g);
    // var number = match[0];
    // var folder = `../../../assets/images/gallery${number}/`;

    // $.ajax({
    //     url: folder,
    //     success: function (data) {
    //         $(data)
    //             .find("a")
    //             .attr("href", function (i, val) {
    //                 if (val.match(/\.(jpe?g|jpg|png|gif)$/)) {
    //                     $(".gallery").append(
    //                         "<img src='" + folder + val + "'>"
    //                     );
    //                 }
    //             });
    //     }
    // });



    // $(".carousel").carousel({
    //     interval: 2000
    // });
});