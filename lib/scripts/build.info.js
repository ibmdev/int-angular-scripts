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
        const rev = (yield git_manager_1.getRevision('HEAD~1')).stdout.toString().trim();
        console.log(`version: '${process.env.npm_package_version}', revision: '${rev}', branch: '${branch}'`);
        const info = { branche: branch, revision: rev, version: process.env.npm_package_version };
        filesystem_manager_1.createBuildInfo('src/environments/build_info.ts', info);
        yield git_manager_1.unstage();
        yield git_manager_1.stage('src/environments/build_info.ts');
        yield git_manager_1.commit('Release build-info', 'src/environments/build_info.ts');
        yield git_manager_1.push(branch);
    });
}
main();
