import "./header.css"
import img from './images/bgd.jpg'
export default function Header(){
    return (
        <div className="header">   
            <span className="headerTitlesLg">BLOG</span>      
        <img 
        className="headerImg" 
         src={img} alt="" />
          </div>
    )
}

