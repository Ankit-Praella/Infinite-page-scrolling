// /**
// * Product Form Components
// *
// */
// class ProductDetails extends HTMLElement {
//   constructor() {
//     super();
//     this.bindEvents();
//     var selectOptions  = document.querySelectorAll("[select_variants]");
//     if(selectOptions.length>0){
//       this.variantSelect(selectOptions)
//     }
//   }
//   bindEvents() {
//     this.openeBy = document.querySelectorAll("[ajaxcart]");
//     this.openeBy.forEach((btn) =>
//       btn.addEventListener("click", this.ajaxCart.bind(this))
//     );
//   }

//    /**
//   *  Variant Change of Item
//   */
//    variantSelect(selectOptions) {
//      selectOptions.forEach(element=>{
//         element.addEventListener("change", (event) => {
//         var varId = event.target.selectedOptions[0].getAttribute("variant-id");
//         const jsonStr = document.getElementById("product-variant-json").textContent;
//         const jsonData = JSON.parse(jsonStr);
//         var variants = jsonData.variants.filter((variant) => {
//             return variant;           
//            }); 
//           variants.forEach(item=>{
//            if (item.id == varId) {
//             var variantId = item.id;
//             var productPrice = Shopify.formatMoney(item.price);
//             var productComparePrice = Shopify.formatMoney(item.compare_at_price);
//             document.querySelector("[actual_price]").innerHTML = `${productPrice}`;
//             document.querySelector("[compare_at_price]").innerHTML = `${productComparePrice}`;
//             if (item.available === true) {
//               document.getElementById("add_cart").removeAttribute("disabled", "");
//               document.getElementById("add_cart").innerHTML = "ADD TO CART";
//               var updateVar = document.getElementById("add_cart");
//               updateVar.setAttribute("variant_id",variantId)
//             } else {
//               document.getElementById("add_cart").setAttribute("disabled", "");
//               document.getElementById("add_cart").innerHTML = "Sold Out";
//             }
//           } 
//           })
//       });
//      })
//   }
  
//   /**
//   *  addCart of Item
//   */
//   ajaxCart(event) {
//     event.preventDefault();
//         let currentTarget = event.currentTarget;
//         let currentvariantId = currentTarget.getAttribute('variant_id');
//         const addCart = document.getElementById("add_cart");
//         let quantityValue = addCart.getAttribute("data-qty-input");
//         let formData = {
//           items: [
//             {
//               id: currentvariantId,
//               quantity: quantityValue
//             },
//           ],
//         };
//         fetch(window.Shopify.routes.root + "cart/add.js", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         })
//         .then((response) => {
//          // if (response.status == 200) {
//          //      let cartElementx = document.querySelector("ajax-cart");
//          //      cartElementx.getCartData("open_drawer");
//          //  } 
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//     });
//   }
// }
// customElements.define("product-details", ProductDetails)