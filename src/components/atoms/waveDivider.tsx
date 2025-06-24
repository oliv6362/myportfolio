import Wave from 'react-wavify';

interface WaveDividerProps {
    color: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({color}) => {
    return (
        <div>
            {/*Wave divider at the bottom */}
            <Wave 
                fill={color}
                paused={true}
                style={{ display: 'flex' }}
                options={{
                    height: 50,
                    amplitude: 50,
                    speed: 0.15,
                    points: 3
                }}
            />
        </div>
    );
};
export default WaveDivider;