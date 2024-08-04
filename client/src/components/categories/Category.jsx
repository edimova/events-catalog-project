import { useGetOneCaregory } from "../../hooks/useCategories"

export default function Category(props) {
    const categoryID = props.categoryID
    const [category, setCategory] = useGetOneCaregory(categoryID)

    return (
        <div className="container">
            <div className="row">
                <img className="image" src={`${category.imageUrl}`} alt="category" />
            </div>
            <div className="row">
                <button className="btn" >View</button>
            </div>
        </div>

        
    )
}