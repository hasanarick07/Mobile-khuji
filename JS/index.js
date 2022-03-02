const errorMassage = document.getElementById("error");
errorMassage.style.display = "none";
const searchResult = document.getElementById("search-result");
const mobileDetails = document.getElementById("display-mobile-details");
const searchMobile = () => {
  const mobileSearchField = document.getElementById("mobile-search-field");
  const searchText = mobileSearchField.value;
  mobileSearchField.value = "";
  if (searchText == "") {
    errorMassage.style.display = "block";
    searchResult.textContent = "";
    mobileDetails.textContent = "";
  } else {
    errorMassage.style.display = "none";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
      .then(res => res.json())
      .then(data => displayMobile(data.data));
  }
};
const displayMobile = mobiles => {
  searchResult.textContent = "";
  if (mobiles.length == 0) {
    errorMassage.style.display = "block";
    searchResult.textContent = "";
    mobileDetails.textContent = "";
  } else {
    mobiles.slice(0, 20).forEach(mobile => {
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
  }
};
const showDetails = id => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMobileDetails(data.data));
};
const displayMobileDetails = mobile => {
  //   console.log(mobile.mainFeatures.sensors.toString());

  mobileDetails.textContent = "";
  const releaseDate = () => {
    if (mobile.releaseDate.length == 0) {
      return "no releaseDate available";
    } else {
      return mobile.releaseDate;
    }
  };

  const div = document.createElement("div");
  div.innerHTML = `
  <div class="card mx-auto p-2 h-100 w-100 ">
        <div class="card-body">
            <img src="${
              mobile.image
            }" class="card-img-top w-50 mx-auto" alt="..." />
            <h6 class="card-text">Name: ${mobile.name}</h6>
            <h6 class="card-text">ReleaseDate: ${releaseDate()}</h6>
            <h6 class="card-text">ChipSet: ${mobile.mainFeatures.chipSet}</h6>
            <h6 class="card-text">DisplaySize: ${
              mobile.mainFeatures.displaySize
            }</h6>
            <h6 class="card-text">Memory: ${mobile.mainFeatures.memory}</h6>
            <h6 class="card-text">Storage: ${mobile.mainFeatures.storage}</h6>
            <h6 class="card-text">Bluetooth: ${mobile.others.Bluetooth}</h6>
            <h6 class="card-text">GPS: ${mobile.others.GPS}</h6>
            <h6 class="card-text">WLAN: ${mobile.others.WLAN}</h6>
            <h6 class="card-text">Sensors: ${mobile.mainFeatures.sensors.toString()}</h6>
        </div>
  </div>
  `;
  mobileDetails.appendChild(div);
};
