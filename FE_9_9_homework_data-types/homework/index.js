//1. Write function, which returns type of passed parameter.
function findType(parameter) {
    return typeof parameter;
}


//2. Write function, which iterates over array and executes function on each element.
function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}


//3. Write function, which returns transformed array based on function, which passed as a parameter. Reuse function from task 2.
function map(arr, func) {
    let transformedArray = [];

    forEach(arr, function (el) {
        transformedArray.push(func(el));
    });

    return transformedArray;
}


//4. Write function, which returns filtered array based on function, which passed as a parameter. Reuse function from task 2.
function filter(arr, func) {
    let filteredArray = [];
    forEach(arr, function (el) {

        if (func(el)) {
            filteredArray.push(el);
        }

    });
    return filteredArray;
}


//5. Write function, which returns array of names of people, who are over 18 and their favorite fruit is apple. Reuse functions from task 2 and 3.

function getAdultAppleLovers(data) {
    return map(filter(data, function (el) {
            if (el.favoriteFruit === 'apple' && el.age >= 18) {
                return el;
            }
        }),


        function (el) {
            return el.name;
        }
    );
}


function keys(objects) {
    let arrKeys = [];
    for (let key in objects) {
        if (objects.hasOwnProperty(key)) {
            arrKeys.push(key);
        }
    }
    return arrKeys;
}


//7. Write function, which returns array of values of an object.
function values(objects) {
    let arrValues = [];
    for (let key in objects) {
        if (objects.hasOwnProperty(key)) {
            arrValues.push(objects[key])
        }
    }
    return arrValues;
}


//8. Write function, which returns formatted date.
function showFormattedDate(date) {
    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    return `It is ${day} of ${monthNames[month]}, ${year}`;
}
