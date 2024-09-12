import './Ball.css';  // Стили для компонента

interface BallProps {
    number: number;
}

const Ball: React.FC<BallProps> = ({ number }) => {
    return (
        <div className="ball">
            {number}
        </div>
    );
};

export default Ball;