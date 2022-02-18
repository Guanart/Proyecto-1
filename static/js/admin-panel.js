const usersTable = document.getElementById('users-table-body')
fetch('/api/users')
.then(data => data.json())
.then(users => {
    console.log(users)
    for (var user of users) {
        usersTable.innerHTML += `<tr>
        <td>${user.nombre}</td>
        <td>${user.edad}</td>
        <td>${user.genero}</td>
        <td>${user.email}</td>
        <td>${user.profesion}</td>
        <td>${user.salario}</td>
        <td><img src="${user.profile_pic}"width="50" height="50"></td>
        <td><a href="javascript:delUser(${user.id})")">Eliminar</a></td>
        <td><a href="/edit/user/${user.id}")">Editar</a></td>
        </tr>`
    }
})

async function delUser(id){
    fetch('/api/users/'+id, {method:'DELETE'})
    .then(response => response.json())
    .then(response => window.location.reload())     // si quito el parámetro "response" no anda
    // por qué si no pongo esta línea no funciona? A veces no funciona
}
