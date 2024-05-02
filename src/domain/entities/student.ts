import { Entity } from "../../../core/Entity";

type StudentProps = {

    name: string;
    email: string;
    


};

export class Student extends Entity<StudentProps>{
    private constructor(props: StudentProps, id?: string){
        super(props, id);
    }
        public create(props: StudentProps, id?: string){
            const student = new Student(props, id);
              
            return student;


        }

}