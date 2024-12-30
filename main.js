
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

console.log(honk.toString())
console.table(honk);
console.log(honk.size());
console.log(honk.at(0));
honk.pop();
console.log(honk.contains("tuba"));
console.log(honk.find("trombone"))
honk.insertAt("concertina", 2)
honk.removeAt(1);
console.log(honk.toString())