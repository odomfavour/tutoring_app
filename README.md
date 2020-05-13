# tutoring_app

## Link to heroku deployed app
## https://startng-tutoring-app.herokuapp.com/


# Admin
### email : ogochukwu@gmail.com
### password: chijioke

# Signup
## http://localhost:5000/api/v1/signup
### curl --location --request POST '{{url}}/api/v1/signup' \
### --header 'Content-Type: application/json' \
### data-raw '{
###	"name": "ogochukwu",
###	"email": "ogo@gmail.com",
###	"role": "student",
###	"password": "chijioke",
### }'


# Login
## http://localhost:5000/api/v1/signup
### curl --location --request POST '{{url}}/api/v1/login' \
### --header 'Content-Type: application/json' \
### --data-raw '{
###	"email": "ulddsss@gmail.com",
###	"password": "chijioke",
### }'


#  create Categories
## http://localhost:5000/api/v1/categories
### curl --location --request POST '{{url}}/api/v1/categories' \
### --header 'Content-Type: application/json' \
### --data-raw '{
###	"name": "Senior secondary Section",
###	"description": "Senior class",
	
### }'


# Get categories
## http://localhost:5000/api/v1/auth/signup
### curl --location --request GET '{{url}}/api/v1/categories' \
### --header 'Content-Type: application/json' \
### --data-raw '{
	
### }'


# Get Category by Id
## http://localhost:5000/api/v1/categories/:id
### curl --location --request GET '{{url}}/api/v1/categories/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
	
### }'


# ADMIN CAN Update a Category by Id
## http://localhost:5000/api/v1/categories/:id
### curl --location --request PATCH '{{url}}/api/v1/categories/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
###	"name": "Primary Section",
### }'



# Delete Category by Id
## http://localhost:5000/api/v1/categories/:id
### curl --location --request DELETE '{{url}}/api/v1/categories/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
	
### }'


# Admin can Create subject under a category
## http://localhost:5000/api/v1/subjects/:id
### curl --location --request POST '{{url}}/api/v1/subjects/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
###	"name": "Maths",
###     "description": "A mathemaatics subject for primary"
### }'

# Get all Subjects
## http://localhost:5000/api/v1/subjects
### curl --location --request Get '{{url}}/api/v1/subjects' \
### --header 'Content-Type: application/json' \
### --data-raw '{
	
### }'

# Get a Subject by id
## http://localhost:5000/api/v1/subjects/:id
### curl --location --request GET '{{url}}/api/v1/subjects/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
	
### }'

# Admin can update subject by Id in a category
## http://localhost:5000/api/v1/subjects/:id
### curl --location --request PATCH '{{url}}/api/v1/subjects/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
###    "name": "Computer Science"
### }'


# Admin can Delete subject by Id in a category
## http://localhost:5000/api/v1/subjects/:id
### curl --location --request DELETE '{{url}}/api/v1/subjects/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
	
### }'

# Admin can get all tutors
## http://localhost:5000/api/v1/book_lesson/tutors
### curl --location --request GET '{{url}}/api/v1/book_lesson/tutors' \
### --header 'Content-Type: application/json' \
### --data-raw '{
	
### }'

# Admin can get a tutor by id
## http://localhost:5000/api/v1/book_lesson/tutors/:id
### curl --location --request GET '{{url}}/api/v1/book_lesson/tutors/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
	
### }'


# Admin can deactivate a tutor by id
## http://localhost:5000/api/v1/book_lesson/tutors/:id
### curl --location --request PATCH '{{url}}/api/v1/book_lesson/tutors/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
###	"role": "student"
### }'


# Admin can delete a tutor by id
## http://localhost:5000/api/v1/book_lesson/tutors/:id
### curl --location --request PATCH '{{url}}/api/v1/book_lesson/tutors/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
###	
### }'



# Admin can book lessons
## http://localhost:5000/api/v1/book_lesson/:userId
### curl --location --request POST '{{url}}/api/v1/book_lesson/:userid' \
### --header 'Content-Type: application/json' \
### --data-raw '{
###	subject, 
###        tutor_name, 
###       tutor_email, 
###       student_name, 
 ###       student_email, 
 ###       category
### }'

http://localhost:5000/api/v1/book_lesson/lessons

# Admin can get all lessons
## http://localhost:5000/api/v1/book_lesson/lessons
### curl --location --request GET '{{url}}/api/v1/book_lesson/lessons' \
### --header 'Content-Type: application/json' \
### --data-raw '{
###	
### }'
# Admin can get a lesson
## http://localhost:5000/api/v1/book_lesson/lessons/:id
### curl --location --request GET '{{url}}/api/v1/book_lesson/lessons/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
###	
### }'
# Admin can delete all lessons
## http://localhost:5000/api/v1/book_lesson/lessons/:id
### curl --location --request DELETE '{{url}}/api/v1/book_lesson/lessons/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
###	
### }'

## Tutor
#### Register for a lesson
## http://localhost:5000/api/v1/subjects/:subjectId/register
### curl --location --request POST '{{url}}/api/v1/book_lessons/:subjectId/register' \
### --header 'Content-Type: application/json' \
### --data-raw '{
###    name,
###    email,
###    role,
###    subject
### }'

# Tutor can see all the subjects he registered for
## http://localhost:5000/api/v1/subjects/tutorsubject/userId
### curl --location --request GET '{{url}}/api/v1/tutors/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
	
### }'



## http://localhost:5000/api/v1/categories