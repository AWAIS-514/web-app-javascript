function todo() {




    // get value
    var a=document.getElementById('todo_text');
  a.innerText=" ";
    var li=document.createElement('li');
    var text=document.createTextNode(a.value);
   li.appendChild(text);
   
   var ul=document.getElementById('todo');
    
   ul.setAttribute("class","abc");
   ul.appendChild(li);
   linebreak = document.createElement("br");
   li.appendChild(linebreak);
todo_text.value="";
            // create delete button
var del=document.createElement("button");
var delt=document.createTextNode('Skip');
del.appendChild(delt)
del.setAttribute("class","btnjava")
li.appendChild(del);
del.setAttribute("onclick","del(this)");


// create edit button


var edit=document.createElement("button");
var text_edit=document.createTextNode("Modify");
edit.appendChild(text_edit);
edit.setAttribute("class","btnjava");
li.appendChild(edit);
edit.setAttribute("onclick","edit(this)");



}



function del(e){

    e.parentNode.remove();
    console.log(e);


}
function deletell(){
    var list=document.getElementById("todo");
    list.innerHTML=""

}
function edit(e){

var val=e.parentNode.firstChild;
var edit_txt=prompt("Enter a task you want to modify","....other task...");


e.parentNode.firstChild.nodeValue=edit_txt;
   
}


