//select push id and using onclick eventHandler & function for if/else.
document.querySelector('#push').onclick = function(){  
 if(document.querySelector('#newtask input').value.length == 0){
      //alert if input is empty.
      alert("Kindly Enter Task Name !!!")   
    }
    else{
        // select tasks id to display and store input values with the help of innerHTML.
        document.querySelector('#tasks').innerHTML +=           
        // using backticks (``) to create div tasks sections, ${} for capture the input values and span for styling & button will delete the tasks.
        `                            
        <div class="task">
         <span class="taskname">
        ${document.querySelector('#newtask input').value}
         </span>
         <button class="delete">
         <i class="fa-solid fa-trash-can"></i>
        </button>       
        </div>
        `;   
        //select all delete buttons.
        let current_tasks = document.querySelectorAll(".delete");  
        for(let i=0; i<current_tasks.length; i++){    
        //by clicking on delete icons function() runs.                  
        current_tasks[i].onclick = function(){    
        //use this keyword to call parentNode and .remove() can delete the task.                     
        this.parentNode.remove();                                  
           
           }
        }
    }
}
