const { exec } = require('child_process');

function runCommand(command) {
  return new Promise((resolve, reject) => {
    const process = exec(command);

    process.stdout.on('data', (data) => console.log(data.toString()));
    process.stderr.on('data', (data) => console.error(data.toString()));

    process.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command "${command}" failed with code ${code}`));
      }
    });
  });
}

(async () => {
  try {
    console.log('🔄 Running Prisma Migrate...');
    await runCommand('npx prisma migrate dev');

    console.log('⚙️ Regenerating Prisma Client...');
    await runCommand('npx prisma generate');

    console.log('✅ Prisma update complete!');
  } catch (error) {
    console.error('❌ Error updating Prisma:', error.message);
    process.exit(1);
  }
})();
