interface DimensionTokenProps {
  dimension: string;
}

const DimensionToken = ({ dimension }: DimensionTokenProps) => {
  return <div className="bg-blue-500 h-6" style={{ width: dimension }}></div>;
};

export default DimensionToken;
