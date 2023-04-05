import RecipeCard from "@/components/RecipeCard";
import { createClient } from "contentful"
const Home = async()=> {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_TOKEN,
  })
  const res = await client.getEntries({
    content_type: "recipe",
  })
  const recipes = res.items;
  
  return (
    <div className="grid grid-cols-3 gap-x-12 gap-y-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  )
}
export const revalidate = 10; 
export default Home;
