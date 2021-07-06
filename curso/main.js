"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var curso_1 = __importDefault(require("./curso"));
var disciplina_1 = __importDefault(require("./disciplina"));
var professor_1 = __importDefault(require("./professor"));
var alg = new disciplina_1.default("Algoritmos", 100);
var mat = new disciplina_1.default("Matematica", 68);
var p1 = new professor_1.default("Ainslan", [alg, mat]);
console.log(p1.getDisciplinas());
var c1 = new curso_1.default("ADS", [alg, mat]);
console.log(c1);
var es = new disciplina_1.default("Estrutura de Dados", 80);
c1.adicionarDisciplina(es);
console.log(c1);
