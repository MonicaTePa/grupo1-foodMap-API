const BASE_API_URL = "https://api.punkapi.com";

//Drink-1
const container = document.querySelector(".drink-1");
const title = document.createElement("p");
const subtitle = document.createElement("p");
const age = document.createElement("p");
const description = document.createElement("p");
const spanDescription = document.createElement("span");
const img = document.createElement("img");
const spanElements = document.createElement("span");
const beerSize = document.createElement("p");
const alcohol = document.createElement("p");
const ph = document.createElement("p");

title.classList.add("title-drink-1");
subtitle.classList.add("subtitle-drink-1");
age.classList.add("age-drink-1");
description.classList.add("description-drink-1");
spanDescription.classList.add("img-description-drink-1");
img.classList.add("img-drink-1");
spanElements.classList.add("elements-drink-1");
beerSize.classList.add("volume-drink-1");
alcohol.classList.add("alcohol-drink-1");
ph.classList.add("ph-drink-1");


fetch(`${ BASE_API_URL }/v2/beers/4`)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((drink1) => {
        drink1.forEach((drink1) => {
            title.appendChild(document.createTextNode(`${drink1.name}`),
                subtitle.appendChild(document.createTextNode(`${drink1.tagline}`),
                    age.appendChild(document.createTextNode(`Fabricada desde: ${drink1.first_brewed}`),
                        img.setAttribute('src', `${drink1.image_url}`),
                        description.appendChild(document.createTextNode(`${drink1.description}`),
                            beerSize.appendChild(document.createTextNode(`${drink1.volume.value} litros`),
                                alcohol.appendChild(document.createTextNode(`Alcohol en volumen: ${drink1.abv} %`),
                                    ph.appendChild(document.createTextNode(`Ph: ${drink1.ph}`)))))))

            );

        });

        container.appendChild(title);
        container.appendChild(subtitle);
        container.appendChild(age);
        container.appendChild(spanDescription);
        spanDescription.appendChild(img);
        spanDescription.appendChild(description);
        container.appendChild(spanElements);
        spanElements.appendChild(beerSize);
        spanElements.appendChild(alcohol);
        spanElements.appendChild(ph);
    })
    .catch((error => console.log(new Error(error))));

//Drink-2
const container2 = document.querySelector(".drink-2");
const title2 = document.createElement("p");
const subtitle2 = document.createElement("p");
const age2 = document.createElement("p");
const description2 = document.createElement("p");
const spanDescription2 = document.createElement("span");
const img2 = document.createElement("img");
const spanElements2 = document.createElement("span");
const beerSize2 = document.createElement("p");
const alcohol2 = document.createElement("p");
const ph2 = document.createElement("p");

title2.classList.add("title-drink-2");
subtitle2.classList.add("subtitle-drink-2");
age2.classList.add("age-drink-2");
description2.classList.add("description-drink-2");
spanDescription2.classList.add("img-description-drink-2");
img2.classList.add("img-drink-2");
spanElements2.classList.add("elements-drink-2");
beerSize2.classList.add("volume-drink-2");
alcohol2.classList.add("alcohol-drink-2");
ph2.classList.add("ph-drink-2");
fetch(`${ BASE_API_URL }/v2/beers/12`)
    .then((response2) => {
        console.log(response2);
        return response2.json();
    })
    .then((drink2) => {
        drink2.forEach((drink2) => {
            title2.appendChild(document.createTextNode(`${drink2.name}`),
                subtitle2.appendChild(document.createTextNode(`${drink2.tagline}`),
                    age2.appendChild(document.createTextNode(`Fabricada desde: ${drink2.first_brewed}`),
                        img2.setAttribute('src', `${drink2.image_url}`),
                        description2.appendChild(document.createTextNode(`${drink2.description}`),
                            beerSize2.appendChild(document.createTextNode(`${drink2.volume.value} litros`),
                                alcohol2.appendChild(document.createTextNode(`Alcohol en volumen: ${drink2.abv} %`),
                                    ph2.appendChild(document.createTextNode(`Ph: ${drink2.ph}`)))))))

            );

        });

        container2.appendChild(title2);
        container2.appendChild(subtitle2);
        container2.appendChild(age2);
        container2.appendChild(spanDescription2);
        spanDescription2.appendChild(img2);
        spanDescription2.appendChild(description2);
        container2.appendChild(spanElements2);
        spanElements2.appendChild(beerSize2);
        spanElements2.appendChild(alcohol2);
        spanElements2.appendChild(ph2);
    })
    .catch((error2 => console.log(new Error(error2))));

//Drink-3
const container3 = document.querySelector(".drink-3");
const title3 = document.createElement("p");
const subtitle3 = document.createElement("p");
const age3 = document.createElement("p");
const description3 = document.createElement("p");
const spanDescription3 = document.createElement("span");
const img3 = document.createElement("img");
const spanElements3 = document.createElement("span");
const beerSize3 = document.createElement("p");
const alcohol3 = document.createElement("p");
const ph3 = document.createElement("p");

title3.classList.add("title-drink-3");
subtitle3.classList.add("subtitle-drink-3");
age3.classList.add("age-drink-3");
description3.classList.add("description-drink-3");
spanDescription3.classList.add("img-description-drink-3");
img3.classList.add("img-drink-3");
spanElements3.classList.add("elements-drink-3");
beerSize3.classList.add("volume-drink-3");
alcohol3.classList.add("alcohol-drink-3");
ph3.classList.add("ph-drink-3");
fetch(`${ BASE_API_URL }/v2/beers/22`)
    .then((response3) => {
        console.log(response3);
        return response3.json();
    })
    .then((drink3) => {
        drink3.forEach((drink3) => {
            title3.appendChild(document.createTextNode(`${drink3.name}`),
                subtitle3.appendChild(document.createTextNode(`${drink3.tagline}`),
                    age3.appendChild(document.createTextNode(`Fabricada desde: ${drink3.first_brewed}`),
                        img3.setAttribute('src', `${drink3.image_url}`),
                        description3.appendChild(document.createTextNode(`${drink3.description}`),
                            beerSize3.appendChild(document.createTextNode(`${drink3.volume.value} litros`),
                                alcohol3.appendChild(document.createTextNode(`Alcohol en volumen: ${drink3.abv} %`),
                                    ph3.appendChild(document.createTextNode(`Ph: ${drink3.ph}`)))))))

            );

        });

        container3.appendChild(title3);
        container3.appendChild(subtitle3);
        container3.appendChild(age3);
        container3.appendChild(spanDescription3);
        spanDescription3.appendChild(img3);
        spanDescription3.appendChild(description3);
        container3.appendChild(spanElements3);
        spanElements3.appendChild(beerSize3);
        spanElements3.appendChild(alcohol3);
        spanElements3.appendChild(ph3);
    })
    .catch((error3 => console.log(new Error(error3))));