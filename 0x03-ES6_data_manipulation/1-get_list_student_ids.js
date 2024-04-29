function getListStudentIds(arrayOfObjects) {
	// Check if the input is an array
	if (!Array.isArray(arrayOfObjects)) {
			return [];
	}

	// Map the array of objects to an array of ids
	return arrayOfObjects.map(student => student.id);
}

export default getListStudentIds;
