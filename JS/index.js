const searchMobile = () => {
  const mobileSearchField = document.getElementById("mobile-search-field");
  const searchText = mobileSearchField.value;
  mobileSearchField.value = "";
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMobile(data.data));
};
const displayMobile = mobiles => {
  const searchResult = document.getElementById("search-result");
  mobiles.forEach(mobile => {
    console.log(mobile);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card mt-3" style="width: 18rem">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">Brand:</h4>
              <h5 class="card-text">Mobile Name:</h5>
              <p>
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseWidthExample"
                  aria-expanded="false"
                  aria-controls="collapseWidthExample"
                >
                  Details...
                </button>
              </p>
            </div>
          </div>`;
  });
};
