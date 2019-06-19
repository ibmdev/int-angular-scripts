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
const filesystem_manager_1 = require("../manager/filesystem.manager");
const git_manager_1 = require("../manager/git.manager");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const branch = (yield git_manager_1.getBranch()).stdout.toString().trim();
        const suffix = (yield git_manager_1.getRevision('HEAD~2')).stdout.toString().trim();
        const i18nPath = 'src/assets/i18n/';
        const i18nFiles = yield filesystem_manager_1.getFiles(i18nPath, []);
        i18nFiles.forEach(file => {
            filesystem_manager_1.renameFile(file, suffix, '_', '.json');
        });
        yield git_manager_1.unstage();
        yield git_manager_1.stage('src/assets/i18n/**/*.json');
        yield git_manager_1.commit('Release i18n', '');
        yield git_manager_1.push(branch);
        console.log(`Commit et push sur la branche : '${branch}'`);
    });
}
main();
