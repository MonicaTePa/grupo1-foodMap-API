const BASE_API_URL = "https://www.themealdb.com/api/json/v1/1";
const idMeal = "lookup.php?i=52893";
const id2Meal = "lookup.php?i=52767";
const id3Meal = "lookup.php?i=52776";
const photo1 = document.querySelector("#firstImage");
const photo2 = document.querySelector("#secondImage");
const photo3 = document.querySelector("#thirdImage");
const title1 = document.querySelector("#firstH3");
const title2 = document.querySelector("#secondH3");
const title3 = document.querySelector("#thirdH3");

const ul = document.createElement("ul");
const container = document.querySelector("#firstContainer");
const container2 = document.querySelector("#secondContainer");
const container3 = document.querySelector("#thirdContainer");



fetch( `${BASE_API_URL}/${idMeal}` )
    .then( (response) => response.json())
    .then( (data) => {

        let details = data.meals[0];
        console.log(details);
        
        let mealName = details.strMeal;
        let mealPhoto = details.strMealThumb;
        let mealIngredients = [
            details.strIngredient1,
            details.strIngredient2,
            details.strIngredient3,
            details.strIngredient4,
            details.strIngredient5,
            details.strIngredient6,
            details.strIngredient7,
            details.strIngredient8,
            details.strIngredient9,
            details.strIngredient10,
            details.strIngredient11,
            details.strIngredient12,
            details.strIngredient13,
            details.strIngredient14,
        ]
        let mealLink = details.strYoutube;

        h4Element = document.createElement('h4');
        pElement = document.createElement('p');
        
        title1.appendChild(document.createTextNode(`Nombre: ${mealName}`));
        container.appendChild( title1 );
        
        
        photo1.src = mealPhoto;
        photo1.alt = "Apple & Blackberry Crumble";
        container.appendChild( photo1 );
        

        pElement.appendChild(
            document.createTextNode(`Ingredientes: ${mealIngredients}`)
        );
        container.appendChild(pElement);

        h4Element.appendChild(
            document.createTextNode(`                                
            ¡Hazte una idea de lo que te preparán con este delicioso video, no podrás resistir!`)
        );
        container.appendChild(h4Element);

        document.querySelector("#firstA").innerText = `Apple & Blackberry Crumble`;
        document.querySelector("#firstA").href = mealLink;
        container.appendChild( 
            document.querySelector("#firstA")
        );



    })
    .catch( (error => console.log( new Error(error) ) ) );

        
        



    fetch( `${BASE_API_URL}/${id2Meal}` )
    .then( (response) => response.json())
    .then( (data) => {

        let details = data.meals[0];
        console.log(details);
        
        let mealName = details.strMeal;
        let mealPhoto = details.strMealThumb;
        let mealIngredients = [
            details.strIngredient1,
            details.strIngredient2,
            details.strIngredient3,
            details.strIngredient4,
            details.strIngredient5,
            details.strIngredient6,
            details.strIngredient7,
            details.strIngredient8,
            details.strIngredient9,
            details.strIngredient10,
            details.strIngredient11,
            details.strIngredient12
        ]
        let mealLink = details.strYoutube;

        h4Element = document.createElement('h4');
        pElement = document.createElement('p');
        
        
        title2.appendChild(document.createTextNode(`Nombre: ${mealName}`));
        container2.appendChild( title2 );
        
        photo2.src = mealPhoto;
        photo2.alt = "Bakewell tart";
        container2.appendChild( photo2 );
        

        pElement.appendChild(
            document.createTextNode(`Ingredientes: ${mealIngredients}`)
        );
        container2.appendChild(pElement);


        h4Element.appendChild(
            document.createTextNode(`                                
            ¡Hazte una idea de lo que te preparán con este delicioso video, no podrás resistir!`)
        );
        container2.appendChild(h4Element);


        document.querySelector("#secondA").innerText = `Bakewell tart`;
        document.querySelector("#secondA").href = mealLink;
        container2.appendChild( 
            document.querySelector("#secondA")
        );
    })
    .catch( (error => console.log( new Error(error) ) ) );





    fetch( `${BASE_API_URL}/${id3Meal}` )
    .then( (response) => response.json())
    .then( (data) => {

        let details = data.meals[0];
        console.log(details);
        
        let mealName = details.strMeal;
        let mealPhoto = details.strMealThumb;
        let mealIngredients = [
            details.strIngredient1,
            details.strIngredient2,
            details.strIngredient3,
            details.strIngredient4,
            details.strIngredient5,
            details.strIngredient6,
            details.strIngredient7,
            details.strIngredient8,
            details.strIngredient9,
            details.strIngredient10,
            details.strIngredient11,
            details.strIngredient12,
            details.strIngredient13,
            details.strIngredient14
        ]
        let mealLink = details.strYoutube;

        h4Element = document.createElement('h4');
        pElement = document.createElement('p');

        title3.appendChild(document.createTextNode(`Nombre: ${mealName}`));
        container3.appendChild( title3 );
    
        photo3.src = mealPhoto;
        photo3.alt = "Chocolate Gateau";
        container3.appendChild( photo3 );
        

        pElement.appendChild(
            document.createTextNode(`Ingredientes: ${mealIngredients}.`)
        );
        container3.appendChild(pElement);


        h4Element.appendChild(
            document.createTextNode(`                                
            ¡Hazte una idea de lo que te preparán con este delicioso video, no podrás resistir!`)
        );
        container3.appendChild(h4Element);

        document.querySelector("#thirdA").innerText = `Chocolate Gateau`;
        document.querySelector("#thirdA").href = mealLink;
        container3.appendChild( 
            document.querySelector("#thirdA")
        );
    })
    .catch( (error => console.log( new Error(error) ) ) );


