//event listener click del bottone
document.getElementById('btnEmailGenerator').addEventListener('click', function() {   
})

//ciclo for da eseguire 10 volte per creare le email
for(let i = 0; i < 10; i++){
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => response.json())
    .then(data => {
        //create element li con le email
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'list-group-item-dark')
        li.textContent = data.response;
        emailList.appendChild(li)
    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error);
    });
}




//stampare in pagina html la lista delle 10 email