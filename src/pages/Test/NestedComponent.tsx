import DeepNestedComponent from "./DeepNestedComponent";
import {memo} from "react";

const NestedComponent = () => {
  console.log('RENDER NESTED')


  return (
    <>
      <div>Nested Component</div>
      <DeepNestedComponent/>
    </>
  )
}
export default memo(NestedComponent)