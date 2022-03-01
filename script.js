// const countriesSection = document.getElementById('countries');
// const toggleBtn = document.getElementById('toggle');
// const filterBtn = document.getElementById('filter');
// const regionFilters = filterBtn.querySelectorAll('li');
// const searchField = document.getElementById('search');
// const modal = document.getElementById('modal');
// const closeBtn = document.getElementById('close');


const searchProducts = () => {
  // show spinner 
  document.getElementById("spinner").style.display = "block";
    const searchField = document.getElementById("search-input").value;
    // const searchText = searchField.value;
    // clear data 
    // searchField.value = "";
    if(searchField == '') {
        // please write something to display 
        // alert("please write something to display")
        document.getElementById('empty-input-error').style.display='block';
        document.getElementById('no-result-error').style.display='none';
        document.getElementById('spinner').style.display='none'
    }
    else {
      // load data 
      const url = `https://openapi.programming-hero.com/api/phones?search=${searchField}`;
      fetch(url)
          .then(res => res.json())
          .then(data => displaySearchResult(data.data))

      //clear input
      document.getElementById('search-input').value = '';
      // hide empty input error
      document.getElementById('empty-input-error').style.display='none';
    }

}

const displaySearchResult = (products) => {
    const searchResult = products.slice(0,20)
    // searchResult.textContent = '';
    if ( searchResult.length == 0 ) {
      document.getElementById("empty-input-error").style.display = "none"
      // show search input error handle 
      document.getElementById('no-result-error').style.display = "block"
      // hide spinner
      document.getElementById('spinner').style.display='none'
  }


  else {
    // hide search input error handle
    document.getElementById('no-result-error').style.display = "none";
    const productsDiv = document.getElementById('products');
    // remove old search result
    productsDiv.textContent = '';

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

  //   // load data 
  //   const url = `https://openapi.programming-hero.com/api/phones?search=${searchField}`;
  //     fetch(url)
  //       .then(res => res.json())
  //        .then(data => displaySearchResult(data.data))
  

  //      // remove old search result
  //     productsDiv.textContent = '';
        
  //      // get every phone by forEach 
  //     searchResult?.forEach (product => {
  //      console.log(product.data);
  //      const div = document.createElement("div");
  //      div.classList.add("col-12", "col-lg-4");
  //       div.innerHTML = `
  //             <div class="card border-0 rounded mx-auto shadow p-4" style="width:21rem">
  //               <img src="${product.image}" class="card-img-top w-50 h-50 mx-auto mt-2 mb-3" alt="phone or watch or electric product image">
  //               <div class="card-body">
  //               <h5 class="card-title"> ${product.phone_name} </h5>
  //               <p class="card-text"> ${product.brand} </p>
  //               <button onclick="getId('${product.slug}')" class="btn btn-primary">see details</button>  
  //               </div>
  //           </div>
  //            `;
              
  //             productsDiv.appendChild(div);
  //             // hide spinner 
  //             document.getElementById("spinner").style.display = "none";
  // })

        


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
  div.classList.add("row","shadow")
  div.innerHTML = `
  <div class="p-3 col-12  col-lg-6">
      <h3 class="card-text">${product.name} </h3>
      <h5 class="text-danger">${product.releaseDate? product.releaseDate: 'release date not found'}</h5>
      <h5 class="card-text"> Brand: ${product.brand} </h5>
      <img src="${product.image}" class="card-img-top" alt=""/>
  </div>

  <div class=" p-3 col-12 col-lg-6 ">
       <ul class="list-group mb-2">
          <h5 class="text-center text-info">Main Features</h5>
          <li class="list-group-item"><h6 class="card-text">ChipSet: ${product.mainFeatures.chipSet} </h6></li>
          <li class="list-group-item"><h6 class="card-text">Display: ${product.mainFeatures.displaySize} </h6></li>
          <li class="list-group-item"><h6 class="card-text">Memory: ${product.mainFeatures.memory} </h6></li>
       </ul>
       
       <ul class="list-group">
          <h5 class="text-center text-info">Sensor Information</h5>
          <li class="list-group-item"><h6 class="card-text"> ${product.mainFeatures.sensors[0]} </h6></li>
          <li class="list-group-item"><h6 class="card-text"> ${product.mainFeatures.sensors[1]} </h6></li>
          <li class="list-group-item"><h6 class="card-text"> ${product.mainFeatures.sensors[2]} </h6></li>
          <li class="list-group-item"><h6 class="card-text"> ${product.mainFeatures.sensors[3]} </h6></li>
          <li class="list-group-item"><h6 class="card-text"> ${product.mainFeatures.sensors[4]} </h6></li>
          <li class="list-group-item"><h6 class="card-text"> ${product.mainFeatures.sensors[5]} </h6></li>
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
























// const searchPhone = () => {
//     const searchField = document.getElementById("search-input");
//     const searchText = searchField.value;
//     // console.log(searchText);

//     // clear data  
//     searchField.value = "";
//     if(searchText.value == '') {
//         // please write something to display 
//         alert("please write something to display")
//     }
//     // load data 
//     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

//     console.log(url);
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displaySearchResult(data))
// }

// const displaySearchResult = meals => {
//     const searchResult = document.getElementById('search-result');
//     // searchResult.innerHTML = '';
//     searchResult.textContent = '';
//     // if (meals.length == 0) {
//     //     // show no result found (homework)
//     //     alert("show no result found")
//     // }
//     meals.forEach(meal => {
//         console.log(meal.data);
//         const div = document.createElement('div');
//         div.classList.add('col');
//         div.innerHTML = `
//         <div onclick="loadMealDetail(${meal.IdMeal})" class="card h-100">
//         <img src="${meal.strMealThumb}" class="card-img-top w-100 h-75" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${meal.strMeal}</h5>
//           <p class="card-text">${meal.strInstructions.slice(0,111)}</p>
//         </div>
//       </div>
//         `;
//         searchResult.appendChild(div);
//     })
// }