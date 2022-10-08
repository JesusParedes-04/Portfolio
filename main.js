

const evento = document.getElementById('send')
const enviarFormulario =() => {
        let name = document.getElementById('name').value;
        let surname = document.getElementById('surname').value;
        let message = document.getElementById('message').value;
        let number= 543512229161;
var win= window.open(`https://wa.me/${number}?text=Hello!%20my%20name%20is%20${name}
%20${surname}, I want to ...:%20${message}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)


``