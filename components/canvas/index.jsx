import { Canvas } from "@react-three/fiber";
import { Environment, Center, Loader } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import { useLoading } from "@/components/LoadingContext";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  const { stopLoading } = useLoading();

  const handleCanvasCreated = () => {
    // Canvas is created and ready
    setTimeout(() => {
      stopLoading();
    }, 3500); // Small delay to ensure everything is rendered
  };

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
      onCreated={handleCanvasCreated}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        <CameraRig>
          <Backdrop />
          <Center>
            <Shirt />
          </Center>
        </CameraRig>
      </Suspense>
    </Canvas>
  );
};

export default CanvasModel;