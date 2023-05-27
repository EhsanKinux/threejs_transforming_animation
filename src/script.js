import './style.css'
import * as THREE from 'three'
import { gsap } from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

// // positioin
// // mesh.position.x = 0.7
// // mesh.position.y = -0.6
// // mesh.position.z = 1

// mesh.position.set(0.7, -0.6, 1)

// // Scale
// // mesh.scale.x = 2
// // mesh.scale.y = 0.5
// // mesh.scale.z = 0.5
// mesh.scale.set(2, 0.5, 0.5)

// // Rotation
// mesh.rotation.reorder('XYZ')
// mesh.rotation.y = Math.PI / 2
// mesh.rotation.x = Math.PI / 2

// scene.add(mesh)

const group = new THREE.Group()
scene.add(group)

// cube 1
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
group.add(cube1)

// // cube 2
// const cube2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({color: 0x00ff00})
// )
// cube2.position.x = -2
// group.add(cube2)

// // cube 3
// const cube3 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({color: 0x0000ff})
// )
// cube3.position.x = 2
// group.add(cube3)

// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4
camera.position.x = 0
camera.position.y = 0
scene.add(camera)

// camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// Clock
//  const clock = new THREE.Clock();
gsap.to(cube1.position, {duration:1, x: 2, delay:1})

// let perTime = Date.now();
// Animations
const tick = () => {

    // // Time
    // const currentTime = Date.now();
    // const deltaTime = currentTime - perTime;
    // perTime = currentTime;

    // const elapsedTime = clock.getElapsedTime();
    // Update objects
    // cube1.position.y = Math.sin(elapsedTime)
    // cube1.position.x = Math.cos(elapsedTime)
    // cube1.rotation.y = elapsedTime * Math.PI * 2
    // cube1.rotation.y += 0.01 * deltaTime
    // cube1.position.x += 0.001
    // cube1.position.y += 0.001

    // camera.lookAt(cube1.position)

    // Render
    renderer.render(scene, camera)
    // console.log('tick');
    window.requestAnimationFrame(tick)
}

tick();