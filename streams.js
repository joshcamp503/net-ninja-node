const fs = require(`fs`);

const readStream = fs.createReadStream(`./blogs/blog3.txt`, { encoding: `utf8` });
// chunks of data are sent in some form of code (ie - hexadecimal)... encoding pre-translates the output into a readable form accordingly
const writeStream = fs.createWriteStream(`./blogs/blog4.txt`);

// readStream.on(`data`, (chunk) => {
//   console.log(`new chunk`);
//   console.log(chunk);
//   writeStream.write(`\nNEW CHUNK\n`);
//   writeStream.write(chunk);
// })


// piping

readStream.pipe(writeStream);