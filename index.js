import fs from "fs"
import e from "express";
import bodyParser from "body-parser";


const app = e();
const port = 4000;

/*universities coursers json*/
const data1 = fs.readFileSync('./courses.json','utf-8');
const universitiesCoursers = JSON.parse(data1);



//all uni coursers
app.get("/universitiesCoursers",(req,res)=>{
   res.json(universitiesCoursers);
});

//get a specific uni  courses + facults
app.get("/university/:uniName", (req, res) => {
  const universityName = req.params.uniName;
  
  // Assuming universitiesCoursers is an array of objects
  const foundUniversity = universitiesCoursers.filter(
    (university) => university.name === universityName
  );

  res.json(foundUniversity);
});

//get courses with uni name and faculty
app.get("/university/:uniName/:faculty", (req, res) => {
  const universityName = req.params.uniName;
  const universityFaculty = req.params.faculty;

  // Assuming universitiesCoursers is an array of objects
  const foundFaculty = universitiesCoursers.filter(
    (university) =>
      university.name === universityName &&
      university.Faculty === universityFaculty // check case sensitivity
  );

  res.json(foundFaculty);
});


// universities infor
const data2 = fs.readFileSync('./universities.json','utf-8');
const universitiesInfor = JSON.parse(data2);

//all universities information 
app.get("/universities-Infor",(req,res)=>{
   res.json(universitiesInfor);
});

//get a specific uni  courses + facults
app.get("/university-Infor/:acronym", (req, res) => {
  const universityAcronym = req.params.acronym;
  
  // Assuming universitiesCoursers is an array of objects
  const foundUniversity = universitiesInfor.filter(
    (university) => university.acronym === universityAcronym
  );

  res.json(foundUniversity);
});




app.listen(port,()=>{
    console.log(`Server running of http://localhost:${port}`);
})