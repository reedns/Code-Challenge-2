$(document).ready(function () {
    $("#create").on("click", function () {
        var data = $("#todo_input").val();
        $("ul").prepend("<li>" + data);
        $("li").on("click", function () {
            $(this).remove();
        });
        return false;
    });
});