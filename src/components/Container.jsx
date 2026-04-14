import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Navbar from "./Navbar/Navbar";


function Container(){
    return(
        <div>
        <Navbar/>
        <ItemListContainer greeting = "BIenvenido a mi tienda"/>
        </div>
    )
}

export default Container;