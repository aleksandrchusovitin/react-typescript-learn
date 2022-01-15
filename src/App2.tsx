import React, { useState, useRef } from "react";

const Test = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState<number | undefined>(undefined);
  const [value3, setValue3] = useState<Array<number>>([]);

  interface IUser {
    name: string;
    age?: number;
  }

  const [value4, setValue4] = useState<IUser>({ name: 'John' });

  const ref1 = useRef<HTMLElement>(null!);
  const ref2 = useRef<HTMLElement | null>(null);

  return <div>Hello</div>
};

const App2 = () => <Test />;

export default App2;
