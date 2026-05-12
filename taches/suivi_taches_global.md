# Suivi global des tâches

Ce fichier sert de tableau de bord manuel. Il peut être complété directement dans GitHub.

## Règle d’usage

- Les tâches proposées par défaut sont stockées dans chaque module : `XX-module/taches/taches_verificateur.md`.
- Les tâches réellement suivies pour un contrôle peuvent être copiées ici.
- Les tâches supplémentaires peuvent être ajoutées dans ce tableau, avec un identifiant stable.

## Tableau de suivi

| ID tâche | Module | Intitulé | Responsable | Livrable attendu | Entrées nécessaires | Contrôle qualité | Priorité | Statut | Échéance | Commentaire |
|---|---|---|---|---|---|---|---|---|---|---|
| T-01-001 | 01-cadrage | Recenser les pièces de cadrage disponibles | vérificateur | Liste des pièces disponibles et manquantes | Plan de contrôle, dossier permanent | Chaque pièce est localisée et datée | haute | a_faire |  |  |
| T-01-002 | 01-cadrage | Préparer la fiche d’identité de l’organisme | vérificateur | Tableau identité organisme | Bases institutionnelles, comptes, délibérations clés | Cohérence SIRET, population, budgets, ordonnateurs | normale | a_faire |  |  |
| T-01-003 | 01-cadrage | Extraire les éléments du précédent contrôle | vérificateur | Tableau recommandations / suites apparentes | ROD précédent, suivi des recommandations | Distinguer recommandation, observation et suite déclarée | normale | a_faire |  |  |
| T-01-004 | 01-cadrage | Préparer les premiers agrégats financiers | vérificateur | Tableau synthétique BP/BA sur la période | Comptes de gestion, comptes administratifs, ANAFI | Recalcul des principaux ratios | haute | a_faire |  |  |
| T-02-001 | 02-questionnaires | Transformer les lacunes documentaires en demandes de pièces | vérificateur | Tableau demandes de pièces | Fiche de cadrage, lacunes initiales | Chaque demande est rattachée à une QC | haute | a_faire |  |  |
| T-02-005 | 02-questionnaires | Contrôler la complétude des réponses reçues | vérificateur | Tableau complétude / relances | Réponses au questionnaire | Distinguer complet, partiel, absent, inexploitable | haute | a_faire |  |  |
| T-03-001 | 03-instruction-rag | Classer les sources reçues | vérificateur | Registre des sources `SRC` | Réponses, pièces, bases, tableaux | Chaque source a un ID, une date, une origine | haute | a_faire |  |  |
| T-03-003 | 03-instruction-rag | Extraire les montants significatifs | vérificateur | Registre des montants | Comptes, contrats, délibérations, tableaux | Montants rapprochés des pièces sources | haute | a_faire |  |  |
| T-03-005 | 03-instruction-rag | Produire les premiers atomes factuels | vérificateur | Table `ATOM` initiale | Sources prioritaires | Distinguer fait, déclaration, analyse | haute | a_faire |  |  |
| T-04-002 | 04-documents-maitres | Produire les tableaux financiers de base | vérificateur | Tableaux BP/BA/consolidé | Comptes, balances, dette, PPI | Recalculs et contrôles de cohérence | haute | a_faire |  |  |
| T-04-004 | 04-documents-maitres | Lister les pièces manquantes par DM | vérificateur | Liste des pièces manquantes | Documents maîtres en cours | Rattacher chaque pièce manquante à une QC | haute | a_faire |  |  |
| T-05-002 | 05-constats-arbitrage | Vérifier les preuves principales de chaque piste | vérificateur | Tableau pistes / preuves | Pistes de constats, atomes, pièces | Identifier preuve forte, moyenne, faible, déclarative | haute | a_faire |  |  |
| T-05-003 | 05-constats-arbitrage | Proposer les illustrations disponibles | vérificateur | Liste chiffres, exemples, tableaux, dates | DM, registres, atomes | Chaque illustration est localisée | haute | a_faire |  |  |
| T-06-001 | 06-integration-prompt-engine | Préparer les paquets de rédaction par partie | vérificateur | Paquets de rédaction préremplis | Matrice de constats, preuves, illustrations | Chaque constat retenu figure dans un seul paquet | haute | a_faire |  |  |
| T-07-001 | 07-qualite-delibere | Contrôler la présence des preuves dans le DLRé | vérificateur | Tableau OBS / pièce DLRé | Projet de rapport, DLRé, matrice de constats | Chaque observation significative a une pièce localisée | haute | a_faire |  |  |
| T-07-004 | 07-qualite-delibere | Contrôler les recommandations | vérificateur | Tableau recommandation / constat / preuve | Projet de rapport | Chaque recommandation découle d’un constat | haute | a_faire |  |  |
| T-08-004 | 08-contradiction-riod | Préparer la matrice de contradiction | vérificateur | Matrice préremplie | ROP, réponses, pièces nouvelles | Chaque ligne comporte observation, argument, pièce | haute | a_faire |  |  |
| T-09-004 | 09-capitalisation | Mettre à jour la liste des erreurs fréquentes | vérificateur | Fiche retour d’expérience | Retours de délibéré, contradiction, corrections | Distinguer erreur de méthode et arbitrage de dossier | normale | a_faire |  |  |

## Ajout d’une tâche supplémentaire

Ajouter une ligne au tableau avec l’identifiant suivant disponible dans le module concerné. Exemple :

```text
T-05-007 | 05-constats-arbitrage | Contrôler la cohérence des montants entre DM06 et projet de rapport | vérificateur | Tableau d’écarts | DM06, projet de rapport | Aucun montant non rapproché | haute | a_faire | 2026-03-15 | Ajout dossier spécifique
```
