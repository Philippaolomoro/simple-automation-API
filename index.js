const axios = require("axios");
const url = require("url")

let products = [];

async function getProducts(minPrice=0, maxPrice=1000){
  try {
    let args = {
      minPrice,
      maxPrice
    }

    const queryParams = new url.URLSearchParams(args)
    const config = {
      method: "get",
      url: `https://api.ecommerce.com/products/${queryParams}`,
    };

    const response = await axios(config)

    return response

  } catch (err) {
    return err.message
  }
}

const compareProducts = (queriedProducts, productsList) => {
  const uniqueProducts = queriedProducts.filter(
    (product1) => !productsList.some((product2 => product1.id === product2.id))
  )
  return uniqueProducts
}

const main = () => {
  const { products: data } = getProducts();
  let getUniqueProducts = compareProducts(data, products)
  products.push(...getUniqueProducts);
}

main()