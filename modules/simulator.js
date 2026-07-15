export { getEquivalentResistance, Node };

class Node {
    constructor(parts, connections) {
        this.parts = parts;
        this.connections = connections;
        this.symMap = new Map();
    }
}

// Mark and sweep, kinda.
function getEquivalentResistance(circuitNode) {
    console.debug("Entering node", circuitNode.tag, circuitNode);

    if (circuitNode.parts === null) {
        console.debug("Circuit termination");
        return 0;
    }

    if (circuitNode.parts.length != circuitNode.connections.length) {
        throw "Unequal number of connections and parts";
    }

    // Keep running while termination is not reached.
    //while (circuitNode.parts.length > 1 && circuitNode.connections.length > 1 && circuitNode.connections[0].parts != null) {
        markNodes(circuitNode);
        sweepNodes(circuitNode);
    //}

    // Last resistor standing is the equivalent one.
    return circuitNode.parts[0][0];
}

// Traces where current came from.
function markNodes(node) {
    for (let c of node.connections) {
        if (node.connections.length > 1) {
            c.symMap.set(node, (c.symMap.get(node) ?? 0) + 1);
        }

        node.symMap.entries().forEach(sym => {
            c.symMap.set(sym, (c.symMap.get(sym) ?? 0) + 1);
        });

        markNodes(c);
    }
}

// Merges nodes as to join their split currents back.
function sweepNodes(terminatorNode) {

}

function getParallelResistance(resistors) {
    console.debug("Parallel of:", resistors);

    let result = Math.sumPrecise(resistors.map((r) => r ** -1)) ** -1;

    console.debug("Got", result);

    return result;
}
