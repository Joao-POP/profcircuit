import * as Sim from "./modules/simulator.js";

const addMenuItem = document.getElementById("add-menu-item");
const addDropdown = document.getElementById("add-dropdown");

addMenuItem.onclick = () => {
    addMenuItem.classList.toggle("active");
    addDropdown.classList.toggle("active");

    addDropdown.style.display = addDropdown.style.display === "block" ? "none" : "block";
};

Sim.start();
