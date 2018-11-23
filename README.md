# Formation Angular 

* Organisme: **EDUGROUP**
* Dates: **19 au 23-11-2018**
* Formateur: **[Christophe Gueroult](https://github.com/ChristopheGueroult)**

## Outils
 * [Visual Studio Code](https://code.visualstudio.com/download/)
      * Angular Essentials
      * Beautify
      * Bracket Pair colorizer 2
      * GitHub
      * Material Icon Theme
      * Todo+
 * [NodeJs](https://nodejs.org/en/download/)
 * [Git](https://git-scm.com/downloads/)

## Utilisation

### Commandes de base

Créer une application
```bash
ng new [app-name]
```

Démarrer le serveur local
```bash
ng serve
```

Créer un module
```bash
ng g module [module-name]
```

Créer un composant dans un module
```bash
ng g component [component-name] --module[module-name]
```

### Lifecycle Hooks

1. **ngOnChanges()**: 
. Appelé 1 seule fois au début puis Appelé lorsqu'un @input change de valeur, si variable de type string, number mais pas si modification une valeur de propriété de l'objet

2. **ngOnInit()**: 
Appelé pour initialiser les variables. Appelé 1 seule fois.

3. **ngDoCheck()**: 
Apprelé lorsque les propriétés changent. Lié à _ngAfterContentInit()_.

4. **ngAfterContentInit()**: 
Appelé juste après _ngDoCheck()_. Lié à _ngAfterContentChecked()_.

5. **ngAfterContentChecked()**: 
Appelé juste après _ngAfterContentInit()_.

6. **ngAfterViewInit()**: 
Appelé lorsque la vue a fini d'être initialisée. Permet par exemple de récupérer la position d'un élément du DOM ou la taille de la fenêtre. Appelé 1 seule fois. Lié à _ngAfterViewInit()_.

7. **ngAfterViewChecked()**: Appelé juste après _ngAfterViewInit()_.

8. **ngOnDestroy()**: 
Appelé lorsque l'on change de route. Permet de désouscrire au _Observable_, _etc..._ pour éviter les fuites mémoires

**Ne pas oublier d'implémenter les lifecycle via `implements`**
```javascript
export class StateDirective implements OnInit, OnDestroy
```

### Routing

Demander au router d'instancer des composants et des vues préalablement paramétrés.

Garder la ligne suivante, dans le fichier `index.html`
```html
<base href="/">
```

Créer un module dédié aux routes, dans `/app`
```bash
ng new module app-routing
```

Dans ce module, importer le fichier
```javascript
import { RouterModule, Routes } from '@angular/router';
```

Créer les routes
```javascript
const appRoutes: Routes = [
  { path: 'login', component: PagesLoginComponent },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full', // Utilise la base de l'url complète
  }
];
```

Importer le `RouterModule` dans chaque module utilisant le `routing`
```javascript
import { RouterModule } from '@angular/router';
```

Utiliser dans le fichier convenu, le composant:
```html
<router-outlet></router-outlet>
```

Importer le `AppRoutingModule` dans l'application
```javascript
import { AppRoutingModule } from './app-routing.module';
```
**L'ordre des routes compte: le AppRoutingModule doit être appelé en dernier dans AppModule->import, idem pour le `**`**

Pour créer un lien:
```html
<a routerLink="login">
```

Ajouter une classe à un lien actif:
```html
<a routerLink="login" routerLinkActive="active">
```

Ajouter un paramètre à un lien:
```html
<a [routerLink]="['login', myVar.id]">
```

### LazyLoading

Demander au router de charger les modules à l'appel et non au chargement de l'application

Dans le fichier `AppRoutingModule`, ajouter:
```javascript
{
  path: 'prestations',
  loadChildren: './prestations/prestations.module#PrestationsModule',
},
```

**Attention: Le Module ne doit pas avoir été importé aileurs auparavant**

**/!\ Si bien fait: Le Module importé doit s'afficher dans la liste d'url affichée dans la console, sinon, vérifer le contenu de loadChildren**

### Routing Child

Permet de gérer les routes pour chaque module

Créer un composant dans le module visé
```bash
ng g component [component-name] --module=[module-name]
```

Créer un module routing **dans** le module visé, en prenant soin de 
```bash
ng g module [module-name] --module=[module-name]
```

Recopier, dans le nouveau fichier routing, le contenu du `AppRoutingModule`, en utilisant `forChild` plutôt que `forRoot`
```javascript
@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
```

Dans le fichier AppRouting, ajouter une redirection vers le module
```javascript
  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule',
  },
```

Importer le fichier routing-child dans le module correspondant
```javascript
import { ClientsRoutingModule } from './clients-routing.module';
```

### 404

Pour récupérer toutes les URLs inconnues, utiliser dans le path: **
```javascript
  {
    path: '**',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule',
  },
```

### Guard

**À venir**


## Injection de dépendances

shared > schematics > services > "prestation" 


## Pipe
Permet de formater une variable pour l'affichage

## Formulaires
[value]="content" => pour binder une variable
value="content" => pour écrire du texte

### Liens
Objet [Set](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Set)
Objet [Values](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/values)
[Web Components](https://developer.mozilla.org/fr/docs/Web/Web_Components)
[Decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841)
[BabelJs](https://babeljs.io/)
[Webpack (alsacreations)](https://www.alsacreations.com/tuto/lire/1754-debuter-avec-webpack.html)
[Babel (grafikArt)](https://www.grafikart.fr/tutoriels/babel-es2015-907)


Dans Shared, création d'un dossier `components`

###Transclusion: pouvoir projeter un template dans un autre template:

Tout le code contenu de `app-prestation`...
```html
<app-tableau>
  <app-prestation></app-prestation>
</app-tableau>
```

... sera exécuté à l'emplacement de la balise `ng-content`
```html
<ng-content></ng-content>
```

###Tranclusion multiple

On ajoute autant de contenu que l'on souhaite...
```html
<app-tableau>
  <app-prestation></app-prestation>
  <p>coucou</p>
  <p class="en">hello</p>
</app-tableau>
```

On séléctionne via la directive `select` qui fonctionne comme un sélecteur CSS
```html
<ng-content></ng-content>
<ng-content select="p"></ng-content>
<ng-content select=".paraph"></ng-content>
```
**Ne fonctionne pas avec le caractère `#` pour sélectionner les id**

**<ng-content> affiche dans le contenu dans le dernier élément**

**<ng-content select="..."> affiche dans le contenu dans le premier élément**

CSS : retirer le Shadow-DOM

Dans le composant visé, ajouter, dans le décorateur:
```javascript
@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  encapsulation: ViewEncapsulation.None //-> Permet l'ouverture des CSS aux autres components (annule le shadow dom)
})
```
**Attention à bien préciser les éléments CSS pour éviter les effets de bord sur le reste de l'app**

:host => 

::ng-deep => 

### Création directive d'attribut

### Nommer un component

Appliquer un `#` suivi du nom du composant
```html
<app-header #header></app-header>
```

À voir : <ng-factory>, création de template dynamique
[Todd Motto](https://toddmotto.com/factory-versus-service)

## Générer une Doc

[Compodoc](https://compodoc.app/)

installer Compodoc
```bash
npm install -g @compodoc/compodoc
```

Ajouter dans le fichier package.json
```javascript
  "scripts": {
    "compodoc": "compodoc -p src/tsconfig.app.json"
  }
```

Lancer la génération de la documentation
```bash
npm run compodoc
```

Les commentaires des fonctions sont récupérées dans la documentation
```javascript
/**
 * Description
 * @params $a, $b
 * @return Var
 */
```

## Formulaires

Observable: (design pattern) | (unicast)
Permet de récupérer des données et exécuter des actions de manière asynchrone
Tant qu'on n'y a pas souscrit, aucune action ne se passe ni requête ajax
Observable chaud: permet de récupérer les données et de rester souscrit au flux
Observable froid: permet de récupérer les données, pour mettre à jour, on doit souscrire à nouveau
=> next: permet d'ajouter des données dans l'observer
=> complete(): permet d'envoyer les données

Subject: (multicast)


Liste des status de champs: https://angular.io/api/forms/FormGroup


### Reactive Forms

Pour créer un formulaire Réactif (Reactive Forms)

Importer le module reactive forms dans le module du formulaire
```javascript
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    ReactiveFormsModule
  ]
});
```

Dans le composant du formulaire

Instancier le formulaire
```javascript
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

public form: FormGroup;

constructor(
  private fb: FormBuilder
) { }
```

Importer le modèle associé
```javascript
import { Client } from 'src/app/shared/models/client.model';
```

Paramétrer le formulaire
```javascript
private init = new Client; // Modèle de données associé

// Champs du formulaire et Validators
private createForm() {
  this.form = this.fb.group({
      nom: [ // nom du `formControlName`
        this.init.nom,
      ],
  });
}

// Fonction appelée lors de la validation du formulaire
public onSubmit() {
  this.nItem.emit(this.form.value);
}

// Fonction appelée quand on quitte le champ
public isError(fcName): boolean {
  return this.form.get(fcName).invalid && this.form.get(fcName).touched;
}
```

Dans la vue du formulaire
```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input type="text" class="form-control" formControlName="nom">
```

Pour effectuer avoir un formulaire asynchrone, dans le composant du formulaire
```javascript
import { Output, EventEmitter } from '@angular/core';

@Output() nItem: EventEmitter<Client> = new EventEmitter();

public onSubmit() {
  this.nItem.emit(this.form.value);
}
```

Dans la page HTML appelant le composant du formulaire
```html
<app-reactive-form-client (nItem)="add($event)"></app-reactive-form-client>
```

## Firebase
Créer un projet

Développer > Hosting > Premier pas

Exécuter
```bash
npm install -g firebase-tools
```

Bien se positionner dans le dossier du projet, puis se connecter
```bash
firebase login
```

Builder l'application
```bash
ng build --prod
```
Cela doit créer un dossier dist à la racine du projet

**Si bug lors du build avec @ngBootstrap :**
Remplacer la version de @ngBootstrap dans package.json
```javascript
"@ng-bootstrap/ng-bootstrap": "^3.3.1",
```
puis exécuter
```bash
npm install @ng-bootstrap/ng-bootstrap
```
**FIN BUG**

Initialiser firebase dans le projet
```bash
firebase init
```

* Sélectionner `Hosting`
* Sélectionner le projet concerné (si problème pour trouver le projet: firebase use --add)
* Choisir le dossier `dist/crm`: `dist` correspond au build, `crm` au nom du projet (chemin modifiable par la suite)
* SPA ? Oui
* Overwrite ? Nope

Déployer sur firebase
```bash
firebase deploy
```

[AngularFire](https://github.com/angular/angularfire2)

Pouvoir se utiliser les services Firebase dans son application

Exécuter 
```bash
npm install @angular/fire firebase --save
```

Créer un fichier `src/environments/environments.firebase.ts` (ignoré dans le .gitignore)
```javascript
export const environment = {
  production: true,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```

# Databse

* Créer une base de données
* Mode test
* Ajouter une collection `prestations`
* Ajouter les champs (valeurs / type)


## RxJS

Subject
BehaviorSubject: récupère le dernier
ReplaySubject: Récupère TOUT
AsyncSubject: ... comme subject ?

méthode `from` : https://rxjs-dev.firebaseapp.com/api/index/function/from
méthode `of`: https://rxjs-dev.firebaseapp.com/api/index/function/of
méthode `from`

Opérators sert à travailler sur les données émis par les Observable, utilisable avec les pipes

opérateur `map`: 


## Change Detection

Gère la mise à jour de la vue
Par défaut, véréfie les changements sur tous les composants de l'application

CD s'active dans le cas où:
- EVENT
- valeur d'un Input est mis à jour
- le flux d'un Observable est modifié

Depuis le point le plus haut
```javascript
import { ChangeDetectionStrategy } from '@angular/core';
@Component({
  // Oblige de créer un event pour mettre à jour les données
  changeDetection: ChangeDetectionStrategy.OnPush
});
```

 `| async` plus besoin de `subscribe` ou `unsubscribe`


Exercices
* Créer une collection pour client
* Ajouter une colonne pour éditer ou supprimer une ligne


L'Observable Subject (chaud) reste à l'écoute

next() => envoyer un nouveau flux de donnée à l'Observable (même princique que push())

async subject => ne récupère/retient aucune donnée lors de l'initialisation
behavior subject => récupère une donnée par défaut, ne stocke qu'un flux de données à la fois
subject => diffuse le flux de données immédiatement et ne stocke rien

## Test unitaires

Jasmine => Effectue des tests unitaires

`app.component.spec.ts`

Exemple de tests: https://codecraft.tv/courses/angular/unit-testing/components/

reactive forms: https://toddmotto.com/angular-dynamic-components-forms


