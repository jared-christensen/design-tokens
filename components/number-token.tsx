interface NumberTokenProps {
  number: string;
}

const NumberToken = ({ number }: NumberTokenProps) => {
  return <div>{number}</div>;
};

export default NumberToken;
