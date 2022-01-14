// filling up the body of the page with random dishes
async function get_list_of_meals(first_letter)
{
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${first_letter}`);
    let {meals} = await response.json();
    // console.log(meals);
    displayMeals(meals);
}


function displayMeals(meals)
{
    meals.forEach((meal) => {
        
        // console.log(meal);
        let div = document.createElement("div");
        // div.setAttribute("class", meal.idMeal);
        // div.addEventListener("click", show_recipe_of_the_selectedMeal);
        
        let img = document.createElement("img");
        img.src = meal.strMealThumb;
        img.setAttribute("class", meal.idMeal);
        img.addEventListener("click", show_recipe_of_the_selectedMeal);

        
        let p = document.createElement("p");
        p.textContent = meal.strMeal;
        p.setAttribute("class", meal.idMeal);
        p.addEventListener("click", show_recipe_of_the_selectedMeal);
        
        
        div.append(img, p);
        
        // console.log(meal.idMeal);
        
        document.querySelector("#meals_container").append(div);

    })
}

function show_recipe_of_the_selectedMeal(event_obj)
{
    let meal_id = event_obj.target.getAttribute("class");
    get_meal_recipe_by_id(meal_id);
}

export {get_list_of_meals, displayMeals};

import {get_meal_recipe_by_id} from "./searchBox_debouncing.js";