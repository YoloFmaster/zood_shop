import AddAnimal from "../components/formAddMissingAnimal";
import Footer from "../components/footer";
import Header from "../components/header";


const PageAddAnimal = () => {
    return ( 
        <div>
            <Header/>
            <main>
            <AddAnimal/>
            </main>
            <Footer/>
        </div>
     );
}
 
export default PageAddAnimal;