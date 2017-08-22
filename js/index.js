
const rawA = prompt('Enter number a');
if (rawA !== null) {
    const a = parseFloat(rawA);
    const rawB = prompt('Enter number b');
    if (rawB !== null) {
        const b = parseFloat(rawB);
        const rawC = prompt('Enter number c');
        if(rawC !== null){
            const c = parseFloat(rawC);
            const solution = solvQuadr(a, b, c)
            document.write(solution);
        }
    }
}

function solvQuadr(a, b, c) {
    const d = b * b - 4 * a * c;

    if (d > 0) {
        console.log(d);
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        return [x1, x2];
    }
    else if (d == 0) {
        const x3 = -b / (2 * a);
        return x3;
    }
    else if (d < 0) {
        return ('no roots');
    }
}
