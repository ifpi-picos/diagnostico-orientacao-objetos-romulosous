import Disciplina from "./disciplina";

export default class Curso {
  private nome: string;
  private disciplinas: Array<Disciplina>;
  constructor(n: string, d: Array<Disciplina>) {
    this.nome = n;
    this.disciplinas = d;
  }
  public removerDisciplina(): void {
    console.log(this.disciplinas.pop());
  }
  public adicionarDisciplina(d: Disciplina): void {
    this.disciplinas.push(d);
  }
}
