import React from 'react';
import {SlowComponent} from "./SlowComponent";
import NiceModal from "@ebay/nice-modal-react";
import NiceModalCustom from "../../modals/NiceModalCustom";

const DeepNestedComponent = () => {
  console.log('RENDER DeepNestedComponent')
  const show = (customName: string) => {
    NiceModal.show(NiceModalCustom, {id: customName})
  }
  return (
    <div>
      DeepNestedComponent
      <SlowComponent/>
      <li onClick={() => show('1')}>User1</li>
      <li onClick={() => show('2')}>User2</li>

    </div>
  );
};

export default DeepNestedComponent;