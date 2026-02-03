// 3D Hero Animation Logic
import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';

export function init3DHero(canvas) {
  // Scene
  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  camera.position.z = 2;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Geometry
  const geometry = new THREE.IcosahedronGeometry(1, 0);
  const material = new THREE.MeshStandardMaterial({
    color: 0x007bff,
    roughness: 0.3,
    metalness: 0.5,
  });
  const crystal = new THREE.Mesh(geometry, material);
  scene.add(crystal);

  // Light
  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(2, 2, 2);
  scene.add(light);

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);
    crystal.rotation.x += 0.005;
    crystal.rotation.y += 0.005;
    renderer.render(scene, camera);
  }

  animate();

  // Handle Resize
  window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  });
}
