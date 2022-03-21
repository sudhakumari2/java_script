// function addBtn(){
//     var doc=document.getElementById('input1')
//     var item=doc.localStorage.getItem();
//     null=[]
//     window.localStorage.setItem(key,value);
// }
// // 
// function ShowTasks(){
//     var input=document.getElementById("input1");
//     var list=JSON.parse(localStorage.getItem("key"));
//     console.log(list)
//     var ul=document.getElementById("todoList");
//     for (i of list){
//         var li=document.createElement("li");
//         var button=document.createElement('button');
//         console.log("button",button)
//         button.innerText='delete'
    
//     }
// }



function Showtasks(list){
    var user = document.getElementById("input1");
    var todolist = document.getElementById("todoList");
    var list1 = Json.parse(localStorage.getItem("key"));
    var allli = " ";
    var index = 0
    for (i of list1){
        allli+="<li>"+i+"<input type='button' value='delete' onclick='deletetask("+index+")' />< /li"
        index++
    }

    document.getElementById("todoList").innerHTML = allli;
    var list2 = JSON.parse(localStorage.getItem("key"));
    var show = "You have " + index + " task";
    document.getElementById("footer").innerHTML = show
};

function addBtn(){ 
    var element= document.getElementById("input1");
    var getkey = localStorage.getItem("key");
    var list = [];
    if (getkey == null){
        list.push(element.value);
        localStorage.setItem("key",JSON.stringify(list));
    }
    else{
        var a = localStorage.getItem("key");
        var text = Json.parse(a);
        text.push(element.value);
        localStorage.setItem('key',JSON.stringify(text));
    }
    element.value = " ";
    Showtasks(list);
};





// Fucntion clearALl, which will do 
//  - clear all todos by emptying the localstorage values by using removeItem
//  - and update the footer value also to zero tasks because after deleting there are no tasks to do
//  - And no list items means not tasks need to show in web page


// Function deleteTodo, which takes 1 parameter of index value from the task and use that index to find the task and delete that task and show remaong tasks