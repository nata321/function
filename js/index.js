
const a = parseFloat(prompt('Enter number a'));
const b = parseFloat(prompt('Enter number b'));
const c = parseFloat(prompt('Enter number c'));

const solution = solvQuadr(a, b, c)
document.write(solution);
            
function solvQuadr(a, b, c) {
    const d = b * b - 4 * a * c;

    if (d > 0) {
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
