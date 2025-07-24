const getOrder = () => {
    return {
        product: {
            name: "Keyboard",
        },
    };
};

const order = getOrder();
// if (order !== undefined) {
//     const product = order.product;
//     console.log("Product ", product)
// }

const product = order?.product;
console.log("Product ", product);