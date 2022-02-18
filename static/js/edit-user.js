const formulario = document.getElementById('formulario').childNodes

fetch('/api/users')
.then(data => data.json())
.then(data => {
    for (const user of data){
        console.log(user)
        var location = `/edit/user/${user.id}`
        if (location == window.location.pathname){
            for (let key of Object.keys(user)){
                let elemento = document.getElementById(key)
                try{
                    elemento.setAttribute('value', user[key])
                } catch (e) {}
            }
        }
    }
})