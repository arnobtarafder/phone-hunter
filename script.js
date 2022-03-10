const showAll = () => {
  // console.log("Yes I can");
  document.getElementById("search-input").value = "";
  document.getElementById("products").textContent = "";
  document.getElementById("product-details").textContent = "";
  document.getElementById("not-working-button").style.display = "block"
  document.getElementById('no-result-error').style.display = 'none';
  document.getElementById('empty-input-error').style.display = 'none';
    // document.getElementById('spinner').style.display = 'none';
}

const searchProducts = () => {
  // show spinner 
  document.getElementById("spinner").style.display = "block";
    const searchField = document.getElementById("search-input").value;
    const searchText = searchField.value;
    // clear data 
    // searchField.value = "";
    if(searchField == '') {
      document.getElementById("products").textContent = "";
      document.getElementById("product-details").textContent = "";
        // please write something to display 
        // alert("please write something to display")
        document.getElementById('no-result-error').style.display = 'none';
        document.getElementById('not-working-button').style.display = 'none';
        document.getElementById('empty-input-error').style.display = 'block';
        document.getElementById('spinner').style.display = 'none'
      }

      else if ( searchText > 0 || searchText < 0) {
        document.getElementById("products").textContent = "";
        document.getElementById("product-details").textContent = "";
        document.getElementById("empty-input-error").style.display = "none"
        // show search input error 
        document.getElementById('number-input-error').style.display = "block"
        // hide spinner
        document.getElementById('spinner').style.display='none'
      }

    else {
      // load data 
      const url = `https://openapi.programming-hero.com/api/phones?search=${searchField}`;
      fetch(url)
          .then(res => res.json())
          .then(data => displaySearchResult(data.data.slice(0,20)))

      //clear input
      document.getElementById('search-input').value = '';
      // hide empty input error
      document.getElementById('empty-input-error').style.display='none';
      document.getElementById('not-working-button').style.display='none';
    }

}


// show products on main page 

const displaySearchResult = (products) => {
    const searchResult = products; //.slice(0,20);
    const products2 = products;
    // searchResult.textContent = '';
    if ( searchResult.length == 0 && searchResult.length <= 20) {
      document.getElementById("products").textContent = "";
      document.getElementById("product-details").textContent = "";
      document.getElementById("empty-input-error").style.display = "none"
      document.getElementById("not-working-button").style.display = "none"
      // show search input error 
      document.getElementById('no-result-error').style.display = "block"
      // hide spinner
      document.getElementById('spinner').style.display = 'none'
  }


  else {
    // hide search input error handle
    document.getElementById('no-result-error').style.display = "none";
    const productsDiv = document.getElementById('products');
    // remove old search result
    productsDiv.textContent = '';
    document.getElementById("product-details").textContent = "";

    // get every phone by forEach 
    searchResult?.forEach (product => {
      console.log(product.data);
      const div = document.createElement("div");
      div.classList.add("col-12", "col-lg-4");
      div.innerHTML = `
      <div class="card border-0 rounded mx-auto shadow p-4" style="width:21rem">
        <img src="${product.image}" class="card-img-top w-50 h-50 mx-auto mt-2 mb-3" alt="phone or watch or electric product image">
        <div class="card-body">
        <h5 class="card-title"> ${product.phone_name} </h5>
        <p class="card-text"> ${product.brand} </p>
        <button onclick="getId('${product.slug}')" class="btn btn-primary">see details</button>  
        </div>
    </div>
      `;
      
      productsDiv.appendChild(div);
      // hide spinner 
      document.getElementById("spinner").style.display = "none";
  })
}

};


  // get product id dynamic url function
const getId = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
      .then(res => res.json())
      .then(data => displayDetails(data.data))

};

// display product details function
const displayDetails = (product) => {
  const detailsDiv = document.getElementById('product-details');
  detailsDiv.textContent = "";
  const div = document.createElement('div');
  div.classList.add("row","shadow");
  div.innerHTML = `
  <div class="p-3 col-12  col-lg-6" id=${"more-details"}>
      <h4 class="card-text">${product.name? product.name: "not available"} </h4>

      <h5 class="card-text"> Brand: ${product.brand? product.brand: "not available"} </h5>

      <h5 id="" class="">${product.releaseDate? product.releaseDate: 'release date not found'} </h5>

      <img src="${product.image}" class="card-img-top mt-5" alt=""/>
  </div>

  <div class=" p-3 col-12 col-lg-6 id="more-details2">
       <ul class="list-group mb-2">
          <h5 class="text-center text-info">Main Features</h5>

          <li class="list-group-item"><h6 class="card-text">ChipSet: ${product?.mainFeatures?.chipSet? product?.mainFeatures?.chipSet: 'not available'} </h6></li>

          <li class="list-group-item"><h6 class="card-text">Display: ${product?.mainFeatures?.displaySize? product?.mainFeatures?.displaySize: 'not available'} </h6></li>

          <li class="list-group-item"><h6 class="card-text">Memory: ${product?.mainFeatures?.memory? product?.mainFeatures?.memory: 'not available'} </h6></li>
       </ul>



      <ul class="list-group">
      <h5 class="text-center text-info">Sensor Information</h5>

      <li class="list-group-item"><h6 class="card-text"> ${product.mainFeatures.sensors.slice(0,1).map((x) => x + " ")}
      </h6></li>

      <li class="list-group-item"><h6 class="card-text"> ${product.mainFeatures.sensors.slice(1,2).map((x) => x + " ")}
      </h6></li>

      <li class="list-group-item"><h6 class="card-text"> ${product.mainFeatures.sensors.slice(2,3).map((x) => x + " ")} </h6></li>

      <li class="list-group-item"><h6 class="card-text"> ${product.mainFeatures.sensors.slice(3,4).map((x) => x + " ")} </h6></li>

      <li class="list-group-item"><h6 class="card-text"> ${product.mainFeatures.sensors.slice(4,5).map((x) => x + " ")} </h6></li>

      <li class="list-group-item"><h6 class="card-text"> ${product.mainFeatures.sensors.slice(5,6).map((x) => x + " ")} </h6></li>
   </ul>

       <ul class="list-group">
          <h5 class="text-center text-info"> Others Information </h5>
          <li class="list-group-item"><h6 class="card-text">Bluetooth: ${product?.others?.Bluetooth? product?.others?.Bluetooth : "not available"} </h6></li>

          <li class="list-group-item"><h6 class="card-text">GPS: ${product?.others?.Bluetooth? product?.others?.GPS : "not available"} </h6></li>

          <li class="list-group-item"><h6 class="card-text">Radio: ${product?.others?.Bluetooth? product?.others?.Radio : "not available"} </h6></li>

          <li class="list-group-item"><h6 class="card-text">USB: ${product?.others?.Bluetooth? product?.others?.USB : "not available"} </h6></li>

          <li class="list-group-item"><h6 class="card-text">WLAN: ${product?.others?.Bluetooth? product?.others?.WLAN : "not available"} </h6></li>

       </ul>
  </div>
  `;

  detailsDiv.appendChild(div);
};





//   color changing button 
let changeColor   = document.getElementById('button-Color'),
colors      = ['#000048', '#B5C7A4', "#A569BD", "white", "#95A5A6", 'rgb(255, 226, 231)', '#A4DADA', '#5DADE2', "#52BE80 ", "white", "black", "white", "#16A085"];
let   colorIndex  = 0;

changeColor.addEventListener('click', () => {
document.body.style.backgroundColor = colors[colorIndex];      
colorIndex = (colorIndex + 1) % colors.length
});
