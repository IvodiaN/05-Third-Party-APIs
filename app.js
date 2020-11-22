window.onload = init;

function init() {
    console.log('Page loaded')
    let count,
        hour,
        hourKeys,
        textarea,
        InpuIndexnumss,
        briefcase= [],
        listOfInputsInForm ,
        inputColors,
        buttons;

    const DateTime = luxon.DateTime;   
//Get and display current day
const currentDay = document.querySelector('#currentDay');
    currentDay.innerHTML = DateTime.local().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });;

    const hourss = DateTime.local().toObject().hour;
    console.log(hourss , typeof hourss)
    setTime()   
    function setTime() {
        hour = document.querySelectorAll('.hour');
        hourKeys = Object.keys(hour);
        //console.log(hourKeys, Array.isArray(hourKeys))
        for (count = 0; count < hour.length; count++){
            if (hourKeys[count] <= 12) {
                hour[count].innerHTML = hourKeys[count] + 'AM'
            } else (
                hour[count].innerHTML = hourKeys[count] + 'PM'
            )
        }
    }
    setInputColor()
    function setInputColor() {
        //Target all input elements
        textarea = document.querySelectorAll('input');
        console.log(textarea) 
        inputColors = Object.keys(textarea);
        console.log(inputColors, typeof inputColors)
        for (count = 0; count < textarea.length; count++){
            InpuIndexnumss = inputColors[count];
            if (InpuIndexnumss == hourss) {
                textarea[InpuIndexnumss].style.backgroundColor = "#ff6961";
                textarea[InpuIndexnumss].style.color = "#fffff"
                textarea[InpuIndexnumss].style.fontSize = "2rem";
                textarea[InpuIndexnumss].style.border = "0.1rem solid white"
            }
           else if (InpuIndexnumss < hourss) {
                textarea[InpuIndexnumss].style.backgroundColor = "#d3d3d3";
                textarea[InpuIndexnumss].style.color = "#ffffff";
                textarea[InpuIndexnumss].style.fontSize = "2rem";
                textarea[InpuIndexnumss].style.border = "0.1rem solid white"
            } else if (InpuIndexnumss > hourss) {
                textarea[InpuIndexnumss].style.backgroundColor = "#77dd77";
                textarea[InpuIndexnumss].style.color = "#ffffff";
                textarea[InpuIndexnumss].style.fontSize = "2rem";
                textarea[InpuIndexnumss].style.border = "0.1rem solid white"
            }        
        }
    }
//   startIt()
       
    function startIt() {
        console.log("Adding input listener to all input fields");
        // add an input listener to all input fields
        var listOfInputsInForm = document.querySelectorAll("input");
     
        for (count = 0; count < listOfInputsInForm.length; count++) {
           addInputListener(listOfInputsInForm[count]);
        }
        // restore form content with previously saved values
        restoreFormContent();
     }
     function addInputListener(inputField) {
        inputField.addEventListener('input', function(event) {
            localStorage.setItem(inputField.id, inputField.value);
         }, false);
    }
    function restoreFormContent() {
        console.log("restoring form content from localStorage");
        // get the list of all input elements in the form
        var listOfInputsInForm = document.querySelectorAll("input");
        
        for(count= 0; count < listOfInputsInForm.length; count++) {
          var fieldToRestore = listOfInputsInForm[count];
          var id = fieldToRestore.id;
          var savedValue = localStorage.getItem(id);
          if(savedValue !== undefined) {
             fieldToRestore.value = savedValue;
          }
        }
    }
   

    buttons = document.querySelectorAll('button');
    console.log(buttons)
    buttonList = Object.keys(buttons);
    console.log(buttonList)
    for (count = 0; count < buttons.length; count++) {
        console.log(buttons[count])
        igniteSave(buttons[count])
    }
    function igniteSave(buts) {
        buts.addEventListener('click',startIt)
    }   
    
}
