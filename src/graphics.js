import "./styles.css";
import * as THREE from "three";

// Need 3 things: scene, camera, renderer
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  75, // Field of View, in degrees
  window.innerWidth / window.innerHeight, // Aspect Ratio, almost always width/height
  0.1, // Near clipping lane
  1000 // Far clipping plane
);
camera.position.set(0, 0, 25);

let renderer = new THREE.WebGLRenderer(); // Three.js comes with many different renderers
renderer.setSize(window.innerWidth, window.innerHeight); // Need to set the size at which we want it to render
document.body.appendChild(renderer.domElement);

let cubeGeometry = new THREE.BoxGeometry(1, 1, 1); // Object that containsa all the points (vertices) and fill (faces) of the cube
let cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // All materials take an object of properties
let cube = new THREE.Mesh(cubeGeometry, cubeMaterial); // Mesh is an object that takes a geometry, and applies a material to it
scene.add(cube);

// Create a blue LineBasicMaterial
let lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });

let lineGeometry = new THREE.Geometry();
lineGeometry.vertices.push(new THREE.Vector3(-10, 0, 0));
lineGeometry.vertices.push(new THREE.Vector3(0, 10, 0));
lineGeometry.vertices.push(new THREE.Vector3(10, 0, 0));

let line = new THREE.Line(lineGeometry, lineMaterial);

scene.add(line);

function animate() {
  requestAnimationFrame(animate); // Will draw the scene every time screen is refreshed (60 frames a sec)
  // RAF pauses when user navigates to another browser tab, not wasting processing power or battery life

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// Begin loop animation
animate();
