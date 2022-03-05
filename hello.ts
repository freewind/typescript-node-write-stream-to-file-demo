import fs from 'fs';

const logFile = fs.createWriteStream('log.txt')

for (let i = 0; i < 10000; i++) {
  process.nextTick(() => logFile.write(`${i} - hello\n`))
}

process.nextTick(() => {
  logFile.end()
})
