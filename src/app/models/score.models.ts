// model utilisé par les unit tests du service active-game.service.ts
// correspond a la structure du JSON recupere lors d'un appel sur la route
// /leaderboard/[jeu]
export interface Score{
    pseudo: string;
    score: string;
}