import { Developer } from "./developer";
import { User } from "./user";

export class Login {
    developer: Developer;
    //Indicates Employee
    user: User;

    constructor(developer: Developer,user: User){
        this.developer = developer;
        this.user = user;
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
