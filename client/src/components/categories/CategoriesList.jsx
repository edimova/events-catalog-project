import { useCategories } from "../../hooks/useCategories";
import CategoryCard from "./CategoryCard";

export default function CategoriesList() {
    const [categories, setCategories] = useCategories();
    console.log("categories")
    console.log(categories)

    return (
     
            <div className="row">
            {categories.map((category) => {
               return <CategoryCard key={category._id} categoryID={category._id}/>
            })}
   
        </div>

    )
}