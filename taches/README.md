# Gestion des tâches

Ce dossier regroupe la logique de suivi des tâches du workflow.

## Accès web

La page web de synthèse est disponible ici :

```text
web/taches.html
```

Elle est également accessible depuis la page d’accueil `index.html` par la carte **Suivi des tâches**.

## Suivi par étape

Les tâches confiables au vérificateur sont stockées dans chaque module :

```text
01-cadrage/taches/taches_verificateur.md
02-questionnaires/taches/taches_verificateur.md
03-instruction-rag/taches/taches_verificateur.md
04-documents-maitres/taches/taches_verificateur.md
05-constats-arbitrage/taches/taches_verificateur.md
06-integration-prompt-engine/taches/taches_verificateur.md
07-qualite-delibere/taches/taches_verificateur.md
08-contradiction-riod/taches/taches_verificateur.md
09-capitalisation/taches/taches_verificateur.md
```

## Modèle commun

Le modèle transversal se trouve ici :

```text
00-socle/modeles/table_suivi_taches.md
```

Le schéma JSON se trouve ici :

```text
00-socle/schemas/tache_workflow.schema.json
```

Le prompt commun se trouve ici :

```text
00-socle/prompts-communs/generer_suivi_taches.md
```

## Principe de répartition

Le vérificateur prépare les bases factuelles, les tableaux, les registres, les contrôles de complétude, les rapprochements et les matrices préremplies.

Le rapporteur conserve les arbitrages : angle, qualification, hiérarchisation, domiciliation des constats, rédaction finale et décisions de délibéré.
