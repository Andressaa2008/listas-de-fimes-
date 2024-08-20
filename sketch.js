//aventura, drama, fantacia, romance, 

// a viagem de chihiro, LIVRE, fantasia, aventura
// castelo animado, LIVRE, fantasia, aventura, drama
// ponyo, LIVRE, fantacia, aventura,

// o mundos dos pequenos , 10, aventura, fantacia, 
// your name, 12 , fantasia, drama, romace  
// suzume, 12, aventura, drama, 
// o tempo com você, 12, aventura, fantacia, romance, drama
// a voz do silêncio, 14, drama, romance
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  
  function setup() {
      createCanvas(800, 400);
      createSpan("Sua idade:");
      campoIdade = createInput("5");
      campoFantasia = createCheckbox(" Gosta de fantasia?");
  }
  
  function draw() {
      background("white");
      let idade = campoIdade.value();
      let gostaDeFantasia = campoFantasia.checked();
      let recomendacao = geraRecomendacao(idade, gostaDeFantasia);
  
      fill(color(76, 0, 115));
      textAlign(CENTER, CENTER);
      textSize(38);
      text(recomendacao, width / 2, height / 2);
  }
  
  function geraRecomendacao(idade, gostaDeFantasia) {
      if (idade >= 10) {
          if (idade >= 14) {
              return "Suzume";
          } else {
              if (gostaDeFantasia) {
                  return "Your name";
              } else {
                  return "Ponyo";
              }
          }
      } else {
          if (gostaDeFantasia) {
              return "A viagem de chihiro";
          } else {
              return "O Mundo Dos Pequenos";
          }
      }
  }
  