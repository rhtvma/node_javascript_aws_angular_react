const arrayVal = [1, 2, 3, 4, 5, 6]

//  ================================ map() EXAMPLE ================================
{
    /* MAP
        The map() function creates a new array generated from the results of callback function on every element within the array.
    */
    const mapResult = arrayVal.map((val) => {
        return val * 2
    })
    console.log("MAP - 1 ", mapResult)

    // const mapResult2 = arrayVal.map(item => item * 3)
    // console.log("MAP - 2 ", mapResult2)
    console.log("MAP - END ---------------------------------", '\n', '\n')
}

//  ================================ filter() EXAMPLE ================================

{
    /* filter
        The filter() method creates a new array with all elements that pass the test set by the callback function.
    */
    const mapResult = arrayVal.filter((value) => {
        return value % 2 === 0;
    });

    console.log("filter - 1 ", mapResult)

    // const mapResult2 = arrayVal.filter(item => item % 2 === 0)
    // console.log("filter - 2 ", mapResult2)
    console.log("filter - END ---------------------------------", '\n', '\n')
}

//  ================================ forEach EXAMPLE ================================
{
    /* forEach
        The forEach() method executes a callback function once for each array element.
    */
    arrayVal.forEach((item) => {
        console.log("forEach - 1 ", item)
    }
    );

    // arrayVal.forEach(item => console.log("forEach - 2 ", item))
    console.log("forEach - END ---------------------------------", '\n', '\n')
}


//  ================================ find() EXAMPLE ================================
{
    /* forEach
        The forEach() method executes a callback function once for each array element.
    */
    arrayVal.find((item) => {
        console.log("find - 1 ", item)
    }
    );

    // arrayVal.forEach(item => console.log("forEach - 2 ", item))
    console.log("forEach - END ---------------------------------", '\n', '\n')
}



//  ================================ ANOTHER EXAMPLE ================================

var people = [
    {name: 'Alice', age: 21, class: 'cse'},
    {name: 'Max', age: 20, class: 'ece'},
    {name: 'Min', age: 22, class: 'ece'},
    {name: 'Jai', age: 22, class: 'ece'},
    {name: 'Min', age: 22, class: 'ece'},
    {name: 'Jane', age: 20, class: 'mec'}
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

var groupedPeople = groupBy(people, 'class');
console.log(groupedPeople);
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }