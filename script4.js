
function changeColor(){
    var doc_id=document.getElementById("container1");
    var input=document.getElementById("input1");
    doc_id.style.backgroundColor=input.value;
    input.value=null;
}