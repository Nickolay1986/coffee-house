"use strict"

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('mobMenu').addEventListener('click', function () {
        document.querySelector('.head').classList.toggle('open');
        if (document.body.style.overflow !== 'hidden') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });


 

})







const nav = document.querySelector('.nav');
const links = nav.querySelectorAll('li a');

links.forEach(link => {
    link.addEventListener('click', function () {
    document.getElementById('mobMenu').click();
  })
});

if (fetch('../scripts/base/products.json')) {
    fetch('../scripts/base/products.json')
        .then(response => response.json())
        .then(data => {
            
            const categories = document.querySelectorAll('.buttonCat.Cat');

            // const savedCategory = localStorage.getItem('savedCategory');
            // if (savedCategory) {
            //     for (let i = 0; i < categories.length; i += 1) {
            //         const catDrinks = categories[i].querySelector('.text').textContent.toLowerCase();
            //         if (catDrinks === savedCategory) {
            //             categories[i].classList.add('active')
            //         } else {
            //             categories[i].classList.remove('active')
            //         }

            //     }
            // }

            


            function filterDrinks() {
                
                const buttonActive = document.querySelector('.buttonCat.Cat.active');
                let cat = buttonActive.querySelector('.text').textContent.toLowerCase();

                

                const drinks = data.filter(product => product.category === cat);
                




                window.addEventListener('resize', function () {
                    let sectionDinks = parseInt(document.querySelector('.sectiondrinks').style.height);
                    // Обновление содержимого или стилей страницы
                    if (window.innerWidth > 768) {
                        // Ширина окна больше 768px, выполняйте нужные действия
                        document.querySelector('.products .circleButton').style.display = 'none';
                
                        // Дополнительный код здесь
                    } 
                    // if (drinks.length <= 4 || ) {
                            
                    // }
                    if (window.innerWidth <= 768) { 
                        
                        document.querySelector('.products .circleButton').style.display = 'flex';
                        document.querySelector('.products .circleButton').addEventListener('click', function () {
                            
                            console.log(document.querySelector('.sectiondrinks').style.height)
                            document.querySelector('.sectiondrinks').style.height = 'auto';
                        document.querySelector('.products .circleButton').style.display = 'none';

                            
                            // (document.querySelector('.products .circleButton').style.display = 'none').then();
                
                        })

                    }

                    if (document.querySelector('.sectiondrinks').style.height === 'auto') { 
                        document.querySelector('.products .circleButton').style.display = 'none';

                    }
                    
                    
                  });






                const drinksMenu = document.querySelector('.drinksMenu')
                drinksMenu.innerHTML = '';
                for (let i = 0; i < drinks.length; i += 1) {

                    const divDrinkCardElement = document.createElement('div');
                    divDrinkCardElement.className = 'drinkCard';

                    const divSmallPicElement = document.createElement('div')
                    divSmallPicElement.className = 'smallPic';
                    const imgElement = document.createElement('img');
                    imgElement.className = 'img';
                    imgElement.src = drinks[i].src;
                    imgElement.alt = drinks[i].name;
                    divSmallPicElement.appendChild(imgElement);
                    

                    const divDrinkDescriptions = document.createElement('div');
                    divDrinkDescriptions.className = 'drinkDescriptions';

                    const divDesc = document.createElement('div');
                    divDesc.className = 'desc';

                    const divTitleDrinkCard = document.createElement('div');
                    divTitleDrinkCard.className = 'titleDrinkCard';
                    const h3Element = document.createElement('h3');
                    h3Element.className = 'text h3';
                    h3Element.textContent = drinks[i].name;
                    divTitleDrinkCard.appendChild(h3Element);

                    const divDrinkDes = document.createElement('div');
                    divDrinkDes.className = 'drinkDes';
                    const pDecriptionElement = document.createElement('p');
                    pDecriptionElement.className = 'text p';
                    pDecriptionElement.textContent = drinks[i].description;
                    divDrinkDes.appendChild(pDecriptionElement);
                    divDesc.appendChild(divTitleDrinkCard);
                    divDesc.appendChild(divDrinkDes);

                    const divCost = document.createElement('div');
                    divCost.className = 'cost';
                    const pCostElement = document.createElement('p');
                    pCostElement.className = 'text p cost';
                    pCostElement.textContent = `$ ${drinks[i].price}`;
                    divCost.appendChild(pCostElement);
                    divDrinkDescriptions.appendChild(divDesc);
                    divDrinkDescriptions.appendChild(divCost);
                    divDrinkCardElement.appendChild(divSmallPicElement);
                    divDrinkCardElement.appendChild(divDrinkDescriptions);
                    drinksMenu.appendChild(divDrinkCardElement);


                    

                }
            }
            
            filterDrinks();

            categories.forEach(but => {
                but.addEventListener('click', function () {
                  categories.forEach(but => {
                      but.classList.remove('active');
                  })
                    but.classList.add('active');
                    const category = but.querySelector('.text').textContent.toLowerCase();
                    localStorage.setItem('savedCategory', `${category}`);
                    filterDrinks(); 
                    cards();
             })
            })

            const cards = function () {
                const cards = document.querySelectorAll('.drinkCard');
                    cards.forEach(but => {
                    but.addEventListener('click', function () {
                        const name = but.querySelector('.h3').textContent;
                        const drinkData = data.filter(product => product.name === name);
                        const drink = drinkData[0];
                        
                        const modalWrapper = document.querySelector('.modalWrapper');
                        // modalWrapper.style.display = 'block';


                        const closeModal = event => {
                            let target = event.target;
                            if (target === modalWrapper) {
                                modalWrapper.style.opacity = 0;  
                                document.body.classList.remove('modal-open');

                                setTimeout(() => {
                                    modalWrapper.style.visibility = 'hidden';
                                    drinkAdditives.forEach(but => {
                                        but.classList.remove('active')
                                    })
                                    drinkSizes.forEach(but => {
                                        but.classList.remove('active');
                                    })
                                    drinkSizes[0].classList.add('active');
                                }, 300)

                            }
                        }


                        const openModal = () => {
                            modalWrapper.style.visibility = 'visible';
                            modalWrapper.style.opacity = 1;
                            document.body.classList.add('modal-open');

                        }
                        openModal();

                        const closeButton = document.querySelector('.close');

                        if (closeButton) {
                            closeButton.addEventListener('click', function () {
                                modalWrapper.style.opacity = 0;  
                                document.body.classList.remove('modal-open');
                                setTimeout(() => {
                                    modalWrapper.style.visibility = 'hidden';
                                    drinkAdditives.forEach(but => {
                                        but.classList.remove('active')
                                    })
                                    drinkSizes.forEach(but => {
                                        but.classList.remove('active');
                                    })
                                    drinkSizes[0].classList.add('active');
                                }, 300)
                                
                            })
                        }
                        

                        modalWrapper.addEventListener('click', closeModal)









                        const modalPicture = document.querySelector('.modalPicture img');                       
                        modalPicture.setAttribute('src', drink.src);
                        const modal = document.getElementById('modal');

                        modal.querySelector('.text.h3').textContent = drink.name;
                        modal.querySelector('.text.description').textContent = drink.description;
                        modal.querySelector('.text.s').textContent = drink.sizes.s.size;
                        modal.querySelector('.text.m').textContent = drink.sizes.m.size;
                        modal.querySelector('.text.l').textContent = drink.sizes.l.size;


                        const sizesDOM = modal.querySelectorAll('.size.block .text')

                        // for (let i = 1; i <= )

                        modal.querySelector('.text.sugar').textContent = drink.additives[0].name;
                        modal.querySelector('.text.cinamon').textContent = drink.additives[1].name;
                        modal.querySelector('.text.syrup').textContent = drink.additives[2].name;
                        


                        let size;
                       
                        const drinkAdditives = modal.querySelector('.additives').querySelectorAll('.buttonCat.size');
                        
                        let total = drink.price;
                        modal.querySelector('.totalCost').textContent = '$' + total
                        const drinkSizes = modal.querySelector('.size.block').querySelectorAll('.buttonCat.size')
                                           
                        drinkSizes.forEach(but => {
                            but.addEventListener('click', function () {
                                additivesState = {};
                                drinkAdditives.forEach(add => {
                                    add.classList.remove('active');
                                  })

                                drinkSizes.forEach(but => {
                                  but.classList.remove('active');
                                })
                                
                                but.classList.add('active'); 
                                if (but.classList.contains('active')) {
                                    const modal = document.getElementById('modal');
                                    const textContent = but.querySelector('.text').textContent;
                                    for (let size in drink.sizes) {
                                        if (textContent === drink.sizes[size].size) {
                                            total = Number(drink.price);
                                            total = total + parseFloat(drink.sizes[size]['add-price']);
                                            modal.querySelector('.totalCost').textContent = '$' + total.toFixed(2);
                                            
                                        } 
                                      }

                                };
                            })
                            
                        })
                        // modal.querySelector('.totalCost').textContent = '$' + total;
                     
                        // drinkAdditives.forEach(but => {
                        //     but.addEventListener('click', function () {                            
                        //             but.classList.add('active');
                                
                        //         if (but.classList.contains('active')) {
                        //             but.addEventListener('click', function () {
                        //                 but.classList.remove('active');
                        //             }) 
                        //             const modal = document.getElementById('modal');
                        //             const textContent = but.querySelector('.text').textContent;
                                   
                        //             for (let i = 0; i < drink.additives.length; i += 1) {
                        //                 if (drink.additives[i].name === textContent) {
                        //                     console.log(drink.additives[i]['add-price'])
                        //                 }
                        //             }

                                    

                        //         } else {
                        //             but.addEventListener('click', function () {
                        //                 but.classList.add('active');
                        //             }) 
                        //         }
                        //     })
                            
                        // })
                        
                        
                        
                        
                        
                        let additivesState = {}; // Объект для хранения состояний активности элементов добавок

                        drinkAdditives.forEach(but => {
                          const textContent = but.querySelector('.text').textContent;
                          additivesState[textContent] = false; // Изначально все элементы неактивны
                        
                          but.addEventListener('click', function () {
                            const modal = document.getElementById('modal');
                            const isActive = additivesState[textContent];
                        
                            if (!isActive) {
                              but.classList.add('active');
                              additivesState[textContent] = true;
                        
                              for (let i = 0; i < drink.additives.length; i += 1) {
                                if (drink.additives[i].name === textContent) {
                                  total = Number(total) + parseFloat(drink.additives[i]['add-price']);
                                  modal.querySelector('.totalCost').textContent = '$' + total.toFixed(2);
                                }
                              }
                            } else {
                              but.classList.remove('active');
                              additivesState[textContent] = false;
                        
                              for (let i = 0; i < drink.additives.length; i += 1) {
                                if (drink.additives[i].name === textContent) {
                                  total -= parseFloat(drink.additives[i]['add-price']);
                                  modal.querySelector('.totalCost').textContent = '$' + total.toFixed(2);
                                }
                              }
                            }
                          });
                        });
                  

                        
                  
                    })
                        
                })
            }
            cards()
            
        })
}