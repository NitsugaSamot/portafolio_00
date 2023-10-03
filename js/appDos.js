const btnModal = document.getElementById('btnAPV')
btnModal.onclick = verModalAPV

function verModalAPV() {
    // event.preventDefault()
    const modal = document.querySelector('#modalAPVOculto')
    modal.classList.toggle('mostrar')
}



