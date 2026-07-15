import * as Sim from "./modules/simulator.js";

/*
let R = 40;
let H = new Sim.Node(null, []);
let E = new Sim.Node([[R],], [H]);
let C = new Sim.Node([[R],], [E]);
let D = new Sim.Node([[R],], [E]);
let B = new Sim.Node([[R], [R],], [C, D]);
let G = new Sim.Node([[R],], [H]);
let F = new Sim.Node([[R],], [G]);
let circuit = new Sim.Node([[R], [R]], [B, F]);

H.tag = "H";
E.tag = "E";
D.tag = "D";
G.tag = "G";
F.tag = "F";
C.tag = "C";
B.tag = "B";
circuit.tag = "A";
*/

/*
let D = new Sim.Node(null, []);
let C = new Sim.Node([[33],], [D]);
let B = new Sim.Node([[27],], [D]);
let circuit = new Sim.Node([[10], [22]], [B, C]);
*/

/*
let H = new Sim.Node(null, []);
let F = new Sim.Node([[40],], [H]);
let E = new Sim.Node([[40],], [H])
let C = new Sim.Node([[40],], [E]);
let D = new Sim.Node([[40],], [E]);
let B = new Sim.Node([[40], [40],], [C, D]);
let circuit = new Sim.Node([[40], [40]], [B, F]);
H.tag = "H";
E.tag = "E";
D.tag = "D";
F.tag = "F";
C.tag = "C";
B.tag = "B";
circuit.tag = "A";
*/

let r = 40;
let K = new Sim.Node(null, []);
let I = new Sim.Node([[r],],      [K]);
let G = new Sim.Node([[r],],      [I]);
let H = new Sim.Node([[r],],      [I]);
let E = new Sim.Node([[r],],      [K]);
let F = new Sim.Node([[r], [r],], [H, G]);
let B = new Sim.Node([[r], [r],], [F, E]);
let circuit = new Sim.Node([[r], [r],], [B, K]);

H.tag = "H";
E.tag = "E";
F.tag = "F";
B.tag = "B";
G.tag = "G";
I.tag = "I";
K.tag = "K";
circuit.tag = "A";

console.log("Equivalent resistance:", Sim.getEquivalentResistance(circuit));
