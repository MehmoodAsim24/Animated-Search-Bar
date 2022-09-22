const searchbarContainerEl = document.querySelector
(".search-bar-container");
const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click",()=>{
    searchbarContainerEl.classList.toggle("active");
});

