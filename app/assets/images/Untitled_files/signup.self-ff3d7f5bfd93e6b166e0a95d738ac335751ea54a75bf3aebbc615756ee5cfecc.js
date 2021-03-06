$(function(){

  $('#emailfield').on('submit', function(){
    event.preventDefault();

    if($('#email').val() === ''){
      reset();
      return false;
    };

    $.ajax({
      url:'/email',
      data: {email: $('#email').val()},
      method: "post",
      dataType: 'json'
    }).done(function(response){
      console.log(response);
      if(!response){
        reset();
      }else{
        if(response.person.avatar){
          $('#avatar').attr("src", response.person.avatar);
        }else{
          $('#avatar').attr("src", "/assets/notavailable-29ce47c49dc1d30494304d1c024df8515c0aad24368dc6d6748767d56dd4c1db.png");
        }
        if(response.person){
          if(response.person.email) $('#emailresult').val(response.person.email);
          if(response.person.name){
            if(response.person.name.givenName) $('#firstname').val(response.person.name.givenName);
            if(response.person.name.familyName) $('#lastname').val(response.person.name.familyName);
          }
          if(response.person.employment){
            if(response.person.employment.title) $('#role').val(response.person.employment.title);
          };
          if(response.company){
            if(response.company.name) $('#companyname').val(response.company.name);
          };
        };
      };
    });
  });

  $('#reset').on('click', function(){
    event.preventDefault();
    reset();
  });

});

function reset(){
  $('#information').trigger('reset');
  $('#avatar').attr("src", "/assets/notavailable-29ce47c49dc1d30494304d1c024df8515c0aad24368dc6d6748767d56dd4c1db.png");
}
