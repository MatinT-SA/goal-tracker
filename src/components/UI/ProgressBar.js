import { useSpring, animated } from "@react-spring/web";

function ProgressBar({ progress }) {
  const props = useSpring({ width: `${progress}%` });

  return (
    <div className="progress-bar">
      <animated.div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#4caf50",
          borderRadius: "15px 0 0 15px",
          ...props,
        }}
      />
    </div>
  );
}

export default ProgressBar;
