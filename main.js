const {Node} = require('./node-class');
const {LinkedList} = require('./linkedlist-class');


const honk = new LinkedList();


honk.append("clarinet");
honk.append("flugelhorn")
honk.append("french horn")
honk.append("trombone")
honk.append("tuba")
honk.prepend("bassoon")

honk.head();
honk.tail();

console.table(honk);
// console.log(honk.size());
// console.log(honk.at(2));
// honk.pop();
// console.table(honk);
honk.tail()
// console.log(honk.contains("tuba"));
// console.log(honk.find("trombone"))
console.log(honk.toString())