import DeepNestedComponent from "./DeepNestedComponent";
import {useEffect, useState} from "react";

const NestedComponent = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const handleMove = (e: any) => {
      console.log(e.clientX)
    }
    document.addEventListener('mousemove', handleMove)
    return () => {
      document.removeEventListener('mousemove', handleMove)
    }
  }, [now]);


  return (
    <>
      time: {now.getHours()}:{now.getMinutes()}:{now.getSeconds()}
      <div>Nested Component</div>
      {/*<DeepNestedComponent/>*/}
    </>
  )
}
export default NestedComponent