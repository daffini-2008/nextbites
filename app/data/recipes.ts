
export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  difficulty: string;
  description: string;
  image: string;
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
  },
  {
    id: 2,
    title: "Spicy Veg Fried Rice",
    cuisine: "Asian",
    minutes: 20,
    difficulty: "Easy",
    description: "Flavorful fried rice with fresh vegetables.",
    image: "🍚",
  },
  {
    id: 3,
    title: "Classic Margherita Pizza",
    cuisine: "Italian",
    minutes: 40,
    difficulty: "Medium",
    description: "A crispy pizza topped with cheese and basil.",
    image: "🍕",
  },
  {
    id: 4,
    title: "Chocolate Pancakes",
    cuisine: "American",
    minutes: 15,
    difficulty: "Easy",
    description: "Soft pancakes topped with rich chocolate.",
    image: "🥞",
  },
];
