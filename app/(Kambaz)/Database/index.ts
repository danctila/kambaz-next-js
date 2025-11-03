import { User, Course, Module, Assignment, Enrollment } from "../types";
import coursesData from "./courses.json";
import modulesData from "./modules.json";
import assignmentsData from "./assignments.json";
import usersData from "./users.json";
import enrollmentsData from "./enrollments.json";

export const courses = coursesData as Course[];
export const modules = modulesData as Module[];
export const assignments = assignmentsData as Assignment[];
export const users = usersData as User[];
export const enrollments = enrollmentsData as Enrollment[];
