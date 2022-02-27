/* 
Falsy:
1. false
2. 0 (zero)
3. "" empty string
4. undefined
6. null
7. NaN


Truthy:
1. true
2. any number (positive and negative)
3. any string, " " with white space, "0", "false"
4. [] empty arr
5. {} empty obj
7. anything else that is not falsy will be truthy
*/

let x = {};
console.log("value of x", x);
if (x) {
    console.log("variable is truthy");
}
else {
    console.log("variable is falsy");
};