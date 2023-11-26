document.addEventListener('DOMContentLoaded', function () {
    const agregarEquipoForm = document.getElementById('agregarEquipoForm');
    const equipoSeleccionado = document.getElementById('equipoSeleccionado');
    const registrarEquipoBtn = document.getElementById('registrarEquipoBtn');

    registrarEquipoBtn.addEventListener('click', function () {
        // Obtener el equipo seleccionado del combobox
        const equipo = equipoSeleccionado.value;

        // Puedes realizar acciones con el equipo seleccionado, como agregarlo al torneo
        alert(`Equipo seleccionado: ${equipo}`);

        // Limpia el formulario después de registrar
        agregarEquipoForm.reset();
    });
});
