function createProduct(name) {
    this.name = name;
    this.getName = function () {
        // setTimeout(function () {
        //     console.log("Product name is:", this.name);
        // });
        setTimeout(() => {
          console.log("Product name is:", this.name);
        });
    };
}
var product = new createProduct("Monitor");
product.getName();
