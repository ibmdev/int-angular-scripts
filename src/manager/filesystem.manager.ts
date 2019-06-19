import { readdirSync, renameSync, statSync, writeFileSync } from 'fs';
import { dedent } from 'tslint/lib/utils';

export function createFile(filename: string, content: string) {
  writeFileSync(filename, content, { encoding: 'utf8' });
}
export function renameFile(oldPath: string, suffixe: string, separateur: string, extension: string) {
  const oldName = oldPath.substring(oldPath.lastIndexOf('/') + 1).split(extension)[0];
  const newName = oldName.split(separateur)[0] + separateur + suffixe;
  const newPath = oldPath.replace(oldName, newName);
  console.log('Old Path : ', oldPath);
  console.log('New path : ', newPath);
  renameSync(oldPath, newPath);
}
export function createBuildInfo(filename: string, info: any) {
  const content = dedent`
     export const versions = {
        version: '${info.version}',
        revision: '${info.revision}',
        branche: '${info.branche}'
        // tslint:disable-next-line:eofline
      };`;
  writeFileSync(filename, content);
}

export function getFiles(i18nPath: string, filelist: any[]) {
  filelist = filelist || [];
  const files = readdirSync(i18nPath);
  files.forEach(file => {
    console.log('file : ' + file);
    if (statSync(i18nPath + '/' + file).isDirectory()) {
      filelist = getFiles(i18nPath + '/' + file, filelist);
    } else {
      filelist.push(i18nPath + '/' + file);
    }
  });
  return filelist;
}
