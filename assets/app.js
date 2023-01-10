// /**
//  * Product Form Components
//  *
//  */

// class ProductDetails extends HTMLElement {
// 	constructor() {
// 		super();
//         this.showdata()
// 	}


// 	// get the product  from API
//     // async showdata() {
//     // 	var itemObject = await renderProductInfo();
//     //     console.log(itemObject);
//     // }
//     async showdata (){
//       var response  = await renderProductInfo();
//       console.log(response);
//       // handle 404
//       if (!response.ok) {
//           throw new Error(`An error occurred: ${response.status}`);
//       }
//         return await response.json();
//     }

// }
// customElements.define("product-details", ProductDetails)

// async function renderProductInfo() {
//   var fetchTarget = document.getElementById("fetch-collection");
//    var fetchUrl = fetchTarget.getAttribute("href");
//    const apiUrl = `${fetchUrl}&sections=template-custom-collection`;
//     const result = await fetch(`${apiUrl}`, {
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//      }
//     });
//    return result.json();
// }
