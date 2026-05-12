# Convention des identifiants

Les identifiants assurent la traçabilité entre cadrage, sources, atomes, documents maîtres, constats, rapport et contradiction.

## Formats

| Objet | Format | Exemple |
|---|---:|---|
| Contrôle | `CTRL-AAAA-NNN` | `CTRL-2026-001` |
| Question de contrôle | `QC-NNN` | `QC-001` |
| Risque | `RIS-NNN` | `RIS-001` |
| Source | `SRC-NNNN` | `SRC-0042` |
| Atome de preuve | `ATOM-NNNNNN` | `ATOM-000123` |
| Document maître | `DMNN` | `DM06` |
| Analyse intermédiaire | `AN-DMNN-NNN` | `AN-DM06-004` |
| Constat délibérable | `CONST-NNNN` | `CONST-0017` |
| Observation du rapport | `OBS-NNN` | `OBS-023` |
| Recommandation | `REC-NNN` | `REC-002` |
| Réponse contradictoire | `REP-NNN` | `REP-004` |
| Décision de délibéré | `DEC-NNN` | `DEC-011` |

## Règles

1. Un identifiant ne doit jamais être réutilisé.
2. Un objet abandonné conserve son identifiant.
3. La numérotation n’a pas vocation à refléter le plan du rapport.
4. Les liens entre objets doivent être explicites : une observation doit renvoyer aux constats ; un constat doit renvoyer aux atomes ; un atome doit renvoyer aux sources.
5. Les fichiers de travail peuvent changer de nom ; les identifiants restent stables.
