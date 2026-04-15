import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Navbar from "../components/Navbar/Navbar";


function Container(){
    return(
        <div>
        <Navbar/>
        <ItemListContainer greeting = "BIenvenido a mi tienda"/>
        </div>
    )
}

export default Container;