import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CssStyle, defaultStyle } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  /*Un signal<CssStyle> privé et readonly, initialisé avec defaultStyle (voir le fichier src/app/data.ts).
Un attribut calculé style de type CssStyle, qui servira de proxy pour le signal.
Une vue qui affiche le style dans une balise pre et une div avec la classe CSS stylée à laquelle vous appliqerez le style.
Enfin, vous pouvez copier le code SCSS suivant dans le fichier src/app/app.component.scss : */
  private _sigStyle=signal<CssStyle>(defaultStyle);
  public sigStyle=computed<CssStyle>(()=>{return this._sigStyle()});
  
  updateCssStyle(c:CssStyle){
    this._sigStyle.set(c);
  }
}
