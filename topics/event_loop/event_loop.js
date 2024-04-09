console.log("A")
console.log("B")

async function abc() {
  return 1
}

setTimeout(() => { console.log("C") }, 0)

abc().then(() => console.log("i am promise")) // Promises have higher priority than setTimout(), setInterval() etc

console.log("E")

/** OUTPUT
A
B
E
i am promise
C
 */


// LINK : https://app.eraser.io/workspace/ButKKPq0lWWtgr79Z2XG?origin=share   {rohit114355}