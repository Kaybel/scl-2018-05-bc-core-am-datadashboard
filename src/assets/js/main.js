// Variables que guardarán json 

let users = []; // Arreglo de usuarios de la data EN BRUTO
let progress = {}; // Objeto de progreso EN BRUTO, contiene un id para cada usuario con un objeto que contiene el progreso del usuario por cada curso
let cohorts = []; // Arreglo de cohorts con la data EN BRUTO
// para armar courses, se debe acceder al objeto progress 
let courses = []; // Arreglo de strings con los ids de los cursos del cohort en cuestión. Esta data se puede extraer de la propiedad coursesIndex de los objetos que representan los cohorts.

// Promesas
// user
fetch('https://raw.githubusercontent.com/Kaybel/scl-2018-05-bc-core-am-datadashboard/master/data/cohorts/lim-2018-03-pre-core-pw/users.json')
  .then(response => response.json())
  .then(data => {
    users = data;
    console.log(users);
  });
// progress
fetch('https://raw.githubusercontent.com/Kaybel/scl-2018-05-bc-core-am-datadashboard/master/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
  .then(response => response.json())
  .then(data => {
    progress = data;
    console.log(progress);
  });
// cohorts
fetch('https://raw.githubusercontent.com/Kaybel/scl-2018-05-bc-core-am-datadashboard/master/data/cohorts.json')
  .then(response => response.json())
  .then(data => {
    cohorts = data;
    console.log(cohorts);
  });

const btnCohort = document.getElementById('btn-cohort');
const botonalumnas = document.getElementById('btn-alumnas');


btnCohort.addEventListener('click', () => {
  document.getElementById('navbar').style.display = 'block';
  document.getElementById('divbtn-alumnas').style.display = 'block'; 
  document.getElementById('btnCohort').style.display = 'none';
  document.getElementById('imgLaboratoria').style.display = 'none';
});