"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const git_manager_1 = require("../manager/git.manager");
const node_manager_1 = require("../manager/node.manager");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const branch = (yield git_manager_1.getBranch()).stdout.toString().trim();
        yield git_manager_1.discard('package.json');
        yield node_manager_1.updateVersionPatch();
        // await unstage();
        // await stage('package.json package-lock.json');
        // await attente(5000);
        // await commit('Release package.json', 'package.json package-lock.json');
        // await push(branch);
    });
}
main();
