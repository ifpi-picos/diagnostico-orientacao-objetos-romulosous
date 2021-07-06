"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa(n) {
        this.nome = n;
    }
    return Empresa;
}());
exports.default = Empresa;
var Funcionario = /** @class */ (function () {
    function Funcionario(n, s) {
        this.beneficios = [];
        this.nome = n;
        this.salario = s;
    }
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    Funcionario.prototype.getBeneficios = function () {
        return this.beneficios;
    };
    return Funcionario;
}());
var PF = /** @class */ (function (_super) {
    __extends(PF, _super);
    function PF(cpf, n, s) {
        var _this = _super.call(this, n, s) || this;
        _this.salario = Number((s * 0.9).toFixed(2));
        _this.cpf = cpf;
        _this.beneficios = ["Plano de Saude"];
        return _this;
    }
    // public getSalarioLiquido(): number {
    //   return this.getSalario() - this.getSalario() * 0.1;
    // }
    PF.prototype.getBeneficios = function () {
        return this.beneficios;
    };
    return PF;
}(Funcionario));
var PJ = /** @class */ (function (_super) {
    __extends(PJ, _super);
    function PJ(cnpj, n, s) {
        var _this = _super.call(this, n, s) || this;
        _this.salario = Number((s * 0.95).toFixed(2));
        _this.cnpj = cnpj;
        _this.beneficios = ["Plano de Saude", "VR", "Férias"];
        return _this;
    }
    // public getSalarioLiquido(): number {
    //   return this.getSalario() - this.getSalario() * 0.05;
    // }
    PJ.prototype.getBeneficios = function () {
        return this.beneficios;
    };
    return PJ;
}(Funcionario));
var empresa1 = new Empresa("mambee");
// console.log(empresa1);
var f1 = new PJ("1234567890abc", "Michel", 3999);
console.log(f1);
console.log(f1.getSalario());
console.log(f1.getBeneficios());
var f2 = new PF("123.456.789-00", "Romulo", 800);
console.log(f2);
console.log(f2.getSalario());
console.log(f2.getBeneficios());
