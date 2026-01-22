interface RecipeProps {
  id: number
  ingredients: string[];
  instructions: string;
  difficulty: string;
  onDelete: (id: number) => void;
}

function Recipe({ id, name, cuisine, difficulty, onDelete }: RecipeProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Cuisine: {cuisine}</p>
      <p>Difficulty: {difficulty}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Recipe;