import React, {useEffect} from 'react';
import NestedComponent from "./NestedComponent";
import {Typography} from "../../components/modules";
import {TypographyVariant} from "../../helpers/types";


class Some extends React.Component {
  componentDidMount() {
    console.log('mounted')
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any) {

  }

  componentWillUnmount() {
    console.log('unmounted')
  }


  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}


const Test = () => {
  const [count, setCount] = React.useState(0)
  const [show, setShow] = React.useState(true)

  useEffect(() => {
    if (count === 0) return;
  }, [count]);

  return (
    <div>
      <h1>Count 1</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(v => v + 1)}>Click me</button>
      <br/>
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
      {show && <NestedComponent/>}
      {/*<Typography variant={TypographyVariant.h64}>{a}</Typography>*/}
      {/*<button onClick={() => {*/}
      {/*  a++*/}
      {/*  console.log(a)*/}
      {/*}}>Increment</button>*/}

      {/*<NestedComponent/>*/}
      {/*<SlowComponent/>*/}

    </div>
  );
};


export default Test;

