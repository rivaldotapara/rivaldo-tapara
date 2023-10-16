var boton = document.getElementById("boton");

function traer() {
    var dni = document.getElementById("dni").value;
    fetch(
        "https://apiperu.dev/api/dni/" +
        dni +
        "?api_token=1070f15b731623c684e3d45bb0b949fbdc6b38fa68ebcd50c824c189f663b7f2"
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data); // Verifica si estás obteniendo una respuesta válida
            document.getElementById("doc").value = data.data.numero;
            document.getElementById("nombre").value = data.data.nombres;
            document.getElementById("apellido").value = 
                data.data.apellido_paterno + " " + data.data.apellido_materno;
            
        })
        .catch(error => console.error('Error:', error)); // Agregamos manejo de errores
}

boton.addEventListener("click", traer);
