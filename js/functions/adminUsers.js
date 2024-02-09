console.log("adminUSers.js");
$(document).ready(function () {
  $(document).on("click", ".btnSaveUser", function () {
    var name = $("#name").val();
    var lastname = $("#lastname").val();
    var address = $("#address").val();
    var mail = $("#mail").val();

    $.ajax({
      url: "php/controllers/userController.php",
      method: "POST",
      data: {
        mod: "saveUser",
        name: name,
        lastname: lastname,
        address: address,
        mail: mail,
      },
    })
      .done(function (data) {
        var data = JSON.parse(data);
        console.log(data);

        if (data.response == true) {
          location.reload();
        } else {
          Swal.fire({
            title: "Error",
            text: "No se pudo registrar el usuario",
            icon: "danger",
          });
        }

        //--- --- ---//
        //--- --- ---//
      })
      .fail(function (message) {
        VanillaToasts.create({
          title: "Error",
          text: "Ocurrió un error, intentelo nuevamente",
          type: "error",
          timeout: 1200,
          positionClass: "topRight",
        });
      });
  });
  $(document).on("click", ".editUser", function () {
    /* console.log("editUser function called"); */
    var id_user = $(this).data("data-id-user");
    $.ajax({
      url: "php/controllers/userController.php",
      method: "POST",
      data:{
        mod:"getUserInfo",
        id_user: id_user,
      },

    })
    .done(function(data){
      var data = JSON.parse(data);
      console.log(data);
      
      if(data.response == true){
        var name=data.dataUser[0].name;
        var lastname=data.dataUser[0].lastname;
        var address=data.dataUser[0].address;
        var mail=data.dataUser[0].mail;

        $("#name").val(name);
        $("#lastname").val(lastname);
        $("#address").val(address);
        $("#mail").val(mail);
        
        $("#btnActionUser").text("guardar cambios");
        $("#btnActionUser").attr("data-id-user", id_user);
        $("#btnActionUser").removeClass("btnSaveUser");
        $("#btnActionUser").addClass("btnSaveUserUpdate");
        $("#titleForm").text("Editar Usuario");
      }else{
        Swal.fire({
          title:"Error",
          text:"No se pudo editar el usuario",
          icon:"danger",
        });
      }
    })
  
  
  
  });
  
  
  $(document).on("click", ".deleteUser", function () {
    var row=$(this).closest('tr');
    row.remove();
    /* onsole.log("delecteUser function called"); */
    /* function deleteUser(id){

      if(confirm("estas seguro")==true){
        $.ajax({
          url:"php/controllers/userController.php",
        }).done(function(resultado_delete){
          if(resultado_delete == 'ok'){
            $allUsers();
          }
        })
      }

    } */
  
  
  });
});
