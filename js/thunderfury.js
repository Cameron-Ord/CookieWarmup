let products = [{

    name: `Thunderfury`,

    price: `2 gold`,

    image_url: `/images/thunder.jpg`,

    description: `blessed blade of the windseeker`

},

{
    name: `black blade`,

    price: `5 gold`,

    image_url: `/images/thunder.jpg`,

    description: `black blade of maliketh`


},

{


    name: `stick`,

    price: `1 gold`,

    image_url: `/images/thunder.jpg`,

    description: `literally just a stick`
}



];   

let product_container = document.querySelector(`#product_container`);

for(let counter = 0; counter < products.length; counter = counter +1){
product_container.insertAdjacentHTML(`beforeend`, 
`<span class="product">
<h3>${products[counter][`name`]}</h3>
<img src="${products[counter][`image_url`]}" width="100px" height="150px">
<p>${products[counter][`description`]}</p>
<h6>${products[counter][`price`]}</h6>

<button class="choose_product" product_name="${products[counter][`name`]}">
product_price="${products[counter][`price`]}"
product_name="${products[counter][`name`]}"
product_desc="${products[counter][`description`]}"
ADD
</button>
</span>`
);

};

function product_select(product_){

Cookies.set(`product_selected`, product_[`target`].getAttribute(`product_name`));

if(product_[`target`].getAttribute(`product_name`) === `Thunderfury`){

    Cookies.set(`product_selected`, thunder_json);
}else if(product_[`target`].getAttribute(`product_name`) === `black blade`){

Cookies.set(`product_selected`, black_json);

}else if(product_[`target`].getAttribute(`product_name`) === `stick`){


    Cookies.set(`product_selected`, stick_json);
};

return false;
};


let product_choice = document.querySelectorAll(`.choose_product`);
for(let counter = 0; counter < product_choice.length; counter = counter +1){

product_choice[counter].addEventListener(`click`, product_select);

};


let thunder_fury = {

    name: `Thunderfury`,

    price: `2 gold`,

    image_url: `/images/thunder.jpg`,

    description: `blessed blade of the windseeker`


};

let black_blade = {


    name: `black blade`,

    price: `5 gold`,

    image_url: `/images/thunder.jpg`,

    description: `black blade of maliketh`

};


let just_a_stick = {

    name: `stick`,

    price: `1 gold`,

    image_url: `/images/thunder.jpg`,

    description: `literally just a stick`



};

let thunder_json = JSON.stringify(thunder_fury);
let black_json = JSON.stringify(black_blade);
let stick_json = JSON.stringify(just_a_stick);








