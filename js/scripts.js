
// fetch all products from https://dummyjson.com
const url = 'https://dummyjson.com/products/';

fetch(url)
.then((res) => {
    return res.json();
})
.then((data) => {
    const productItems = document.getElementById('productList')
    let productsHTML = '';
    ('productList');
    data.products.forEach((product, index, array) => {
        productsHTML += `

        <div class=" bg-purple-200 p-3 rounded md:w-3/12 w-12/12 mb-">
            <div class="h-full flex flex-col justify-between">
                <div class="">
                    <img class="rounded w-full h-[250px] md:h-[200px] " src="${product.thumbnail}" alt="">
                    <h1 class="text-xl font-bold">${product.title}</h1>
                    <h1>${product.description}</h1>
                </div>
                <div class="flex justify-between">
                    <a class="bg-purple-300 py-1 px-3 rounded hover:bg-purple-400 font-bold" href="">details</a>
                    <a class="bg-purple-300 py-1 px-3 rounded hover:bg-purple-400 font-bold" href="">add to cart</a>
                </div>
            </div>
        </div>

        `   
    productItems.innerHTML = productsHTML;
    });
})
.catch((err) => {
    console.warn(err.message);
});


// fetch all categories from https://dummyjson.com

const categoryUrl = 'https://dummyjson.com/products/categories';

fetch(categoryUrl)
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data[0])
    const productCategories = document.getElementById('categoryId')
    let categoriesHTML = '';
    ('categoryId'); 
    data.forEach((data, index, array) => {
        categoriesHTML += `

        <div id="" class="bg-purple-200 p-3 rounded  mb-3">
            <div class="h-full flex flex-col justify-between">
                <div class="py-2">
                    <h1 class="text-xl font-bold">${data}</h1>
                </div>
                <div class="flex justify-between">
                    <a class="bg-purple-300 py-1 px-3 rounded hover:bg-purple-400 font-bold" href="">See category products</a>
                </div>
            </div>
        </div>

        `   
    productCategories.innerHTML = categoriesHTML;
    });
})
.catch((err) => {
    console.warn(err.message);
});