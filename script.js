const imageWrapper = document.querySelector(".images");
const loadMoreBtn = document.querySelector(".gallery .load-more");
const searchInput = document.querySelector(".search input");

const apiKey = "yO0VLqpuSLZ0ZXN6nAEvrqwrDHSDHSzhqawn9fBDXZMUC3Yw3xeUQd83";
const perPage = 15;
let currentPage = 1;
let searchTerm = null;

const generateHTML = (images) => {
  // Making li of all fetched images and adding them to the existing image wrapper
  imageWrapper.innerHTML += images.map(img =>
      `<li class="card">
          <img onclick="showLightbox('${img.photographer}', '${img.src.large2x}')" src="${img.src.large2x}" alt="img">
          <div class="details">
              <div class="photographer">
                  <i class="uil uil-camera"></i>
                  <span>${img.photographer}</span>
              </div>
              <button onclick="downloadImg('${img.src.large2x}');">
                  <i class="uil uil-import"></i>
              </button>
          </div>
      </li>`
  ).join("");
}

const getImages = (apiURL) => {
  // Fetching images by API call with authorization header
  var config = {
    headers: { Authorization: apiKey },
  };
  loadMoreBtn.innerText = "Loading...";
  loadMoreBtn.classList.add("disabled");
  fetch(apiURL, config)
    .then((res) => res.json())
    .then((data) => {
      generateHTML(data.photos);
      loadMoreBtn.innerText = "Load More";
      loadMoreBtn.classList.remove("disabled");
    })
    .catch(() => alert("Failed to load images!"));
};

const loadMoreImages = () => {
  currentPage++; // Increment currentPage by 1
  // If searchTerm has some value then call API with search term else call default API
  let apiUrl = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`;
  apiUrl = searchTerm ? `https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${perPage}` : apiUrl;
  getImages(apiUrl);
}

const loadSearchImages = (e) => {
  // If the search input is empty, set the search term to null and return from here
  if (e.target.value === "") return searchTerm = null;
  // If pressed key is Enter, update the current page, search term & call the getImages
  if (e.key === "Enter") {
      currentPage = 1;
      searchTerm = e.target.value;
      imageWrapper.innerHTML = "";
      getImages(`https://api.pexels.com/v1/search?query=${searchTerm}&page=1&per_page=${perPage}`);
  }
}

getImages(
  `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`
);

loadMoreBtn.addEventListener("click", loadMoreImages);
searchInput.addEventListener("keyup", loadSearchImages);