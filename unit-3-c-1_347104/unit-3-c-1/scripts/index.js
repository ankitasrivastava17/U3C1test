//store the products array in localstorage as "products"


let productArray = JSON.parse(localStorage.getItem("products")) || [];

function myProducts(type,desc,price,image) {
    this.type = type;
    this.desc = desc;
    this.price = price;
    this.image = image;
};

function storeProduct() {
    event.preventDefault();
    let form = document.getElementById("products");

    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let p1 = new myProducts(type,desc,price,image);
    console.log(p1);

    productArray.push(p1);
    console.log(productArray);
    localStorage.setItem("products",JSON.stringify(productArray));
}