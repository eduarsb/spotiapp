import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
})
export class NoimagePipe implements PipeTransform {
  transform(images: any): any {
    if (!images) {
      return 'img/banner-ico.png';
    }
    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'img/banner-ico.png';
    }
  }
}
