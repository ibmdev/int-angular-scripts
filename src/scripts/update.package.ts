import { commit, discard, getBranch, push, stage, unstage } from '../manager/git.manager';
import { updateVersionPatch } from '../manager/node.manager';
import { attente } from '../manager/timer.manager';

async function main() {
  const branch = (await getBranch()).stdout.toString().trim();
  await discard('package.json');
  await updateVersionPatch();
  await unstage();
  await stage('package.json package-lock.json');
  await attente(5000);
  await commit('Release package.json', 'package.json package-lock.json');
  await push(branch);
}
main();
