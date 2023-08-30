import { useParams } from "react-router-dom";
import data from "../components/Data";
import Card from "../components/Card";

const CategoryPage = () => {

    // 파라미터 
    const category = useParams().category;

    // 데이터 필터링
    let filteredProduct = data.filter((it)=> it.category === category);


    return (   
        <div className="CategroyPage">
            <h3>{category.toUpperCase()}</h3>

            <div className="category_product_wrap">
                {filteredProduct.map((it)=>(
                    <Card data={it}/>
                ))}
            </div>
        </div>
        
        
        
        )
}

export default CategoryPage;