//Run program
function init() {
    barDrop();
    pushItems();
    watchClicks();
}

//Set up drop down input bar
function barDrop() {
    //New item input bar toggle
    $(".fa-plus").on("click", function () {
        $("#newItem").slideToggle();
        $("#newItem").focus();
    });
    return;
}

//Push new item to fullList array
function pushItems() {
    $("#newItem").keypress(function (e) {
        if (e.which === 13 && $(this).val() !== "") {
            $("ul").append(`<li class="border-bottom border-dark"><span class="border-dark border-left-0"><i class="fas fa-trash-alt align-middle"></i></span>&nbsp${$(this).val()}&nbsp</li>`);
            $(this).val("");
        }
    });
    return;
}

//Watch for clicks on lis and trash cans
function watchClicks() {

    //Delete on trash click
    $("ul").on("click", "span", function (e) {
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
        });
        e.stopPropagation();
    });

    //Strike through on li click
    $("ul").on("click", "li", function () {
        $(this).toggleClass("markedOut");
    });
    return;
}
