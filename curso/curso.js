"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Curso = /** @class */ (function () {
    function Curso(n, d) {
        this.nome = n;
        this.disciplinas = d;
    }
    Curso.prototype.removerDisciplina = function () {
        console.log(this.disciplinas.pop());
    };
    Curso.prototype.adicionarDisciplina = function (d) {
        this.disciplinas.push(d);
    };
    return Curso;
}());
exports.default = Curso;
