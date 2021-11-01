import Image from 'next/image'
import Tam1 from '../../images/team/team-1.jpg'
import Tam2 from '../../images/team/team-2.jpg'
import Tam3 from '../../images/team/team-3.jpg'

const TeamSection = () => {
    return (
        <section className="dishes" id="team">

        <h3 className="sub-heading"> our Team </h3>
        <h1 className="heading"> Team </h1>
    
        <div className="box-container">
    
            <div className="box">
                <a href="#" className="fas fa-eye"></a>
                <Image src={Tam1} alt='code' />
                <h3>Khalifa Dian</h3>
                <hr />
                 <h4>Web Developer</h4>
                <a href="#" className="btn fab fa-facebook-f"></a>
                <a href="#" className="btn fab fa-instagram"></a>
                <a href="#" className="btn fab fa-linkedin-in"></a>
                <a href="#" className="btn fab fa-github"></a>
                
            </div>
    
            <div className="box">
                <a href="#" className="fas fa-eye"></a>
                <Image src={Tam2} alt='code' />
                <h3>Jemes Smith</h3>
                <hr /> 
                <h4>software Engineer</h4>
                <a href="#" className="btn fab fa-facebook-f"></a>
                <a href="#" className="btn fab fa-instagram"></a>
                <a href="#" className="btn fab fa-linkedin-in"></a>
                <a href="#" className="btn fab fa-github"></a>
            </div>
    
            <div className="box">
                <a href="#" className="fas fa-eye"></a>
                <Image src={Tam3} alt='code' />
                <h3>David Tylor</h3>
                <hr />
                <h4>BackEnd</h4>
                <a href="#" className="btn fab fa-facebook-f"></a>
                <a href="#" className="btn fab fa-instagram"></a>
                <a href="#" className="btn fab fa-linkedin-in"></a>
                <a href="#" className="btn fab fa-github"></a>
            </div>
        </div>
    
        </section>
    )
}

export default TeamSection
