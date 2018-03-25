import { Component } from '@angular/core';
import { CarouselModule } from 'angular4-carousel';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel'; 

@Component({
    selector: 'sildder',
    templateUrl: './sildder.component.html',
  })

export class SildderComponent {

  public imageSources: string[] = [
    '../../assets/images/surveyor-equipment.jpg',
    '../../assets/images/concrete-machine.jpg',
    '../../assets/images/ss-top.jpg'
 ];
 
 public config: ICarouselConfig = {
   verifyBeforeLoad: true,
   log: false,
   animation: true,
   animationType: AnimationConfig.SLIDE,
   autoplay: true,
   autoplayDelay: 5000,
   stopAutoplayMinWidth: 768
 };
}