"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Professor = /** @class */ (function () {
    function Professor(nome, d) {
        this.disciplinas = d;
        this.nome = nome;
    }
    Professor.prototype.getDisciplinas = function () {
        console.log("Disciplinas: ");
        return this.disciplinas;
    };
    return Professor;
}());
exports.default = Professor;
