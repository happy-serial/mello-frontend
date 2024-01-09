import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import style from "./css/background.module.css";
import { Colors } from "../../../public/styles/colors/colors";
import { Group, Mesh } from "three";

interface BackgroundProps {
 particleCount?: number;
 size?: number; 
 segment?: number;
 backgroundColorPreset: "preset1" | "preset2" | "preset3"; 
 lightColor?: Colors;
 animateDirection?: "normal" | "twist";
 animateSpeed?: number;
}

interface MeshGroupProps {
  particleCount?: number;
  size?: number;
  segment?: number;
  animateDirection?: "normal" | "twist";
  animateSpeed?: number;
}

interface ParticleProps {
  size?: number;
  segment?: number;
}

export function Background({
  particleCount = 2000,
  size = 0.1,
  segment = 7,
  backgroundColorPreset = "preset1",
  lightColor = Colors.pink,
  animateDirection = "twist",
  animateSpeed = 0.001
}: BackgroundProps) {
  
  return (
    <>
      <Canvas shadows className={[style["background--" + backgroundColorPreset]].join(" ")} >
        <Suspense>
          <directionalLight
            intensity={1}
            position={[1, 0, 0]}
            color={lightColor}
          />
          <MeshGroup particleCount={particleCount} size={size} segment={segment} animateDirection={animateDirection} animateSpeed={animateSpeed}/>
        </Suspense>
      </Canvas>
    </>
  );
}

function MeshGroup({ 
  particleCount,
  size,
  segment,
  animateDirection,
  animateSpeed
 } : MeshGroupProps) {
  const centerRef = useRef<Group>(null!);
  const particles = createParticles({particleCount, size, segment});
  const {camera} = useThree();
  camera.position.set(0,0,100);
  let rotateFunc: (animateSpeed?: number) => void;

  if(animateDirection == "normal") {
    rotateFunc = (animateSpeed: number = 0.001) : void => {
      if(centerRef.current) {
        centerRef.current.rotation.y += animateSpeed;
      }
    };
  }
  else if(animateDirection == "twist") {
    rotateFunc = (animateSpeed: number = 0.001) : void => {
      if(centerRef.current) {
        centerRef.current.rotation.x += animateSpeed;
        centerRef.current.rotation.y += animateSpeed;
      }
    };
  }

  useFrame(() => {
    rotateFunc(animateSpeed);
  });

  //파티클 배열을 생성하는 함수.
  function createParticles({particleCount = 2000, size = 0.2, segment = 3}: MeshGroupProps) {
    let tempArray = [];
    for (let i: number = 0; i < particleCount; i++) {
      tempArray[i] = <Particle key={i} size={size} segment={segment} />;
    }
    return tempArray;
  }
  return (
    <>
      <group ref={centerRef}>{particles}</group>
    </>
  );
}

function Particle({ 
  size,
  segment
 }: ParticleProps) {
  const particle = useRef<Mesh>(null!);

  //각 파티클의 초기 위치를 랜덤으로 설정한다.
  useEffect(() => {
    particle.current.position.set(
      Math.random() - 0.5,
      Math.random() - 0.5,
      Math.random() - 0.5
    );
    particle.current.position.multiplyScalar(90 + Math.random() * 100);
    particle.current.rotation.set(
      Math.random() * 2,
      Math.random() * 2,
      Math.random() * 2
    );
  }, []);


  return (
    <>
      <mesh ref={particle} position={[0, 0, 0]}>
        <sphereGeometry attach="geometry" args={[size, segment, segment]} />
        {/* <meshPhongMaterial attach="material" color="white" flatShading /> */}
        <meshStandardMaterial attach="material" roughness={0} metalness={0.3} flatShading/>
      </mesh>
    </>
  );
}
