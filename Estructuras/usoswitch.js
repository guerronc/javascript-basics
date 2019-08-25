var signo = prompt("Cual es tu signo");
console.log(signo);

switch (signo) {
  case "Aries":
    console.log("Aries");
    break;
  case "Tauro":
    console.log("Tauro");
  case "Cancer":
    console.log("Cancer");
  default:
    console.log("No exite signo");
    break;
}
