
let greeting = 'HI MY NAME IS Belal H E.\n';
let delay = 430;
for (const x of greeting) {
  setTimeout(() => {
    process.stdout.write(x);
  }, delay);
  delay += 430;

}