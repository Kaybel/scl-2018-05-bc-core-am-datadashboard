const btnAlumnas = document.getElementById('btn-alumnas');
const btnLectura = document.getElementById('btn-lecturas');
const btnQuizzes = document.getElementById('btn-quizzes');
const btnCompletitud = document.getElementById('btn-completitud');
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

for (let idEstudiante in progress) {
  console.log('ID > ' + idEstudiante + JSON.stringify(progress[idEstudiante]));
}
// names 

users.forEach(usuario => {
  console.log(usario.name);
});

/*
const user = data => {
  btnAlumnas.addEventListener('click', () => {
    const render = data.forEach(element => {
      return containerStudents.innertHTML += `<p>${element.name.toUpperCase()}</p>`;
    });
    return render;
    cohorts = data;
    console.log(cohorts);
    user(cohorts);
  });
}; */ 


let readEst = 0;
for (let idEstudiante in progress) {
  // console.log("ID > "+JSON.stringify(progress[idEstudiante]));
  for (let idCursoR in progress[idEstudiante]) {
    let completedreads = 0;
    // console.log("ID CURSO > "+JSON.stringify(progress[idEstudiante][idCurso]));
    for (let idUnitsR in progress[idEstudiante][idCursoR]) {
      // console.log("ID estudiante > " + idEstudiante + JSON.stringify((progress[idEstudiante][idCurso])[idUnits]));
      for (let indexPartsR in progress[idEstudiante][idCursoR][idUnitsR]) {
        // console.log("ID estudiante > " + idEstudiante + JSON.stringify(progress[idEstudiante][idCurso][idUnits][indexParts]));
        for (let indexCoursesR in progress[idEstudiante][idCursoR][idUnitsR][indexPartsR]) {
          // console.log("ID estudiante > " + idEstudiante + JSON.stringify(progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses]));
          for (let indextypeR in progress[idEstudiante][idCursoR][idUnitsR][indexPartsR][indexCoursesR]) {
            let chapterRead = ((progress[idEstudiante][idCursoR][idUnitsR][indexPartsR][indexCoursesR][indextypeR])); 
            console.log(chapterRead);
            if (chapterRead.type === 'read') {
              Reads.total = readEst++;
            }
            if (chapterRead.type === 'read' && chapterRead.completed === 1) {
              Reads.completed = (completedreads = completedreads + 1); {
                if (readEst > 1 && completedreads > 1) {
                  Reads.percent = ((readEst % completedreads) * 100);
                }
              }                  
            }               
          }
        }
      }
    }
  }
}

let quizzesEst = 0;
for (let idEstudiante in progress) {
  // console.log("ID > "+JSON.stringify(progress[idEstudiante]));
  for (let idCursoQ in progress[idEstudiante]) {
    let completedQuizz = 0;
    // console.log("ID CURSO > "+JSON.stringify(progress[idEstudiante][idCurso]));
    for (let idUnitsQ in progress[idEstudiante][idCursoQ]) {
      // console.log("ID estudiante > " + idEstudiante + JSON.stringify((progress[idEstudiante][idCurso])[idUnits]));
      for (let indexPartsQ in progress[idEstudiante][idCursoQ][idUnitsQ]) {
        // console.log("ID estudiante > " + idEstudiante + JSON.stringify(progress[idEstudiante][idCurso][idUnits][indexParts]));
        for (let indexCoursesQ in progress[idEstudiante][idCursoQ][idUnitsQ][indexPartsQ]) {
          // console.log("ID estudiante > " + idEstudiante + JSON.stringify(progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses]));
          for (let indextypeQ in progress[idEstudiante][idCursoQ][idUnitsQ][indexPartsQ][indexCoursesQ]) {
            let chapterQuizz = ((progress[idEstudiante][idCursoQ][idUnitsQ][indexPartsQ][indexCoursesQ][indextypeQ])); 
            console.log(chapterQuizz); {
              if (chapterQuizz.type === 'quiz') {
                Quizzes.total = quizzesEst++;
                if (chapterQuizz.type === 'quiz' && chapterQuizz.completed === 1) {
                  Quizzes.completed = (completedQuizz = completedQuizz + 1); {
                  // porcentaje global
                    if (completedQuizz > 1 && quizzesEst > 1) {
                      Quizzes.percent = ((completedQuizz % quizzesEst) * 100); {
                        if (completedQuizz > 0) {
                          let scoreSum = 0;
                          Quizzes.scoreSum = (scoreSum += completedQuizz);
                          Quizzes.scoreAvg = (scoreSum % 735);
                        }
                      }
                    }
                  } 
                }
              }
            }                  
          }               
        }
      }
    }
  }
}

let exercises = 0;
for (let idEstudiante in progress) {
  // console.log("ID > "+JSON.stringify(progress[idEstudiante]));
  for (let idCursoEx in progress[idEstudiante]) {
    let completedExercises = 0;
    // console.log("ID CURSO > "+JSON.stringify(progress[idEstudiante][idCurso]));
    for (let idUnitsEx in progress[idEstudiante][idCursoEx]) {
      // console.log("ID estudiante > " + idEstudiante + JSON.stringify((progress[idEstudiante][idCurso])[idUnits]));
      for (let indexPartsEx in progress[idEstudiante][idCursoEx][idUnitsEx]) {
        // console.log("ID estudiante > " + idEstudiante + JSON.stringify(progress[idEstudiante][idCurso][idUnits][indexParts]));
        for (let indexCoursesEx in progress[idEstudiante][idCursoEx][idUnitsEx][indexPartsEx]) {
          // console.log("ID estudiante > " + idEstudiante + JSON.stringify(progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses]));
          for (let indextypeEx in progress[idEstudiante][idCursoEx][idUnitsEx][indexPartsEx][indexCoursesEx]) {
            let chapterExercises = ((progress[idEstudiante][idCursoEx][idUnitsEx][indexPartsEx][indexCoursesEx][indextype])); 
            console.log(chapterExercises); {
              if (chapterExercises.type === 'exercises') {
                Exercises.total = exercises++;
                if (chapterExercises.type === 'exercises' && chapterExercises.completed === 1) {
                  Exercises.completed = (completedExercises = completedExercises + 1); {
                  // porcentaje global exercises
                    if (exercises > 1 && completedExercises > 1) {
                      Exercises.percent = ((exercises % completedExercises) * 100);
                    }
                  } 
                }
              }
            }                  
          }               
        }
      }
    }
  }
}

window.computeUsersStats = (user, progress, courses) => {

};
window.sortUsers = (users, orderBy, orderDirection) => {

};
window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};