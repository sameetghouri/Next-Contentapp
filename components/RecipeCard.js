import Link from 'next/link'
import Image from 'next/image'
const RecipeCard = ({ recipe }) => {
    const { title, slug, cookingTime, thumbnail } = recipe.fields
    return (
        <div className='hover:-rotate-1 transition duration-200'>
            <div>
                <Image src={'https:'+thumbnail.fields.file.url} 
                width={thumbnail.fields.file.details.image.width}
                 height={thumbnail.fields.file.details.image.height}/>
               
            </div>
            <div className='bg-white shadow relative -top-5 -left-2 p-4'>
                <div className=''>
                    <h4 className='uppercase'>{title}</h4>
                    <p className='text-gray-700'>Takes approx {cookingTime} mins to make</p>
                </div>
                <div className='mt-4 flex justify-end'>
                    <Link className='bg-red-500 px-2 py-1 text-white rounded' href={`/recipes/${slug}`}>
                       Cook This
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;