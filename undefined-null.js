/* 
1. variable declare without value(variable value not assigned)
2. function didn't return anything(forgot to return)
3. just wrote return but didn't return anything / any value
4. parameter value that isn't passed
5. property that doesn't exist in an object(property khujtechi but seta obj e nai)
6. accessing array element out of range(index diye element khujtechi but sei index porjonto element nai) and index -1 diye khujlew.
7. delete / remove kora element access korte gele
8. kono variable er value undefined set kora
*/

let first;
// console.log(first);

function second(x, y) {
    // const sum = x + y;
    // document.getElementById("id")
};
const result = second(3, 91);
// console.log(result);

function add(a, b) {
    const sum = a + b;
    // return;
    if (b < 10) {
        return;
    }
    // const fun = a * b;
    // return sum;
};
const fourth = add(2, 7);
// console.log(fourth);

function double(a, b) {
    const result = a * 2;
    // console.log(b);
    return result;
}
double(81);

const fifth = { name: "sogir", age: 15, location: "bandorban" };
// console.log(fifth.phone);

const sixth = [54, 20, 41, 31];
// console.log(sixth[4]);
delete sixth[2];
// console.log(sixth[2]);

const seven = undefined;
// console.log(seven);

const myObj = { name: "samad", profession: null };
console.log(myObj);