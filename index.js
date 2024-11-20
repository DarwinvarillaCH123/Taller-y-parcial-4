let tareas = [];

// Función  agregar tarea
function agregarTarea() {
    const inputTarea = document.getElementById('task-input');
    const nombreTarea = inputTarea.value.trim();

    if (nombreTarea !== '') {
        // Agregar tarea al arreglo
        tareas.push(nombreTarea);
        
        // Limpiar
        inputTarea.value = '';

        // Actualizar 
        actualizarListaTareas();
    }
}
// Función actualizar lista
function actualizarListaTareas() {
    const listaTareas = document.getElementById('task-list');
    
    // Limpiar 
    listaTareas.innerHTML = '';

    // Crear filas 
    tareas.forEach((tarea, indice) => {
        const fila = document.createElement('tr');
        
        // Contenido 
        fila.innerHTML = `
            <td>${indice + 1}</td>
            <td>${tarea}</td>
            <td>
                <button class="delete-btn" onclick="eliminarTarea(${indice})">Eliminar</button>
            </td>
        `;

        // Agregar fila 
        listaTareas.appendChild(fila);
    });
}

// Función eliminar 
function eliminarTarea(indice) {
    // Eliminar tarea del arreglo
    tareas.splice(indice, 1);

    // Actualizar
    actualizarListaTareas();
}