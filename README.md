# CRC Control Workflow

Chaîne méthodologique reproductible pour conduire un contrôle des comptes et de la gestion, de la prise de connaissance au ROD.

Ce dépôt ne remplace pas `crc-prompt-engine`. Il intervient en amont et autour de lui : il structure le contrôle, les sources, les constats et les arbitrages ; `crc-prompt-engine` reste l’outil de rédaction et de réécriture.

## Logique générale

```text
00-socle                         langage commun, schémas, taxonomies
01-cadrage                       cadrage du contrôle, risques, questions de contrôle
02-questionnaires                génération et suivi des questionnaires
03-instruction-rag               atomisation des sources, registres, base de connaissance
04-documents-maitres             alimentation et mise à jour des documents maîtres
05-constats-arbitrage            tri des constats, significativité, domiciliation
06-integration-prompt-engine     paquets de rédaction pour crc-prompt-engine
07-qualite-delibere              audit pré-dépôt et simulation de pré-délibéré
08-contradiction-riod            traitement de la contradiction, RIOD, ROD
09-capitalisation                retours d’expérience et amélioration de la méthode
```

## Principe directeur

Le rapport ne doit pas être la somme de l’instruction. La chaîne impose une couche intermédiaire entre les pièces et la rédaction : les sources alimentent des atomes probatoires ; les atomes alimentent des documents maîtres ; les documents maîtres alimentent des constats arbitrés ; seuls les constats significatifs, prouvés et domiciliés alimentent le rapport.

## Objets communs

Les objets centraux du dépôt sont :

- `QuestionControle` : question structurante issue du cadrage ;
- `SourceInstruction` : pièce, entretien, donnée ou texte mobilisé ;
- `AtomePreuve` : unité probatoire extraite d’une source ;
- `DocumentMaitre` : analyse thématique alimentée par les atomes ;
- `ConstatDeliberable` : constat susceptible d’être porté au rapport ;
- `PaquetRedaction` : entrée propre à transmettre à `crc-prompt-engine` ;
- `ReponseContradictoire` : argument ou pièce transmis en contradiction.

## Version initiale

La première version stabilise le socle, le cadrage, les questionnaires, l’arbitrage des constats et l’intégration avec `crc-prompt-engine`. Les modules RAG et contradiction pourront ensuite être approfondis.
