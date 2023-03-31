


let get_json = Cookies.get(`selection`);
let parse = JSON.parse(get_json);
let chosen_pokemon = Cookies.get(`selection`);

//this grabs the json and formats it back, then injects the data onto the page. In this case, an image//


if(chosen_pokemon === undefined){

// if undefined it displays this image//
    document.body.insertAdjacentHTML(`afterbegin`,`<h1>Please select a pokemon</h1>`);

}else{

//${parse[`image_url`]} parses the object, then grabs the image_url inside it and displays it on the page//

    document.body.insertAdjacentHTML(`beforeend`, `<img src="${parse[`image_url`]}" width="100px" height="150px">`);
};





let get_json2 = Cookies.get(`product_selected`);
let parse2 = JSON.parse(get_json2);
let chosen_product = Cookies.get(`product_selected`);

if(chosen_product === undefined){

    document.body.insertAdjacentHTML(`afterbegin`,`<h1>Please select a product/h1>`);

}else{

document.body.insertAdjacentHTML(`beforeend`, `<img src="${parse2[`image_url`]}" width="100px" height="150px">`)


}
