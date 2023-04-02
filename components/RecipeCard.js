import Link from 'next/link'
import Image from 'next/image'
const RecipeCard = ({ recipe }) => {
    const { title, slug, cookingTime, thumbnail } = recipe.fields
    return (
        <div>
            <div>
                <Image src={'https:'+thumbnail.fields.file.url} 
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}/>
               
            </div>
            <div>
                <div>
                    <h4>{title}</h4>
                    <p>Takes approx {cookingTime}</p>
                </div>
                <div>
                    <Link href={`/recipes/${slug}`}>
                       Cook This
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;