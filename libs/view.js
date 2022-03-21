require(['LocalStorage'], function (LocalStorage) {
      const {
            role,
            firstName,
            lastName
      } = localStorage.getItem('person') ? JSON.parse(localStorage.getItem('person')) : {};

      if (!!firstName || !!lastName || !!role) { //person, lastName or Role
            $('.no-profile').addClass('hidden');
      } else {
            $('.profile').addClass('hidden');
      }

      document.getElementById("storedName").innerHTML = firstName + ' ' + lastName;
      document.getElementById("role").innerHTML = role;
});
