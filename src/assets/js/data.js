const btnCohort = document.getElementById('btn-cohort');

/* Variables que guardarán json */
let users = []; // Arreglo de usuarios de la data EN BRUTO

let progress = {}; // Objeto de progreso EN BRUTO, contiene un id para cada usuario con un objeto que contiene el progreso del usuario por cada curso

let cohorts = []; // Arreglo de cohorts con la data EN BRUTO

/* para armar courses, se debe acceder al objeto progress */
let courses = []; // Arreglo de strings con los ids de los cursos del cohort en cuestión. Esta data se puede extraer de la propiedad coursesIndex de los objetos que representan los cohorts.


/* Promesas (retorno de json) */
fetch('https://raw.githubusercontent.com/Kaybel/scl-2018-05-bc-core-am-datadashboard/master/data/cohorts/lim-2018-03-pre-core-pw/users.json')
  .then(response => response.json())
  .then(data => {
    users = data;
    console.log(users);
  });

fetch('https://raw.githubusercontent.com/Kaybel/scl-2018-05-bc-core-am-datadashboard/master/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
  .then(response => response.json())
  .then(data => {
    progress = data;
    console.log(progress);
  });

fetch('https://raw.githubusercontent.com/Kaybel/scl-2018-05-bc-core-am-datadashboard/master/data/cohorts.json')
  .then(response => response.json())
  .then(data => {
    cohorts = data;
    console.log(cohorts);
  });

btnCohort.addEventListener('click', () => {


  for (let idEstudiante in progress) {
    for (let idCurso in progress[idEstudiante]) {
      let completedlect = 0;
      let completedquiz = 0;
      let lect = 0;
      let quiz = 0;
      let exercises = 0;
      let completedexercises = 0;
      let scoreSum = 0;
      let scoreAvg = 0;
      for (let idUnits in progress[idEstudiante][idCurso]) {
        for (let indexParts in progress[idEstudiante][idCurso][idUnits]) {
          for (let indexCourses in progress[idEstudiante][idCurso][idUnits][indexParts]) {
            for (let indextype in progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses]) {
              let chapter = ((progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses][indextype]));
              if (chapter.type === 'read') {
                lect++;
              }
              if (chapter.type === 'read' && chapter.completed === 1) {
                completedlect++;
              }
              if (chapter.type === 'quiz') {
                quiz++;
              }
              if (chapter.type === 'quiz' && chapter.completed === 1) {
                completedquiz++;
                scoreSum += chapter.score;
              }
              if (chapter.type === 'practice') {
                exercises++;
              }
              if (chapter.type === 'practice' && chapter.completed === 1) {
                completedexercises++;
              }
            }
          }
        }
      }
      let percentLect = Math.round((completedlect / lect) * 100);
      let percentQuiz = Math.round((completedquiz / quiz) * 100);
      let percentExercises = Math.round((completedexercises / exercises) * 100);
      scoreAvg = Math.round(scoreSum / completedquiz);
      console.log(idEstudiante + ' > ' + 'Lecturas totales: ' + lect + ' Lecturas completadas: ' + completedlect + ' % total realizado en lecturas: ' + percentLect + '%' + ' Quizzes totales: ' + quiz + ' Quizzes completados: ' + completedquiz + ' Suma de puntajes quizzes: ' + scoreSum + ' Promedio Quizzes: ' + scoreAvg + ' Ejercicios totales: ' + exercises + ' Ejercicios completados: ' + completedexercises);

      let datos = (idEstudiante + ' > ' + 'Lecturas totales: ' + lect + ' Lecturas completadas: ' + completedlect + ' % total realizado en lecturas: ' + percentLect + '%' + ' Quizzes totales: ' + quiz + ' Quizzes completados: ' + completedquiz + ' Suma de puntajes quizzes: ' + scoreSum + ' Promedio Quizzes: ' + scoreAvg + ' Ejercicios totales: ' + exercises + ' Ejercicios completados: ' + completedexercises);

      const cont = document.getElementById('cont');
      const resultados = document.createElement('div');

      let datosAlumnas = document.createTextNode(datos);

      const contenedorElemento = document.createElement('p');
      contenedorElemento.appendChild(datosAlumnas);
      resultados.appendChild(contenedorElemento);

      cont.appendChild(resultados);

    }
  }
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

window.sortUsers = (users, orderBy, orderDirection) => {

};
window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};