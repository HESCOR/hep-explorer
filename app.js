const state = { temp: "mid", precip: "mid" };

const labels = {
  low: "Low",
  mid: "Medium",
  high: "High"
};

const fileParts = { low: "low", mid: "mid", high: "high" };
const map = document.querySelector("#hep-map");
const title = document.querySelector("#map-title");

function scenarioLabel() {
  return `${labels[state.temp]} temperature · ${labels[state.precip]} precipitation`;
}

function updateMap() {
  const stem = `HEP_${fileParts[state.temp]}Temp_${fileParts[state.precip]}Precip`;
  const label = scenarioLabel();
  map.classList.add("changing");
  map.src = `assets/plots/${stem}.webp`;
  map.alt = `HEP map for ${labels[state.temp].toLowerCase()} temperature and ${labels[state.precip].toLowerCase()} precipitation`;
  title.textContent = label;
  document.title = `${label} · HEP`;
}

map.addEventListener("load", () => map.classList.remove("changing"));

document.querySelectorAll(".choice-group").forEach((group) => {
  group.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-value]");
    if (!button) return;
    const variable = group.dataset.variable;
    state[variable] = button.dataset.value;
    group.querySelectorAll("button").forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });
    updateMap();
  });
});
