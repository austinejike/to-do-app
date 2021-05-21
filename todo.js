let dateElement = document.getElementById("date");
let list = document.getElementById("list");
let input = document.getElementById("input");


//class name
const CHECK = "fa-check-circle co";
const UNCHECK = "fa-circle co";
const LINE_THROUGH = "lineThrough";

let LIST = [];
let id;
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);


function addToDo(toDo, id, done, trash) {
    //debugger
    if(trash){
        return;
    }
    let DONE;
    let LINE ;
    if(done){
      DONE = CHECK
    }else{
        
       DONE =  UNCHECK
    }

    if(done){
        LINE = LINE_THROUGH 
        
    }else{
       LINE  = ""
    }
    //const DONE = done ? CHECK : UNCHECK;
    //const LINE = done ? LINE_THROUGH : "";

    let item = `
                <tr class="trow2">
                <td><i class="far ${DONE}" job="complete" id="0"></i></td>
                <td><p class="textp ${LINE}">${toDo}</p></td>
                <td><i class="far fa-trash-alt b" job="delete" id="0"></i></td>
                 </tr>
                `;

        const position = "beforeend";
    
        list.insertAdjacentHTML(position, item);

}

document.addEventListener("keyup", function(even){
    if(event.keyCode == 13){
        let toDo = input.value

        if(toDo){
           addToDo(toDo, id, true, false)

           
        //    id++;
        }
        
        input.value = ""
    }
});
//addToDo(toDo, 1, false, false)


