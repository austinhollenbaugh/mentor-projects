//need to remove task at the end of the list

$(document).ready(function() {
  let listo = [];

  if (localStorage.getItem('listo')) {
    listo = JSON.parse(localStorage.getItem('listo'));
    console.log(listo);
    for (var i = 0; i < listo.length; i++) {
      console.log("listo[i]", listo[i]);
      if(listo[i].id === 'new') {
        $('#newList').append('<a href="#finish" class="" id="item">' + '<li class="list-group-item">' + '<h3>' + listo[i].task + '</h3>' + '<span class="arrow pull-right">' + '<i class="glyphicon glyphicon-arrow-right">' + '</span>' + '</li>' + '</a>');
      } else if (listo[i].id === 'inProgress') {
        console.log("item in progress");
        $('#currentList').append('<a href="#finish" class="" id="item">' + '<li class="list-group-item">' + '<h3>' + listo[i].task + '</h3>' + '<span class="arrow pull-right">' + '<i class="glyphicon glyphicon-arrow-right">' + '</span>' + '</li>' + '</a>');
      } else if (listo[i].id === 'archived') {
        console.log("item archived");
        $('#archivedList').append('<a href="#finish" class="" id="item">' + '<li class="list-group-item">' + '<h3>' + listo[i].task + '</h3>' + '<span class="arrow pull-right">' + '<i class="glyphicon glyphicon-arrow-right">' + '</span>' + '</li>' + '</a>');

      }
    }
  }

  function Task(task) {
    this.task = task;
    this.id = 'new';
  }

  $(document).on('click', '#item', function(e) {
    e.preventDefault();
    let task = this;
    advanceTask(task);
    this.id = 'inProgress';
    //task here is the html element
    $('#currentList').append(this.outerHTML);
  });

  $(document).on('click', '#inProgress', function (e) {
    e.preventDefault();
    let task = this;
    task.id = "archived";
    let changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
    advanceTask(task);
    $('#archivedList').append(changeIcon);
  });

  $(document).on('click', '#archived', function (e) {
    e.preventDefault();
    let task = this;
    advanceTask(task);
  });

  var advanceTask = function(task) {
    let modified = task.innerText.trim().toLowerCase();
    for(var i = 0; i < listo.length; i++) {
      if (listo[i].task === modified) {
        if (listo[i].id === 'new') {
          listo[i].id = 'inProgress';
          localStorage.setItem("listo", JSON.stringify(listo));
        } else if (listo[i].id === 'inProgress') {
          listo[i].id = 'archived';
          localStorage.setItem("listo", JSON.stringify(listo));
        } else {
          console.log("advance task delete", listo[i].id);
          listo.splice(i, 1);
          localStorage.setItem("listo", JSON.stringify(listo));
        }
        break;
      }
    }
    task.remove();
  };
  $('#newTaskForm').hide();

  function addTask (task) {
    if(task) {
      console.log(task);
      task = new Task(task);
      listo.push(task);
      localStorage.setItem("listo", JSON.stringify(listo));
      $('#newItemInput').val('');
        $('#newList').append('<a href="#finish" class="" id="item">' + '<li class="list-group-item">' + '<h3>' + task.task + '</h3>' + '<span class="arrow pull-right">' + '<i class="glyphicon glyphicon-arrow-right">' + '</span>' + '</li>' + '</a>');
    }

    $('#newTaskForm').slideToggle('fast', 'linear');
    }
  $('#saveNewItem').on('click', function(e) {
      e.preventDefault();
      let task = $('#newItemInput').val().trim();
      addTask(task);
  });
  //opens form
  $('#add-todo').on('click', function() {
    $('#newTaskForm').fadeToggle('fast', 'linear');
  });
  //closes form
  $('#cancel').on('click', function (e) {
      e.preventDefault();
      $('#newTaskForm').fadeToggle('fast', 'linear');
  });
});
