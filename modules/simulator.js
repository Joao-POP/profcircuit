export { getEquivalentResistance, Node };

function Node(parts, connections) {
    this.parts = parts;
    this.connections = connections;
}

function getEquivalentResistance(circuitNode) {
    if (circuitNode.parts === null) {
        return 0;
    }

    if (circuitNode.parts.length != circuitNode.connections.length) {
        throw "Unequal number of connections and parts";
    }

    let branchResistances = [];

    // Make every out node into an equivalent resistance.
    for (let i = 0; i < circuitNode.parts.length; i++) {
        let branchEquivalentResistance = 0;

        branchEquivalentResistance += circuitNode.parts[i] +
            getEquivalentResistance(circuitNode.connections[i]);

        branchResistances.push(branchEquivalentResistance);
    }

    let equivalentResistance = getParallelResistance(branchResistances);

    return equivalentResistance;
}

function getParallelResistance(resistors) {
    console.log(resistors);
    return Math.sumPrecise(resistors.map((r) => r ** -1)) ** -1;
}
