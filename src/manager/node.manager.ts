import * as child_process from 'child_process';
import { promisify } from 'util';
const exec = promisify(child_process.exec);

export function updateVersionPatch() {
  return exec('npm version patch --force --no-git-tag-version');
}
export function updateVersionMinor() {
  return exec('npm version minor --force --no-git-tag-version');
}
export function updateVersionMajor() {
  return exec('npm version major --force --no-git-tag-version');
}
