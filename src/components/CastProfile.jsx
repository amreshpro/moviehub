/* eslint-disable react/prop-types */
import { IMAGE_BASE_URL } from '../constants';

const CastProfile = (props) => {
    const { character, name, profile_path } = props;
    return (
        <div className="w-36 ">
            <img
                src={`${IMAGE_BASE_URL}/${profile_path}`}
                alt="cast profile"
                className="sm:w-24 sm:h-24 w-36 h-36  object-cover rounded-full"
            />
            <h1>{name}</h1>
            <h2 className="text-gray-600">{character}</h2>
        </div>
    );
};
export default CastProfile;
