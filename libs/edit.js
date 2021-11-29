require(['LocalStorage'] , function (LocalStorage) {
         
    document.getElementById("firstName").value = localStorage.getItem("firstName");
    document.getElementById("lastName").value = localStorage.getItem("lastName");
    document.getElementById("selectRole").value = localStorage.getItem("selectRole");
 
});
