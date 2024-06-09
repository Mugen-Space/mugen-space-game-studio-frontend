import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

const CassetteHolder = () => {
  const baseRef = useRef();
  const holderRef = useRef();
  const controlRef = useRef();
  const texture = useLoader(TextureLoader, "images/infinity-logo.png");

  return (
    <>
      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        ref={controlRef}
      />
      <group>
        <mesh ref={baseRef} position={[0, 1.5, 3]} rotation-x={0.01} rotation-z={0.01}>
          <boxGeometry args={[2, 0.5, 3]} />
          <meshPhongMaterial args={[{ color: 0x676884 , map:texture}]} />
        </mesh>
        <mesh ref={holderRef} position={[0, 1.75, 2.75]} rotation-x={0.01} rotation-z={0.01}>
          <boxGeometry args={[2, 0.3, 2.5]} />
          <meshPhongMaterial args={[{ color: 0x676884 }]} />
        </mesh>
      </group>
    </>
  );
};
export default CassetteHolder;