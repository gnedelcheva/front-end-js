require(['LocalStorage'] , function (LocalStorage) {

      if (localStorage.getItem("firstName") === null) {//person, lastName or Role
            $( '.profile' ).addClass('hidden');
      }else{
            $( '.no-profile' ).addClass('hidden');
      }

      if (localStorage.getItem('selectRole')) {
            $('#selectRole').val(localStorage.getItem('selectRole'));
      }
   
      document.getElementById("storedName").innerHTML = localStorage.getItem("firstName") + ' ' +localStorage.getItem("lastName");
      document.getElementById("role").innerHTML = localStorage.getItem("selectRole");


});
