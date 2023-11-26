<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    <script type="text/javascript" src="scripts/jquery-3.7.1.js"></script>
    <script type="text/javascript" src="scripts/session.js"></script>
    <title>La Bombonera</title>
</head>
    <header>
        <h1><img src="images/logo.png" width=60px height=60px>LA BOMBONERA<img src="images/logo.png" width=60px height=60px></h1>
        <nav>
        <ul>
            <li><a href="contenido/equipos.html">Gestión de Equipos</a>
                <ul>
                    <li class="escondido"><a href="contenido/registrarequipos.html">Alta</a></li>
                    <li class="escondido"><a href="contenido/eliminarequipos.html">Baja</a></li>
                    <li class="escondido"><a href="contenido/modificarequipos.html">Modificación</a></li>
                    <li><a href="contenido/consultarequipos.html">Consulta</a></li>
                </ul>
            </li>
            <li><a href="contenido/jugadores.html">Gestión de Jugadores</a>
                <ul>
                    <li class="escondido"><a href="contenido/registrarjugadores.html">Alta</a></li>
                    <li class="escondido"><a href="contenido/eliminarjugadores.html">Baja</a></li>
                    <li class="escondido"><a href="contenido/modificarjugadores.html">Modificación</a></li>
                    <li><a href="contenido/consultarjugadores.html">Consulta</a></li>
                </ul>
            </li>
            <li><a href="contenido/torneos.html">Gestión de Torneos</a>
                <ul>
                    <li class="escondido"><a href="contenido/registrartorneo.html">Alta</a></li>
                    <li class="escondido"><a href="contenido/eliminartorneo.html">Baja</a></li>
                    <li class="escondido"><a href="contenido/modificartorneo.html">Modificación</a></li>
                    <li><a href="contenido/consultartorneo.html">Consulta</a></li>
                </ul>
            </li>
            <li><a href="contenido/finanzas.html">Gestión de Información Financiera</a>
                <ul>
                    <li><a href="contenido/consultaradeudo.html">Consulta de Adeudos</a></li>
                    <li><a href="contenido/modificaradeudo">Modificación de Adeudos</a></li>
                </ul>
            </li>
            <li><a href="contenido/trabajador.html">Gestión de Trabajadores</a>
                <ul>
                    <li class="escondido"><a href="contenido/registrartrabajador.html">Alta</a></li>
                    <li class="escondido"><a href="contenido/eliminartrabajador.html">Baja</a></li>
                    <li class="escondido"><a href="contenido/modificartrabajador.html">Modificación.</a></li>
                    <li><a href="contenido/consultartrabajador.html">Consulta</a></li>
                </ul>
            </li>
        </ul>
    </nav>        
    </header>
    <body>
<br><br><br><br>
<main>
       <a class="escondido" href="contenido/reportepartidos.html"><button id="generarReporte" class="boton-amarillo consulta">Generación del Reporte</button></a>
       <a href="contenido/consultademarcadores.html"><button id="consultarMarcadores" class="boton-amarillo">Consulta los Marcadores</button></a>
<br>
        <a href="contenido/posicionesequipos.html"><center><button id="consultarPuntajes" class="boton-amarillo">Consulta los Puntajes</button></center></a>
    </main>
    <aside>
        <div id="iniciosession">
            <label for="usuario">Usuario</label>
            <input type="text" id="usuario" name="" class="inputiniciosession"/>
            <label for="contraseña">Contraseña</label>
            <input type="password" id="contraseña" name="" class="inputiniciosession"/>
            <button id="iniciosessionbtn"> Iniciar sesion</button>
        </div>
        <div>
        <button id="cerrarsessionbtn"> Cerrar Sesion</button>
        </div>
        <center><img src="images/logo.png" width=100% height=200px></center>
        <div class="sidebar-mensaje">
            <p>El equipo 1 tiene un adeudo</p>
<hr>
        </div>
        <div class="sidebar-mensaje">
            <p>Otro mensaje importante</p>
        </div>
    </aside>
    <footer>
        <p>Contacto 2227098819</p>
        <p>¿Tienes alguna pregunta o necesitas más información? Contáctanos.</p>
        <p>dreamsaxx@gmail.com</p>
    </footer>
</body>
</html>