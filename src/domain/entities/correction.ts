import { Entity } from "../../../core/Entity";

type CorrectionProps = {
    grade: number;
    submissionId: string;
    createdAt: Date;


}



export class Correction extends Entity<CorrectionProps>{

    private constructor(props: CorrectionProps, id?: string){

        super(props, id);

    }
    public create(props: CorrectionProps, id?: string){

                

        const correction = new Correction(props)

        return correction;


    }


}