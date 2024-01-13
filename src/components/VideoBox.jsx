/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa6";
export default function VideoBox(props) {
    // eslint-disable-next-line react/prop-types
    console.log(props)
   

    return (
     <div className="video-box ">
        <div className="video-thumbnail w-72 h-72 relative">
            <img 
            src={`https://img.youtube.com/vi/${props.key}/mqdefault.jpg`} alt="thumbnail" className="w-full h-full" />
      
      <button className="absolute ">
        <FaPlay className="text-2xl"/>
      </button>

        </div>
     </div>
    );
}
