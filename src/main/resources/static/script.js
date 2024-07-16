document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    })
    .then(response => response.json())
    .then(data => {
            console.log(data);
            if(data.id != 0){
                addUserToTable(data);
            }
            else{
                alert("Username already in DB!");
            }
            
            document.getElementById('signupForm').reset();

    });
});

function addUserToTable(user) {
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const idCell = newRow.insertCell(0);
    const usernameCell = newRow.insertCell(1);
    const emailCell = newRow.insertCell(2);

    idCell.textContent = user.id;
    usernameCell.textContent = user.username;
    emailCell.textContent = user.email;
}

function fetchUsers() {
    fetch('/all')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => addUserToTable(user));
        });
}

document.addEventListener('DOMContentLoaded', function() {
    fetchUsers();
});



