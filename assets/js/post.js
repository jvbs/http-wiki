$("form").submit(function(e){
  e.preventDefault()
  $.post("https://reqres.in/api/users", {name: $("input[name='name']").val(), job: $("input[name='job']").val()})
  .done(function( data ) {
    $(".resultado").html(JSON.stringify(data))
  });
})