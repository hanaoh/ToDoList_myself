$("#addTodoBtn").on("click", function(event){
    event.preventDefault();

    var $addTodoInput = $("#addTodoInput");
    var newTodoText = $addTodoInput.val().trim();

    if(!newTodoText) return;

    if(!String.prototype.trim){
        /*---------------------------------------
         * 清除字符串兩端空格，不包含換行符\n、製表符\t
         *---------------------------------------*/
        String.prototype.trim = function () { 
         return this.replace(/(^[\s]+|[\s]+$)/g, "");
        }
         
       };

    $("ul").append(`<li>${newTodoText} ${moment().format("MM/DD hh:mm")}</li>`);

    $addTodoInput.val("");
});