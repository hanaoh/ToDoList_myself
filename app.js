var todoData = [
    // {
    //     content: "eat",
    //     createdAt: 1
    // },
    // {
    //     content: "sleep",
    //     createdAt: 1000
    // }
];

function render(todoData){
    var $ul = $("ul");
    var HTML = "";

    for (var i = 0; i < todoData.length; i++){
        HTML = HTML + `
        <li id="${todoData[i].id}">
            <span class="delete">
                刪除
            </span>
            ${todoData[i].content}
            ${moment(todoData[i].createdAt).format("MM/DD hh:mm")}
        </li>`;
    };

    $("ul").empty();

    $ul.append(HTML);
};

render(todoData);

$("#addTodoBtn").on("click", function(event){
    event.preventDefault();

    // if(!String.prototype.trim){
    //     /*---------------------------------------
    //      * 清除字符串兩端空格，不包含換行符\n、製表符\t
    //      *---------------------------------------*/
    //     String.prototype.trim = function () { 
    //      return this.replace(/(^[\s]+|[\s]+$)/g, "");
    //     }
         
    // };

    var $addTodoInput = $("#addTodoInput");
    var newTodoText = $addTodoInput.val().trim();

    if(!newTodoText) return;

    // $("ul").append(`<li>${newTodoText} ${moment().format("MM/DD hh:mm")}</li>`);
    var newTodoData = {
        id: uuid(),
        content: newTodoText,
        createdAt: moment().valueOf()
    };

    todoData.push(newTodoData);

    render(todoData);

    $addTodoInput.val("");
});

$("ul").on("click", ".delete", function(){
    var idToDelete = $(this).parent("li").attr("id");

    todoData = todoData.filter(function(todo){
        if(todo.id === idToDelete) return false;
        else return true;
    });

    render(todoData);
});