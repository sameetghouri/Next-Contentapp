import { createClient } from "contentful"
import Image from 'next/image'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const getStaticPaths = async () => {
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
        fallback: false,
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
    const {featuredImage, title, cookingTime, ingredients,method} = recipe.fields
    console.log(method)
    return (
        <div className="text-lg">
            <div className="">
                <Image src={'https:'+featuredImage.fields.file.url}
                width={ featuredImage.fields.file.details.image.width }
                height={ featuredImage.fields.file.details.image.height}
                />  
                <h2 className="uppercase bg-white p-2 relative -top-2   font-bold">{title}</h2>
            </div>
            <div className="bg-white bg-opacity-40 rounded p-2">
                <p>Takes approx {cookingTime} mins to make</p>
                <h3 className="uppercase font-bold">Ingredients</h3>
                {ingredients.map((item,id) => (
                    <span key={id}>{id+1}:{item} </span>
                ))}
            </div>
            <div className="bg-white bg-opacity-40 rounded p-2">
                <h3 className="uppercase font-bold">Method</h3>
                <p>{documentToReactComponents(method)}</p>
            </div>
            
        </div>
    );
}

export default RecipeDetails;