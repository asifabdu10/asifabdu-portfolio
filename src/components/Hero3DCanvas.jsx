import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Hero3DCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for entire 3D avatar & workstation
    const avatarGroup = new THREE.Group();
    scene.add(avatarGroup);

    // Spotlight beam simulation from top
    const topLight = new THREE.SpotLight(0xa5b4fc, 8);
    topLight.position.set(0, 8, 4);
    topLight.angle = Math.PI / 4;
    topLight.penumbra = 0.8;
    scene.add(topLight);

    // Purple & Cyan rim lighting for dramatic game-dev aesthetic
    const cyanRim = new THREE.PointLight(0x06b6d4, 4, 15);
    cyanRim.position.set(-4, 2, 2);
    scene.add(cyanRim);

    const purpleRim = new THREE.PointLight(0xd946ef, 4, 15);
    purpleRim.position.set(4, -2, 2);
    scene.add(purpleRim);

    const ambientLight = new THREE.AmbientLight(0x1e1b4b, 1.8);
    scene.add(ambientLight);

    // Materials
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xe0a98b,
      roughness: 0.5,
      metalness: 0.1,
    });
    const capMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      roughness: 0.3,
      metalness: 0.4,
    });
    const shirtMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.6,
      metalness: 0.2,
    });
    const neonPurpleMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x7e22ce,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    const neonCyanMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.8,
    });
    const metallicMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.85,
      roughness: 0.2,
    });

    // --- CHARACTER MODEL (Head, Cap, Headset, Eyes, Smile, Body) ---
    const headGroup = new THREE.Group();
    avatarGroup.add(headGroup);

    // Head base
    const headGeo = new THREE.SphereGeometry(1.05, 32, 32);
    headGeo.scale(1, 1.08, 0.95);
    const head = new THREE.Mesh(headGeo, skinMat);
    headGroup.add(head);

    // Cap / Beanie
    const capGeo = new THREE.SphereGeometry(1.09, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.52);
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.set(0, 0.25, -0.05);
    cap.rotation.x = -0.15;
    headGroup.add(cap);

    // Cap Visor
    const visorGeo = new THREE.CylinderGeometry(1.2, 1.25, 0.08, 32, 1, false, -Math.PI * 0.4, Math.PI * 0.8);
    const visor = new THREE.Mesh(visorGeo, capMat);
    visor.position.set(0, 0.42, 0.65);
    visor.rotation.x = 0.25;
    headGroup.add(visor);

    // Ears
    const earGeo = new THREE.SphereGeometry(0.24, 16, 16);
    earGeo.scale(0.5, 1, 0.8);
    const earL = new THREE.Mesh(earGeo, skinMat);
    earL.position.set(-1.08, 0, 0);
    const earR = new THREE.Mesh(earGeo, skinMat);
    earR.position.set(1.08, 0, 0);
    headGroup.add(earL);
    headGroup.add(earR);

    // Eyes
    const eyeWhiteGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const eyePupilGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const eyePupilMat = new THREE.MeshBasicMaterial({ color: 0x09090b });

    const leftEye = new THREE.Group();
    const eyeWhiteL = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
    const pupilL = new THREE.Mesh(eyePupilGeo, eyePupilMat);
    pupilL.position.set(0, 0, 0.12);
    leftEye.add(eyeWhiteL);
    leftEye.add(pupilL);
    leftEye.position.set(-0.36, 0.1, 0.85);

    const rightEye = new THREE.Group();
    const eyeWhiteR = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
    const pupilR = new THREE.Mesh(eyePupilGeo, eyePupilMat);
    pupilR.position.set(0, 0, 0.12);
    rightEye.add(eyeWhiteR);
    rightEye.add(pupilR);
    rightEye.position.set(0.36, 0.1, 0.85);

    headGroup.add(leftEye);
    headGroup.add(rightEye);

    // Eyebrows
    const browGeo = new THREE.BoxGeometry(0.28, 0.06, 0.05);
    const browMat = new THREE.MeshStandardMaterial({ color: 0x18181b });
    const browL = new THREE.Mesh(browGeo, browMat);
    browL.position.set(-0.36, 0.36, 0.95);
    browL.rotation.z = 0.08;
    const browR = new THREE.Mesh(browGeo, browMat);
    browR.position.set(0.36, 0.36, 0.95);
    browR.rotation.z = -0.08;
    headGroup.add(browL);
    headGroup.add(browR);

    // Friendly smile / mouth
    const smileGeo = new THREE.TorusGeometry(0.25, 0.04, 8, 24, Math.PI);
    const smileMat = new THREE.MeshBasicMaterial({ color: 0x581c1c });
    const smile = new THREE.Mesh(smileGeo, smileMat);
    smile.position.set(0, -0.36, 0.86);
    smile.rotation.x = 0.2;
    smile.rotation.z = Math.PI;
    headGroup.add(smile);

    // Nose
    const noseGeo = new THREE.ConeGeometry(0.12, 0.22, 16);
    const nose = new THREE.Mesh(noseGeo, skinMat);
    nose.position.set(0, -0.08, 1.02);
    nose.rotation.x = 0.3;
    headGroup.add(nose);

    // Gaming Headset
    const headsetBandGeo = new THREE.TorusGeometry(1.25, 0.08, 12, 32, Math.PI * 0.9);
    const headsetBand = new THREE.Mesh(headsetBandGeo, metallicMat);
    headsetBand.rotation.z = -Math.PI * 0.45;
    headsetBand.position.set(0, 0.1, 0);
    headGroup.add(headsetBand);

    const earpadGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.25, 24);
    const earpadL = new THREE.Mesh(earpadGeo, neonPurpleMat);
    earpadL.rotation.z = Math.PI / 2;
    earpadL.position.set(-1.22, 0.02, 0);
    const earpadR = new THREE.Mesh(earpadGeo, neonCyanMat);
    earpadR.rotation.z = Math.PI / 2;
    earpadR.position.set(1.22, 0.02, 0);
    headGroup.add(earpadL);
    headGroup.add(earpadR);

    // Body / Shoulders
    const bodyGeo = new THREE.CylinderGeometry(0.75, 1.35, 1.8, 32);
    bodyGeo.scale(1.4, 1, 0.75);
    const body = new THREE.Mesh(bodyGeo, shirtMat);
    body.position.set(0, -1.75, 0);
    avatarGroup.add(body);

    // Hoodie collar
    const collarGeo = new THREE.TorusGeometry(0.72, 0.12, 16, 32);
    collarGeo.scale(1.1, 1, 0.8);
    const collar = new THREE.Mesh(collarGeo, neonPurpleMat);
    collar.rotation.x = Math.PI / 2;
    collar.position.set(0, -0.9, 0.05);
    avatarGroup.add(collar);

    // --- FLOATING 3D GAME DEV ARTIFACTS (Interactive Gems, Controller, Hologram) ---
    // Floating Gamepad Controller
    const controllerGroup = new THREE.Group();
    const padBodyGeo = new THREE.BoxGeometry(0.8, 0.4, 0.15);
    const padBody = new THREE.Mesh(padBodyGeo, metallicMat);
    const dpadGeo = new THREE.BoxGeometry(0.18, 0.18, 0.08);
    const dpad = new THREE.Mesh(dpadGeo, neonCyanMat);
    dpad.position.set(-0.25, 0, 0.09);
    const btnGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.08, 16);
    btnGeo.rotateX(Math.PI / 2);
    const btn1 = new THREE.Mesh(btnGeo, neonPurpleMat);
    btn1.position.set(0.25, 0.06, 0.09);
    const btn2 = new THREE.Mesh(btnGeo, neonCyanMat);
    btn2.position.set(0.18, -0.06, 0.09);
    controllerGroup.add(padBody, dpad, btn1, btn2);
    controllerGroup.position.set(-1.7, 0.5, 1.2);
    controllerGroup.rotation.set(0.2, 0.4, -0.2);
    avatarGroup.add(controllerGroup);

    // Floating Unity-style 2D Game Gem (Octahedron)
    const gemGeo = new THREE.OctahedronGeometry(0.38, 0);
    const gem = new THREE.Mesh(gemGeo, neonPurpleMat);
    gem.position.set(1.8, 0.8, 1.1);
    avatarGroup.add(gem);

    // Floating Holographic Code Tile (Icosahedron)
    const holoGeo = new THREE.IcosahedronGeometry(0.3, 0);
    const holo = new THREE.Mesh(holoGeo, neonCyanMat);
    holo.position.set(-1.5, -0.8, 1.3);
    avatarGroup.add(holo);

    // Subtle 3D background particle dust
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x818cf8,
      size: 0.06,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Interactive Mouse Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = Math.max(-1, Math.min(1, x));
      mouse.targetY = Math.max(-1, Math.min(1, y));
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Head looks at mouse
      headGroup.rotation.y = mouse.x * 0.55;
      headGroup.rotation.x = -mouse.y * 0.35;

      // Pupil micro tracking
      pupilL.position.x = mouse.x * 0.04;
      pupilL.position.y = mouse.y * 0.04 + 0.02;
      pupilR.position.x = mouse.x * 0.04;
      pupilR.position.y = mouse.y * 0.04 + 0.02;

      // Whole avatar subtle breathing float
      avatarGroup.position.y = Math.sin(elapsedTime * 1.6) * 0.08 - 0.2;
      avatarGroup.rotation.y = mouse.x * 0.2;

      // Floating items animation
      gem.rotation.y = elapsedTime * 1.2;
      gem.rotation.x = elapsedTime * 0.8;
      gem.position.y = 0.8 + Math.sin(elapsedTime * 2 + 1) * 0.12;

      holo.rotation.y = -elapsedTime * 1.5;
      holo.rotation.z = elapsedTime * 0.7;
      holo.position.y = -0.8 + Math.cos(elapsedTime * 2.2) * 0.1;

      controllerGroup.rotation.y = 0.4 + Math.sin(elapsedTime * 1.4) * 0.2;
      controllerGroup.position.y = 0.5 + Math.cos(elapsedTime * 1.8) * 0.1;

      // Particles float
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      headGeo.dispose();
      bodyGeo.dispose();
      capGeo.dispose();
      visorGeo.dispose();
      gemGeo.dispose();
      particleGeo.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
      {/* Ambient Radial Spotlight Cone on Avatar */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl"></div>
      </div>
      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing relative z-10" />
      {/* Floating 3D Badge Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/80 text-xs font-mono text-slate-300 shadow-xl pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span>Interactive 3D Avatar • Move Mouse</span>
      </div>
    </div>
  );
};

export default Hero3DCanvas;
