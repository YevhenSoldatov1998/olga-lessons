function slowFunc() {
  for (let i = 0; i < 1000; i++) {
    console.log('Hello', Math.random())
  }
}

export const SlowComponent = () => {
  slowFunc()
  return <>"I'm slow :("</>
}