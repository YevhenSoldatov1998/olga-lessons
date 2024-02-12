import {FC, memo} from "react";

function slowFunc() {
  for (let i = 0; i < 100; i++) {
    console.log('Hello', Math.random())
  }
}

export const SlowComponent = memo(() => {
  slowFunc()
  return <>"I'm slow :("</>
}) as FC