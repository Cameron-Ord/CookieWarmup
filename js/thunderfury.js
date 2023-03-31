let products = [{

    name: `Thunderfury`,

    price: `2 gold`,

    image_url: `/images/thunder.jpg`,

    description: `blessed blade of the windseeker`

},

{
    name: `Thunderfury`,

    price: `2 gold`,

    image_url: `/images/thunder.jpg`,

    description: `blessed blade of the windseeker`


},

{


    name: `Thunderfury`,

    price: `2 gold`,

    image_url: `/images/thunder.jpg`,

    description: `blessed blade of the windseeker`
}



];   

let product_container = document.querySelector(`#product_container`);

for(counter = 0; counter < products.length; counter = counter +1){
product_container.insertAdjacentHTML(`beforeend`, 
`<span class="product">
<h3>${products[counter][`name`]}</h3>
<img src="${products[counter][`image_url`]}" width="100px" height="150px">
<p>${products[counter][`description`]}</p>
<h6>${products[counter][`price`]}</h6>

<button product_name="Thunderfury">
product_price="${products[counter][`price`]}"
product_name="${products[counter][`name`]}"
ADD
</button>
</span>`
);

};

