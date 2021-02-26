import os
import pandas
from flask import Flask, jsonify, render_template, request, redirect
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from config import username, password

# Create Engine & Start Session
engine = create_engine(f"postgresql://{username}:{password}@localhost:5432/student_performances")
Base = automap_base()
Base.prepare(engine, reflect=True)
session = Session(engine)

# Create our flask app
app = Flask(__name__)

# Route 1
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/full")
def full():
    return render_template("full-width.html")

@app.route("/font")
def font():
    return render_template("font-icons.html")
    
@app.route("/side")
def side():
    return render_template("sidebar-left.html")

# Route 2
@app.route("/jsonData")
def PerformanceData():
    student_scores = engine.execute('''SELECT * FROM student_scores''')
    student_performances = {}
    student_info = []
    student_performances['student_info'] = student_info

    for row in student_scores:
        data = {}
        data['gender'] = row.gender
        data['ethnicity'] = row.ethnicity
        data['parent_education'] = row.parent_edu
        data['lunch'] = row.lunch
        data['test_prep'] = row.test_prep
        data['math_score'] = row.math_score
        data['reading_score'] = row.reading_score
        data['writing_score'] = row.writing_score
        student_info.append(data)

    return jsonify(student_info)

# Close our session
session.close()

# Run app
if __name__ == "__main__":
    app.run()