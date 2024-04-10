const input = document.querySelector("#input");
const form = document.querySelector("#form");
const result = document.querySelector("#netice");
const pullar = [500, 200, 100, 50, 20, 10, 5, 1];

form.addEventListener("click", (main) => {
  main.preventDefault();
  netice.innerHTML = "";
  let mebleg = +input.value;
  pullar.map((pul) => {
    let say = Math.trunc(mebleg / pul);
    if (say) {
      mebleg = mebleg - say * pul;
      const row = document.createElement("div");
      for (let i = 0; i < say ; i++) {
        const img = document.createElement("img");
        img.src = "./images/${pul}";
        img.style.left = "${i * 60}px";
        row.append(img);
      }
      netice.append(row);
    }
  });
});
