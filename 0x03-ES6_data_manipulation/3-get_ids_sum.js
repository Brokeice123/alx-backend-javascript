function getStudentIdsSum(students) {
	// Use reduce to sum all student ids
	return students.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
