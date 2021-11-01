import Image from 'next/image'
import Designer from '../../images/category/Designer.png';
import Devfocus from '../../images/category/Dev_focus.png';
import Freelancer from '../../images/category/Freelancer_re.png';
import mobile_development from '../../images/category/mobile_development.png';
import product_iteration from '../../images/category/product_iteration.png';
import programmer from '../../images/category/programmer.png';


const Category = () => {
    return (
    <section className="dishes" id="categories">

    <h3 className="sub-heading"> our Services </h3>
    <h1 className="heading"> Categories </h1>

    <div className="box-container">

        <div className="box">
            
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <Image src={Designer} alt='code' />
            <h3>Designer</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
        
            <a href="#" className="btn">Learn More</a>
        </div>

        <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <Image src={Devfocus} alt='code' />
            <h3>Dev Focus</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Learn More</a>
        </div>

        <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <Image src={Freelancer} alt='code' />
            <h3>Freelancer</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Learn More</a>
        </div>

        <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <Image src={mobile_development} alt='code' />
            <h3> Mobile Development </h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
          
            <a href="#" className="btn">Learn More</a>
        </div>

        <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <Image src={product_iteration} alt='code' />
            <h3> Product Iteration </h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Learn More</a>
        </div>

        <div className="box">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-eye"></a>
            <Image src={programmer} alt='code' />
            <h3>Programmer</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <a href="#" className="btn">Learn More</a>
        </div>

    </div>

    </section>
    )
}

export default Category
