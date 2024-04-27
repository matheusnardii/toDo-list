const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(tasksList){
  const ulTasks = document.querySelector("ul");
  ulTasks.innerHTML = "";
 
  for(let i = 0; i < tasksList.length; i++){
    const currentTaks = tasksList[i];
    const task = createTaskItem(currentTaks);
    ulTasks.append(task);
  }
}
renderElements(tasks);

function createTaskItem (tasksLists) {
  const liTask = document.createElement("li");
  const divTask = document.createElement("div");
  const spanTask = document.createElement("span");
  const pTask = document.createElement("p");
  const buttonTask = document.createElement("button");
  const iButtonTask = document.createElement("i");


  liTask.append(divTask, buttonTask);
  divTask.append(spanTask, pTask);
  buttonTask.appendChild(iButtonTask);


  liTask.classList.add("task__item");


  divTask.classList.add("task-info__container");


  spanTask.classList.add("task-type");
  if(tasksLists.type == "Urgente"){
    spanTask.classList.add("span-urgent")
  }else if(tasksLists.type == "Importante"){
    spanTask.classList.add("span-important")
  }else if(tasksLists.type == "Normal"){
    spanTask.classList.add("span-normal")
  }


  pTask.innerText = tasksLists.title;


  buttonTask.classList.add("task__button--remove-task");


  iButtonTask.classList.add("fa-solid");
  iButtonTask.classList.add("fa-trash");
  iButtonTask.classList.add("fa-lg");
  iButtonTask.style.color = "#000000";

  iButtonTask.addEventListener("click", function(){
    
    let taskRemove = tasks.indexOf(tasksLists);
    tasks.splice(taskRemove, 1);

    const ulTasks = document.querySelector("ul");
    ulTasks.innerHTML = "";
    renderElements(tasks);
  })
  
  return liTask
  
}


function createTaks(){
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event){
    event.preventDefault();
    event.stopPropagation();
    const ul = document.querySelector("ul");
    const taskTitle = document.querySelector(".form__input--text");
    const taskType = document.querySelector(".form__input--priority");
    if(taskTitle.value == ""){
      alert("Por Favor, dê um título a sua tarefa!");
    } else if(taskType.value == ""){
      alert("Por favor, selecione o tipo da sua tarefa!")
    } else {
      const newTask = {
        title: taskTitle.value,
        type: taskType.value
      }
  
      tasks.push(newTask);
      ul.innerHTML = "";
      renderElements(tasks);
    }
  })
}

 createTaks()




