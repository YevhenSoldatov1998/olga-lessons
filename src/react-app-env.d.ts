/// <reference types="react-scripts" />

import {Props as GoogleMapReactProps} from 'google-map-react'

declare module 'redux-persist'
declare module 'redux-persist/integration/react'
declare module 'redux-persist/lib/storage'
declare module 'redux-persist/es/storage'
declare module '*.scss'
declare module 'react-uuid'
declare module 'google-map-react' {
  import {ReactNode} from 'react'

  interface ExtendedProps extends GoogleMapReactProps {
    children?: ReactNode
  }

  export default function GoogleMapReact(props: ExtendedProps): JSX.Element
}

declare global {
  interface Window {
    Intercom: {
      (command: string, ...params: any[]): void
      booted: boolean
    }
  }
}
