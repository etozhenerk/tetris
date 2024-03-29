let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let speed = 0;

modal.addEventListener('click', function(e){
    if(e.target.classList.contains('easy')){
      speed = 1000;
    } else if(e.target.classList.contains('normal')){
      speed = 500;
    } else if(e.target.classList.contains('hard')){
      speed = 200;
    } 

    if(e.target.classList.contains('button')){
      modal.style.display = 'none';
      overlay.style.display = 'none';
      startGame();
    }
})

function startGame(){

let tetris = document.createElement("div");//создание поля для тетриса
tetris.classList.add("tetris");

//заполнение поля ячейками
for (let i = 1; i < 181; i++) {
  let excel = document.createElement("div");
  excel.classList.add("excel");
  tetris.appendChild(excel);
}

let main = document.getElementById("main");
main.appendChild(tetris); //добавление ячеек в мейн
//создание координатной сетки с помощью добавления атрибутов позиции х и позиции у
let excel = document.getElementsByClassName("excel");
let i = 0;

for (let y = 18; y > 0; y--) {
  for (let x = 1; x < 11; x++) {
    excel[i].setAttribute("posX", x);
    excel[i].setAttribute("posY", y);
    i++;
  }
}
//создание фигур
let x = 5,
  y = 15;
let mainArr = [
  //палочка
  [
    [0, 1],
    [0, 2],
    [0, 3],
 //поворот на 90 градусов
    [
      [-1, 1],
      [0, 0],
      [1, -1],
      [2,-2]
    ],
  //поворот на 180 градусов
    [
      [1, -1],
      [0, 0],
      [-1, 1],
      [-2,2]
    ],
  // поворот на 270 градусов
    [
      [-1, 1],
      [0, 0],
      [1, -1],
      [2,-2]
    ],
  //поворот на 360 градусов
    [
      [1, -1],
      [0, 0],
      [-1, 1],
      [-2,2]
    ],
    ['figure']
  ],
  //квадрат
  [
    [1, 0],
    [0, 1],
    [1, 1],
  //поворот на 90 градусов
    [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ],
  //поворот на 180 градусов
    [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ],
  // поворот на 270 градусов
    [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ],
  //поворот на 360 градусов
    [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0]
    ],
    ['figure1']
  ],
  //буква L
  [
    [1, 0],
    [0, 1],
    [0, 2],
//поворот на 90 градусов
    [
      [0, 0],
      [-1, 1],
      [1, 0],
      [2, -1]
    ],
  //поворот на 180 градусов
    [
      [1, -1],
      [1, -1],
      [-1, 0],
      [-1, 0]
    ],
  // поворот на 270 градусов
    [
      [-1, 0],
      [0, -1],
      [2, -2],
      [1, -1]
    ],
  //поворот на 360 градусов
    [
      [0, -1],
      [0, -1],
      [-2, 0],
      [-2, 0]
    ],
    ['figure2']
  ],
  //зеракальная буква L
  [
    [1, 0],
    [1, 1],
    [1, 2],
//поворот на 90 градусов
    [
      [0, 0],
      [0, 0],
      [1, -1],
      [-1, -1]
    ],
//поворот на 180 градусов
    [
      [0, -1],
      [-1, 0],
      [-2, 1],
      [1, 0]
    ],
// поворот на 270 градусов
    [
      [2, 0],
      [0, 0],
      [1, -1],
      [1, -1]
    ],
//поворот на 360 градусов
    [
      [-2, 0],
      [1, -1],
      [0, 0],
      [-1, 1]
    ],
    ['figure3']
  ],
  //молния вправо
  [
    [1, 0],
    [-1, 1],
    [0, 1],
    //поворот на 90 градусов
    [
      [0, -1],
      [-1, 0],
      [2, -1],
      [1, 0]
    ],
//поворот на 180 градусов
    [
      [0, 0],
      [1, -1],
      [-2, 0],
      [-1, -1]
    ],
// поворот на 270 градусов
    [
      [0, -1],
      [-1, 0],
      [2, -1],
      [1, 0]
    ],
//поворот на 360 градусов
    [
      [0, 0],
      [1, -1],
      [-2, 0],
      [-1, -1]
    ],
    ['figure4']
  ],
  //молния влево
  [
    [1, 0],
    [1, 1],
    [2, 1],
     //поворот на 90 градусов
    [
      [2, -1],
      [0, 0],
      [1, -1],
      [-1, 0]
    ],
//поворот на 180 градусов
    [
      [-2, 0],
      [0, -1],
      [-1, 0],
      [1, -1]
    ],
// поворот на 270 градусов
    [
      [2, -1],
      [0, 0],
      [1, -1],
      [-1, 0]
    ],
//поворот на 360 градусов
    [
      [-2, 0],
      [0, -1],
      [-1, 0],
      [1, -1]
    ],
    ['figure5']
  ],
  //T
  [
    [1, 0],
    [2, 0],
    [1, 1],
    //90
    [
      [1, -1],
      [0, 0],
      [0, 0],
      [0, 0]
    ],
//поворот на 180 градусов
    [
      [0, 0],
      [-1, 0],
      [-1, 0],
      [1, -1]
    ],
// поворот на 270 градусов
    [
      [1, -1],
      [1, -1],
      [1, -1],
      [0, 0]
    ],
//поворот на 360 градусов
    [
      [-2, 0],
      [0, -1],
      [0, -1],
      [-1, -1]
    ],
    ['figure6']
  ]
];
let currentFigure = 0;
let figureBody = 0;
let rotate = 1; //отслеживание поворота
//создание фигуры
function create() {
  function getRandom() {
    return Math.round(Math.random() * (mainArr.length - 1));
  }
  rotate = 1;
  currentFigure = getRandom(); // случайный элемент массива, в котором хранится расположение фигур

  figureBody = [
    //тело фигуры
    document.querySelector(`[posX = "${x}"][posY = "${y}"]`), // первый элемент фигуры
    document.querySelector(`[posX = "${x + mainArr[currentFigure][0][0]}"][posY = "${y + mainArr[currentFigure][0][1]}"]`), // второй элемент фигуры
    document.querySelector(`[posX = "${x + mainArr[currentFigure][1][0]}"][posY = "${y + mainArr[currentFigure][1][1]}"]`), // третий элемент фигуры
    document.querySelector( `[posX = "${x + mainArr[currentFigure][2][0]}"][posY = "${y + mainArr[currentFigure][2][1]}"]`) // четвертый элемент фигуры
  ]
  
  for(let i=0; i < figureBody.length; i++){
      figureBody[i].classList.add(mainArr[currentFigure][7]);
  }
}
create();

let score = 0;
let input = document.getElementsByTagName('input')[0];
input.value = `Ваши очки: ${score}`;

function move(){
  let moveFlag = true; //флаг, который позваляет двигаться детальке на ряд в низ, если значение true
  let coordinates = [ // координаты фигуры
    [figureBody[0].getAttribute('posX'),figureBody[0].getAttribute('posY')],
    [figureBody[1].getAttribute('posX'),figureBody[1].getAttribute('posY')],
    [figureBody[2].getAttribute('posX'),figureBody[2].getAttribute('posY')],
    [figureBody[3].getAttribute('posX'),figureBody[3].getAttribute('posY')]
  ];
  for( let i = 0; i < coordinates.length; i++){
      if(coordinates[i][1] == 1 || document.querySelector(`[posX ="${coordinates[i][0]}"][posY ="${coordinates[i][1] - 1}"]`).classList.contains('set')){ // условия остановки движения, конец поля или накопление фигур
        moveFlag = false;
        break;
      }
  }
  if(moveFlag){
    for(let i=0; i < figureBody.length; i++){
      figureBody[i].classList.remove(mainArr[currentFigure][7]);
    }
    figureBody = [ // движение вниз на 1 строчку
      document.querySelector(`[posX ="${coordinates[0][0]}"][posY ="${coordinates[0][1] - 1}"]`),
      document.querySelector(`[posX ="${coordinates[1][0]}"][posY ="${coordinates[1][1] - 1}"]`),
      document.querySelector(`[posX ="${coordinates[2][0]}"][posY ="${coordinates[2][1] - 1}"]`),
      document.querySelector(`[posX ="${coordinates[3][0]}"][posY ="${coordinates[3][1] - 1}"]`),
    ]
    for(let i=0; i < figureBody.length; i++){
      figureBody[i].classList.add(mainArr[currentFigure][7]);
    }
  }else{//есть флаг фолс, то добавляет класс set, который определяет уже упавшие фигуры и создаем новую фигуру
    for(let i=0; i < figureBody.length; i++){
      figureBody[i].classList.remove(mainArr[currentFigure][7]);
      figureBody[i].classList.add('set');
    }
    for(let i = 1; i < 15 ; i++){  //цикл, который проверяет собран ли целый ряд с классом set, удаляет этот ряд и опускает следующий ряд на 1 строчку ниже
        let count = 0;
        for( let k = 1; k <11; k++){
          if(document.querySelector(`[posX = "${k}"][posY = "${i}"]`).classList.contains('set')){
            count++;
            if(count == 10){
              score +=10;
              input.value = `Ваши очки: ${score}`;
              for(let m = 1; m < 11; m++){
                document.querySelector(`[posX = "${m}"][posY = "${i}"]`).classList.remove('set');
              }
              let set = document.querySelectorAll('.set');
              let newSet = [];
              for(let s = 0; s < set.length; s++){
                let setCoordinates = [set[s].getAttribute('posX'),set[s].getAttribute('posY')];
                if(setCoordinates[1] > i){
                  set[s].classList.remove('set');
                  newSet.push(document.querySelector(`[posX = "${setCoordinates[0]}"][posY = "${setCoordinates[1]-1}"]`));
                }
              }
              for( let a = 0; a < newSet.length; a++){
                newSet[a].classList.add('set');
              }
              i--;
            }
          }
        }
    }
    for( let n = 1; n < 11; n++){ // цикл, который описывает правила окончания игры, а именно ситуацию, в которой фигура находится на 15 ряду
      if(document.querySelector(`[posX = "${n}"][posY = "${15}"]`).classList.contains('set')){
          clearInterval(interval);
          if(alert(`Игра окончена. Ваши очки: ${score}`)){

          }else{
            location.reload();
          }
          break;
      }
    }
    create();
  }

}

let interval = setInterval(() => {
    move();
}, speed);

let flag = true; // флаг для определения позиции фигуры относительно краев поля или уже упавших фигур
//обработчик событий, который регирует на нажатие клавиш
window.addEventListener('keydown', function(event){
    let coordinates1 = [figureBody[0].getAttribute('posX'),figureBody[0].getAttribute('posY') ];
    let coordinates2 = [figureBody[1].getAttribute('posX'),figureBody[1].getAttribute('posY') ];
    let coordinates3 = [figureBody[2].getAttribute('posX'),figureBody[2].getAttribute('posY') ];
    let coordinates4 = [figureBody[3].getAttribute('posX'),figureBody[3].getAttribute('posY') ];

    function getNewState(a){ // определение позиции после нажатия на стрелки

      flag = true;

      let figureNew = [
        document.querySelector(`[posX ="${ +coordinates1[0] + a}"][posY ="${coordinates1[1]}"]`),
        document.querySelector(`[posX ="${ +coordinates2[0] + a}"][posY ="${coordinates2[1]}"]`),
        document.querySelector(`[posX ="${ +coordinates3[0] + a}"][posY ="${coordinates3[1]}"]`),
        document.querySelector(`[posX ="${ +coordinates4[0] + a}"][posY ="${coordinates4[1]}"]`),
      ];
      for( let i = 0; i < figureNew.length ; i++){
        if(!figureNew[i] || figureNew[i].classList.contains('set')){
          flag = false;
        }
      }
      if(flag){
        for(let i=0; i < figureBody.length; i++){
          figureBody[i].classList.remove(mainArr[currentFigure][7]);
        }

        figureBody = figureNew; // перезапись новой позиции фгуры +

        for(let i=0; i < figureBody.length; i++){
          figureBody[i].classList.add(mainArr[currentFigure][7]);
        }
      }
    }

    if(event.keyCode == 37){ // движение влево
      getNewState(-1);
    } else if(event.keyCode == 39){ // движение вправо
      getNewState(1);
    } else if(event.keyCode == 40){//вниз
      move();// просто делаем движение быстрее
    } else if(event.keyCode == 38){//вверх
      flag = true;

      let figureNew = [
        document.querySelector(`[posX ="${ +coordinates1[0] + mainArr[currentFigure][rotate + 2][0][0]}"][posY ="${+ coordinates1[1]+ mainArr[currentFigure][rotate + 2][0][1]}"]`), // обращение к массивам с поворотами
        document.querySelector(`[posX ="${ +coordinates2[0] + mainArr[currentFigure][rotate + 2][1][0]}"][posY ="${+ coordinates2[1]+ mainArr[currentFigure][rotate + 2][1][1]}"]`),
        document.querySelector(`[posX ="${ +coordinates3[0] + mainArr[currentFigure][rotate + 2][2][0]}"][posY ="${+coordinates3[1]+ mainArr[currentFigure][rotate + 2][2][1]}"]`),
        document.querySelector(`[posX ="${  +coordinates4[0] + mainArr[currentFigure][rotate + 2][3][0]}"][posY ="${+coordinates4[1]+ mainArr[currentFigure][rotate + 2][3][1]}"]`),
      ];
      for( let i = 0; i < figureNew.length ; i++){
        if(!figureNew[i] || figureNew[i].classList.contains('set')){
          flag = false;
        }
      }
      if(flag){
        for(let i=0; i < figureBody.length; i++){
          figureBody[i].classList.remove(mainArr[currentFigure][7]);
        }

        figureBody = figureNew; // перезапись новой позиции фгуры +

        for(let i=0; i < figureBody.length; i++){
          figureBody[i].classList.add(mainArr[currentFigure][7]);
        }

        if(rotate < 4){
          rotate++;
        } else{
          rotate = 1;
        }
      }
    } 


})
}