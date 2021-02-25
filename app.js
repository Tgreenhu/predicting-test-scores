// NEED TO HAVE THE APP.PY RETURN DATA IS JSON FORMAT
// Once we have this, the "data" part on line 13 needs to be changed to the variable the...
// json data is saved.  Add both app.py then app.js to the index so it knows where to grab the data from

function createChart() {
    // reference table & table's body
    let table = d3.select('table');
    let tbody = d3.select('tbody');
    // add bootstrap styling to our table
    table.attr('class', 'table table-striped');
    // loop thru data, add a td for each column, & add appropriate text
    data.forEach(item => {
        let row = tbody.append('tr');
        let gender = row.append("td");
        let ethnicity = row.append("td");
        let parent_edu = row.append("td");
        let lunch = row.append("td");
        let test_prep = row.append("td");
        let math_score = row.append("td");
        let reading_score = row.append("td");
        let writing_score =   row.append("td");
        gender.text(item.gender);
        ethnicity.text(item.ethnicity);
        parent_edu.text(item.parent_edu);
        lunch.text(item.lunch);
        test_prep.text(item.test_prep);
        math_score.text(item.math_score);
        reading_score.text(item.reading_score);
        writing_score.text(item.writing_score);
    });
};