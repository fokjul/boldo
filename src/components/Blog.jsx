import {styles, layout } from '../style';
import BlogCard from "./BlogCard";
import { headers } from '../constants';
import { ButtonOutline } from './Button';

const Blog = () => {
  return (
    <section className='flex flex-1 justify-center items-center w-full'>
        <div className="flex flex-1 flex-col justify-between items-center w-full sm:gap-[0.75rem] my-[76px] mx-[100px] m-auto  max-w-[998px]">
            <p className={`${styles.paragraph_S} text-grey`}>
                Our Blog
            </p>
            <h1 className={`${styles.heading_XXL} text-black mb-[80px] text-center`}>
                {headers.blog_header}
            </h1>
            <div className="flex flex-1 md:flex-row md:gap-6 gap-12 flex-col justify-between items-center w-full mb-[84px]">
                <BlogCard />
            </div>
            <ButtonOutline 
                label="Load more"
                visuals="text-darkBlue border-darkBlue"
            />
        </div>
    </section>
  )
}

export default Blog