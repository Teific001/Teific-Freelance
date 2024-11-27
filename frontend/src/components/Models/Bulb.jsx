import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bulb(props) {
  const { nodes, materials } = useGLTF('/incandescent_light_bulb.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.057}>
        <group scale={3.76}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere001_0.geometry}
            material={materials['Material.004']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere001_1.geometry}
            material={materials['Material.003']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_0.geometry}
          material={materials.Material}
          scale={3.76}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_0.geometry}
          material={materials['Material.001']}
          position={[0.038, 0, -3.556]}
          scale={0.653}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve_0.geometry}
          material={materials['Material.003']}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve001_0.geometry}
          material={materials['Material.003']}
          position={[0, 0.632, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_0.geometry}
          material={materials.wire_spiral}
          position={[-0.17, 0.569, -0.063]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.125}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/incandescent_light_bulb.glb')