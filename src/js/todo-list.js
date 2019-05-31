
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
        
        let itemContainer = document.querySelector('.todo-items');

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
            
            hidingTasks = !hidingTasks;
            if(!hidingTasks){
                itemContainer.classList.add('show-completed');
            }else{
                itemContainer.classList.remove('show-completed');
            }

            this.render();
        })

        window.addEventListener('item-updated', this.render)
    }

    render = () => {
        //loop over our list of items
        // if checbox/toggle true, show all completed items
        //update the DOM with any changes for the list 
        
        let doneCount = document.querySelector('.done-cnt');

       var completedItems = this.taskList.filter(value => {
           console.log("this is value: " , value);
          
            return value.done
        })

        doneCount.innerHTML = completedItems.length;
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
        this.taskBox = document.createElement('div');
        this.bttn = document.createElement('button');

        let itemContainer = document.querySelector('.todo-items');


        // this.completed = [];


        //4. setup a variabe to keep track of if this item is complete or not (boolean)
        this.done = false;

        this.bttn.innerHTML = "Done";
        this.taskBox.innerHTML = newTaskValue;

        //add a class for styling

        this.taskBox.classList.add('undone');
       
        //2. add it to the DOM 
        itemContainer.appendChild(this.taskBox);
        this.taskBox.appendChild(this.bttn);

        //3. add an event listener to the "done/undone" button
        this.bttn.addEventListener('click',()=>{
            // this toggles true or false. if true, turn false and vice versa 
            
            this.done = !this.done;

            
            //update changes with every click 
            this.render();
            
            window.dispatchEvent(new Event('item-updated'))
            
            
        })
        
        
    }
    
    render = () => {
        console.log( this.newTaskValue + ' rendered', this.done)
        //updates the DOM with any changes for the list 
        if(this.done){ //if  done 
            this.taskBox.classList.remove('undone'); // remove this class
            this.taskBox.classList.add('done'); // add this class
            this.bttn.innerHTML = "Undo"; //change button to say
        }else{
            this.taskBox.classList.remove('done'); //remove this class
            this.taskBox.classList.add('undone'); //add this class
            this.bttn.innerHTML = "Done"; //change button to say
            // this.completed.push(newTaskValue); // add to "completed" array 
            
        }

        //modify what the DOM element recognizes as "done/undone"
            //styling: a completed item should have strikethrough
            // the button label changed from done to undone 
        

    }

}


//for styling, assign a class to "done/undone" status and then have styling waiting on class mark. 