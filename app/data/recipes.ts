export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  difficulty: string;
  description: string;
  image: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Creamy Mushroom Pasta",
    cuisine: "Italian",
    minutes: 25,
    difficulty: "Easy",
    description: "Delicious pasta in a creamy mushroom sauce.",
    image: "🍝",
    ingredients: [
      "200g pasta",
      "1 cup mushrooms",
      "2 tablespoons butter",
      "1/2 cup cream",
      "Salt and pepper",
    ],
    steps: [
      "Boil the pasta until cooked.",
      "Melt butter in a pan and cook the mushrooms.",
      "Add cream, salt and pepper.",
      "Mix in the pasta and serve warm.",
    ],
  },
  {
    id: 2,
    title: "Spicy Veg Fried Rice",
    cuisine: "Asian",
    minutes: 20,
    difficulty: "Easy",
    description: "Flavorful fried rice with fresh vegetables.",
    image: "🍚",
    ingredients: [
      "2 cups cooked rice",
      "1/2 cup mixed vegetables",
      "2 tablespoons soy sauce",
      "1 tablespoon oil",
      "Salt and pepper",
    ],
    steps: [
      "Heat oil in a pan.",
      "Add vegetables and cook until tender.",
      "Add cooked rice and soy sauce.",
      "Mix everything well and serve hot.",
    ],
  },
  {
    id: 3,
    title: "Classic Margherita Pizza",
    cuisine: "Italian",
    minutes: 40,
    difficulty: "Medium",
    description: "A crispy pizza topped with cheese and basil.",
    image: "🍕",
    ingredients: [
      "1 pizza base",
      "1/2 cup pizza sauce",
      "1 cup mozzarella cheese",
      "Fresh basil leaves",
      "1 tablespoon olive oil",
    ],
    steps: [
      "Spread pizza sauce over the base.",
      "Add mozzarella cheese.",
      "Bake until the crust is golden.",
      "Add fresh basil and serve.",
    ],
  },
  {
    id: 4,
    title: "Chocolate Pancakes",
    cuisine: "American",
    minutes: 15,
    difficulty: "Easy",
    description: "Soft pancakes topped with rich chocolate.",
    image: "🥞",
    ingredients: [
      "1 cup flour",
      "1 tablespoon cocoa powder",
      "1 cup milk",
      "1 egg",
      "Chocolate syrup",
    ],
    steps: [
      "Mix flour and cocoa powder.",
      "Add milk and egg to make a smooth batter.",
      "Cook small portions on a heated pan.",
      "Add chocolate syrup and serve.",
    ],
  },
];

export function getRecipe(id: string) {
  return recipes.find((recipe) => recipe.id === Number(id));
}
