import { initEmail } from "./tools.js";
import { initProjects } from "./project.js";

document.addEventListener("DOMContentLoaded", () => {
    initProjects();
    initEmail();
});