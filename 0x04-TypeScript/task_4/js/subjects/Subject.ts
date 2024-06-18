namespace Subjects {
    export class Subject {
        private _teacher: Teacher;

        get teacher(): Teacher {
            return this._teacher;
        }

        setTeacher(teacher: Teacher): void {
            this._teacher = teacher;
        }
    }
}

