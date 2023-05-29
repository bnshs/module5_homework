let value = [2,2,2,2,2];
let check = true
for (let i = 0; i < value.length - 1; i++) {
    if (value[i] !== value[i + 1]) {
        check = false
        break

    }
}
console.log(check)