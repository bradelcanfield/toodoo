//

function ready() {
  console.log('document is ready');
  var form = $('#new_task');
// console.dir(form);
  form.on('ajax:complete', newTask);

  function newTask(event, xhr, status) {
  console.log('newTask fired');
  // window.location.reload();
  var response = xhr.responseText;
  console.log(response)
    $(".tasks").append(response);
    $('#task_name').val('');
  }
}

$(document).on('ready page:load', ready);
