This project is created based upon a subject that everyone can relate to, standardized testing.  We discovered a dataset of 1,000 students containing each of their scores in the subjects of math, reading, and writing, as well as some basic features describing each student, such as gender, ethnicity, and more.  Using this data, we wanted to test and see if the features describing each student could be used to predict success or failure for students within similar groupings and matching features.

Steps:
- Using Pandas & SQLAlchemy within Jupyter Notebook, we successfully cleaned our dataset and imported the data into our Postgres database.
- We created a dashboard via HTML, CSS, & Javascript
- In Tableau, we visualized a breakdown of the different attributes given for each student to show if there was any trends we could discover.
- Once the dashboard was set up, we used sklearn within Jupyter Notebook to create both a Linear Regression and Random Forest Classification model to train & test our data to see if we can use this information to predict test scores in the future.
- Deployment to Heroku

Within the data, we visualized and discovered the following findings:
- The higher a student’s parental education was, the higher test score the student achieved across most subjects.
- While we do not know which groups represent which ethnicity/race, groups D & E both scored the highest on each subject test scores.
- Males averaged a higher test score than females across all three subjects, including an almost 15 point gap in math.
- As expected, students that completed a test preparation class averaged around 10 points or better on all three of their test score than students who did not.

Our Linear Regression model results were as followed:
- Math: R2 score of 0.242
- Writing: R2 score of 0.200
- Reading: R2 score of 0.115
- To summarize, the after training and testing our model, we discovered that the variables given for our students had very little importance when determining their test scores.

Our Random Forest Classification model results showed that while different features had various importances across our 3 subjects, none of which had enough significant importance to really use to predict future scores.

See belw for examples of our Math models:

![math_plot](https://user-images.githubusercontent.com/23372412/111883368-36590900-8991-11eb-8138-b220672c14a7.png)
![math_importance](https://user-images.githubusercontent.com/23372412/111883371-3a852680-8991-11eb-9acd-c89cda1f4887.png)

Deployment of our application can be found here via Heroku: https://final-project-student-exams.herokuapp.com/
