interface CubicBezierTokenProps {
  cubicBezier: string;
}

const CubicBezierToken = ({ cubicBezier }: CubicBezierTokenProps) => {
  return (
    <div className="w-24 h-6 bg-gray-200 relative">
      <div
        className="h-6 bg-blue-500 absolute left-0"
        style={{
          animationName: "width",
          animationDuration: `1s`,
          animationIterationCount: "infinite",
          animationDirection: "alternate",
          animationTimingFunction: `${cubicBezier}`,
        }}
      />
    </div>
  );
};

export default CubicBezierToken;
