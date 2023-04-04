const toggleOff = document.querySelector(".fa-toggle-off")
const modoOscuro = document.querySelector('.dark-theme')

if (toggleOff) {

    toggleOff.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('darkKey', 'true')
        } else {
            localStorage.setItem('darkKey', 'false')
        }
    });
}

if (localStorage.getItem('darkKey') === 'true') {
    document.body.classList.add('dark-theme')
} else {
    document.body.classList.remove('dark-theme')
};




const evento = document.getElementById('send')




const enviarFormulario = () => {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let message = document.getElementById('message').value;
    let number = 543512229161;
    let error = document.getElementById('Error')
    
        if(name === '' || surname === '' || message === '' || number === ''){


    const newDiv = document.createElement("div");
    newDiv.textContent= 'Rellenar Campos'
    newDiv.classList.add('styleError')
    error.appendChild(newDiv)

            }
            
    
         else {
    
            var win = window.open(`https://wa.me/${number}?text=Hello!%20my%20name%20is%20${name}
            %20${surname}, I want to ...:%20${message}`, '_blank'); 
           
        }
    
      
    }


evento.addEventListener('click', enviarFormulario)



