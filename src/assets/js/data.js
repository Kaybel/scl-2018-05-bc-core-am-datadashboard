/* const btnAlumnas = document.getElementById('btn-alumnas');
const btnProgreso = document.getElementById('botonesDeDatosProgreso');*/

const usersJSON = '../../../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJSON = '../../../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsJSON = '../../../data/cohorts.json';

/* Variables que guardarán json */
let users = []; // Arreglo de usuarios de la data EN BRUTO

let progress = {}; // Objeto de progreso EN BRUTO, contiene un id para cada usuario con un objeto que contiene el progreso del usuario por cada curso

let cohorts = []; // Arreglo de cohorts con la data EN BRUTO

/* para armar courses, se debe acceder al objeto progress */
let courses = []; // Arreglo de strings con los ids de los cursos del cohort en cuestión. Esta data se puede extraer de la propiedad coursesIndex de los objetos que representan los cohorts.


/* Promesas (retorno de json) */
fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    users = data;
    console.log(users);
  });

fetch(progressJSON)
  .then(response => response.json())
  .then(data => {
    progress = data;
    console.log(progress);
  });
  

/* Declaración de objetos globales (constructor) */
class Usuario {
  constructor(Stats) {
    this.stats = stats;
  }
}

class Stats {
  constructor(Percent, Exercises, Reads, Quizzes) {
    this.Percent = Percent,
    this.Exercises = Exercises,
    this.Reads = Reads,
    this.Quizzes = Quizzes;
  }
}


/* Construcción objeto Quizzes */
class Quizzes {
  constructor(total, completed, percent, scoreSum, scoreAvg) {
    this.total = total,
    this.completed = completed,
    this.percent = percent,
    this.scoreSum = scoreSum,
    this.scoreAvg = scoreAvg;
  }
}

/* Construcción objeto Reads */
class Reads {
  constructor(total, completed, percent) {
    this.total = total,
    this.completed = completed,
    this.percent = percent;
  }
}

/* Construcción objeto Exercises */
class Exercises {
  constructor(total, completed, percent) {
    this.total = total,
    this.completed = completed,
    this.percent = percent;
  }
}

/* % de progreso gral de cada estudiante, de todos sus cursos. Se encuentra como elemento en objeto progress > Objeto intro. Detalle: Hay usuarios que no tienen nada, está vacío */
class Percent {
  constructor(id, percent) {
    this.id = id,
    this.percent = percent;
  }
}
/* if (para hacer match por el id */

/*progressArray = Object.entries(progress);
progressArray = [];
introArray = [];
percentArray = [];
for (i = 0; i < progressArray.length ; i++) {
introArray.push(Object.entries(progressArray[i][1]));
console.log(introArray[i]["0"][1].percent);
} */

for(let idEstudiante in progress){console.log("ID > " + idEstudiante +JSON.stringify(progress[idEstudiante]))}


for(let idEstudiante in progress) {
  //console.log("ID > "+JSON.stringify(progress[idEstudiante]));
	  for(let idCurso in progress[idEstudiante]) {
      //console.log("ID CURSO > "+JSON.stringify(progress[idEstudiante][idCurso]));
        for (let idUnits in progress[idEstudiante][idCurso]) {
          //console.log("ID estudiante > " + idEstudiante + JSON.stringify((progress[idEstudiante][idCurso])[idUnits]));
            for (let indexParts in progress[idEstudiante][idCurso][idUnits]) {
              //console.log("ID estudiante > " + idEstudiante + JSON.stringify(progress[idEstudiante][idCurso][idUnits][indexParts]));
              for (let indexCourses in progress[idEstudiante][idCurso][idUnits][indexParts]) {
                //console.log("ID estudiante > " + idEstudiante + JSON.stringify(progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses]));
                for (let indextype in progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses]) {
                  //console.log("ID estudiante > " + idEstudiante + JSON.stringify(progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses][indextype])); 
                  for (let datosFinales in progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses][indextype]){
                    console.log("ID estudiante > " + idEstudiante + JSON.stringify(progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses][indextype][datosFinales])); 
                  }
                }
              }
            }
        }
	  }
} 

/* Aquí dejo planteado procesamiento para lecturas completadas y total de lecturas */
let totalReads = 0;
let completedReads = 0;
if ('type' == 'read' && 'completed' == 1) {
  completedReads = CompletedReads++; 
} else if ('type' == 'read') {
  totalReads++;
}


window.computeUsersStats = (user, progress, courses) => {

};
window.sortUsers = (users, orderBy, orderDirection) => {

};
window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};