const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault(e);
  const searchTerm = form.elements.query.value;
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );

  //h2 title
  const title = res.data[0].show.name;
  h2 = document.querySelector("#title").textContent = title;

  //h3 genere
  const genere = res.data[0].show.genres[0];
  h31 = document.querySelector(".genere").textContent = genere;
  //place country
  const contry = res.data[0].show.network.country.name;
  conh3 = document.querySelector(".contry").textContent = contry;

  const div = document.querySelector("div");

  console.log(res.data[0].show.url);

  //img placement
  const h3 = document.querySelector("h3");
  const img = document.createElement("img");
  img.src = res.data[0].show.image.medium;
  h3.insertAdjacentElement("afterend", img);

  //summery
  const summery = res.data[0].show.summary;
  console.log(summery);
  const sum = document.querySelector("main");
  sum.insertAdjacentElement("beforend", summery);
});
