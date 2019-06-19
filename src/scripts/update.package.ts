import { discard, getBranch, push, stage, unstage } from '../manager/git.manager';
import { updateVersionPatch } from '../manager/node.manager';

async function main() {
  const branch = (await getBranch()).stdout.toString().trim();
  await discard('package.json');
  await updateVersionPatch();
  await unstage();
  await stage('package.json package-lock.json');
  await push(branch);
}
main();
