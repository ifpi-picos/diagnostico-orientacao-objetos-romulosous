import Curso from "./curso";
import Disciplina from "./disciplina";
import Professor from "./professor";

let alg = new Disciplina("Algoritmos", 100);
let mat = new Disciplina("Matematica", 68);

let p1 = new Professor("Ainslan", [alg, mat]);
console.log(p1.getDisciplinas());

let c1 = new Curso("ADS", [alg, mat]);
console.log(c1);

let es = new Disciplina("Estrutura de Dados", 80);
c1.adicionarDisciplina(es);
console.log(c1);
