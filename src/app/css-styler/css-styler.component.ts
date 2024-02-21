import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CssStyle, Unit, defaultStyle } from '../data';

@Component({
  selector: 'app-css-styler',
  templateUrl: './css-styler.component.html',
  styleUrls: ['./css-styler.component.scss']
})
export class CssStylerComponent {
  
  @Input({ required: true }) cssStyle: CssStyle=defaultStyle;
  @Output() cssStylechange=new EventEmitter<CssStyle>();

  get borderRadius(): number {
    return parseInt(this.cssStyle.borderRadius);
  }

  get borderUnit(): "%" | "px" {
    const L = /(px|%)$/.exec(this.cssStyle.borderRadius);
    if (L === null) {
      console.error("Invalid border radius unit !!!! Comment est ce possible ???");
      return "px";
    }
    return L[0] as "%" | "px";
  }

  public update(u : Partial<CssStyle>):void {
    this.cssStylechange.emit({...this.cssStyle, ...u});
  }

  updateRadius(v: number, u: "%" | "px"): void {
    this.update({borderRadius: `${v}${u}`});
  }
}
