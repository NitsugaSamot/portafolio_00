

document.addEventListener('DOMContentLoaded', function(){

    clickCerrarModal()
})

function clickCerrarModal() {
    const btnCerrar = document.querySelector('.btnCerrar')
    btnCerrar.addEventListener('click', ocultarModal)
}

function ocultarModal(){
    event.preventDefault()
    const modalOculto = document.querySelector('.mostrar')
    const modalAPV =document.querySelector('#contenidoAPV')
    modalOculto.classList.toggle('modalOculto')
    modalAPV.classList.toggle('ocultarModal')

} 
