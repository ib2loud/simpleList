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
            $("ul").append(`<li class="border-bottom border-dark"><span class="border-dark border-left-0 fullSpan"><span class="trashCan border-dark border-left-0"><img class="fa-trash-alt" src="images/trash.png"></span><span class="border-dark border-left-0 checkMark"><img class="fa-check" src="images/check.png"></span></span>&nbsp${$(this).val()}&nbsp</li>`);
            $(this).val("");
        }
    });
    return;
}

//Watch for clicks on lis and trash cans
function watchClicks() {

    //Delete on trash click
    $("ul").on("click", "span.trashCan", function (e) {
        $(this).closest("li").fadeOut(500, function () {
            $(this).remove();
        });
        e.stopPropagation();
    });

    //Strike through on li click
    $("ul").on("click", "span.checkMark", function () {
        $(this).closest("li").toggleClass("markedOut");
    });
    return;
}
