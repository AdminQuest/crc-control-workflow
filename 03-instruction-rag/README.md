# 03-instruction-rag

Ce module organise la matière brute de l’instruction. Il ne rédige pas le rapport.

## Entrées

- réponses aux questionnaires ;
- pièces justificatives ;
- documents budgétaires et comptables ;
- contrats, délibérations, PV, rapports ;
- entretiens ;
- textes juridiques ;
- rapports antérieurs ;
- données tabulaires.

## Sorties

- atomes de preuve ;
- registre des faits ;
- registre des dates ;
- registre des montants ;
- registre des personnes et fonctions ;
- registre des actes ;
- registre des déclarations ;
- registre des textes applicables ;
- base exploitable pour RAG.

## Règle

Un atome ne doit pas interpréter au-delà de la source. Il décrit ce que la source établit, avec son niveau de preuve et sa localisation.
