# Entrées et sorties de composants

## Configuration de votre github

Nous allons configurer votre github pour lui faire générer le site correspondant à votre projet.
Pour cela, nous nous appuierons sur les github pages et les github actions. 
A chaque fois que vous pousserez une nouvelle version de votre code sur le dépôt, il sera compilé via une github action et le résultat de la compilation sera mis en ligne sur github pages.

Rendez-vous à l'adresse de votre dépôt github, puis cliquez sur le bouton `Settings` en haut à droite.
Dans le menu à gauche, cliquez sur `Pages`, puis configurer comme suit :

* Source : `Deploy from a branch`
* Branch : `gh-pages`  /  `root`
* Puis cliquez sur `Save`

## Configuration du fichier package.json

Modifier le script associé à la commande `build`, remplacez `l3m-tp-angular-inputs-outputs` par le nom de votre dépôt (devrait être de la forme `l3m-tp-angular-inputs-outputs-GITHUBID` avec `GITHUBID` votre identifiant github).

Cette configuration est nécessaire pour que l'application puisse fonctionner une fois déployer sur votre github pages.

## Sujet

Le but de ce TP est de créer un composant qui permet de gérer des entrées et des sorties. Ce composant sera utilisé dans le TP suivant pour créer un composant qui permet de gérer des tâches.

Vous pouvez avoir une idée de ce qui est attendu en consultant cette ressource qui contient un exemple de [correction détaillé étape par étape (du comportement, pas du code)](https://alexdmr.github.io/l3m-tp-angular-inputs-outputs/)

### Étape 1 : Mise en place du composant racine

Nous allons commencer par définir le composant racine, vous aurez besoin de définir :

* Un `signal<CssStyle>` privé et readonly, initialisé avec `defaultStyle` (voir le fichier `src/app/data.ts`).
* Un attribut calculé `style` de type `CssStyle`, qui servira de proxy pour le signal.
* Une vue qui affiche le style dans une balise `pre` et une div avec la classe CSS `stylée` à laquelle vous appliqerez le style.

Enfin, vous pouvez copier le code SCSS suivant dans le fichier `src/app/app.component.scss` :

```scss
div.stylée {
    display: inline-block;
    width: 200px;
    height: 200px;
    border: solid black 10px;
}
```

Vous pouvez vérifer que tout fonctionne correctement en faisant varier le style initial de votre signal.

### Étape 2 : Création et intégration de CssStylerComponent

Créez maintenant un composant `CssStylerComponent` qui permettra de modifier le style définit précédemment :

```bash
npx ng g c css-styler --changeDetection=OnPush
```

Spécifications :

* Une entrée requise `cssStyle` de type `CssStyle`.
* Une sortie `cssStyleChange` qui émet des `CssStyle`.

Utilisez et compléter le template HTML suivant :

```html
<pre>backgroundColor: <input type="color" />
    borderColor: <input type="color" />
   borderRadius: <input type="number" /> <select >
    <option value="px">px</option>
    <option value="%">%</option>
</select>          
</pre>
```

Intégrez ce composant dans le composant racine afin de pouvoir modifier le style.

### Étape 3: Création et intégration du composant `color-selector`

```bash
npx ng g c color-selector --changeDetection=OnPush
```

Spécifications :

* Une entrée requise `color` de type `string`.
* Une sortie `colorChange` de type `EventEmitter<string>`.

Indications pour la vue, vous appliquerez le style à la première balise div (celle de classe CSS color). Compléter le code HTML suivant :

```html
<div class="color"></div>
<div class="inputs">
    <input type="range" min="0" max="255" />
    <input type="range" min="0" max="255" />
    <input type="range" min="0" max="255" />
</div>
```

et le code SCSS suivant :

```scss
:host {
    display: inline-flex;
    flex-flow: row nowrap;

    > .inputs {
        display: flex;
        flex-flow: column;
    }
}
```

Intégrez ce composant dans le composant `CssStylerComponent` afin de pouvoir modifier les couleurs grâce aussi à ce composant.
