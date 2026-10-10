document.addEventListener("DOMContentLoaded", () => {
  const norm = (p) =>
    p.replace(/\/index\.html$/, "/").replace(/\.html$/, "").replace(/\/$/, "") || "/";
  const chemin = norm(location.pathname);

  const CORRESPONDANCES = [
    ["/pages/planifier", "/"],
    ["/pages/organiser", "/"],
    ["/pages/discipline", "/"],
    ["/pages/regularite", "/"],
    ["/pages/resilience", "/"],
    ["/pages/etape", "/7-etapes"],
    ["/pages/management", "/7-etapes"],
    ["/pages/materiaux", "/7-etapes"],
    ["/pages/mecanique", "/7-etapes"],
    ["/pages/mecatronique", "/7-etapes"],
    ["/pages/milieux", "/7-etapes"],
    ["/pages/mathematiques", "/mathematiques"],
  ];
  let courant = chemin;
  for (const [debut, onglet] of CORRESPONDANCES) {
    if (chemin.startsWith(debut)) courant = onglet;
  }

  document.querySelectorAll(".main-nav a, .nav-menu a").forEach((a) => {
    const cible = norm(new URL(a.href, location.origin).pathname);
    const actif = cible === "/" ? courant === "/" : courant === cible || courant.startsWith(cible + "/");
    a.classList.toggle("active", actif);
  });
});
