# Tâches du vérificateur — 03-instruction-rag

| ID tâche | Module | Intitulé | Responsable | Livrable attendu | Entrées nécessaires | Contrôle qualité | Priorité | Statut | Échéance | Commentaire |
|---|---|---|---|---|---|---|---|---|---|---|
| T-03-001 | 03-instruction-rag | Classer les sources reçues | vérificateur | Registre des sources `SRC` | Réponses, pièces, bases, tableaux | Chaque source a un ID, une date, une origine | haute | a_faire |  | Socle de l’atomisation |
| T-03-002 | 03-instruction-rag | Extraire les dates structurantes | vérificateur | Registre des dates | Sources classées | Chaque date renvoie à une source | normale | a_faire |  | Utile pour chronologies |
| T-03-003 | 03-instruction-rag | Extraire les montants significatifs | vérificateur | Registre des montants | Comptes, contrats, délibérations, tableaux | Montants rapprochés des pièces sources | haute | a_faire |  | Utile finances et commande publique |
| T-03-004 | 03-instruction-rag | Extraire les acteurs et fonctions | vérificateur | Registre personnes / fonctions | PV, organigrammes, statuts, délibérations | Vérifier dates de fonction et qualité juridique | normale | a_faire |  | Utile gouvernance / déontologie |
| T-03-005 | 03-instruction-rag | Produire les premiers atomes factuels | vérificateur | Table `ATOM` initiale | Sources prioritaires | Distinguer fait, déclaration, analyse | haute | a_faire |  | Ne pas interpréter au-delà de la source |
| T-03-006 | 03-instruction-rag | Identifier les incohérences ou lacunes entre sources | vérificateur | Liste des incohérences / lacunes | Registres dates, montants, sources | Chaque incohérence est localisée | normale | a_faire |  | Alimente Q complémentaire |

## Répartition de principe

Le vérificateur produit les registres et atomes. Le rapporteur valide les usages analytiques et les priorités de recoupement.
