var checkFlag = false;
class InfiniteScroll extends HTMLElement {
  constructor(){
    super();
    this.bindEvents()
  }
  bindEvents() {
    this.clickButton = this.querySelector(".load-more-btn");
    this.clickButton.addEventListener("click", this.loadMoreProducts.bind(this))
    this.init()
    this.openeBy = this.querySelectorAll("[ajaxcart]");
    this.openeBy.forEach((btn) =>
    btn.addEventListener("click", this.ajaxCart.bind(this))
    );
  }  
  // Create new intersection Observer and  click event
  init() {
    const t = new IntersectionObserver(this.revealItem.bind(this), { root: null, threshold: 0.05 });
    t.observe(this);
  }
  revealItem(t, e) {
    checkFlag = true;
    const [i] = t;
    if(i.target) {
      setTimeout(function () {
        document.querySelector(".load-more-btn").click();
      },1000)  
    }
    if(checkFlag == false) {
      e.unobserve(i.target);
    }
  }
  // Fetch products
  loadMoreProducts(event) {
    var eventTarget = event.target;
    const nextData = eventTarget.getAttribute("data-next");
    if(nextData!=null && nextData!="" && nextData!=undefined){
      var nextPageUrl = `${nextData}`;
      fetch(`${nextPageUrl}&sections=template-custom-collection`)
      .then(response => response.json())
      .then((response) => {
        let collectionProdataparsed = document.createElement('div');
        collectionProdataparsed.innerHTML = response['template-custom-collection'];
        var extractData = collectionProdataparsed.querySelector('.wrapper-scrolling');
        document.querySelector(".wrapper-scrolling").append(extractData);
        var targetElement = collectionProdataparsed.querySelector('.load-more-btn')
        var getNextUrl = targetElement.getAttribute("data-next"); 
        document.querySelector('.load-more-btn').setAttribute("data-next",getNextUrl);
        checkFlag = false;
      }) 
    }
  }
  // AddCart of item
  ajaxCart(event) {
    event.preventDefault();
    let currentTarget = event.currentTarget;
    let currentvariantId = currentTarget.getAttribute('variant_id');
    const addCart = document.getElementById("add_cart");
    let quantityValue = addCart.getAttribute("data-qty-input");
    let formData = {
      items: [
        {
          id: currentvariantId,
          quantity: quantityValue
        },
      ],
    };
    fetch(window.Shopify.routes.root + "cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      if (response.status == 200) {
        let cartElementx = document.querySelector("ajax-cart");
        cartElementx.getCartData("open_drawer");
      } 
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
}
customElements.define("alternate-collection", InfiniteScroll);