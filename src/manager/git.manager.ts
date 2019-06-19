import * as child_process from 'child_process';
import { promisify } from 'util';
const exec = promisify(child_process.exec);

export function getBranch(): Promise<any> {
  return exec('git rev-parse --abbrev-ref HEAD');
}

export function getRevision(level: string): Promise<any> {
  // level = HEAD, HEAD~1, HEAD~2, .... HEAD~n
  return exec('git rev-parse --short ' + level);
}

export function unstage(): Promise<any> {
  return exec('git reset ');
}
export function stage(filenames: string): Promise<any> {
  return exec('git add ' + filenames);
}
export function commit(message: string, filenames: string): Promise<any> {
  return exec('git commit -m "' + message + '" ' + filenames);
}
export function push(branch: string): Promise<any> {
  return exec('git push origin ' + branch);
}

export function discard(filename: string) {
  return exec('git checkout ' + filename);
}
