## Clase 1/9  
Creamos un index.html  
Instalamos extencion HtmlHint (logo rojito)  
Cliente - Servidor  

otra extensión de vscode para hacer como si fueramos un server local. Server de pruebas. Live server (five server)  
Toda la documentación de HTML la podemos encontrar en mdn. Mozilla [mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements).  

Una etiqueta es un objeto dentro del documento. Un elemento es el conjunto total, una etiqueta mas el contenido dentro de la misma.  
Elementos hijos, son los que están dentro de otros elementos.
El meta charset es para los caracteres especiales de nuestra escritura.  
El lang cambiarlo a "es" para español.  
HTML es el elemento raíz.  
El archivo index.html no debe faltar en ningún sitio web.
### Atributos
Son propiedades que se les añaden a las etiquetas html.
## Clase 2/9 
Nav es un elemento semántico.  
Creamos una carpeta htmlLayout. Con el atajo ! (shift + 1) nos aparecen las opciones rápidas para crear una estructura html en nuestro archivo.  
Vemos estructura básica de un body: header, main y footer.  
Con Alt+Shift+f podemos formatear nuestro archivo, queda más ordenado.  
El elemento img es una etiqueta sin cierre (elemento void) a diferencia de las otras.  
Solo puede haber 1 solo por página: h1, main.  
Para agregar un mapa a nuestro sitio web, ir a maps, seleccionar compartir lugar, incorporar un mapa, seleccionamos tamaño pequeño o el que se quiera, y copiamos el iframe en nuestro archivo.
## Clase 8 septiembre
para agregar un icono a la pestaña se puede con un favicon de 64px, agregando esto en el head:  
 ```html 
 <link rel="icon" type="image/x-icon" href="ice-cream.png">
 ```  
 Se puede buscar en flaticon, boxicon, etc.  
 El picture está bueno porque tien la opcion de añadir el elemento source, con el que podemos cambiar la imagen mostrada dependiendo del tamaño del dispositivo del usuario.  
 ### Creamos un Form
 ```html
 <form method="post" action="./contacto.html">
                <label for="id-nombre">Nombre</label>
                <input type="text" name="nombre" id="id-nombre">

                <label for="id-email">Email</label>
                <input type="email" name="email" id="id-email">

                <label for="id-mensaje">Mensaje</label>
                <textarea name="mensaje" id="id-mensaje"></textarea>
                
                <!-- también funciona <input type="submit" value=""> -->
                <button type="submit">Enviar</button>
            </form>
 ```  
 Es importante el id del input para replicarlo en el label, así cuando le damos click nos redirijira al input correspondiente.  