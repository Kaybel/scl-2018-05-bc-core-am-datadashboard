## Data dashboard.

Integrantes:
Evelyn Galvez
Alejandra Martínez

Common Core SCL 2018.

## Introducción

En el siguiente proyecto se maneja la información de la data de la sede de Lima - Perú para verificar el avance del estudiantado del cohort especifico (2018- 03- pre core).

Se basa en una herramienta usada por las Training Managers (TM's) de Laboratoria, en este caso para la TM de la sede de Santiago de Chile; la Data Dashboard es una página encausada a la recolección continua de datos de alumnas para su posterior evaluación en diversas áreas que luego se estudiaran para ofrecer mayor reforzamiento en áreas específicas o para generar la vizualización dinámica de los avances de las mismas.

El diseño fue planteado directamente con la TM de la sede de Santiago, la cual en la entrevista (dado que para ella era el producto final) indicó que deseaba un diseño minimal y de facil uso; Los colores planteados son el amarillo blanco y negro y se inspira un diseño similar al LMS.
https://lms.laboratoria.la

Se genera una página en la cual al seleccionar el cohort en cuestion despliega una pantalla con un dropdown con los nombres y la información de cada alumna.

## Tópicos a cubrir

Se profundiza en el enunciado de UX, se genera skecth de baja y alta fidelidad mediante el cual se plantea la idea visual de la página.

en el sketch de baja fidelidad se genera boceto a lapiz mina y el sketch de alta fidelidad se realiza en figma.
https://www.figma.com/

Se implementa el contenido aprendido de los siguientes temas para generar la obtencion final del producto:
  arrays, objects, eventos del dom, fetch, promesas, visual design, variables, control de flujo y testing.

## Consideraciones generales

Se implementa uso de Bootstrap, ES6, archivos JSON, CSS 3 y HTML 5.

##### Valor de retorno

Se crea un arreglo solicitado cuyo nombre es `stats`, el cual es un
objeto con las siguientes propiedades:

# `percent`: 
  Número entero entre 0 y 100 que indica el porcentaje de completitud
  general del usuario con respecto a todos los cursos asignados a su cohort.
# `exercises`: 
    Objeto con tres propiedades:
  -`total`: Número total de ejercicios autocorregidos presentes en cursos del
    cohort. 
  -`completed`: Número de ejercicios autocorregidos completados por el usuario.
  -`percent`: Porcentaje de ejercicios autocorregidos completados.
# `read`: 
    Objeto con tres propiedades:
  -`total`: Número total de ejercicios autocorregidos presentes en cursos del
    cohort. 
  -`completed`: Número de ejercicios autocorregidos completados por el usuario.
  -`percent`: Porcentaje de ejercicios autocorregidos completados.
# `quizzes`:
    Objeto con cinco propiedades:
  -`total`: Número total de quizzes presentes en cursos del cohort.
  -`completed`: Número de quizzes completadas por el usuario.
  -`percent`: Porcentaje de quizzes completadas.
  -`scoreSum`: Suma de todas las puntuaciones (score) de los quizzes
    completados.
  -`scoreAvg`:  Promedio de puntuaciones en quizzes completados.


### Data

En esta carpeta están los datos de prueba del proyecto, contiene información
sobre los cohortes (grupos de alumnas de una generación y rama en particular),
alumnas y su progreso en cada uno de los cursos que son parte de cada cohorte.

### Style y grid

En estos archivos se ingresan todos los datos planteados en css que afectan o manipulan directamente el estilo final de la pagina al momento de ser visualizada por el cliente que realizo la solicitud o que posee la necesidad por la página.

### Tests

Se realizan pruebas de testing al momento de generar cambios en el archivo data para verificar si se esta implementando de manera correcta la solicitud del cliente.

#### index.html

Existen dos archivos index, uno se plantea directamente para el uso de los test mientras que el otro es el que usualmente se ocupa para la impresion de los archivos en la pagina html, es decir en el buscador directamente, ya sea mozilla google chrome o internet explorer.

#### fixtures.js

Acá es donde está el set de datos de prueba que se usarán para correr los testings.

### cohorts 

En esta carpeta se encuentran todos los archivos JSON de donde fueron extraido los datos para la obtención de la data.

### main.js

En esta carpeta es donde se manipulan los eventos DOM, no se genera ninguna informacion con respecto a los datos en sí.