function recipeContainer (){
    return `<h1 id="mealName"></h1>
        
    <div id="thumbnail_ingredients">
        <img src="" alt="" id="thumbnail">
        <div id="ingredients"></div>
    </div>

    <h2 id="recipe_title">Recipe</h2>

    <div id="recipe"></div>

    <h2 id="iframe_title">Recipe Video</h2>

    <div>
        <iframe frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>`;
}

export {recipeContainer};