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

for(counter = 0; counter < products.length; counter = counter +1){

    document.body.insertAdjacentHTML(`beforeend`, `<h1>${products[counter][`name`]}`);
    document.body.insertAdjacentHTML(`beforeend`, `<h1>${products[counter][`price`]}`);
    
    document.body.insertAdjacentHTML(`beforeend`, `<h1>${products[counter][`description`]}`);
    document.body.insertAdjacentHTML(`beforeend`, `<img src="${products[counter][`image_url`]}" width="100px" height="150px">`);

};

