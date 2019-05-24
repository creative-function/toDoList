
// Todo List is our main class that does everything
class TodoList {
    
    constructor(){
        console.log('TodoList()');
        //sequence of what needs to happen:
        //1. figure out where to store things , i.e setup some inital vairables.  
        

        // declaring a vairable with *this* makes it accessible to the entire class 
        this.taskList = [];

        let newTask = document.querySelector('[name="new-todo"]');

        
        let taskCount = document.querySelector('.task-cnt');
        
        
        let checkbox = document.querySelector('[type="checkbox"]');

        let hidingTasks = true;
        
        //2. hook up listeners to the DOM elements
        //2a. keyup for todo field
        
        newTask.addEventListener('change',()=>{
            
            //2b. mouselick  or toggle the completed items checkbox
            //3. setup and manage the list of todoItems as they are created 
                //3a. setup an array to store tasks 
            const item = new TodoItem(newTask.value);
            this.taskList.push(item);
            //4 when 2a. is triggered, 
                //4a. add the item to the 3a.array
                //4b. update the count of items 
            taskCount.innerHTML = this.taskList.length;

            this.render();
            //5 then call render() [aka update (the array), refresh, make these changes etc.]  
                // this should be the only method in our TodoList cass that modifies DOM changes 


        })

        checkbox.addEventListener('click',()=>{
            console.log("checkbox items showing: ", hidingTasks);
            
            let doneTasks = document.querySelector('.done');
            
            hidingTasks = !hidingTasks;

            if(!hidingTasks){
                doneTasks.classList.add('show');
            }else if(hidingTasks){
                doneTasks.classList.remove('show');
            }

        
            this.render();
        })
    }

    render = () => {
        //loop over our list of items
        // if checbox/toggle true, show all completed items
        //update the DOM with any changes for the list 
        
        console.log("tasks are: ", this.taskList);
    }
}
//TodoItem represens and individual todo item in our list 


class TodoItem {

    //newTaskValue is the parameter that acceeps newTask.value line 29
    constructor(newTaskValue){

        this.newTaskValue = newTaskValue;

        console.log('TodoItem() value is: ' + newTaskValue);

        //sequence of what needs to happen:
        //1. need to create a div for the item 
        //      which includes a done button to mark it complete "done/undone"
        let taskBox = document.createElement('div');
        let bttn = document.createElement('button');

        this.completed = [];
        let doneCount = document.querySelector('.done-cnt');


        //4. setup a variabe to keep track of if this item is complete or not (boolean)
        this.done = false;

        bttn.innerHTML = "Done";
        taskBox.innerHTML = newTaskValue;

        //add a class for styling

        taskBox.classList.add('undone');
       
        //2. add it to the DOM 
        document.body.appendChild(taskBox);
        taskBox.appendChild(bttn);
        //3. add an event listener to the "done/undone" button
        bttn.addEventListener('click',()=>{
            // this toggles true or false. if true, turn false and vice versa 
          this.done = !this.done;
          if(!this.done){
            taskBox.classList.remove('undone');
            taskBox.classList.add('done');
            bttn.innerHTML = "Undo";
            this.completed.push(newTaskValue);
            console.log ("items done: " , this.completed)
          }else{
            taskBox.classList.remove('done');
            taskBox.classList.add('undone');
            bttn.innerHTML = "Done";
            
            console.log ("items undone: " , this.completed)
          }

          doneCount.innerHTML = this.completed.length;

            //update changes with every click 
          this.render();
         })


    }

    render = () => {
        console.log( this.newTaskValue + ' rendered', this.done)
        //updates the DOM with any changes for the list 

        //modify what the DOM element recognizes as "done/undone"
            //styling: a completed item should have strikethrough
            // the button label changed from done to undone 
        

    }

}


//for styling, assign a class to "done/undone" status and then have styling waiting on class mark. 