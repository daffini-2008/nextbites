"use client";

import { useState } from "react";
import { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.cuisine.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes or cuisines..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 mb-8 rounded-xl border border-gray-300"
      />

      {filteredRecipes.length === 0 ? (
        <p className="text-center text-gray-500">
          No recipes match your search. Try something else!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
