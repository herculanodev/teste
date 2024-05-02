import { Entity } from "../../../core/Entity";

type SubmissionProps = {

   challengeId: string;
   studentId: string;
   createdAt: Date;


};

export class Submission extends Entity<SubmissionProps>{
    static create(arg0: { studentId: string; challengeId: string; }) {
        throw new Error("Method not implemented.");
    }
    private constructor(props: SubmissionProps, id?: string){
        super(props, id);
    }
     public create(props: SubmissionProps, id?: string){
            const submission = new Submission(props, id);
              
            return submission;


        }

}