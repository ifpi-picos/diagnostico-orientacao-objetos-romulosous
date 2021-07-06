import Disciplina from "./disciplina";

export default class Professor {
  private disciplinas: Array<Disciplina>;
  private nome: string;
  constructor(nome: string, d: Array<Disciplina>) {
    this.disciplinas = d;
    this.nome = nome;
  }
  getDisciplinas(): Array<Disciplina> {
    console.log("Disciplinas: ");
    return this.disciplinas;
  }
}
