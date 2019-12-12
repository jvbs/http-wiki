$("#list-users").click(function(e){
  e.preventDefault();
  $.get("https://reqres.in/api/users?page=2", function(data){
    $("#return-list-users").html(JSON.stringify(data));
  });
})

$("#single-users").click(function(e){
  e.preventDefault();
  $.get("https://reqres.in/api/users/2", function(data){
    $("#return-single-users").html(JSON.stringify(data));
  });
})

$("#single-users-404").click(function(e){
  e.preventDefault();
  $.get("https://reqres.in/api/users/23", function(data){
    $("#return-single-users-404").html(JSON.stringify(data));
  });
})

$("#list-resource").click(function(e){
  e.preventDefault();
  $.get("https://reqres.in/api/unknown", function(data){
    $("#return-list-resource").html(JSON.stringify(data));
  });
})

$("#single-resource").click(function(e){
  e.preventDefault();
  $.get("https://reqres.in/api/unknown/2", function(data){
    $("#return-single-resource").html(JSON.stringify(data));
  });
})

$("#single-resource").click(function(e){
  e.preventDefault();
  $.get("https://reqres.in/api/unknown/2", function(data){
    $("#return-single-resource").html(JSON.stringify(data));
  });
})

$("#single-resource-404").click(function(e){
  e.preventDefault();
  $.get("https://reqres.in/api/unknown/23", function(data){
    $("#return-single-resource-404").html("Erro 404");
  });
})