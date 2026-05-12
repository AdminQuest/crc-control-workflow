# T01 — Cadrage et questionnaire n° 1

## Objet du test

Tester le premier cycle fonctionnel du dépôt :

```text
lettre d’ouverture / descriptif du contrôle
→ risques initiaux
→ questions de contrôle
→ fiche de cadrage dynamique
→ questionnaire n° 1
```

## Entrée minimale

Un texte court comprenant :

- organisme contrôlé ;
- période contrôlée ;
- objet du contrôle ;
- éléments justifiant l’ouverture ;
- points d’attention déjà identifiés ;
- contraintes éventuelles de calendrier.

La lettre d’ouverture réelle peut être utilisée comme entrée, sous réserve de retirer ou neutraliser les informations non communicables si le test est réalisé hors environnement sécurisé.

## Prompts à utiliser

1. `01-cadrage/prompts/identifier_risques.md`
2. `01-cadrage/prompts/generer_questions_controle.md`
3. `01-cadrage/prompts/produire_fiche_cadrage.md`
4. `02-questionnaires/prompts/generer_questionnaire_1.md`

## Sortie attendue

À la fin du test, l’utilisateur doit obtenir :

- une carte initiale des risques ;
- une liste hiérarchisée de questions de contrôle ;
- une fiche de cadrage dynamique ;
- un questionnaire n° 1 ;
- un tableau interne de rattachement des questions du questionnaire aux questions de contrôle.

## Critères de réussite

Le test est réussi si :

1. les risques ne sont pas formulés comme des constats ;
2. chaque question de contrôle est rattachée à au moins un risque ;
3. chaque question du questionnaire est rattachée à une question de contrôle ;
4. les pièces demandées sont justifiées par le cadrage ;
5. les demandes documentaires ne sont pas inutilement exhaustives.
