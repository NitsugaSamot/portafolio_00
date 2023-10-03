        document.addEventListener('DOMContentLoaded', function(){
        verModalAPV()
        clickCerrarModal()
    })
    
    function verModalAPV() {
        const abrirModal = document.querySelector('#btnAPV')
        abrirModal.addEventListener('click', mostrarModalAPV)
    }
    
    function mostrarModalAPV() {
        event.preventDefault()
        const modal = document.getElementById('modalAPVOculto')
        modal.classList.toggle('mostrar')
    
    }
    
    function clickCerrarModal() {
        const btnCerrar = document.querySelector('.btnCerrar')
        btnCerrar.addEventListener('click', ocultarModal)
    }
    
    function ocultarModal(){
        const modalOculto = document.querySelector('.mostrar')
        const modalAPV =document.querySelector('#contenidoAPV')
        modalOculto.classList.toggle('modalOculto')
        modalAPV.classList.toggle('ocultarModal')
    
    } 
    



