export { start };

function start() {

}

function calculateParallelResistance(resistors) {
    return Math.sumPrecise(resistors.map((r) => r ** -1)) ** -1;
}
