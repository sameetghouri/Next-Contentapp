import RecipeCard from "@/components/RecipeCard";
import { createClient } from "contentful"
export default async function Home() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_TOKEN,
  })
  const res = await client.getEntries({
    content_type: "recipe",
  })
  const recipes = res.items;
  
  return (
    <div className="grid grid-cols-2 gap-x-14 gap-y-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  )
}
