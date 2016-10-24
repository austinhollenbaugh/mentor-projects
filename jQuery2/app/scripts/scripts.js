$(document).ready(function() {
  let listo = [];
  function Task(task) {
    this.task = task;
    this.id = 'new';
  }
  $(document).on('click', '#item', function(e) {
    e.preventDefault();
    let task = this;
    advanceTask(task);
    this.id = 'inProgress';
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
  const advanceTask = function(task) {
    let modified = task.innerText.trim();
    for(var i = 0; i < listo.length; i++) {
      if (listo[i].task === modified) {
        if (listo[i].id === 'new') {
          listo[i].id = 'inProgress';
        } else if (listo[i].id === 'inProgress') {
          listo[i].id = 'archived';
        } else {
          listo.splice(i, 1);
        }
        break;
      }
    }
    task.remove();
  };
  $('#newTaskForm').hide();
  const addTask = (task) => {
    if(task) {
      task = new Task(task);
      listo.push(task);
      $('#newItemInput').val('');
        $('#newList').append('<a href="#finish" class="" id="item">' + '<li class="list-group-item">' + '<h3>' + task.task + '</h3>' + '<span class="arrow pull-right">' + '<i class="glyphicon glyphicon-arrow-right">' + '</span>' + '</li>' + '</a>');
    }
    $('#newTaskForm').slideToggle('fast', 'linear');
    };
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
});