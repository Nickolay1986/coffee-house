if (fetch('../scripts/base/products.json')) {
   
    fetch('../scripts/base/products.json')
        .then(response => response.json())
        .then(data => {
            const favourites = data.filter(product => product.favorite === 'true')
            


            if (favourites) {
                const screenWidth = window.innerWidth;
                
              
                let offset = 0;
              
                // const width1 = 
              
                let width = 500;
                let widthOfSlider = (favourites.length - 1) * width;
                function updateSliderWidth() {
                  const screenWidth = window.innerWidth;
                  const sliderLine = document.querySelector('.sliderLine');
                  widthOfSlider = (favourites.length - 1) * width;
                
                  if ((screenWidth + 80) > 714) {
                    width = 500;
                    sliderLine.style.left = 0 + 'px';
              
                  } else {
                    width = 350;
                    sliderLine.style.left = 0 + 'px';
              
                  }
                  widthOfSlider = (favourites.length - 1) * width;
                  const cssWidthOfSlider = sliderLine.style.width = favourites.length * width + 'px';
                  
                }
              
                updateSliderWidth();
                window.addEventListener('resize', updateSliderWidth);
              
                const sliderLine = document.querySelector('.sliderLine');
              
                const cssWidthOfSlider = sliderLine.style.width = favourites.length * width + 'px';
                
                
                
                for (let i = 0; i < favourites.length; i += 1) {
                const divCardElement = document.createElement('div');
                divCardElement.className = 'card';
                
                const divElement = document.createElement('div');
                divElement.className = 'div';
                
                const imgElement = document.createElement('img');
                imgElement.className = 'img';
                imgElement.src = favourites[i].src;
                imgElement.alt = favourites[i].name;
                imgElement.width = `${(width - 10)}`;
                imgElement.height = `${(width - 10)}`;
                
                divElement.appendChild(imgElement);
                
                const contentElement = document.createElement('div');
                contentElement.className = 'content';
                
                const placeElement = document.createElement('div');  
                placeElement.className = 'place';  
                
                  
                const nameElement = document.createElement('p');
                nameElement.className = 'text name';
                nameElement.textContent = favourites[i].name;
                
                const descriptionElement = document.createElement('p');
                descriptionElement.className = 'text description';
                descriptionElement.textContent = favourites[i].description;
                
                const costElement = document.createElement('p');
                costElement.className = 'text cost';
                costElement.textContent = `$ ${favourites[i].price}`;
                
                contentElement.appendChild(placeElement);
                placeElement.appendChild(nameElement);  
                placeElement.appendChild(descriptionElement);
                contentElement.appendChild(costElement);
                
                divCardElement.appendChild(divElement);
                divCardElement.appendChild(contentElement);
              
                  sliderLine.appendChild(divCardElement)
                  
              
                }
              
                document.querySelector('.prev').addEventListener('click', function () {
                  offset -= width;
                  if (offset < 0) {
                    offset = widthOfSlider;
                  };
                  sliderLine.style.left = -offset + 'px';
                  updateStripesBackground();
                });
              
                document.querySelector('.next').addEventListener('click', function () { 
                  offset += width;
                  if (offset > widthOfSlider) {
                    offset = 0;
                  }
              
                  sliderLine.style.left = -offset + 'px';
                  updateStripesBackground();
                });
              

           
let touchStartX = 0;
let touchEndX = 0;

// Обработчик события touchstart
function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

// Обработчик события touchmove
function handleTouchMove(event) {
  touchEndX = event.touches[0].clientX;
}

// Обработчик события touchend
function handleTouchEnd() {
  let swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > 0) {
        document.querySelector('.prev').click();
  } else if (swipeDistance < 0) {
        document.querySelector('.next').click();
    
    // Здесь можно выполнить нужные действия для свайпа влево
  }
}

    // Добавляем обработчики событий к элементу, на котором хотим отслеживать свайп
    const element = document.getElementById('slider');
    element.addEventListener('touchstart', handleTouchStart, false);
    element.addEventListener('touchmove', handleTouchMove, false);
    element.addEventListener('touchend', handleTouchEnd, false);

            // setInterval(function() {
            //     console.log("Событие происходит каждые 5 секунд");

            //     document.querySelector('.next').click();
            //   }, 5000);

            function updateStripesBackground() {
                const stripes = document.querySelector('.stripes');
                const firstStripe = stripes.querySelector('.favourites .stripe:nth-child(1)');
                const secondStripe = stripes.querySelector('.favourites .stripe:nth-child(2)');
                const lastStripe = stripes.querySelector('.favourites .stripe:nth-child(3)');
                let touchStartX = 0;
                let touchEndX = 0;
                
                const progressBars = document.querySelectorAll('.stripe');
                const progress = document.querySelectorAll('.progress');
                
                
                // Функция для обновления прогресса загрузки
            function updateProgress(percent) {                        
                progress[0].style.transition = 'width 5s ease';
                progress[0].style.width = percent + '%';
            }
            function updateProgress2(percent) {
                progress[1].style.transition = 'width 5s ease';
                progress[1].style.width = percent + '%';
            }
                
            function updateProgress3(percent) {
                progress[2].style.transition = 'width 5s ease';
                progress[2].style.width = percent + '%';
            }
            updateProgress(0);
            updateProgress3(0)
            updateProgress2(0)
                if (offset === 0) {
                    updateProgress(100);
            
                } else  if (offset === widthOfSlider) {
                    updateProgress3(100)
                    
                } else {
                    updateProgress2(100)
                };
            };
                updateStripesBackground();
            }

        data.forEach(item => {



            const name = item.name;
            const description = item.description;
            const price = item.price;
            const category = item.category;
            const favorite = item.favorite;
            
            // console.log("Name:", name);
            // console.log("Description:", description);
            // console.log("Price:", price);
            // console.log("Category:", category);
            // console.log("favorite: ", favorite);

            const sizes = item.sizes;
            Object.keys(sizes).forEach(sizeKey => {
                const size = sizes[sizeKey].size;
                const addPrice = sizes[sizeKey]['add-price'];
                //  console.log("Size:", size);
                //  console.log("Additional Price:", addPrice);
            })
        })
    })
    

}




   else {
    console.log('JSON файл не найден');
  }

