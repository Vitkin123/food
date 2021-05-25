import {CategoryItem} from "./CategoryItem";
import {useHistory} from "react-router-dom";

export const CategoryList = ({catalog = []}) => {



    return (


            <div className={"list"}>

                {catalog.map((el) => {
                    return <CategoryItem key={el.idCategory} {...el}/>
                })}
            </div>


    )
}