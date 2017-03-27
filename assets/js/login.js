window.addEventListener("load", function () {
  document.getElementById("enviar").addEventListener("click",function (e) {
    var usuarios = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var regEmail = /([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi;

    if (usuarios == "") {
      escribirMensaje("v1","Usuario no puede estar en blanco");
    } else if (!(regEmail.test(usuarios))) {
        escribirMensaje("v1","No es un correo válido");
    }
    else {
      escribirMensaje("v1","");
    }

    if (contrasena == "") {
      escribirMensaje("v2","Contraseña no puede estar en blanco");
    } else {
      escribirMensaje("v2","");
    }

    if(usuarios != "" && contrasena != "" && /([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(usuarios)){
      if (verificarUsuario(usuarios,contrasena)) {
        window.location = "index.html";
      }
    }
  });
});
    function escribirMensaje(elemento,msj) {
      var e = document.getElementById(elemento);
      e.innerHTML = msj;
    }

    function verificarUsuario(email, password) {
      var validarUsuario = getItemFromStorage("users");
      if (validarUsuario != null) {
        var user = validarUsuario.filter(function(user) {
          return user.email == email;
        })[0];
        if (user != null) {
          return user.email == email && user.password == password;
        }
      }
      return false;
    }
