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
          backgroundColor: "blue",
          borderRadius: "15px",
          ...props,
        }}
      />
    </div>
  );
}

export default ProgressBar;
