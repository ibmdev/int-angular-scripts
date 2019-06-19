"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process = require("child_process");
const util_1 = require("util");
const exec = util_1.promisify(child_process.exec);
function getBranch() {
    return exec('git rev-parse --abbrev-ref HEAD');
}
exports.getBranch = getBranch;
function getRevision(level) {
    // level = HEAD, HEAD~1, HEAD~2, .... HEAD~n
    return exec('git rev-parse --short ' + level);
}
exports.getRevision = getRevision;
function unstage() {
    return exec('git reset ');
}
exports.unstage = unstage;
function stage(filenames) {
    return exec('git add ' + filenames);
}
exports.stage = stage;
function commit(message, filenames) {
    return exec('git commit -m "' + message + '" ' + filenames);
}
exports.commit = commit;
function push(branch) {
    return exec('git push origin ' + branch);
}
exports.push = push;
function discard(filename) {
    return exec('git checkout ' + filename);
}
exports.discard = discard;
