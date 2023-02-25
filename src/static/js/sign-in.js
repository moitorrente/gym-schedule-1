(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated');
        }, false)
    })
})()

const form = document.querySelector('#login-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();  // evitar que el formulario se envíe por defecto

    // Verificar si el formulario es válido
    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
    }

    const user = document.querySelector('#user').value;
    const password = document.querySelector('#password').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user, password })
        });

        if (response.ok) {
            // Si la solicitud fue exitosa, redirigir a la página principal
            window.location.href = '/';
        } else {
            // Si hubo un error, mostrar un mensaje de error en la página
            console.log(response);
        }
    } catch (error) {
        console.error(error);
    }
});
