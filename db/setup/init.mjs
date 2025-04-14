import { CreateRecords } from './create-records.mjs';

try {
  await CreateRecords();
} catch(error) {
  console.log('Error Creating Tables', error);
}

console.log("Job's Done!");
process.exit(0);
