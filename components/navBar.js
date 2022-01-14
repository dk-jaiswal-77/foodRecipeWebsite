// function for inserting navBar into page
function navBar()
{
    return `<nav>
                <div class = "left aside">
                    <img src="https://www.masaischool.com/img/navbar/logo.svg" alt="">
                    <h1>Restaurant</h1>
                    <div id = "userProfile">
                        <h5>The Taste</h5>
                        <h3>You Will Remember!</h3>
                    </div>
                </div>
                <div class="mid">
                    <input type="text" name="" id="search_box">
                    <div id="search_logo">
                        <img src="https://cdn-icons-png.flaticon.com/128/149/149852.png" alt="">
                    </div>
                </div>
                <div class="right aside">
                    <a href = "./recipe_of_the_day.html"><h3>Recipe Of The Day</h3></a>
                    <a href = "./latest_recipe.html"><h3>Latest Recipes</h3></a>
                </div>
            </nav>`
}

export default navBar;
// -------------------------------------------------------------------------------------------------------->


