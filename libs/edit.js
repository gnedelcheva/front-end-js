require(['LocalStorage'], function (LocalStorage) {
    const {
        role,
        firstName,
        lastName
    } = localStorage.getItem('person') ? JSON.parse(localStorage.getItem('person')) : {};

    if (!firstName || !lastName || !role) {
        return;
    }
    document.getElementById("firstName").value = firstName;
    document.getElementById("lastName").value = lastName;
    document.getElementById("selectRole").value = role;

});