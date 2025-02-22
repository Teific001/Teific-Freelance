import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Drone } from "../Models/Drone";
import { Environment, OrbitControls } from "@react-three/drei";
import { easing } from "maath";
import Frame from "../../Assets/images/Frame 88 (1).png";
import Framebg from "../../Assets/images/Frame 16 bg.png";
import Frameup from "../../Assets/images/Frame 69.png";
import Frame39 from "../../Assets/images/Frame 39.png";
import SetCamera from '../../Assets/images/Group 1000000939.png';
import { Bulb } from "../Models/Bulb";
import { Ambu } from '../Models/Ambu';

// CameraRig Component to control camera movement
const CameraRig = ({ children, rotationTarget, zoomLevel }) => {
  const group = useRef();

  useFrame((state, delta) => {
    if (group.current) {
      // Apply smooth rotation using easing.dampE
      easing.damp(state.camera, "fov", zoomLevel, 0.25, delta);
      easing.dampE(group.current.rotation, rotationTarget, 0.25, delta);
      state.camera.updateProjectionMatrix();
    }
  });

  return <group ref={group}>{children}</group>;
};

const ThreeModel = ({ id }) => {
  const [pos, setPos] = useState({ position: [10, 2, 10], fov: 30 });
  const [random, setRandom] = useState(0);
  const [rotationCamera, setRotationCamera] = useState([-1.7, -0.2, 1]);
  const [rotationTarget, setRotationTarget] = useState([0, 0, 0]); // Target rotation for CameraRig
  const [zoomLevel, setZoomLevel] = useState(30); // Initial FOV for zoom
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Mobile detection

  const orbitRef = useRef();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1280);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const rotateHorizontal = () => {
    setRotationTarget((prevRotation) => [
      prevRotation[0],
      prevRotation[1] + Math.PI / 2, // Rotate around the Y-axis (horizontal)
      prevRotation[2],
    ]);
    setRandom((random + 90));
  };

  const rotateVertical = () => {
    setRotationTarget((prevRotation) => [
      prevRotation[0] + Math.PI / 2, // Rotate around the X-axis (vertical)
      prevRotation[1],
      prevRotation[2],
    ]);
  };

  useEffect(() => {
    switch (id) {
      case 2:
        setPos({ position: [-130, 20, 10], fov: 30 });
        break;
      case 3:
        setPos({ position: [0, -1, 2], fov: 30 });
        break;
      default:
        setPos({ position: [10, 2, 10], fov: 30 });
        break;
    }
  }, [id]);

  const handleSetCamera = () => {
    console.log("clicked");
    setRandom(0);
    setRotationTarget([0, 0, 0]);
    setZoomLevel(30);
  };

  const handleZoomChange = (event) => {
    const newZoomLevel = Number(event.target.value);
    setZoomLevel(newZoomLevel);
  };

  return (
    <div className="h-[80%] w-[80%] relative ">
      <Canvas shadows camera={pos} gl={{ preserveDrawingBuffer: true }} className="">
        <ambientLight intensity={0.5} />
        {id === 3 && <Environment preset="night" />}
        {(id === 1 || id === 2) && <Environment preset="studio" />}

        {/* OrbitControls only active for mobile screens */}
        {((isMobile) || ((id === 2 || id ===3) )) && (
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
            ref={orbitRef}
          />
        )}



        {/* Use CameraRig to manage rotations with smooth transition */}
        <CameraRig rotationTarget={rotationTarget} zoomLevel={zoomLevel}>
          {id === 1 && <Drone rotationCamera={rotationCamera} setRotationCamera={setRotationCamera} />}
          {id === 2 && <Ambu />}
          {id === 3 && <Bulb />}
        </CameraRig>
      </Canvas>
      {id === 3 && (
        <div className="absolute top-0 -z-10 lg:h-full  h-[100%] w-full bg-[#9898983b] rounded-3xl"></div>
      )}

      {id === 1 && (
        <div>
          <img
            src={Frame}
            className="absolute top-0 -z-10 lg:h-full  h-[100%] w-full"
            alt=""
          />
          <div>
            <div className="flex gap-10 relative">
              <img
                src={Framebg}
                className="hidden xl:block w-[12.5rem]   absolute -bottom-36  -left-7"
                alt=""
              />
              <img
                src={Frameup}
                className="hidden xl:block   absolute -bottom-[7.8rem]  -left-2"
                alt=""
                style={{
                  transform: `rotate(${random}deg)`,
                  transition: 'transform 0.8s ease-out', // Smooth transition for bottom
                }}
              />
              <img
                src={Frame39}
                className=" hidden xl:block lg:absolute -bottom-44  -right-32"
                alt=""
              />
              <p className="bg-red-600 xl:block lg:absolute -top-12 left-[7.6rem] w-10 text-center rounded-full hidden">{random % 360}°</p>
            </div>

            <button
              onClick={rotateHorizontal}
              className="w-20 h-20  bg-transparent text-white rounded absolute -bottom-[9.38rem] z-10 -right-[6.4rem] "
            ></button>
            <button
              onClick={rotateVertical}
              className="w-20 h-20  bg-transparent text-white rounded absolute  -bottom-[2.9rem] z-10 -right-[6.4rem]"
            ></button>
            <input
              type="range"
              min="10"
              max="52"
              step="1"
              value={zoomLevel}
              onChange={handleZoomChange}
              className="absolute right-[0.4rem] -bottom-[13.7rem] hidden xl:block transform -translate-y-1/2 h-40 w-10 bg-[#fff0] rounded-lg appearance-none cursor-pointer vertical-range"
              style={{
                zIndex: 1000,
                writingMode: "vertical-rl", // Make the slider vertical
              }}
            />
            <div
              style={{
                bottom: `${zoomLevel % 12 - 10}rem`,
                transform: "rotate(-5deg)",
                transition: 'bottom 0.8s ease-out',
              }}
              className="border-2 border-solid border-[#ff2b2b]  z-50 absolute right-36 w-[12.5rem]  animate-rotate-pendulum hidden xl:block "
            ></div>
            <div className="bg-black px-2 right-[4.4rem] text-white absolute z-50 text-xl -bottom-[8.58rem] hidden xl:block">{zoomLevel}m</div>
            <div className={`bg-black ${random === 0 ? "px-7" : "px-4"} py-2 right-[4.4rem] text-white absolute z-50 text-xl -bottom-[3.8rem] hidden xl:block`}>{random % 360}°</div>
            <div>
              <img src={SetCamera} alt="" className="hidden top-2 left-8 xl:block absolute" />
              <button className="xl:block absolute z-50 w-8 h-8  rounded-full top-[0.7rem] left-[8rem] hidden" onClick={handleSetCamera}></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeModel;
