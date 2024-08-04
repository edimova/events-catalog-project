import { useCategories } from "../../hooks/useCategories";
import Category from "./Category";

export default function Categories() {
    const [categories, setCategories] = useCategories();
    console.log("categories")
    console.log(categories)

    return (
     
            <div className="row">
            {categories.map((category) => {
               return <Category key={category._id} categoryID={category._id}/>
            })}
   
        </div>

    )
}