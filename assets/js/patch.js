$("form").submit(function(e){
  e.preventDefault()
  $.ajax({
    type: 'PATCH',
    url: 'https://reqres.in/api/users/2',
    data: {name: $("input[name='name']").val(), job: $("input[name='job']").val()}, // access in body
}).done(function (data) {
  $(".resultado").html(JSON.stringify(data))
})
})