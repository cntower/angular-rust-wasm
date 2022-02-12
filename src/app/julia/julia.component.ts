import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {draw} from 'pkg/modules/julia';

@Component({
  selector: 'app-julia',
  templateUrl: './julia.component.html',
  styleUrls: ['./julia.component.css']
})
export class JuliaComponent implements AfterViewInit {
  imaginary = 0.65;
  real = -0.17;

  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;

  context!: CanvasRenderingContext2D | null;

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
  }

  onRenderClick() {
    this.drawJuliaSet();
  }

  private drawJuliaSet() {
    if (this.context) {
      draw(this.context, 600, 600, this.real, this.imaginary);
    }
  }

}
