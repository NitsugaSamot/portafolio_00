// Obtenemos una referencia a los botones
// const toggleButton = document.getElementById('toggle-about');
// const toggleButtonProjects = document.getElementById('toggle-about-projects');
const toggleButton = document.getElementById('toggle-about');
const aboutMeDiv = document.getElementById('about-me');
const projectsContainer = document.getElementById('projects-container') 
const toggleButtonProjects = document.getElementById('toggle-about-projects')

// Establecer la clase 'boton-activo' en el botón "SOBRE MI"
toggleButton.classList.add('boton-activo');

// Mostrar el contenido 'aboutMe' por defecto
aboutMeDiv.style.display = 'block';

// Agregamos un controlador de evento al botón "Sobre Mi" para mostrar/ocultar el componente 'div' y agregar/quitar la clase CSS
toggleButton.addEventListener('click', function() {
    if (aboutMeDiv.style.display === 'none' || aboutMeDiv.style.display === '') {
        aboutMeDiv.style.display = 'block'; // Mostrar 'aboutMeDiv'
        projectsContainer.style.display = 'none'; // Ocultar 'projectsContainer'
    }
    
    // Agregar la clase CSS al botón "Sobre Mi"
    toggleButton.classList.add('boton-activo');
    
    // Quitar la clase CSS del botón "Proyectos" si está presente
    toggleButtonProjects.classList.remove('boton-activo');
});

// Agregamos un controlador de evento al botón "Proyectos" para mostrar/ocultar el componente 'div' y agregar/quitar la clase CSS
toggleButtonProjects.addEventListener('click', function() {
    if (projectsContainer.style.display === 'none' || projectsContainer.style.display === '') {
        projectsContainer.style.display = 'flex'; // Mostrar 'projectsContainer'
        aboutMeDiv.style.display = 'none'; // Ocultar 'aboutMeDiv'
    }
    
    // Agregar la clase CSS al botón "Proyectos"
    toggleButtonProjects.classList.add('boton-activo');
    
    // Quitar la clase CSS del botón "Sobre Mi" si está presente
    toggleButton.classList.remove('boton-activo');
});

// // Obtenemos una referencia al botón y al componente 'div'



// // Agregamos un controlador de evento al botón para mostrar/ocultar el componente 'div'

// toggleButton.addEventListener('click', function() {
//     if (aboutMeDiv.style.display === 'none' || aboutMeDiv.style.display === '') {
//         aboutMeDiv.style.display = 'block'; // Mostrar 'aboutMeDiv'
//         projectsContainer.style.display = 'none'; // Ocultar 'projectsContainer'
//     } 
// });

// toggleButtonProjects.addEventListener('click', function() {
//     if (projectsContainer.style.display === 'none' || projectsContainer.style.display === '') {
//         projectsContainer.style.display = 'flex'; // Mostrar 'projectsContainer'
//         aboutMeDiv.style.display = 'none'; // Ocultar 'aboutMeDiv'
//     }
// });

// toggleButton.addEventListener('click', function() {
//     if (aboutMeDiv.style.display === 'none' || aboutMeDiv.style.display === '') {
//         aboutMeDiv.style.display = 'block'; // Mostrar el componente 'div'
//     } else {
//         aboutMeDiv.style.display = 'none'; // Ocultar el componente 'div'
//     }
// });


// toggleButtonProjects.addEventListener('click', function() {
//     if (projectsContainer.style.display === 'none' || projectsContainer.style.display === '') {
//         projectsContainer.style.display = 'flex'; // Mostrar el componente 'div'
//     } else {
//         projectsContainer.style.display = 'none'; // Ocultar el componente 'div'
//     }
// });



      
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
    



