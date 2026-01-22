import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Search from "./Search";
import Random from "./Random";

interface RecipeType {
  id: number;
  name: string;
  cuisine: string;
  difficulty: string;
}

function RecipesList() {
  const [recipesList, setRecipesList] = useState<RecipeType[]>([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipesList(data.recipes));
  }, []);


  const deleteRecipe = (id: number) => {
    setRecipesList(recipesList.filter((r) => r.id !== id));
  };

  const filteredRecipes = recipesList.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Random recipes={recipesList} />
      <hr />
      <Search value={searchTerm} onChange={setSearchTerm} />
      

      {filteredRecipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          id={recipe.id}
          name={recipe.name}
          cuisine={recipe.cuisine}
          difficulty={recipe.difficulty}
          onDelete={deleteRecipe}
        />
      ))}
    </div>
  );
}

export default RecipesList;