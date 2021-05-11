// model utilisé par les unit tests du service admin.service.ts
// correspond a la structure du JSON recupere lors d'un appel sur la route
// /admin/reports
export interface Report{
    _id: string;
    reporter: string;
    reported: string;
    msg: string;
    validation: boolean;
    reporterUsername: string;
    reportedUsername: string;
}