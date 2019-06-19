"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const utils_1 = require("tslint/lib/utils");
function createFile(filename, content) {
    fs_1.writeFileSync(filename, content, { encoding: 'utf8' });
}
exports.createFile = createFile;
function renameFile(oldPath, suffixe, separateur, extension) {
    const oldName = oldPath.substring(oldPath.lastIndexOf('/') + 1).split(extension)[0];
    const newName = oldName.split(separateur)[0] + separateur + suffixe;
    const newPath = oldPath.replace(oldName, newName);
    console.log('Old Path : ', oldPath);
    console.log('New path : ', newPath);
    fs_1.renameSync(oldPath, newPath);
}
exports.renameFile = renameFile;
function createBuildInfo(filename, info) {
    const content = utils_1.dedent `
     export const versions = {
        version: '${info.version}',
        revision: '${info.revision}',
        branche: '${info.branche}'
        // tslint:disable-next-line:eofline
      };`;
    fs_1.writeFileSync(filename, content);
}
exports.createBuildInfo = createBuildInfo;
function getFiles(i18nPath, filelist) {
    filelist = filelist || [];
    const files = fs_1.readdirSync(i18nPath);
    files.forEach(file => {
        console.log('file : ' + file);
        if (fs_1.statSync(i18nPath + '/' + file).isDirectory()) {
            filelist = getFiles(i18nPath + '/' + file, filelist);
        }
        else {
            filelist.push(i18nPath + '/' + file);
        }
    });
    return filelist;
}
exports.getFiles = getFiles;
