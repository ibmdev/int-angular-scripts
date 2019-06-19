import { createBuildInfo } from '../manager/filesystem.manager';
import { commit, getBranch, getRevision, push, stage, unstage } from '../manager/git.manager';
import { attente } from '../manager/timer.manager';

async function main() {
  const branch = (await getBranch()).stdout.toString().trim();
  const rev = (await getRevision('HEAD~1')).stdout.toString().trim();
  console.log(`version: '${process.env.npm_package_version}', revision: '${rev}', branch: '${branch}'`);
  const info = { branche: branch, revision: rev, version: process.env.npm_package_version };
  createBuildInfo('src/environments/build_info.ts', info);
  await unstage();
  await stage('src/environments/build_info.ts');
  await attente(5000);
  await commit('Release build-info', 'src/environments/build_info.ts');
  await push(branch);
}
main();
