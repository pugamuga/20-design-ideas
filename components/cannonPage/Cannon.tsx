import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

export default function Cannon(props: GroupProps): JSX.Element {
  const cannon = useGLTF("./media/cannon_main.glb");
  return (
    <>
      <group {...props}>
        <primitive object={cannon.scene}  />
      </group>
    </>
  );
}
