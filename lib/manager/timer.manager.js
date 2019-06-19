"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function attente(ms) {
    return new Promise(res => setTimeout(res, ms));
}
exports.attente = attente;
