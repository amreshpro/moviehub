/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Rating = (props) => {
    const { vote_average: rating } = props;
    return (
        <div className="w-12 h-12 bg-white rounded-full font-bold">
            <CircularProgressbar
                value={rating}
                minValue={0}
                maxValue={10}
                text={`${rating}`}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green',

                    textColor: '#0c296b',
                    textSize: '28px',
                })}
            />
        </div>
    );
};
export default Rating;
