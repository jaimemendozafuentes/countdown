
let opciones = document.getElementById("optionSetting")
const closeSettings = document.getElementById("close-settings")
const pomodoroMode = document.querySelector(".selection-butons").children[0]
const shortMode = document.querySelector(".selection-butons").children[1]
const longMode = document.querySelector(".selection-butons").children[2]
const changeFirst = document.querySelector(".first")
const shadowStart = document.querySelector(".content-start-btn")
const partialTime = document.querySelector(".time-selected")

/**
 * Vista del tiempo
 */

const pomodoroViwe = document.querySelectorAll(".ehxkK")[0].addEventListener("change", () =>{
    partialTime.innerHTML= document.querySelectorAll(".ehxkK")[0].value + ":00"
})

const shortView = document.querySelectorAll(".ehxkK")[1].addEventListener("change", () =>{
    partialTime.innerHTML= document.querySelectorAll(".ehxkK")[1].value + ":00"
})

const longView = document.querySelectorAll(".ehxkK")[2].addEventListener("change", () =>{
    partialTime.innerHTML= document.querySelectorAll(".ehxkK")[2].value + ":00"
})

/**
 * Desplegar u ocultar setting
 */
opciones.addEventListener("click", () =>{
    document.getElementById("manuel").style.display="block";
    document.body.style.overflow="hidden";
})

closeSettings.addEventListener("click", () =>{
    document.getElementById("manuel").style.display="none";
    document.body.style.overflow="auto";
})


/**
 * Interactuar con los diferentes modos (Pomodoro, Short Break, Long Break)
 */

pomodoroMode.addEventListener("click", () => {
    restartProgreso()
    shortMode.classList.remove("buton-active")
    longMode.classList.remove("buton-active")
    pomodoroMode.classList.add("buton-active")
    partialTime.innerHTML= document.querySelectorAll(".ehxkK")[0].value + ":00"
    
    changeFirst.style.backgroundColor = "rgb(217, 85, 80)";
    shadowStart.style.boxShadow = "5px 5px 5px 5px #ac5353";
    shadowStart.style.color = "rgb(217, 85, 80)";

    shadowStart.addEventListener("mouseover", () => {
        shadowStart.style.boxShadow = "none"
    })

    shadowStart.addEventListener("mouseout", () => {
        shadowStart.style.boxShadow = "5px 5px 5px 5px #ac5353"
    })

})

shortMode.addEventListener("click", () => {
    restartProgreso()
    pomodoroMode.classList.remove("buton-active")
    longMode.classList.remove("buton-active")
    shortMode.classList.add("buton-active")
    partialTime.innerHTML= document.querySelectorAll(".ehxkK")[1].value + ":00"
    changeFirst.style.backgroundColor = "rgb(76, 145, 149)";
    shadowStart.style.boxShadow = "5px 5px 5px 5px #3E7275";
    shadowStart.style.color = "rgb(76, 145, 149)";

    shadowStart.addEventListener("mouseover", () => {
        shadowStart.style.boxShadow = "none"
    })

    shadowStart.addEventListener("mouseout", () => {
        shadowStart.style.boxShadow = "5px 5px 5px 5px #3E7275"
    })
})

longMode.addEventListener("click", () => {
    restartProgreso()
    shortMode.classList.remove("buton-active")
    pomodoroMode.classList.remove("buton-active")
    longMode.classList.add("buton-active")
    partialTime.innerHTML= document.querySelectorAll(".ehxkK")[2].value + ":00"
    changeFirst.style.backgroundColor = "rgb(69, 124, 163)";
    shadowStart.style.boxShadow = "5px 5px 5px 5px #36607E";
    shadowStart.style.color = "rgb(69, 124, 163)";

    shadowStart.addEventListener("mouseover", () => {
        shadowStart.style.boxShadow = "none"
    })

    shadowStart.addEventListener("mouseout", () => {
        shadowStart.style.boxShadow = "5px 5px 5px 5px #36607E"
    })
})


/**
 * Activar / Desactivar tiempo
 */

const startTime = document.querySelector(".content-start-btn")
const advanceRound = document.querySelector(".advanced-round-btn")
let startStop = 0;
startTime.addEventListener("click", () => {
    if (startStop === 0){
        startStop = 1;
        startTime.innerHTML = "STOP"
        // Visualización advance-round-btn
        advanceRound.style.opacity = "1"
        timer = setInterval(countDown,1000)
        progress = setInterval(barraProgreso,1000)
    }else{
        startStop = 0
        startTime.innerHTML = "START"
        advanceRound.style.opacity = "0"
        clearInterval(timer)
        clearInterval(progress)
    }

})


/**
 * Cuenta atrás
 */
let cuentaAtras = partialTime.innerHTML
let cuentaProgress = 0;
function countDown() {
    let incre = 0
    let number = ""
    let arrayTime = []
    cuentaAtras = partialTime.innerHTML
    if(cuentaProgress === 0){
        segundos = (parseInt(cuentaAtras, 10) * 60)
        cuentaProgress = 1
    }
    if (cuentaAtras === "0:00") {
        return;
    }
    for (let index = 0; index < cuentaAtras.length; index++) {
        
        if (cuentaAtras[index] === ":") {
            arrayTime[index] = cuentaAtras[index]
        }


        if (index <= cuentaAtras.length - 4) {
            while(incre <= cuentaAtras.length - 4){
                number = number.concat(cuentaAtras[incre])
                incre++
            }
        }else{
            arrayTime[index] = Number(cuentaAtras[index])
        }
    }

    if (arrayTime[cuentaAtras.length-1] > 0) {
        arrayTime[cuentaAtras.length-1]--
    }else{
        arrayTime[cuentaAtras.length-1] = 9
        if (arrayTime[cuentaAtras.length-2] > 0) {
            arrayTime[cuentaAtras.length-2]--
        }else{
            arrayTime[cuentaAtras.length-2] = 5
        }
        if (arrayTime[cuentaAtras.length-2] === 5 && arrayTime[cuentaAtras.length-1] === 9) {
            number = Number(number -1)
        }
    }

    
    cuentaAtras = number+":"+arrayTime[cuentaAtras.length-2]+""+arrayTime[cuentaAtras.length-1] 
    
    partialTime.innerHTML = cuentaAtras
}

/**
 * Activar Botón Auto Start Breaks
 */
const autoBreak = document.querySelectorAll(".lnqwHM")[0]
const buttonAutoBreak = document.querySelectorAll(".dqroNL")[0]
autoBreak.addEventListener("click", () =>{
    autoBreak.classList.toggle("lnqwHM_toggle")
    buttonAutoBreak.classList.toggle("dqroNL_toggle")
})

/**
 * Activar Botón Auto Start Pomodoros
 */
const autoPomodoro = document.querySelectorAll(".lnqwHM")[1]
const buttonAutoPomodoro = document.querySelectorAll(".dqroNL")[1]
autoPomodoro.addEventListener("click", () =>{
    autoPomodoro.classList.toggle("lnqwHM_toggle")
    buttonAutoPomodoro.classList.toggle("dqroNL_toggle")
})

/**
 * Desplegar Menú de tareas
 */
const taskMenuBtn = document.querySelector(".menu-tasks-btn")
taskMenuBtn.addEventListener("click", () =>{
    const taskMenu = document.querySelector(".life-tasks")
    taskMenu.classList.toggle("life-tasks-toggle")
})

taskMenuBtn.addEventListener("mousedown", () =>{
    taskMenuBtn.classList.add("menu-tasks-btn-toggle")
})

taskMenuBtn.addEventListener("mouseup", () =>{
    taskMenuBtn.classList.remove("menu-tasks-btn-toggle")
})

/**
 * Add Task
 * 
 */
const addTask = document.querySelector(".addTask")
const createTask = document.querySelector(".createTask")
const cancelTaskBtn = document.querySelector(".other-interaction-first-btn")
//const cancelTask = document.querySelector(".ot")
addTask.addEventListener("click", () =>{
    createTask.classList.toggle("createTask-toggle")
    addTask.classList.toggle("addTask-toogle")
    namePomodoro.focus()
})

cancelTaskBtn.addEventListener("click", () =>{
    createTask.classList.remove("createTask-toggle")
    addTask.classList.remove("addTask-toogle")
    namePomodoro.value=""
    namePomodoro.placeholder="What are you working on?"
})

/**
 * Barra de progreso
 */

const progressBar = document.querySelector(".progress-bar-inside")
let paso = 0;
let progressMode = 0
let autoChange = 0
function barraProgreso(){ 
    paso++;
    if(progressBar.style.width === "100%"){
        progressMode = 1
        restartProgreso();
        document.getElementById("shortF").click()
        if (autoChange < 0) {
            startTime.click()
            console.log("heyyy")
        }

    }else{
        progressBar.style.width = (100 / segundos) * paso +"%";
    }
}

function restartProgreso(){
    clearInterval(progress)
    clearInterval(timer)
    cuentaProgress = 0
    segundos = 0
    paso = 0
    startStop = 0
    startTime.innerHTML = "START"
    progressBar.style.width = 0+"%";
}

/**
 * Add task to application
 */

//Append mode
// Create a new Task to do
function addNewTask (id){
    //Create a new html block
    let newTask = '<div class="content-addTask">';
    newTask+='<div id="" draggable ="true" class="jm-content-addTask">';
    newTask+='<div class="box-jm-content-addTask">';
    newTask+='<div id="" class="partial-box-jm-content-addTask">';
    newTask+='<div class="visual-partial-box-jm-content-addTask">';
    //after
    newTask+='</div>';
    newTask+='<span class="qMMEEoo" id="numId'+id+'">';
    newTask+='<span class="gUMilyyy">';
    //Aquí iría el nombre de la task
    newTask+='</span>';
    newTask+='</span>';
    newTask+='</div>';
    newTask+='<div class="rkwiiii">';
    newTask+='<span class="bIiizeee">';
    newTask+='</span>';        
    newTask+='<div class="kBYriggg">';
    newTask+='<div class="kzQveNnn">';
    newTask+='<img src="../../assets/images/vertical-ellipsis.png" alt="option icon" class="ghSEsfff">';// Add route
    newTask+='</div>';
    newTask+='</div>';
    newTask+='</div>';
    newTask+='</div>';
    newTask+='</div>';
    newTask+='</div>';
    const fatherTask = document.querySelector(".taskstodo")
    const introNewTask = document.createElement('div')
    introNewTask.innerHTML = newTask
    fatherTask.append(introNewTask)
    document.querySelectorAll(".qMMEEoo")[id].innerHTML = namePomodoro.value
    let arraySteps = [0, " / ", quantityPomodoro.value]
    document.querySelectorAll(".bIiizeee")[id].innerHTML = arraySteps[0]+arraySteps[1]+arraySteps[2]
    //document.querySelectorAll(".fZdwWbbb").innerHTML = "/ "
    incre++
}


//Add the task name and the pomodoro value
let incre = 0
const savePomodoro = document.querySelector(".other-interaction-second-btn")
savePomodoro.addEventListener("click", ()=>{
    if (namePomodoro.value != "") {
        console.log(namePomodoro.value)
        console.log(value)
        namePomodoro.placeholder="What are you working on?"
        createTask.classList.remove("createTask-toggle")
        addTask.classList.remove("addTask-toogle")
        addNewTask(incre);
        namePomodoro.value=""
        quantityPomodoro.value = 1;
        value = 1;
        
    }else{
        alert("Please, enter a name of task")
    }
})
// Name Task Pomodoro
const namePomodoro = document.getElementById('createTaskName');
// Up down number
const quantityPomodoro = document.getElementById('pomodoro-input');
let value = 1;
btnUp = document.querySelectorAll(".pomodoro-upgrade")[0]
btnUp.addEventListener("click", () =>{
    value++
    quantityPomodoro.value = value;
})
btnDown = document.querySelectorAll(".pomodoro-upgrade")[1]
btnDown.addEventListener("click", () =>{
    if (value > 1) {
        value--
        quantityPomodoro.value = value;
    }
    
})







