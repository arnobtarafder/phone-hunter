document.getElementById("search-result");



// const countriesSection = document.getElementById('countries');
// const toggleBtn = document.getElementById('toggle');
// const filterBtn = document.getElementById('filter');
// const regionFilters = filterBtn.querySelectorAll('li');
// const searchField = document.getElementById('search');
// const modal = document.getElementById('modal');
// const closeBtn = document.getElementById('close');






/* header and search bar area 
<header class="mt-5" id="search-header">
 <h1 class="text-center mb-4">Phone Stocker</h1>
 <div class="input-group mb-3 w-50 mx-auto">
     <!-- input field  -->
     <input type="text" class="form-control" placeholder="search your product name" aria-label="Recipient's username" aria-describedby="button-addon2" id="search-input">
   
     <!-- search button  -->
     <button onclick="searchProducts()" class="btn btn-outline-secondary" type="button" id="button-addon2 search-button">Search</button>

     <!-- show all  -->
     <button onclick="showAll()" class="btn btn-outline-secondary" type="button" id="button-addon2 search-button">Show All</button>
   </div>

   <!-- empty input error handle  -->
   <h5 id="empty-input-error" class="text-center text-danger">empty! please search something</h5>
 </header>


<!-- main body and search result -->
 <section>
   <!-- can't find error handle  -->
    <h5 id="no-result-error" class=" text-center text-danger"> Sorry, no result found! </h5>
   
    <!-- show results  -->
  <div id="product-details" class="mb-3 w-50 mx-auto"> 
 </div>
 </section>


 <section class="mt-5">
   <!-- loading spinner  -->
   <div class="d-flex justify-content-center align-content-center">
     <div id="spinner" class="spinner-border" role="status">
       <span class="visually-hidden">Loading...</span>
     </div>
   </div>

 <!-- mb-3 w-50 mx-auto  -->
 <div id="products" class="row border-0 g-5">        
 </div>
</section>
*/




// <!-- <div class="col">
//   <div class="card">
//     <img src="" class="card-img-top" alt="">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

//     </div>
//   </div>
// </div> -->







    
{/* <ul class="list-group">
<h5 class="text-center text-info">Sensor Information</h5>
<li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[0]? product.mainFeatures[0]: "not available"} </h6></li>
<li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[1]? product.mainFeatures[1]: "not available"} </h6></li>
<li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[2]? product.mainFeatures[2]: "not available"} </h6></li>
<li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[3]? product.mainFeatures[3]: "not available"} </h6></li>
<li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[4]? product.mainFeatures[4]: "not available"} </h6></li>
<li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[5]? product.mainFeatures[5]: "not available"} </h6></li>
</ul> */}










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

        






















//   <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>The gadget fox bd||official</title>
//     <!-- bootstrap stylesheet link -->
//     <link
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
//       rel="stylesheet"
//       integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
//       crossorigin="anonymous"
//     />
//     <!-- vanilla css link  -->
//     <link rel="stylesheet" href="style2.css">
//   </head>
//   <body>
//     <!-- <main class="container"> -->
//       <!-- header section  -->
//       <header>
//         <h1 class="text-center mt-3 text-capitalize text-info">
//           gadget Fox <span class="text-black">phone</span> corner
//         </h1>
//       </header>

//       <!-- search bar and input section -->
//       <section>
//         <div class="input-group mb-3 w-50 mx-auto">
//           <input id="search-input" type="text" class="form-control" placeholder="search phone" aria-label="search phone"aria-describedby="button-addon2"/>
          
//           <button onclick="getProducts()"class="btn btn-outline-secondary" type="button" id="search-button">Search</button>
//         </div>

//         <!-- empty input error handel  -->
//         <h3 id="empty-input-error" class=" text-center text-danger"> empty!! please search something </h3>
//       </section>

//       <!-- phone details section  -->
//       <section>
//         <!-- can't find error handle  -->
//           <h3 id="input-error" class=" text-center text-danger" > your search did not match!! </h3>
//           <!-- show details  -->
//           <div id="show-details" class=" mb-3 w-50 mx-auto  ">
//           </div>
//          </section>

//       <!-- phone section  -->
//       <section class="mt-5  ">
//         <!-- loading spinner  -->
//         <div class="d-flex justify-content-center align-content-center">
//           <div id="spinner" class="spinner-grow " role="status">
//             <span class="visually-hidden">Loading...</span>
//           </div>
//         </div>
//         <!-- display phones  -->
//         <div id="phones" class="row border-0 g-5">        
//         </div>
//       </section>
//     <!-- </main> -->


//     <!-- vanilla javascript link  -->
//     <script src="copy.js"></script>
//   </body>
// </html>























// // get input search input value and dynamic url function 
// const getProducts = () => {
//   // show spinner
//   document.getElementById('spinner').style.display='block'
//   const searchText = document.getElementById('search-input').value;
//   if(searchText == ''){
//       // show empty error
//       document.getElementById('empty-input-error').style.display='block';
//       document.getElementById('spinner').style.display='none'
//   }
//  else{
//   const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
//   fetch(url)
//       .then(res => res.json())
//       .then(data => displayProducts(data.data))
//       //clear input
//   document.getElementById('search-input').value = '';
//   // hide empty input error
//   document.getElementById('empty-input-error').style.display='none';
//  }
// }
// // display phone function 
// const displayProducts = (productAll) => {
//   const products= productAll.slice(0,20)
//   if (products.length == 0) {
//       document.getElementById("empty-input-error").style.display = "block"
//       // show search input error handle 
//       document.getElementById('input-error').style.display = "block"
//       // hide spinner
//       document.getElementById('spinner').style.display='none'
//   }

//   else {
//       // hide search input error handle
//       document.getElementById('input-error').style.display = "none"
//       // get phone section div
//       const phonesDiv = document.getElementById('phones');
//       // remove old search result
//       phonesDiv.textContent = ''
//       // get every phone by forEach 
//       products?.forEach(product => {
//           // console.log(phone)
//           const div = document.createElement('div')
//           // add class div 
//           div.classList.add("col-12", "col-lg-4")
//           div.innerHTML = `
//           <div class="card border-0 shadow p-3 rounded mx-auto" style="width:20rem">
//           <img src="${product.image}" class="card-img-top" alt="..." />
//                <div class="card-body">
//                   <h5 class="card-title">${product.phone_name}</h5>
//                   <p class="card-text">${product.brand} </p>
//                   <button onclick="getId('${product.slug}')" class="btn btn-primary">see more</button>
//               </div>
//           </div>
//           `;
//           phonesDiv.appendChild(div)
//           // hide spinner
//           document.getElementById('spinner').style.display='none'
//       })
//   }
// };
// // get product id dynamic url function
// const getId = (id) => {
//   const url = `https://openapi.programming-hero.com/api/phone/${id}`;
//   fetch(url)
//       .then(res => res.json())
//       .then(data => displayDetails(data.data))

// };


// // display product details function
// const displayDetails = (product) => {
//   const detailsDiv = document.getElementById('show-details');
//   detailsDiv.textContent = '';
//   const div = document.createElement('div');
//   div.classList.add("row","shadow")
//   div.innerHTML = `
//   <div class="p-3 col-12  col-lg-6 ">
//       <h3 class="card-text">${product.name} </h3>
//       <h5 class="text-danger">${product.releaseDate? product.releaseDate: 'release date not found'}</h5>
//       <h5 class="card-text"> Brand: ${product.brand} </h5>
//       <img src="${product.image}" class="card-img-top" alt=""/>
//   </div>
//   <div class=" p-3 col-12 col-lg-6 ">
//        <ul class="list-group">
//           <h5 class="text-center text-info">Main Features</h5>
//           <li class="list-group-item"><h6 class="card-text">ChipSet: ${product.mainFeatures.chipSet} </h6></li>
//           <li class="list-group-item"><h6 class="card-text">Display: ${product.mainFeatures.displaySize} </h6></li>
//           <li class="list-group-item"><h6 class="card-text">Memory: ${product.mainFeatures.memory} </h6></li>
//        </ul>
       
//        <ul class="list-group">
//           <h5 class="text-center text-info">Sensor Information</h5>
//           <li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[0]? product.mainFeatures[0]: "not available"} </h6></li>
//           <li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[1]? product.mainFeatures[1]: "not available"} </h6></li>
//           <li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[2]? product.mainFeatures[2]: "not available"} </h6></li>
//           <li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[3]? product.mainFeatures[3]: "not available"} </h6></li>
//           <li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[4]? product.mainFeatures[4]: "not available"} </h6></li>
//           <li class="list-group-item"><h6 class="card-text">${product.mainFeatures.sensors[5]? product.mainFeatures[5]: "not available"} </h6></li>
//        </ul>

//        <ul class="list-group">
//           <h5 class="text-center text-info"> Others Information </h5>
//           <li class="list-group-item"><h6 class="card-text">Bluetooth: ${product.others?.Bluetooth} </h6></li>
//           <li class="list-group-item"><h6 class="card-text">GPS: ${product.others?.GPS} </h6></li>
//           <li class="list-group-item"><h6 class="card-text">Radio: ${product.others?.Radio} </h6></li>
//           <li class="list-group-item"><h6 class="card-text">USB: ${product.others?.USB} </h6></li>
//           <li class="list-group-item"><h6 class="card-text">WLAN: ${product.others?.WLAN} </h6></li>
//        </ul>
//   </div>
//   `;
//   detailsDiv.appendChild(div);
// };












// // toggle theme - dark & light
// toggleBtn.addEventListener('click', () => {
//   // console.log("hello world");
//   document.body.classList.toggle('dark');
//   document.getElementById("body").style.backgroundColor = "#1B2631";
//   document.getElementById("more-details1").style.backgroundColor = "gray";
//   document.getElementById("more-details1").style.backgroundColor = "gray";
//   toggleBtn.style.color = "white"
// });









// if (products2.length >= 20) {
//   // showButton.style.display = "block";
//   let searchField = document.getElementById("search-input");
//   let searchText = searchField.value;
//   document.getElementById("show-all").addEventListener("click", function () {
    
//     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => displaySearchResult(data.data));
//   })
// }