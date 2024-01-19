import { blogs } from "../constants";
import { styles } from "../style";

const BlogCard = () => {
  return (
    <>
      {blogs.map((blog, index) => (
        <div key={blog.id} className={`flex flex-col sm:w-[300px] w-[250px] h-[424px] justify-between`}>
          <img src={blog.image} className="w-full mb-6"/>
          <div >
            <div className="flex flex-1 gap-3 mb-3">
              <p className={`${styles.paragraph_XS} text-darkBlue font-bold`}>{blog.category}</p>
              <p className={`${styles.paragraph_XS} text-grey`}>{blog.date}</p>
            </div>
            <p className={`${styles.paragraph_S} text-start`}>{blog.content}</p>
          </div>
          <div className="flex flex-1 items-end gap-3">
            <img src={blog.author.avatar} className="w-[8] h-[8]"/>
            <p className={`${styles.paragraph_XS}`}>{blog.author.name}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogCard
