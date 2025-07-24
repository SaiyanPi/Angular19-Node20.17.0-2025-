interface Product {
    name: string;
    price: number;
    getCategories: () => string[];
}

class Keyboard implements Product {
    name: string = "Keyboard";
    price: number = 20;

    getCategories(): string[] {
        return ["Computing", "Peripherals"];
    }
}


// ------- Generic -------
// function save(data: Product){
//     localStorage.setItem('Product', JSON.stringify(data));
// }

// function save(data: Product | Keyboard) {
//   localStorage.setItem("Product", JSON.stringify(data));
// }

// defining generic save function
function save<T>(data: T) {
    localStorage.setItem("Product", JSON.stringify(data));
}

// calling the save function for Product object
save<Product>({
    name: "Microphone",
    price: 45,
    getCategories: () => ["Peripherals", "Multimedia"]
});

// function save<T, P>(data: T, obj: P) {
//     localStorage.setItem('Product', JSON.stringify(data));
// }


// ------ utility types ------
const mic: Partial<Product> = {
    name: 'Microphone',
    price: 67
};

type Microphone = Pick<Product, 'name' | 'price'>;
const microphone: Microphone = {
    name: 'Microphone',
    price:67
};