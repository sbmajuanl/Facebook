function addItemToStorage(llave, valor){
  if (typeof(Storage) != "undefined") {
    localStorage.setItem(llave,JSON.stringify(valor));
  } else {
    console.log("No hay almacenamiento");
  }
}

function getItemFromStorage(llave, valor) {
  if(typeof(Storage) != "undefined"){
    return JSON.parse(localStorage.getItem(llave));
  } else {
    console.log("No hay almacenamiento");
  }
  return null;
}
