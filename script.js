const searchPhone = () => {
    const searchField = document.getElementById("search-input");
    const searchText = searchField.value;
    // clear data 
    // searchField.value = "";
    if(searchField.value == '') {
        // please write something to display 
        // alert("please write something to display")
    }
    // load data 
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))

}

const displaySearchResult = phones => {
    const searchResult = document.getElementById("search-result");
    // searchResult.textContent = '';

    phones.forEach(phone => {
        console.log(phone.data);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
        <div class="card h-100">
          <img src="${phone.image}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
    })
}

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