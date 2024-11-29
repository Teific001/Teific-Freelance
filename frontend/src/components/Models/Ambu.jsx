import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Ambu(props) {
  const { nodes, materials } = useGLTF('/microscope_swift_sw380b.glb')
  return (
    <group {...props} dispose={null} >
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MicroscopeBase_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Binocular2_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Binocular1_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BinocularMechanism_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BinocularLens_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lens_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ScrewPlatform_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ObjectiveLensesConfig_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ObjectiveLens_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ObjectiveLenses_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LightProtection_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HeadLight_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Diaphragm_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DiaphragmConfig_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AbbeCondeser_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MicroscopeLegs_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SidePanel_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OnOffSwitchEdge_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PowerSupply_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EnergyTranfer_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BackPanel_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Handle_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FineAdjustment_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CoarseAdjustment_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DimmingHandWHeel_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.smallDialButton_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RevolvingNosePiece_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SlideHolder_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MechanicalStage_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontBackConfig_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PlatformConfiguration_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Dimension_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RulerConfiguration_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RulerMechanism_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BinocularRotationalHead_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BinocularRotationSystem_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Holder_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HolderRotationSystem_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MaintainHolder_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OnOffSwitch_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RulerLeftRight_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LensDialSystem_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BinocularRotationalHeadTop_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
      <group position={[0, -0.007, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.smallDialButtonDial_LowPoly__0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, -25.468]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/microscope_swift_sw380b.glb')



