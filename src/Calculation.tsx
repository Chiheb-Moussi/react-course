import { useCallback, useEffect, useMemo, useState } from "react";

const Calcutation = () => {
  const [name, setName] = useState<string>("");
  const [num1] = useState(5);
  const [num2] = useState(4);
  const [result, setResult] = useState(0);
  const sum = useMemo(() => [num1, num2], [num1, num2]);

  const makeArray = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
    console.log(`array :  ${sum}`);
    setResult(sum);
  }, [sum]);
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};
export default Calcutation;
