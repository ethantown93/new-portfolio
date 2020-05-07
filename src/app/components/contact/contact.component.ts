import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

import * as THREE from 'three';
import { WebGLIndexedBufferRenderer } from 'three';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateNavService } from '../../services/update-nav.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  confirmation_message: String = "Thank you, your message has been received";
  confirmation_action: String = 'Dismiss';

  error_message: String = "Sorry, there was an error with submitting your message. Please Try again."

  constructor(private snackBar: MatSnackBar, private service:UpdateNavService) {

    let scene, camera, renderer, cloudParticle = [];

    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight,1,1000);
      camera.position.z = 1;
      camera.rotation.x = 1.16;
      camera.rotation.y = -0.12;
      camera.rotation.z = 0.27;

      let directionalLight = new THREE.DirectionalLight(0x000000);
      directionalLight.position.set(0,0,1);
      scene.add(directionalLight);

      let orangeLight = new THREE.PointLight(0x2E1B49, 50, 450, 1.7);
      orangeLight.position.set(100,300,100);
      scene.add(orangeLight);

      let ambient = new THREE.AmbientLight(0x000000);
      scene.add(ambient);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth,window.innerHeight);
      scene.fog = new THREE.FogExp2(0x000000, 0.001);
      renderer.setClearColor(scene.fog.color);
      document.body.appendChild(renderer.domElement);

      let loader = new THREE.TextureLoader();
      loader.load("./assets/images/smoke.png", function(texture){
        let cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
        let cloudMaterial = new THREE.MeshLambertMaterial({
          map:texture,
          transparent: true
        });

        for( let i = 0; i < 50; i++) {
          let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
          cloud.position.set( Math.random()*800 - 400, 500, Math.random()*500 - 500);
          cloud.rotation.x = 1.16;
          cloud.rotation.y = -0.12;
          cloud.rotation.z = Math.random()*2*Math.PI;
          cloudParticle.push(cloud);
          scene.add(cloud);
        }
      })

      window.addEventListener('resize', responsive, false);
      render();
    }

    function responsive(){
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    function render() {
      cloudParticle.forEach(element => {
        element.rotation.z -= 0.001;
        
      });
      renderer.render(scene,camera);
      requestAnimationFrame(render);
    }
    init();

  }
    
  ngOnInit(): void {
  }

  onSubmit(value){

    this.service.submitMessage(value)
    this.openSnackBar(this.confirmation_message, this.confirmation_action);
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, { duration: 5000 });
  }

}
