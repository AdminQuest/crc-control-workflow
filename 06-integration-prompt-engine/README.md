# 06-integration-prompt-engine

Ce module prépare les entrées propres à transmettre à `crc-prompt-engine`.

Il ne rédige pas lui-même le rapport. Il transforme les constats arbitrés en paquets de rédaction.

## Entrées

- matrice de constats ;
- pré-plan du rapport ;
- preuves principales ;
- illustrations obligatoires ;
- limites probatoires ;
- éléments à exclure.

## Sorties

- paquet de rédaction pour une partie ;
- paquet de rédaction pour une synthèse ;
- paquet de rédaction pour les recommandations ;
- paquet de consolidation globale.

## Règle

Le paquet transmis à `crc-prompt-engine` doit contenir autant les éléments à écrire que les éléments à ne pas reprendre.
