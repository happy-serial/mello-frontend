import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import style from "./css/background.module.css";
import { Colors } from "../../../public/styles/colors/colors";
import { Group, Light, Mesh } from "three";
import * as THREE from 'three';
// import fontJson from "../../../public/styles/fonts/NanumSquareRoundOTF Regular_Regular.json"
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";

interface BackgroundProps {
 particleCount?: number;
 size?: number; 
 segment?: number;
 backgroundColorPreset?: "preset1" | "preset2" | "preset3"; 
 lightColor?: Colors;
 animateDirection: "normal" | "twist" | "closer";
 animateSpeed: number;
}

interface MeshGroupProps {
  particleCount?: number;
  size?: number;
  segment?: number;
  animateDirection: "normal" | "twist" | "closer";
  animateSpeed: number;
}

interface ParticleProps {
  size?: number;
  segment?: number;
  animateSpeed: number;
  animateDirection: "normal" | "twist" | "closer";
}

export function Background({
  particleCount = 800,
  size = 0.1,
  segment = 7,
  backgroundColorPreset = "preset1",
  lightColor = Colors.pink,
  animateDirection,
  animateSpeed,
  ...props
}: BackgroundProps) {

  return (
    <>
    {/* 추후 수정 예정 */}
      <div className={[style["background--" + backgroundColorPreset]].join(" ")}>
          <div className={[style["aurora-base"], style["aurora-right-top"]].join(" ")}></div>
          <div className={[style["aurora-base"], style["aurora-left-top"]].join(" ")}></div>
          <div className={[style["aurora-base"], style["aurora-right-bottom"]].join(" ")}></div>
          <div className={[style["aurora-base"], style["aurora-left-bottom"]].join(" ")}></div>
          <div className={[style["aurora-base"], style["aurora-center"]].join(" ")}></div>
        <div className={[style["wave-base"] ,style["wave1-top"]].join(" ")}></div>
        <div className={[style["wave-base"] ,style["wave1-bottom"]].join(" ")}></div>
      </div>
      <Canvas shadows className={[style["canvas"]].join(" ")} >
        <Suspense>
          <directionalLight
            intensity={13}
            position={[0, 200, 300]}
            color={lightColor}
          />
          <directionalLight
            intensity={13}
            position={[-200, -400, 400]}
            color={lightColor}
          />

          <directionalLight
            intensity={13}
            position={[50, 0, 50]}
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
  const particles = createParticles(particleCount);
  const {camera} = useThree();
  camera.position.set(0,0,100);

  const animateNomal = (animateSpeed: number = 0.001) : void => {
      if(centerRef.current) {
        centerRef.current.rotation.y += animateSpeed;
      }
    };

  const animateTwist = (animateSpeed: number = 0.001) : void => {
      if(centerRef.current) {
        centerRef.current.rotation.x += animateSpeed;
        centerRef.current.rotation.y += animateSpeed;
      }
    };

  useFrame(() => {
    if(animateDirection == "normal") {
      animateNomal(animateSpeed);
    } else if (animateDirection == "twist") {
      animateTwist(animateSpeed);
    }
  });

  //파티클 배열을 생성하는 함수.
  function createParticles(particleCount:number = 100) {
    let tempArray= [];
    for (let i: number = 0; i < particleCount; i++) {
      tempArray[i] = <Particle key={i} size={size} segment={segment} animateDirection={animateDirection} animateSpeed={animateSpeed}/>;
    }
    return tempArray;
  }
  return (
    <>
      <group position={[0,0,0]} ref={centerRef}>{particles}</group>
    </>
  );
}

function  Particle({ 
  size,
  segment,
  animateSpeed,
  animateDirection
 }: ParticleProps) {
  const particle = useRef<THREE.Mesh>(null!);

  //각 파티클의 초기 위치를 랜덤으로 설정한다.
  const positionX = Math.random() - 0.5;
  const positionY = Math.random() - 0.5;
  const positionZ = Math.random() - 0.5;
  const scalar = 90 + Math.random() * 100;
  const rotationX = Math.random() * 2;
  const rotationY = Math.random() * 2;
  const rotationZ = Math.random() * 2;

  useEffect(() => {
    particle.current.position.set(positionX, positionY, positionZ);
    particle.current.position.multiplyScalar(scalar);
  }, []);

  useFrame(() => {
      if(animateDirection == "closer") {
        particle.current.position.z += animateSpeed;
          if(particle.current.position.z >= 90)
          {
            particle.current.position.set(Math.random() - 0.5,Math.random() - 0.5,Math.random() - 0.5);
            particle.current.position.multiplyScalar(90 + Math.random() * 100);
          }
      }
    }) 

  return (
    <>
      <mesh ref={particle}>
        <sphereGeometry attach="geometry" args={[size, segment, segment]} />
        <meshStandardMaterial attach="material" roughness={0} metalness={0.2} color={"#858585"} flatShading={true}/>
      </mesh>
    </>
  );
}

