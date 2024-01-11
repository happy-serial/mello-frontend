import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import style from "@/components/auth/css/background.module.css";
export function Background() {
  return (
    <>
      <Canvas shadows className={`${style.background}`}>
        <Suspense>
          <CameraRig />
          <directionalLight
            intensity={1}
            position={[1, 0, 0]}
            color={"#ff63af"}
          />
          <MeshGroup />
        </Suspense>
      </Canvas>
    </>
  );
}

function CameraRig() {
  const { gl, camera } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
    gl.setSize(window.innerWidth, window.innerHeight);
    camera.position.set(0, 0, 400);
  }, []);

  window.addEventListener("resize", onWindowResize, false);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    gl.setSize(window.innerWidth, window.innerHeight);
  }
}

function MeshGroup() {
  const center = useRef();
  const particles = createParticles().map((data, i) => (
    <Particle key={i} data={data} size={0.5} />
  ));

  useFrame(() => {
    center.current.rotation.x += 0.001;
    center.current.rotation.y += 0.001;
  });
  function createParticles() {
    let particles = [];
    for (let i = 0; i < 1000; i++) {
      const data = {
        x: Math.random() - 0.5,
        y: Math.random() - 0.5,
        z: Math.random() - 0.5,
        multiplyScalar: 90 + Math.random() * 700,
        rotationX: Math.random() * 2,
        rotationY: Math.random() * 2,
        rotationZ: Math.random() * 2,
      };
      particles[i] = data;
    }
    console.log(particles);
    return particles;
  }
  return (
    <>
      <group ref={center}>{particles}</group>
    </>
  );
}

function Particle({ size, data }) {
  const particle = useRef();
  useEffect(() => {
    particle.current.position.set(data.x, data.y, data.z);
    particle.current.position.multiplyScalar(data.multiplyScalar);
    particle.current.rotation.set(
      data.rotationX,
      data.rotationY,
      data.rotationZ
    );
  }, []);

  return (
    <>
      <mesh ref={particle}>
        <sphereGeometry attach="geometry" args={[size, 7, 7]} />
        <meshPhongMaterial attach="material" color="white" flatShading />
      </mesh>
    </>
  );
}
