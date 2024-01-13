/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import ReactPlayer from 'react-player/youtube';
export default function VideoBox(props) {
    // eslint-disable-next-line react/prop-types
    const { videoKey } = props;

    const [isPopupShow, setIsPopupShow] = useState(false);

    return (
        <div className="video-container">
            <div className="video-box ">
                <div
                    onClick={() => setIsPopupShow(true)}
                    className="video-thumbnail w-60 h-60 rounded-xl overflow-hidden relative border "
                >
                    <img
                        src={`https://img.youtube.com/vi/${videoKey}/mqdefault.jpg`}
                        alt="thumbnail"
                        className="w-full h-full"
                    />

                    <button className="absolute top-24 right-24 ">
                        <FaPlay className="text-5xl text-[#e50914]" />
                    </button>
                </div>
                <h1 className="px-1 ">{props?.name}</h1>
            </div>

            {isPopupShow && (
                <div
                    className=" bg-green-600 z-50 flex flex-col justify-between w-[92vw] h-[60vh] text-center"
                >
                    <button onClick={() => setIsPopupShow(false)}>
                        <IoClose className="bg-[#e50914] text-4xl  text-white" />
                    </button>
                    <div className="player h-full">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${videoKey}`}
                            controls
                            width="100%"
                            height="100%"
                         
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
