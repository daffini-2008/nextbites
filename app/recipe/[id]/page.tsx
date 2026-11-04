import { getRecipe, recipes } from "../../data/recipes";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: String(recipe.id),
  }));
}

export default async function RecipeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-orange-50 px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <Link href="/" className="text-orange-600 font-medium">
          ← Back to recipes
        </Link>

        <div className="text-6xl mt-8">{recipe.image}</div>

        <h1 className="text-4xl font-bold mt-4">{recipe.title}</h1>

        <p className="text-gray-600 mt-3">
          {recipe.cuisine} • {recipe.minutes} mins • {recipe.difficulty}
        </p>

        <p className="mt-4 text-gray-700">{recipe.description}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Ingredients</h2>
        <ul className="list-disc pl-6 space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Cooking Steps</h2>
        <ol className="list-decimal pl-6 space-y-3">
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </main>
  );
}

