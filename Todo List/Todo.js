const input=document.getElementById('display');
const listTask=document.getElementById('list-holder');

function addTask(){
    if(input.value.trim()===""){
        alert("you have to add a task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listTask.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    saveData();
}
listTask.addEventListener('click',function(e){
        if(e.target.tagName==="LI"){
     e.target.classList.toggle('checked');
     saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
     }
},false
);

function saveData(){
    localStorage.setItem("data",listTask.innerHTML);
}
function showTask(){
    listTask.innerHTML=localStorage.getItem("data");
}
showTask();
