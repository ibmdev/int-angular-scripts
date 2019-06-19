import { getFiles, renameFile } from '../manager/filesystem.manager';
import { commit, getBranch, getRevision, push, stage, unstage } from '../manager/git.manager';

async function main() {
  const branch = (await getBranch()).stdout.toString().trim();
  const suffix = (await getRevision('HEAD~2')).stdout.toString().trim();
  const i18nPath = 'src/assets/i18n/';
  const i18nFiles = await getFiles(i18nPath, []);
  i18nFiles.forEach(file => {
    renameFile(file, suffix, '_', '.json');
  });
  await unstage();
  await stage('src/assets/i18n/**/*.json');
  await commit('Release i18n', '');
  await push(branch);
  console.log(`Commit et push sur la branche : '${branch}'`);
}
main();
