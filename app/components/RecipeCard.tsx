import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`}>
      <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
        <div className="text-5xl mb-4">{recipe.image}</div>

        <h2 className="text-xl font-bold text-gray-800">
          {recipe.title}
        </h2>

        <p className="text-gray-500 mt-2">{recipe.description}</p>

        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <span>{recipe.cuisine}</span>
          <span>{recipe.minutes} mins</span>
        </div>

        <p className="mt-3 text-sm font-medium text-orange-600">
          {recipe.difficulty}
        </p>
      </div>
    </Link>
  );
}
