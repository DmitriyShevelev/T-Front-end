import Course from "../models/course";
import CoursesService from "./courses-service";
import { Observable } from "rxjs";


export default class College {
    constructor(private coursesService: CoursesService) { }

    addCourse(course: Course): Promise<Course> {
        //FIXME
        //Should be generated id
        //with validation id doesn't exist
        return this.coursesService.add(course);
    }
    removeCourse(id: number): Promise<Course> {
        //FIXME
        return this.coursesService.remove(id);
    }
    updateCourse(id: number, newCourse: Course): Promise<Course> {
        //FIXME
        return this.coursesService.update(id, newCourse);
    }
    getAllCourses(): Observable<Course[]> {
        return this.coursesService.get() as Observable<Course[]>;
    }
    getCourse(id: number): Promise<Course> {
        return this.coursesService.get(id) as Promise<Course>;
    }

}