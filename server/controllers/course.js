import CourseRecord from '../models/courseRecord.js';

// GET '/'
export const getCourses = async (req, res) => {
  try {
    // MongoDB helper method to retrieve database records
    // With no parameters passed to the find function, Mongo
    // will return all records of this type
    const courses = await CourseRecord.find();

    // It's always a good idea to return some additional metadata at
    // the end of your routes (count of records, url for the next page of results, etc)
    res.status(200).json({ count: courses.length, results: courses });
  } catch (error) {
    // I recommend using console logging (or better, using a logger) to capture the entire error
    // and sending back the error.message on the result
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const addCourse = async (req, res) => {
  // This is why we need body-parser for express
  // It adds the body of a POST HTTP request to the request
  // object on an express route
  const course = req.body;

  // This is normally where you would do some logic to check whether
  // the value already exists
  const newCourse = new CourseRecord(course);

  try {
    // Invoke MongoDB helper method to add a new record to the database
    await newCourse.save();

    // It is common practice by REST standards to return the JSON representation
    // of a new object after it is created
    res.status(201).json(newGame);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};
