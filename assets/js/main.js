const emailListEl = document.getElementById('emailList');


//event listener click del bottone


// fetch
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => response.json())
    .then(data => {
            //codice per far qualcosa con la risposta
        console.log(data);
    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error);
    });


//ciclo for da eseguire 10 volte per creare le email

for(let i = 0; i < 10; i++){
    
}


//create element li con le email

//stampare in pagina html la lista delle 10 email