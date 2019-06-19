"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process = require("child_process");
const util_1 = require("util");
const exec = util_1.promisify(child_process.exec);
function updateVersionPatch() {
    return exec('npm version patch --force --no-git-tag-version');
}
exports.updateVersionPatch = updateVersionPatch;
function updateVersionMinor() {
    return exec('npm version minor --force --no-git-tag-version');
}
exports.updateVersionMinor = updateVersionMinor;
function updateVersionMajor() {
    return exec('npm version major --force --no-git-tag-version');
}
exports.updateVersionMajor = updateVersionMajor;
