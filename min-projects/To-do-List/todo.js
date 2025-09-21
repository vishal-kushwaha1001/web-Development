let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let AddTask = document.querySelector("button");


AddTask.addEventListener("click", function addTask(){
    let task = document.createElement("li");
    task.innerText = inp.value;
    
    let delbtn = document.createElement("button");
    delbtn.innerText= "Delete";
    delbtn.classList.add("delete");
    task.appendChild(delbtn);
    
    ul.appendChild(task);
    inp.value ="";
});
 
ul.addEventListener("click", function deleteTask(event){
    if(event.target.nodeName == "BUTTON"){
        let delTask = event.target.parentElement;
        delTask.remove();
        console.log("delete item");
    }
    console.dir();
});