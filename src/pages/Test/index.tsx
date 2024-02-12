import React, {FC, ReactNode, useCallback} from 'react';
import {SlowComponent} from './SlowComponent';

const useAuth = () => {
  const [isAuth, setAuth] = React.useState(false)
  const switchAuth = useCallback(() => {
    setAuth(prev => !prev)
  }, [])
  return {
    isAuth,
    switchAuth
  }
}


const withAuth = ({AuthComponent, UnAuthComponent}: { AuthComponent: FC, UnAuthComponent: FC }) => {
  function WithAuthComponent() {
    const {isAuth, switchAuth} = useAuth()
    return isAuth ? <AuthComponent/> : <UnAuthComponent/>
  }

  WithAuthComponent.displayName = `WithAuthComponent(${AuthComponent.displayName || AuthComponent.name || 'Component'})`
  return WithAuthComponent
}
const Test = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      {count}
      <button onClick={() => setCount(v => v + 1)}>Click me</button>
      Test
      <SlowComponent/>
    </div>
  );
};

export default Test;

