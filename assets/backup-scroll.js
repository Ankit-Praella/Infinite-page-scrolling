// class InfiniteScroll extends HTMLElement {
// constructor(){
//     super();
//     this.bindEvents()
//  }
//   bindEvents() {
//    this.openeBy = document.querySelector(".load-more-btn");
//    this.openeBy.addEventListener("click", this.loadMoreProducts.bind(this))
//   }  
  
//   loadMoreProducts(event) {
//     var nextUrl = document.querySelector('.products-on-page').getAttribute("data-next");
//     var pageUrl = `https://demo-ankit-joshi.myshopify.com/${nextUrl}`;
//     fetch(`${pageUrl}&sections=template-custom-collection`)
//     .then(response => response.json())
//     .then((response) => {
    
//       // let collectionProdataparsed = document.createElement('div');
//       // collectionProdataparsed.innerHTML = response['template-custom-collection'];
//       // let collectionProdataget = collectionProdataparsed.querySelectorAll('.collection-data-render');  
   
//     //  var data = response['template-custom-collection'];
//     //  var main = data.innerHTML;
//     // //var finaldata = main.querySelector(".wrapper-scrolling").innerHTML;
//     //     console.log(main)
        
//         // document.querySelector(".wrapper-scrolling").append(element);  
//         // const new_url = collectionProdataparsed.querySelector('.products-on-page').getAttribute("data-next");
//         // console.log(new_url);
//       let collectionProdataparsed = document.createElement('div');
//       collectionProdataparsed.innerHTML = response['template-custom-collection'];
//       document.querySelector(".wrapper-scrolling").append(collectionProdataparsed)
//       var new_url = collectionProdataparsed.querySelector('.products-on-page').getAttribute("data-next");
//       console.log(collectionProdataparsed)
//     }) 
//   }
// }
// customElements.define("alternate-collection", InfiniteScroll);