
  function showWelcomeMessage()  {
  let name = prompt("Введите имя");
  alert( `Привет, ${name}!` ); // Привет, Алевтина!
}

function age() {
  let a = +prompt("Введите свой возраст");
  switch (true) {
    case (a == 18):
    alert( 'Вам надо учить уроки!' );
    break;
  case (a <= 29):
    alert( 'Ты пока еще молод, живи, гуляй и веселись' );
    break;
    case (a == 30):
    alert( 'Ложись спать, затра на работу' );
    break;

  case (a <= 31):
    alert( 'У тебя возраст вступления в брак' );
    break;
  case (a <= 40):
    alert( 'У тебя возраст выполнения общественных обязанностей ' );
    break;
    case (a <= 50):
    alert( 'У тебя возраст познания собственных заблуждений ' );
    break;
  case (a <= 60):
    alert( 'У тебя последний творческий возраст ' );
    break;
  case (a <= 70):
    alert( 'Поздравляю! У тебя желанный возраст' );
    break;
  default:
    alert( "Это страрость, друг. Мы не знаем, что Вам делать!!!" );}
    }

