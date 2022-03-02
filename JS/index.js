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
    // console.log(mobile);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card mt-3 mx-auto p-3 h-100 rounded">
            <img src="${mobile.image}" class="card-img-top w-50 mx-auto" alt="..." />
            <div class="card-body">
              <h4 class="card-title">Brand: ${mobile.brand}</h4>
              <h6 class="card-text">Name: ${mobile.phone_name}</h6>
              <p>
                <button onclick="showDetails('${mobile.slug}')"
                  class="btn btn-primary">
                  Details...
                </button>
              </p>
            </div>
          </div>`;
    searchResult.appendChild(div);
  });
};
const showDetails = id => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMobileDetails(data.data));
};
const displayMobileDetails = mobile => {
  console.log(mobile.mainFeatures);
  const mobileDetails = document.getElementById("display-mobile-details");
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="card mx-auto p-2 h-100 w-75 ">
        <div class="card-body">
            <img src="${mobile.image}" class="card-img-top w-50 mx-auto" alt="..." />
            <h6 class="card-text">Name: ${mobile.name}</h6>
            <h6 class="card-text">ReleaseDate: ${mobile.releaseDate}</h6>
            <h6 class="card-text">ChipSet: ${mobile.mainFeatures.chipSet}</h6>
            <h6 class="card-text">DisplaySize: ${mobile.mainFeatures.displaySize}</h6>
            <h6 class="card-text">Memory: ${mobile.mainFeatures.memory}</h6>
            <h6 class="card-text">Storage: ${mobile.mainFeatures.storage}</h6>
            
        </div>
  </div>
  `;
  mobileDetails.appendChild(div);
};
