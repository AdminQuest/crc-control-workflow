# Tâches du vérificateur — 06-integration-prompt-engine

| ID tâche | Module | Intitulé | Responsable | Livrable attendu | Entrées nécessaires | Contrôle qualité | Priorité | Statut | Échéance | Commentaire |
|---|---|---|---|---|---|---|---|---|---|---|
| T-06-001 | 06-integration-prompt-engine | Préparer les paquets de rédaction par partie | vérificateur | Paquets de rédaction préremplis | Matrice de constats, preuves, illustrations | Chaque constat retenu figure dans un seul paquet | haute | a_faire |  | Le rapporteur valide avant usage |
| T-06-002 | 06-integration-prompt-engine | Vérifier les éléments à ne pas reprendre | vérificateur | Liste d’exclusions par paquet | Constats abandonnés, éléments sensibles, redondances | Aucun élément abandonné ne doit réapparaître | haute | a_faire |  | Sécurise le passage à la rédaction |
| T-06-003 | 06-integration-prompt-engine | Contrôler les illustrations obligatoires | vérificateur | Tableau constats / illustrations | Matrice de constats | Chaque illustration est localisée | haute | a_faire |  | Évite les paragraphes abstraits |
| T-06-004 | 06-integration-prompt-engine | Préparer les annexes ou tableaux à transmettre | vérificateur | Liste des annexes utiles | DM, matrices, registres | Distinguer corps, annexe, DLRé | normale | a_faire |  | Le rapporteur tranche l’emplacement |
| T-06-005 | 06-integration-prompt-engine | Vérifier la cohérence des identifiants | vérificateur | Table de correspondance CONST / OBS / paquet | Matrice de constats | Aucun constat orphelin | normale | a_faire |  | Prépare la traçabilité rédactionnelle |

## Répartition de principe

Le vérificateur prépare les paquets de rédaction. Le rapporteur décide de l’angle, du plan, de la formulation et de l’usage dans crc-prompt-engine.
