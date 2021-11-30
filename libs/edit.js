require(['LocalStorage'] , function (LocalStorage) {
         
    document.getElementById("Title").value = localStorage.getItem("Title");
    document.getElementById("Description").value = localStorage.getItem("Description");
    document.getElementById("Assigned").value = localStorage.getItem("Assigned");
    document.getElementById("Status").value = localStorage.getItem("Status");
 
});
