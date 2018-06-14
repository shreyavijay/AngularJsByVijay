$(document).ready(function () {
    // jQuery methods go here...
    console.log('Executed document.ready');
    //Initialize docucment.ready
    $(this).removeClass("active");
    $("button.accordion").click(function () {
        $(this).toggleClass("active");
        $(this).next().toggle().css("display")
        /*
                if($(this).css("display") === "block"){
                    console.log($(this).next());
                    $("this").next().toggle();
                } else {
                    $(this).next().toggle().css("display")
                    
                }
            */
    });
}); 