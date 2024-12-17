import { useSpring, animated } from "@react-spring/web";

function ProgressBar({ progress }) {
  const safeProgress = Number(progress);
  const props = useSpring({
    from: { width: "0%" },
    to: { width: safeProgress > 0 ? `${safeProgress}%` : "0%" },
    immediate: safeProgress === 0,
  });

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
          width: props.width,
        }}
      />
    </div>
  );
}

export default ProgressBar;
