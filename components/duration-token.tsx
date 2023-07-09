interface DurationTokenProps {
  duration: string;
}

const DurationToken = ({ duration }: DurationTokenProps) => {
  return (
    <div className="w-24 h-6 bg-gray-200 relative">
      <div
        className="h-6 bg-blue-500 absolute left-0"
        style={{
          animationName: "width",
          animationDuration: `${duration}`,
          animationIterationCount: "infinite",
          animationDirection: "alternate",
          animationTimingFunction: "linear",
        }}
      />
    </div>
  );
};

export default DurationToken;
