import React, { useState } from 'react';
import Button from '../../ui/Button/Button';

function Home() {
  const [color, setColor] = useState(false);
  const onHandleChange = () => {
    setColor(!color);
  };
  return (
    <Button type="button" handeClick={onHandleChange} buttonType="default">
      Зарегистрироваться
    </Button>
  );
}

export default Home;
