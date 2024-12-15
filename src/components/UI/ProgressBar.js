import { useSpring, animated } from "@react-spring/web";

function ProgressBar({ progress }) {
  const props = useSpring({ width: `${progress}%` });

  const customBackgroundColor = progress === 100 ? "#4caf50" : "#03424c";

  const progressClass = progress === 100 ? "completed" : "";

  return (
    <div className={`progress-bar ${progressClass}`}>
      <animated.div
        className="progress"
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: customBackgroundColor,
          borderRadius: "15px 0 0 15px",
          ...props,
        }}
      />
    </div>
  );
}

export default ProgressBar;
