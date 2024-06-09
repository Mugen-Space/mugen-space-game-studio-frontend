import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

const Cassette3d = ({ id, selected, played, textureUrl }) => {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, textureUrl);
  useFrame(() => {
    if (meshRef.current) {
      const targetXPosition = (id - selected) * 2.5;
      const targetZPosition = selected === id ? 2 : 0;
      const playedTargetYPosition = played === id ? 2.8 : 3.3;
      meshRef.current.position.x +=
        (targetXPosition - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y +=
        (playedTargetYPosition - meshRef.current.position.y) * 0.05;
      meshRef.current.position.z +=
        (targetZPosition - meshRef.current.position.z) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2.3, 0.5]} />
      <meshBasicMaterial args={[{ map: texture }]} />
    </mesh>
  );
};
export default Cassette3d;
