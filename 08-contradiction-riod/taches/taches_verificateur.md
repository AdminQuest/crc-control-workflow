# Tâches du vérificateur — 08-contradiction-riod

| ID tâche | Module | Intitulé | Responsable | Livrable attendu | Entrées nécessaires | Contrôle qualité | Priorité | Statut | Échéance | Commentaire |
|---|---|---|---|---|---|---|---|---|---|---|
| T-08-001 | 08-contradiction-riod | Recenser les réponses reçues | vérificateur | Registre des réponses `REP` | Réponses contradictoires, pièces jointes | Chaque réponse a un ID et une origine | haute | a_faire |  | Base de la matrice contradiction |
| T-08-002 | 08-contradiction-riod | Extraire les arguments par observation | vérificateur | Tableau arguments / OBS | ROP, réponses | Chaque argument est rattaché à une observation | haute | a_faire |  | Ne pas analyser l’effet utile seul |
| T-08-003 | 08-contradiction-riod | Identifier les pièces nouvelles | vérificateur | Liste des pièces nouvelles | Réponses et annexes | Distinguer pièce nouvelle, pièce déjà connue, déclaration | haute | a_faire |  | Sert à l’effet utile |
| T-08-004 | 08-contradiction-riod | Préparer la matrice de contradiction | vérificateur | Matrice préremplie | ROP, réponses, pièces nouvelles | Chaque ligne comporte observation, argument, pièce | haute | a_faire |  | Le rapporteur qualifie l’effet utile |
| T-08-005 | 08-contradiction-riod | Repérer les passages à citer dans le RIOD | vérificateur | Liste d’extraits avec pages / ancres | Réponses contradictoires | Extraits courts, localisés, non redondants | normale | a_faire |  | Le rapporteur valide les citations |
| T-08-006 | 08-contradiction-riod | Contrôler les incidences ROP / ROD | vérificateur | Tableau modifications proposées | Matrice contradiction, projet ROD | Chaque modification est rattachée à une réponse | normale | a_faire |  | Contrôle de traçabilité |

## Répartition de principe

Le vérificateur prépare la cartographie et la matérialité de la contradiction. Le rapporteur qualifie l’effet utile et décide du maintien, de la modification ou de l’abandon.
