/*
function getTempCallback (location, callback) {
    callback(undefined, 78);    // success case
    callback("City not found"); // error case
}

getTempCallback("Philadelphia", function(err, temp) {
    if(err) {
        console.log("error", err);
    } else {
        console.log("success", temp);
    }
});



function getTempPromise(location) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(79);
            reject("City not found");
        }, 1000);
    });
}

getTempPromise("Philadelphia").then(function(temp) {
    console.log("promise success", temp);
}, function(err) {
    console.log("promise error", err);
});
*/


// Challenge Area
function addPromise(a, b) {
    return new Promise((resolve, reject) => {
        if(typeof a === "number" && typeof b === "number")
            setTimeout(() => { resolve(a + b) }, 2000);
        else
            reject("Type mismatch. Arguments must be numbers");
    });
}

addPromise(3, "5").then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});