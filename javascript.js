



/*$(document).ready(function(){
    $('#load').click(function(){
        $.ajax({
            url: "js.txt",
            cache: false,

            success: function(html){
                $("#list").html(html);
            }
        });
        return false;
    });
});

$(document).ready(function() {

    $('body').append('<p>lorem ipsun</p>');

    $("p").mouseover(function () {
        $("p").css("color", "red")
    });

    $("p").mouseout(function () {
        $("p").css("color", "white")
    });

    $('div').click(function() {
        $(this).toggleClass('style a');
    });

         // $("div").addClass("a");

        $("body").addClass("vid");

    $("a").attr("href", "http://www.google.com/");
    });
*/


$(document).ready(function() {

    $('body').on('click', '.menu a', function (e) {
        console.log($(this).data('page'));

        var page = $(this).data("page");


            $.ajax({
                url: "http://psv.woocoder.com/Decoblog/DecoBlog-" + page ,
                cache: false,

                success: function(html){
                    $("body").html(html);
                }
            });
            return false;


    });




});







