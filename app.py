import os
import pandas
from flask import Flask, jsonify, render_template, request, redirect
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from config import username, password


# Create Engine & Start Session
env_username = os.getenv("DB_USERNAME", username)
env_password = os.getenv("DB_PASSWORD", password)
engine = create_engine(f"postgresql://{env_username}:{env_password}@localhost:5432/student_performances")
Base = automap_base()
Base.prepare(engine, reflect=True)
session = Session(engine)

# Create our flask app
app = Flask(__name__)

# Route Home
@app.route("/")
def home():
    return render_template("index.html")

# Route Data Chart
@app.route("/full")
def full():
    return render_template("full-width.html")

# Route ******Nothing Yet******
@app.route("/font")
def font():
    return render_template("font-icons.html")

# Route Tableau Dashboard
@app.route("/side")
def side():
    return render_template("sidebar-left.html")

# Route Machine Learning Math
@app.route("/math")
def math():
    return render_template("ml_math.html")

# Route Machine Learning Reading
@app.route("/reading")
def reading():
    return render_template("ml_reading.html")

# Route Machine Learning Writing
@app.route("/writing")
def writing():
    return render_template("ml_writing.html")

# Route jsonData
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