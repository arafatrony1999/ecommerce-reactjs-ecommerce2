import { useFilterContext } from "../../context/FilterContext";
import GRIDVIEW from "../GRID_VIEW/GRID_VIEW";
import LISTVIEW from "../LIST_VIEW/LIST_VIEW";

const ALLPRODUCTS = () => {
    const { gridView, filterProduct } = useFilterContext();

    if(filterProduct.length===0){
        return <h1>No products available</h1>
    }else{
        if(gridView===true){
            return <GRIDVIEW products={filterProduct} />
        }
        if(gridView===false){
            return <LISTVIEW products={filterProduct} />
        }
    }

}

export default ALLPRODUCTS;
