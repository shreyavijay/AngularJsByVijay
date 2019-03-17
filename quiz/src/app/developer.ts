import { Question } from "./questions";

export class Developer {
    // name: string;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    referenceCode: string;
    password: string;
    confirmPassword: string; 
    testName: string;
    score: number;
    developerResponse: DeveloperResponse[] = [];
}


export class DeveloperResponse {
    // name: string;
    questionId: string;
    answer: number[];
}