import { useGLTF } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function Egg():JSX.Element {
    const egg = useGLTF("./media/egg.glb")
    console.log(egg)
  return (
    <>
    <ambientLight intensity={1} />
      <primitive object={egg.scene} scale={1} />
      <mesh position={[1,0,0]}>
         <boxGeometry/>
         <meshStandardMaterial color={'hotpink'}/>
      </mesh>
    </>
  )
}