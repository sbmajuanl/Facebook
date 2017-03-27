window.addEventListener("load",function(){
  var validarU=getItemFromStorage("users");
    if(validarU == null){
     validarU = [];
    validarU.push({ name: "Brilly" , email: "briggtty_20@hotmail.com" , password: "abcdef"});
    validarU.push({ name: "Schelsen" , email: "sbmajuanl@gmail.com" , password: "987654"});
    addItemToStorage("users",validarU);
  }

});
