import { projects } from "./data_projects.js";


export function initProjects() {
    let projects_html = ``;

    projects.forEach(projet => {
        projects_html += `
<div class="project-card">
                        <img src="${projet.image}" alt="Image du projet">
                        <div class="project-content">
                            <h3>${projet.title}</h3>

                            <p>
                                ${projet.description}
                            </p>

                            <div class="tags">
                                <span>${projet.tags}</span>
                            </div>
                            <div class="project-links">
                                <a class="project-before-link" href="${projet.link_before}"
                                    title="Voir le projet avant la refonte" target="_blank">Voir le projet avant la
                                    refonte</a>
                                <div class="separateur"></div>
                                <a class="project-link" href="${projet.link_after}"
                                    title="Voir le projet après la refonte" target="_blank">Voir le résultat final</a>
                            </div>
                        </div>
                    </div>
`;
    });
    document.querySelector(".projects-grid").innerHTML = projects_html;
};