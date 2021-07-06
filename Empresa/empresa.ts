export default class Empresa {
  private nome: string;
  constructor(n: string) {
    this.nome = n;
  }
}

class Funcionario {
  private nome: string;
  protected salario: number;
  protected beneficios: Array<string> = [];
  constructor(n: string, s: number) {
    this.nome = n;
    this.salario = s;
  }

  public getSalario(): number {
    return this.salario;
  }
  public getBeneficios(): Array<string> {
    return this.beneficios;
  }
}

class PF extends Funcionario {
  private cpf: string;
  constructor(cpf: string, n: string, s: number) {
    super(n, s);
    this.salario = Number((s * 0.9).toFixed(2));
    this.cpf = cpf;
    this.beneficios = ["Plano de Saude"];
  }
  // public getSalarioLiquido(): number {
  //   return this.getSalario() - this.getSalario() * 0.1;
  // }
  public getBeneficios(): Array<string> {
    return this.beneficios;
  }
}

class PJ extends Funcionario {
  private cnpj: string;
  constructor(cnpj: string, n: string, s: number) {
    super(n, s);
    this.salario = Number((s * 0.95).toFixed(2));
    this.cnpj = cnpj;
    this.beneficios = ["Plano de Saude", "VR", "Férias"];
  }
  // public getSalarioLiquido(): number {
  //   return this.getSalario() - this.getSalario() * 0.05;
  // }
  public getBeneficios(): Array<string> {
    return this.beneficios;
  }
}

let empresa1 = new Empresa("mambee");
// console.log(empresa1);

let f1 = new PJ("1234567890abc", "Michel", 3999);
console.log(f1);
console.log(f1.getSalario());
console.log(f1.getBeneficios());

let f2 = new PF("123.456.789-00", "Romulo", 800);
console.log(f2);
console.log(f2.getSalario());
console.log(f2.getBeneficios());
