export function initEmail() {
    const user = "vincent.sigal.pro";
    const domain = "gmail.com";
    const email = user + "@" + domain;

    document.querySelectorAll(".emailLink").forEach(links => { links.href = "mailto:" + email });
};