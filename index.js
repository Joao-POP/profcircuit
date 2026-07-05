"use strict";

{
    const editButton = document.querySelector("#edit-button");

    editButton.addEventListener("click", function () {
        this.classList.toggle("active");
    });
}
