import * as child_process from 'child_process';
import { promisify } from 'util';
const exec = promisify(child_process.exec);

export function updateVersionPatch(tag?: boolean) {
  if (tag) {
    return exec('npm version patch --force');
  }
  return exec('npm version patch --force --no-git-tag-version');
}
export function updateVersionMinor(tag?: boolean) {
  if (tag) {
    return exec('npm version minor --force');
  }
  return exec('npm version minor --force --no-git-tag-version');
}
export function updateVersionMajor(tag?: boolean) {
  if (tag) {
    return exec('npm version major --force');
  }
  return exec('npm version major --force --no-git-tag-version');
}
