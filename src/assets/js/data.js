window.computeUsersStats = (
  users,
  progress,
  courses
) => {
  function infoStudents() {
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
        scoreAvg = scoreSum / completedquiz;
        console.log(idEstudiante + ' > ' + 'Lecturas totales: ' + lect + ' Lecturas completadas: ' + completedlect + ' % total realizado en lecturas: ' + percentLect + '%' + ' Quizzes totales: ' + quiz + ' Quizzes completados: ' + completedquiz + ' Suma de puntajes quizzes: ' + scoreSum + ' Promedio Quizzes: ' + scoreAvg + ' Ejercicios totales: ' + exercises + ' Ejercicios completados: ' + completedexercises);
      }
      let percentLect = Math.round((completedlect / lect) * 100);
      let percentQuiz = Math.round((completedquiz / quiz) * 100);
      let percentExercises = Math.round((completedexercises / exercises) * 100);
      scoreAvg = scoreSum / completedquiz;
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
  };


  // Declaración de objetos globales (constructor) 
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

  // Construcción objeto Quizzes 
  class Quizzes {
    constructor(total, completed, percent, scoreSum, scoreAvg) {
      this.total = total,
      this.completed = completed,
      this.percent = percent,
      this.scoreSum = scoreSum,
      this.scoreAvg = scoreAvg;
    }
  }

  // Construcción objeto Reads 
  class Reads {
    constructor(total, completed, percent) {
      this.total = total,
      this.completed = completed,
      this.percent = percent;
    }
  }
  // Construcción objeto Exercises 
  class Exercises {
    constructor(total, completed, percent) {
      this.total = total,
      this.completed = completed,
      this.percent = percent;
    }
  }

  // % de progreso gral de cada estudiante, de todos sus cursos. Se encuentra como elemento en objeto progress > Objeto intro. Detalle: Hay usuarios que no tienen nada, está vacío 
  class Percent {
    constructor(id, percent) {
      this.id = id,
      this.percent = percent;
    }
  }
};