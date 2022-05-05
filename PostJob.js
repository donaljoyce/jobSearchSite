import React from 'react'

function PostJob() {
  return (
    <div>
        <h1 >POST A JOB</h1>
    

    <form id="jobPost" action="./demoData" method="get" ><br/>
        <label for="catgry">Category</label><input type="text" id="catgry" name="category" placeholder="Enter Job Category" required/><br/>
        <label for="date">Date</label><input type="date" id="date" name="Date" placeholder="Date"/><br/>

        <label for="title">Job Title</label><input type="text" id="title" name="title" placeholder="Enter Job Title" required/><br/>
        <label for="type">Job Type</label><select id="type" name="type" required>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
        </select><br/>
        <label for="qual">Educational Qualification</label><input type="text" id="qual" name="qualification" placeholder="Educational qualificaion" required/><br/>
        <label for="year">Minimum Year of Study</label><input type="number" id="year" name="category" placeholder="Year of Study" required/><br/>
        <label for="duration">Duration in Months</label><input type="number" id="duration" name="duration" placeholder="Enter Job duration"/><br/>
        <label for="loc">location</label><input type="text" id="loc" name="location" placeholder="Enter location" required/><br/>
        <label for="req">Requirements</label><input type="text" id="req" name="requirement" placeholder="Enter Job Requirements" required/><br/>
        <label for="desc">Job Description</label><input type="text" id="desc" name="desc"  size="100" placeholder="Enter Job Description" required /><br/>
        <input type="submit" value="Submit"/>

        
    </form>
    </div>
  )
}

export default PostJob