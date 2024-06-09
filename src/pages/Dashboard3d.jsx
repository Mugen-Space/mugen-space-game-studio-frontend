import { Canvas } from "@react-three/fiber";
import CassetteHolder from "../components/CassetteHolder";
import { PerspectiveCamera } from "@react-three/drei";
import { cassettes } from "../utilities";
import Cassette3d from "../components/Cassette3d";
import { useState } from "react";

const Dashboard3d = () => {
  const [selected, setSelected] = useState(1);
  const [played, setPlayed] = useState(null);
  const onPrev = () => {
    setSelected(selected - 1);
  };
  const onNext = () => {
    setSelected(selected + 1);
  };
  const onPlay = () => {
    setPlayed(selected);
  };
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 h-screen w-screen">
        <Canvas>
          <PerspectiveCamera makeDefault position={[4, 12, 5]} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <CassetteHolder />
          {cassettes.map((cassette) => (
            <Cassette3d
              key={cassette.id}
              id={cassette.id}
              selected={selected}
              textureUrl={cassette.textureUrl}
              played={played}
            />
          ))}
        </Canvas>
      </div>
      <button
        className="absolute top-4 left-0 border-blue-1 rounded-lg bg-slate-400 p-2 cursor-pointer hover:bg-slate-500 disabled:bg-slate-300"
        onClick={onPrev}
        disabled={selected === 1}
      >
        Previous
      </button>
      <button
        className="absolute top-4 left-24 border-blue-1 rounded-lg bg-slate-400 p-2 cursor-pointer hover:bg-slate-500 disabled:bg-slate-300"
        onClick={onNext}
        disabled={selected === cassettes.length}
      >
        Next
      </button>
      <button
        className="absolute top-32 left-20 border-blue-1 rounded-lg bg-slate-400 p-2 cursor-pointer hover:bg-slate-500 disabled:bg-slate-300"
        onClick={onPlay}
      >
        Play
      </button>
    </div>
  );
};
export default Dashboard3d;
