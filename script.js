/* =========================================================
   PROYECTO AUDIOVISUAL Y PLÁSTICA
   JavaScript principal
   ========================================================= */


/* =========================================================
   1. TRABAJOS DE LA CLASE
   ========================================================= */

const trabajos = [
    {
        nombre: "Formas y colores",
        autores: "Grupo 1",
        tipo: "Plástica",
        nota: 9.5,
        imagen: "1.jpg"
    },

    {
        nombre: "Miradas",
        autores: "Grupo 2",
        tipo: "Fotografía",
        nota: 8.5,
        imagen: "2.jpg"
    },

    {
        nombre: "Movimiento",
        autores: "Grupo 3",
        tipo: "Audiovisual",
        nota: 9.2,
        imagen: "3.jpg"
    }
];


/* =========================================================
   2. ELEMENTOS DEL HTML
   ========================================================= */

const galeria = document.getElementById("galeria-trabajos");
const destacados = document.getElementById("trabajos-destacados");


/* =========================================================
   3. CREAR TARJETA DE TRABAJO
   ========================================================= */

function crearTarjeta(trabajo, esDestacado = false) {

    // Columna Bootstrap
    const columna = document.createElement("div");
    columna.className = "col-md-6 col-lg-4";

    // Tarjeta
    const tarjeta = document.createElement("article");
    tarjeta.className = "trabajo-card";

    // Si es destacado, añadimos una clase especial
    if (esDestacado) {
        tarjeta.classList.add("destacado-card");
    }


    /* -----------------------------------------------------
       IMAGEN
       ----------------------------------------------------- */

    const imagen = document.createElement("img");

    imagen.src = trabajo.imagen;

    imagen.alt = trabajo.nombre;

    imagen.loading = "lazy";


    /* -----------------------------------------------------
       INFORMACIÓN
       ----------------------------------------------------- */

    const informacion = document.createElement("div");

    informacion.className = "trabajo-info";


    /* -----------------------------------------------------
       NOMBRE DEL TRABAJO
       ----------------------------------------------------- */

    const nombre = document.createElement("h3");

    nombre.textContent = trabajo.nombre;


    /* -----------------------------------------------------
       AUTORES
       ----------------------------------------------------- */

    const autores = document.createElement("p");

    autores.innerHTML =
        `<strong>Autores:</strong> ${trabajo.autores}`;


    /* -----------------------------------------------------
       TIPO DE TRABAJO
       ----------------------------------------------------- */

    const tipo = document.createElement("span");

    tipo.className = "trabajo-tipo";

    tipo.textContent = trabajo.tipo;


    /* -----------------------------------------------------
       AÑADIR INFORMACIÓN
       ----------------------------------------------------- */

    informacion.appendChild(nombre);

    informacion.appendChild(autores);

    informacion.appendChild(tipo);


    /* -----------------------------------------------------
       AÑADIR ELEMENTOS A LA TARJETA
       ----------------------------------------------------- */

    tarjeta.appendChild(imagen);

    tarjeta.appendChild(informacion);


    /* -----------------------------------------------------
       NOTA EN TRABAJOS DESTACADOS
       ----------------------------------------------------- */

    if (esDestacado) {

        const nota = document.createElement("span");

        nota.className = "nota-destacada";

        nota.innerHTML =
            `<i class="bi bi-star-fill"></i> ${trabajo.nota}`;

        tarjeta.appendChild(nota);
    }


    /* -----------------------------------------------------
       DEVOLVER TARJETA
       ----------------------------------------------------- */

    columna.appendChild(tarjeta);

    return columna;
}


/* =========================================================
   4. MOSTRAR GALERÍA
   ========================================================= */

function mostrarGaleria() {

    galeria.innerHTML = "";

    trabajos.forEach(trabajo => {

        const tarjeta = crearTarjeta(trabajo);

        galeria.appendChild(tarjeta);

    });
}


/* =========================================================
   5. MOSTRAR TRABAJOS DESTACADOS
   ========================================================= */

function mostrarDestacados() {

    destacados.innerHTML = "";


    /* -----------------------------------------------------
       SOLO TRABAJOS CON NOTA DE 9 O MÁS
       ----------------------------------------------------- */

    const trabajosDestacados = trabajos.filter(
        trabajo => trabajo.nota >= 9
    );


    /* -----------------------------------------------------
       SI NO HAY TRABAJOS DESTACADOS
       ----------------------------------------------------- */

    if (trabajosDestacados.length === 0) {

        destacados.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-secondary">
                    Todavía no hay trabajos destacados.
                </p>
            </div>
        `;

        return;
    }


    /* -----------------------------------------------------
       ORDENAR DE MAYOR A MENOR NOTA
       ----------------------------------------------------- */

    trabajosDestacados.sort(
        (a, b) => b.nota - a.nota
    );


    /* -----------------------------------------------------
       CREAR TARJETAS DESTACADAS
       ----------------------------------------------------- */

    trabajosDestacados.forEach(trabajo => {

        const tarjeta = crearTarjeta(
            trabajo,
            true
        );

        destacados.appendChild(tarjeta);

    });
}


/* =========================================================
   6. INICIAR LA PÁGINA
   ========================================================= */

function iniciarPagina() {

    mostrarGaleria();

    mostrarDestacados();

}


/* =========================================================
   7. EJECUTAR CUANDO CARGUE LA PÁGINA
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    iniciarPagina
);
