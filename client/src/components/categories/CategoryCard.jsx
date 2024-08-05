import { useNavigate } from "react-router-dom"
import { useGetOneCaregory } from "../../hooks/useCategories"

export default function CategoryCard(props) {
    const categoryID = props.categoryID
    const [category, setCategory] = useGetOneCaregory(categoryID)
    const navigate = useNavigate();

    const viewDetailsHandler=()=>{
        navigate(`/categories/${category._id}/details`);
    }

    return (
        <div className="container">
            <div className="row">
                <img className="image" src={`${category.imageUrl}`} alt="category" />
            </div>
            <div className="row">
                <button className="btn" onClick={viewDetailsHandler}>View Events</button>
            </div>
        </div>

        
    )
}