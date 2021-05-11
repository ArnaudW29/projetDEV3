export interface Report{
    _id: string;
    reporter: string;
    reported: string;
    msg: string;
    validation: boolean;
    reporterUsername: string;
    reportedUsername: string;
}