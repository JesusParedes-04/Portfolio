


const toggleOff = document.querySelector(".fa-toggle-off")
const whiteTheme = document.querySelector('.white-theme')
const textOff = document.querySelector('textOff')

function cambiarEstado() {

        toggleOff.classList.toggle("fa-toggle-off")
        toggleOff.classList.toggle("fa-toggle-on");
        whiteTheme.classList.toggle('white-theme')
        whiteTheme.classList.toggle('dark-theme');

}


toggleOff.addEventListener('click', cambiarEstado)




const evento = document.getElementById('send')


evento.addEventListener('click', enviarFormulario)

const enviarFormulario = () => {
        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let message = document.getElementById('message').value;
        let number = 543512229161;
        var win = window.open(`https://wa.me/${number}?text=Hello!%20my%20name%20is%20${name}
%20${surname}, I want to ...:%20${message}`, '_blank');
}
evento.addEventListener('click', enviarFormulario)


