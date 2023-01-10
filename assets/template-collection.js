const selectors = {
    readMoreBtn: document.querySelector('[data-readMoreBtn]'),
    readMoreContainer: document.querySelector('[data-readMoreContainer]')
  };
  class templateCollectionJS {
    constructor() {
        this.readMore();
    }

    // Read More and Read Less
    readMore(){
        if(selectors.readMoreBtn){
            selectors.readMoreBtn.addEventListener('click', (e)=>{
                e.preventDefault();
                let currentTarget = e.target;
                let readMoreEle = selectors.readMoreContainer.querySelector('.hidden-text');
                if(readMoreEle){ 
                    if(selectors.readMoreContainer.classList.contains('open')){
                        Utility.toggleElement(selectors.readMoreContainer, 'close');
                        currentTarget.innerHTML = 'Read More'
                    }else{
                        Utility.toggleElement(selectors.readMoreContainer, 'open');
                        currentTarget.innerHTML = 'Read Less'
                    }
                }
            });
        }
    }
}

typeof templateCollectionJS !== 'undefined' && new templateCollectionJS();

window.addEventListener('load', function() {
    
//infinite scroll
    function scrollExecute() {
        window.onscroll = function(){
        let currentScrollPosy = window.pageYOffset;
        let sectionHeight = document.getElementById("collection-product-grid")
        let finalHeight = sectionHeight.offsetHeight - 400; 
          
        if(document.getElementById("fetch-collection") && currentScrollPosy > finalHeight)
        {
          var fetchUrl = document.getElementById("fetch-collection").getAttribute("href");
          // let url = `${fetchUrl}`;
          // let state = '';
          // let title = '';
          
          // history.pushState(state, title, url);
          console.log('top', fetchUrl);
          
          if(fetchUrl!=""){  
                fetch(`${fetchUrl}&sections=template-custom-collection`)
                .then(response => response.json())
                .then((response) => {
                   let dataHTML = response['template-custom-collection'];
                   let parser = new DOMParser();
                    dataHTML = parser.parseFromString(dataHTML, 'text/html');
                    document.getElementById("fetch-collection").remove();
                  
                   let finalData = dataHTML.querySelector('[data-next-url]').innerHTML;
                   document.querySelector("[data-next-url]").innerHTML += finalData;
                   fetchUrl = document.getElementById("fetch-collection").getAttribute("href");
                   console.log('bottom ', fetchUrl);
                });
          }//if closed
              
        }// outerif
      }
   }//closed Fn

   //scrollExecute();
});