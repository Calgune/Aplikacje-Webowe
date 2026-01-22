import { useState } from "react";

interface RecipeType {
  id: number;
  name: string;
  cuisine: string;
  difficulty: string;
}

interface RandomProps {
  recipes: RecipeType[];
}

function Random({ recipes }: RandomProps) {
  const [randomRecipe, setRandomRecipe] = useState<RecipeType | null>(null);

  const draw = () => {
    if (recipes.length > 0) {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      setRandomRecipe(recipes[randomIndex]);
    }
  };

  return (
    <div>
      <button onClick={draw}>Random Recipe</button>
      {randomRecipe && (
        <div>
          <h4>Lucky recipe: {randomRecipe.name}</h4>
          <p>{randomRecipe.cuisine} | {randomRecipe.difficulty}</p>
        </div>
      )}
    </div>
  );
}

export default Random;