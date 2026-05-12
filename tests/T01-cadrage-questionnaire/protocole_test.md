# Protocole de test — T01

## Étape 1 — Préparer l’entrée

Coller la lettre d’ouverture ou le descriptif du contrôle dans `entree_modele.md`.

Si la lettre contient des données sensibles, créer une version neutralisée pour le test.

## Étape 2 — Identifier les risques

Utiliser le prompt :

```text
01-cadrage/prompts/identifier_risques.md
```

Entrée : contenu de `entree_modele.md`.

Sortie attendue : carte initiale des risques.

## Étape 3 — Générer les questions de contrôle

Utiliser le prompt :

```text
01-cadrage/prompts/generer_questions_controle.md
```

Entrée : carte initiale des risques + contenu de `entree_modele.md`.

Sortie attendue : liste hiérarchisée de questions de contrôle.

## Étape 4 — Produire la fiche de cadrage dynamique

Utiliser le prompt :

```text
01-cadrage/prompts/produire_fiche_cadrage.md
```

Entrée : contenu de `entree_modele.md` + carte des risques + questions de contrôle.

Sortie attendue : fiche de cadrage dynamique.

## Étape 5 — Générer le questionnaire n° 1

Utiliser le prompt :

```text
02-questionnaires/prompts/generer_questionnaire_1.md
```

Entrée : fiche de cadrage dynamique + questions de contrôle + pièces déjà disponibles.

Sortie attendue : questionnaire n° 1 + tableau interne de rattachement.

## Étape 6 — Contrôle qualité rapide

Vérifier les cinq points suivants :

| Point vérifié | Oui / Non | Commentaire |
|---|---|---|
| Les risques ne sont pas formulés comme des constats |  |  |
| Chaque QC est rattachée à un risque |  |  |
| Chaque question du questionnaire est rattachée à une QC |  |  |
| Les pièces demandées sont justifiées |  |  |
| Le questionnaire reste proportionné |  |  |

## Résultat du test

Le test est concluant si la lettre d’ouverture permet de produire un questionnaire n° 1 cohérent, sans instruction prématurée ni demandes documentaires excessives.
