// You should implement your task here.

module.exports = function towelSort(matrix) {
    const result = [];
    if (!matrix) return [];
    matrix.map(el => {
        if (matrix.indexOf(el) % 2 === 0) {
            el.map(el => result.push(el));
        } else {
            el.reverse().map(el => result.push(el));
        }
    });
    return result;
};
