"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Todo List is our main class that does everything
var TodoList = function TodoList() {
  var _this = this;

  _classCallCheck(this, TodoList);

  _defineProperty(this, "render", function () {
    //loop over our list of items
    // if checbox/toggle true, show all completed items
    //update the DOM with any changes for the list 
    console.log("tasks are: ", _this.taskList);
  });

  console.log('TodoList()'); //sequence of what needs to happen:
  //1. figure out where to store things , i.e setup some inital vairables.  
  // declaring a vairable with *this* makes it accessible to the entire class 

  this.taskList = [];
  var newTask = document.querySelector('[name="new-todo"]');
  var taskCount = document.querySelector('.task-cnt');
  var checkbox = document.querySelector('[type="checkbox"]');
  var hidingTasks = true; //2. hook up listeners to the DOM elements
  //2a. keyup for todo field

  newTask.addEventListener('change', function () {
    //2b. mouselick  or toggle the completed items checkbox
    //3. setup and manage the list of todoItems as they are created 
    //3a. setup an array to store tasks 
    var item = new TodoItem(newTask.value);

    _this.taskList.push(item); //4 when 2a. is triggered, 
    //4a. add the item to the 3a.array
    //4b. update the count of items 


    taskCount.innerHTML = _this.taskList.length;

    _this.render(); //5 then call render() [aka update (the array), refresh, make these changes etc.]  
    // this should be the only method in our TodoList cass that modifies DOM changes 

  });
  checkbox.addEventListener('click', function () {
    console.log("checkbox items showing: ", hidingTasks);
    var doneTasks = document.querySelector('.done');
    hidingTasks = !hidingTasks;

    if (!hidingTasks) {
      doneTasks.classList.add('show');
    } else if (hidingTasks) {
      doneTasks.classList.remove('show');
    }

    _this.render();
  });
}; //TodoItem represens and individual todo item in our list 


var TodoItem = //newTaskValue is the parameter that acceeps newTask.value line 29
function TodoItem(newTaskValue) {
  var _this2 = this;

  _classCallCheck(this, TodoItem);

  _defineProperty(this, "render", function () {
    console.log(_this2.newTaskValue + ' rendered', _this2.done); //updates the DOM with any changes for the list 
    //modify what the DOM element recognizes as "done/undone"
    //styling: a completed item should have strikethrough
    // the button label changed from done to undone 
  });

  this.newTaskValue = newTaskValue;
  console.log('TodoItem() value is: ' + newTaskValue); //sequence of what needs to happen:
  //1. need to create a div for the item 
  //      which includes a done button to mark it complete "done/undone"

  var taskBox = document.createElement('div');
  var bttn = document.createElement('button');
  this.completed = [];
  var doneCount = document.querySelector('.done-cnt'); //4. setup a variabe to keep track of if this item is complete or not (boolean)

  this.done = false;
  bttn.innerHTML = "Done";
  taskBox.innerHTML = newTaskValue; //add a class for styling

  taskBox.classList.add('undone'); //2. add it to the DOM 

  document.body.appendChild(taskBox);
  taskBox.appendChild(bttn); //3. add an event listener to the "done/undone" button

  bttn.addEventListener('click', function () {
    // this toggles true or false. if true, turn false and vice versa 
    _this2.done = !_this2.done;

    if (!_this2.done) {
      taskBox.classList.remove('undone');
      taskBox.classList.add('done');
      bttn.innerHTML = "Undo";

      _this2.completed.push(newTaskValue);

      console.log("items done: ", _this2.completed);
    } else {
      taskBox.classList.remove('done');
      taskBox.classList.add('undone');
      bttn.innerHTML = "Done";
      console.log("items undone: ", _this2.completed);
    }

    doneCount.innerHTML = _this2.completed.length; //update changes with every click 

    _this2.render();
  });
}; //for styling, assign a class to "done/undone" status and then have styling waiting on class mark.
//# sourceMappingURL=todo-list.js.map
