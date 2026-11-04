import { recipes } from "./data/recipes";
import RecipeGrid from "./components/RecipeGrid";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-600 font-semibold mb-2">
            WELCOME TO NEXTBITES
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Discover Your Next Favourite Meal
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Explore delicious recipes made for every craving.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">
          Explore Recipes 🍴
        </h2>

        <RecipeGrid recipes={recipes} />
      </section>
    </main>
  );
}
