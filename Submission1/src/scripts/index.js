import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import data from "../DATA.json";

console.log("Hello Coders! :)");

data.restaurants.forEach((restaurant) => {
  document.querySelector("#res-list").innerHTML += `
    <section class="content">
    <div class="posts">
            <article class="post-item">
                    <img class="post-item__thumbnail"
                         src="${restaurant.pictureId}"
                         alt="${restaurant.name}">
                    <div class="post-item__content">
                        <p class="post-item__date">RATING : <a class="post-item__date__author tombol">${restaurant.rating}</a>
                        </p>
                        <h1 class="post-item__title" style= "text-align:center"><a class="tombol" href="#">${restaurant.name}</a></h1>
                        <h4 class="post-item__title">Kota :<a class="tombol" >${restaurant.city}</a></h4>
                        <p class="post-item__description">${restaurant.description}</p>
                    </div>
                </article>
                </div>
                </section>
        `;
});

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
  event.stopPropagation();
});
