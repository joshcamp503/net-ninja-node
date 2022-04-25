const people = [`mario`, `yoshi`, `peach`, `toad`];
const ages = [20, 25, 30, 35];

console.log(people);

module.exports = {
  people, ages
  // ^^^^ shorthand for "people: people, ages: ages"
}