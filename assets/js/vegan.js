
function createMealItem(mealId){
    const BASE_API_URL = "https://www.themealdb.com/api/json/v1/1"

    fetch(`${BASE_API_URL}/${mealId}`)
    .then( (response) => response.json())
    .then( (data) => {       
        let mealFullData = data.meals[0];        

        let meal = {
            mealId: mealFullData.idMeal,
            mealName: mealFullData.strMeal,
            mealOrigin: mealFullData.strArea,
            mealIngredients: getIngedients(mealFullData,"mealFullData"),
            mealImage: mealFullData.strMealThumb,

            mealvideo: mealFullData.strYoutube              
        }          
        createMealItemHTML(meal)
    })           
    .catch( (error => console.log( new Error(error))));
}

function getIngedients(mealFullData,mealFullDataStr){
    let ingredientColletion = [];
    for (let index = 1; index <= 20; index++){
        let ingredient = eval(mealFullDataStr+"."+"strIngredient"+index);
        if(ingredient !== null){
            if (ingredient !== ""){
                ingredientColletion.push(ingredient)
            }
        }            
    }
    return ingredientColletion
}

function createMealItemHTML(mealObject){  

    let categoryMain = document.querySelector('main');
    
    let mealItemContainer = document.createElement('section');
    mealItemContainer.className = 'meal-item-container';

    let mealName = document.createElement('h2');
    mealName.className = 'meal-name';
    mealName.textContent = mealObject.mealName;

    let mealOrigin = document.createElement('p');
    mealOrigin.className = 'meal-origin';
    mealOrigin.textContent = mealObject.mealOrigin;
    
    let auxiliaryDiv = document.createElement('div');
    auxiliaryDiv.className = 'auxiliary-div';

    let mealImg = document.createElement('img');
    mealImg.className = 'meal-img';
    mealImg.src = mealObject.mealImage;
    mealImg.alt =  "Picture of" + mealObject.mealName; 
    

    let ingredientContainer = document.createElement('div');
    ingredientContainer.className = 'ingredient-container';

    let ingredientTitle = document.createElement('p');
    ingredientTitle.textContent = "INGREDIENTS";

    let ingredientList = document.createElement('ul');

    mealObject.mealIngredients.forEach(ingredient => {
        let ingredientItem = document.createElement('li');
        ingredientItem.textContent = ingredient;
        ingredientList.appendChild(ingredientItem);      
    });   
    
    let videoLinkTitle = document.createElement('h3');
    videoLinkTitle.className = 'video-link-title';
    videoLinkTitle.innerHTML = "Get an idea of what they will prepare for you <br> by visiting the video at the following link";  
    
    let videoLink = document.createElement('a');
    videoLink.className = 'video-link';        
    videoLink.textContent = "VIDEO"
    
    videoLink.href = mealObject.mealvideo;
    videoLink.target = '_blank';
   
    let ingredientTitl = document.createElement('hr');
    ingredientTitl.textContent = "";

 
    
  
                    
                    
    categoryMain.appendChild(mealItemContainer);
    mealItemContainer.appendChild(mealName);
    mealItemContainer.appendChild(mealOrigin);
    mealItemContainer.appendChild(auxiliaryDiv);
    auxiliaryDiv.appendChild(mealImg);
    auxiliaryDiv.appendChild(ingredientContainer);
    ingredientContainer.appendChild(ingredientTitle);
    ingredientContainer.appendChild(ingredientList);
    mealItemContainer.appendChild(videoLinkTitle);     
    mealItemContainer.appendChild(videoLink);
    ingredientContainer.appendChild(ingredientTitl);
 
 
}

let mealItemId13 ="lookup.php?i=52775";
let mealItemId14 ="lookup.php?i=52794";
let mealItemId15 ="lookup.php?i=52863";
createMealItem(mealItemId13);
createMealItem(mealItemId14);
createMealItem(mealItemId15);


   

