let mainBox = document.querySelector(".mainBox");

let monitor = document.querySelector('.mainBoxSection1');

mainBox.addEventListener('click',(event)=>{    
    if(!event.target.classList.contains('but'))return
    let action = event.target.innerText
  
    switch(action){
        case 'AC':monitor.innerHTML = ''
        break;
        case '=':monitor.innerHTML = eval(monitor.innerHTML).toFixed(2)
        break;
        case 'Del':monitor.innerHTML = monitor.innerHTML.slice(0, -1)
        break;       
        case '00':{
            if(monitor.innerHTML != '')return monitor.innerHTML += action
                return monitor.innerHTML += ''
        } 
        // break;
        // case '0':{
        //     if(monitor.innerHTML != '')return monitor.innerHTML += action
        //         return monitor.innerHTML += ''
        // } 
        // break;
        case '+':{
            if(monitor.innerHTML != '')return monitor.innerHTML += action
                return monitor.innerHTML += ''
        } 
        // break;
        case '-':{
            if(monitor.innerHTML != '')return monitor.innerHTML += action
                return monitor.innerHTML += ''
        } 
        // break;
        case '*':{
            if(monitor.innerHTML != '')return monitor.innerHTML += action
                return monitor.innerHTML += ''
        } 
        // break;
        case '/':{
            if(monitor.innerHTML != '')return monitor.innerHTML += action
                return monitor.innerHTML += ''
        } 
        // break;
        case '.':{
            if(monitor.innerHTML != '')return monitor.innerHTML += action
                return monitor.innerHTML += ''
        } 
        // break;
        

        default:monitor.innerHTML += action 
    }
    
})



console.log("asdasdsa")