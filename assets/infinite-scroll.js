// class InfiniteScroll extends HTMLElement {
//   constructor() {
//     super();
//     this.gridParent = document.querySelector("#collection-product-grid");
//     this.gridContainer;
//     if(this.gridParent.querySelector("#custom-all-products")) {
//       this.gridContainer = this.gridParent.querySelector("#custom-all-products")
//     } else {
//       this.gridContainer = this.gridParent.querySelector("#product-grid");
//     }
//     this.pagination = document.querySelector('[class^="pagination"]');
//     this.init();
//     this.bindEvents();
//     this.page = 1;
//     this.scrollToTopBtn = document.querySelector(".scrollToTopButton");
//     this.scrollToTopBtn.addEventListener("click", this.scrollToTopFx.bind(this));
//   }
//   /**
//   *  bind Events
//   */
//    bindEvents() {
//     this.openeBy = document.querySelector("#collection-product-grid");
//     this.openeBy.addEventListener("click", this.variantSelect.bind(this))
//     this.addCart = document.querySelectorAll("#collection-product-grid");
//     this.addCart.forEach((btn) =>
//       btn.addEventListener("click", this.ajaxCart.bind(this))
//     ); 
//   }
  
//   init() {
//     const t = new IntersectionObserver(this.revealItem.bind(this), { root: null, threshold: 0.05 });
//     t.observe(this);
//     if (!this.pagination) return;
//     this.pagination.style.display = "none";
//   }

//   fetchNextPage(t) {
//     if (t <= this.dataset.pageSize) {
//       const pageUrl = `https://demo-ankit-joshi.myshopify.com/${this.dataset.next}`;
//       var url = new URL(pageUrl);
//       url.searchParams.set("page", t); 
//       // setting  param
//       var newUrl = url.href; 
//       fetch(`${url}`, { method: "GET", headers: { "Content-Type": "text/html" } })
//       .then((t) => t.text())
//       .then((t) => {
//         const e = new DOMParser().parseFromString(t, "text/html");
//         let innerHTML;
//         if(e.querySelector("#custom-all-products")) {
//           innerHTML= e.querySelector("#custom-all-products").innerHTML;
//         }else {
//           innerHTML = e.querySelector("#product-grid").innerHTML;
//         }
//         this.gridContainer.insertAdjacentHTML("beforeend", innerHTML);
//       })
//       ["finally"](() => {})
//       ["catch"]((t) => {
//         console.error("Error:", t);
//       });
//   }
//     if (t == this.dataset.pageSize) {
//       this.innerHTML = `<h2>${this.dataset.endText}</h2>`;
//     }
//   }
  
//   revealItem(t, e) {
//     const [i] = t;
//     if (!i.isIntersecting) return;
//     if (i.target) {
//       this.page++;
//       this.fetchNextPage(this.page);
//     }
//     if (this.page == this.dataset.pageSize) {
//       e.unobserve(i.target);
//     }
//   }
//   scrollToTopFx(t) {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//     t.currentTarget.style.display = "none";
//   }

//   /**
//   *  Variant Change of Item
//   */
//    variantSelect(event) {
//      event.preventDefault();
//      let currentTarget = event.currentTarget;     
//      if(event.target.hasAttribute('select_variants')){  
//        var varId = event.target.selectedOptions[0].getAttribute("variant-id");
//         const jsonStrMain = event.target.closest("product-details");
//         const jsonStr = jsonStrMain.querySelector(".product-variant-json").textContent;
//         const jsonData = JSON.parse(jsonStr);
//         var variants = jsonData.variants.filter((variant) => {
//             return variant;           
//            }); 
//           variants.forEach(item=>{
//            if (item.id == varId) {
//             var variantId = item.id;
//             var productPrice = Shopify.formatMoney(item.price);
//             var productComparePrice = Shopify.formatMoney(item.compare_at_price);
//             var targetdata = event.target.closest(".card-image");
//             targetdata.querySelector("[actual_price]").innerHTML = `${productPrice}`;
//             if(targetdata.querySelector("[compare_at_price]") != null){
//               targetdata.querySelector("[compare_at_price]").innerHTML = `${productComparePrice}`;
//             } 
//             var  targetElement = event.target.closest("product-details");
//             var targetButton= targetElement.querySelector('.cart-button');
//             var finalTarget = targetButton.querySelector('.addCartbtn');
//             if (item.available === true) { 
//               finalTarget.removeAttribute("disabled", "");
//               finalTarget.innerHTML = "ADD TO CART";
//               finalTarget.setAttribute("variant_id",variantId)
//             } else {
//               finalTarget.setAttribute("disabled", true);
//               finalTarget.innerHTML = "Sold Out";  
//             }
//           } 
//         })
//      }
//   }

//     /**
//   *  addCart of Item
//   */
//   ajaxCart(event) {
//     event.preventDefault();
//         let currentTarget = event.target;
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
//           if (response.status == 200) {
//           let cartElementx = document.querySelector("ajax-cart");
//           cartElementx.getCartData("open_drawer");
//         }
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//     });
//   }
// }
// customElements.define("infinite-scroll", InfiniteScroll);