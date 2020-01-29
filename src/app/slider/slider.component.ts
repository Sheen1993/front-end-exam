import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  Title: string ='キャッチコピーが入ります。';
  Paragraph: string ='サンプルテキストサンプルテキストサンプルテキストサンプルテキスト';
  imong:string ='<div>\'test\'</div>';
  slideIndex: number =1;
  slides:any;
  dots:any;



  constructor() { 
    
  }

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }
   
  plusSlides($n:number) {
    this.showSlides(this.slideIndex += $n);
  }

  currentSlide($n: number) {
    this.showSlides(this.slideIndex = $n);
  }
  showSlides($n: number){    
    var i: number;
    this.slides = document.getElementsByClassName("slide");
    this.dots = document.getElementsByClassName("pagination");
    if ($n > this.slides.length)
    {
      this.slideIndex = 1
    }    
    if ($n < 1) 
    {
      this.slideIndex = this.slides.length
    }
    for (i = 0; i  < this.slides.length; i ++) {
        this.slides[i].setAttribute("style", "display:none;");
    }
    for (i  = 0; i  < this.dots.length; i ++) {
        this.dots[i ].className = this.dots[i ].className.replace(" active", "");
    }
    this.slides[this.slideIndex-1].setAttribute("style", "display:block;");
    this.dots[this.slideIndex-1].className += " active";
  }   

  
}
