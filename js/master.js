//storing the URL into a variable
const baseURL = "http://www.flower-power.robertbolstad.com/wp-json/wc/store/products";
// Passing the URL(baseURL) to the fetch method
fetch(baseURL)
    .then(function(response) {
        //Converting the data form the API into JSON using the json() method.
        return response.json();
    })
    .then(function(json) {
        handleJson(json);
    })
    .catch(function() {
        console.log("error");
        
    });

function handleJson(json) {
    const data = json;
    const results = document.querySelector(".content-wrap");

   //declare a variable to hold the HTML
    let html = "";
    //Looping through the data(json.results)
    for (let i = 0; i < data.length; i++) {
        let object = data[i];

        // adding the HTML string to my varible
        html += `<div class="product">
                    <img class="img" src=${object.images[0].src}" alt=${object.images[0].alt}>
                    <div class="details">
                        <h3 class="productName">${object.name}</h3>
                        <h4 class="price">${object.prices.price}${object.prices.price_prefix}</h4>
                        <a class="button" href="">View More</a>
                    </div>
                </div>`;
                    
    };
    //Assign the newly created HTML string to be the innerHTML property of results
    results.innerHTML = html;

}

