import mongoose from 'mongoose';

// Define required elements for each record inside the schema
// Additional elements that fall outside of this schema definition
// may be sent through as well, it should not cause an issue
const courseSchema = mongoose.Schema({
  id: Number,
  name: String,
});

// Build and export the model based on the schema
// This model will perform validation against new creation (POST)
// requests before saving to the database
const CourseRecord = mongoose.model('CourseRecord', courseSchema);

export default CourseRecord;
