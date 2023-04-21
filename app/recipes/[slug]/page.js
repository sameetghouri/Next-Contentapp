import { createClient } from "contentful"
import Image from 'next/image'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Skeleton from "@/app/recipes/[slug]/Skeleton"

export const getStaticPaths = async () => {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
    const res = await client.getEntries({
        content_type: "recipe",
    })
    const recipes = res.items
    const paths = recipes.map((item) => ({
        params: {
            slug: item.fields.slug,
        },
    }))
    return {
        paths,
        fallback: true,
    }
}
const RecipeDetails = async ({ params }) => {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
    const res = await client.getEntries({
        content_type: "recipe",
        'fields.slug': params.slug
    })

    const recipe = res.items[0]
    if (!recipe) {
        return (<Skeleton />)
    }
    const { featuredImage, title, cookingTime, ingredients, method } = recipe.fields

    return (
        <div className="text-lg flex flex-col items-center">
           
        </div>
    );
}
export const revalidate = 10;
export default RecipeDetails;