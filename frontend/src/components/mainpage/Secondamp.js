/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useTexture } from '@react-three/drei'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'

// aluminum
import aluMap from '../../assets/images/materials/maps/alu-color.png'
import aluMetalMap from '../../assets/images/materials/metalnessmaps/alu-metalness.jpg'
import aluNormalMap from '../../assets/images/materials/normalmaps/alu-normal.jpg'
import aluRoughMap from '../../assets/images/materials/roughnessmaps/alu-roughness.jpg'
// black plastic
import blackPlasticMap from '../../assets/images/materials/maps/black-plastic-color.png'
import blackPlasticRoughMap from '../../assets/images/materials/roughnessmaps/black-plastic-roughness.jpg'
import blackPlasticNormalMap from '../../assets/images/materials/normalmaps/black-plastic-normal.jpg'
// wood
import woodMap from '../../assets/images/materials/maps/wood-color.jpg'
import woodNormalMap from '../../assets/images/materials/normalmaps/wood-normal.jpg'
import woodRoughMap from '../../assets/images/materials/roughnessmaps/wood-roughness.jpg'

export function Secondamp(props) {
  const { nodes, materials } = useGLTF('/secondampmodi.glb')
   // loader 
   const alu = useTexture({
    map: aluMap,
    metalnessMap: aluMetalMap,
    normalMap: aluNormalMap,
    roguhnessMap: aluRoughMap
  })
  // const alu = {
  //   color: 'lightgrey',
  //   metalness: 1,
  // }
  const blackPlastic = useTexture({
    map: blackPlasticMap,
    roughnessMap: blackPlasticRoughMap,
    normalMap: blackPlasticNormalMap
  })
  const Glass = {
    color: 0xffffff,
    metalness: 0,
    roughness: 0.2,
    transmission: 1,
    ior: 1.5,
    reflectivity: 0.1,
    thickness: 2.5,
    // envMap: hdrEquirect,
    // envMapIntensity: options.envMapIntensity,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    // normalScale: new THREE.Vector2(options.normalScale),
    // normalMap: normalMapTexture,
    // clearcoatNormalMap: normalMapTexture,
    // clearcoatNormalScale: new THREE.Vector2(options.clearcoatNormalScale),
  }
  const Stateglass = {
    color: 0xffffff,
    metalness: 0,
    roughness: 0.2,
    transmission: 0.9,
    ior: 1.5,
    reflectivity: 0,
    thickness: 2.5,
    // envMap: hdrEquirect,
    // envMapIntensity: options.envMapIntensity,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    // normalScale: new THREE.Vector2(options.normalScale),
    // normalMap: normalMapTexture,
    // clearcoatNormalMap: normalMapTexture,
    // clearcoatNormalScale: new THREE.Vector2(options.clearcoatNormalScale),
  }
  return (
    <group {...props} dispose={null}>
      {/* right plastic */}
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} >
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      {/* handle */}
      <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material}>
      <meshStandardMaterial {...alu} />
      </mesh>
      <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      {/* knobs */}
      <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      {/* knobs */}
      <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      {/* main */}
      <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      {/* knobs */}
      <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      {/* main */}
      <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material}>
      <meshStandardMaterial {...alu} />
      </mesh>
      <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      {/* knobs */}
      <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
       {/*knobs  */}
      <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      {/* left plastic */}
      <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      {/* knobs */}
      <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      {/* knobs */}
      <mesh geometry={nodes.mesh_19.geometry} material={nodes.mesh_19.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      <mesh geometry={nodes.mesh_20.geometry} material={nodes.mesh_20.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      {/* knobs */}
      <mesh geometry={nodes.mesh_21.geometry} material={nodes.mesh_21.material}>
      <meshStandardMaterial {...blackPlastic} />
      </mesh>
      <mesh geometry={nodes.mesh_22.geometry} material={nodes.mesh_22.material}>
      <meshStandardMaterial attach="material" emissive={'lightblue'} emissiveIntensity={1} color="lightblue" roughness={1} metalness={0.3} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/secondampmodi.glb')
