import { useAnimations ,useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import SkyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber'

const Sky = ( { isRotating , ...props}) => {
  const ref = useRef();
    const {scene , animations}  = useGLTF(SkyScene);
    const {actions} = useAnimations(animations,ref);
    useFrame((_,delta) => {
      console.log('isRotating', isRotating);
      if(isRotating){
        // make the sky rotate when the user is rotating the island without using         actions['Take 001'].play()
        ref.current.rotation.y += 0.2 * delta;
      } else {
      }
    }
    , [isRotating, actions]);
  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}
export default Sky;