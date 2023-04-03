import { createClient } from "contentful"
import Image from 'next/image'

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
    return (
        <div>
            <div>
                <Image src={'https:'+featuredImage.fields.file.url}
                width={ featuredImage.fields.file.details.image.width }
                height={ featuredImage.fields.file.details.image.height}
                />
                
            </div>
        </div>
    );
}

export default RecipeDetails;