import { Developer } from "./developer";

export class Question {
    testName: string;
    questionDescription: string;
    // answers: string[];
    choice: string[];
    answer: number[];
    id: string;

    constructor(testName: string,questionDescription: string,answers: string[],id: string ){
        this.testName = testName;
        this.questionDescription = questionDescription;
        // this.answers = [];
        this.choice = [];
        this.id = id;

    }
    // mobile: string;
    // password: string;
    // confirmPassword: string;
    // companyname: string;
    // websiteurl: string;
    // industry: string;
    // country: string;
    // companyaddress: string;
    // city: string;
    // postalcode: string;
    // nameoncard: string;
    // cardnumber: string;
    // cardmonthofexpiry: string;
    // cardyearofexpiry: string;

}
