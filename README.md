# tutoring_app


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


# Update Category by Id
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


# Create subject
## http://localhost:5000/api/v1/subjects
### curl --location --request POST '{{url}}/api/v1/subjects' \
### --header 'Content-Type: application/json' \
### --data-raw '{
###	"name": "Maths",
###  "description": "A mathemaatics subject for primary"
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

# update subject by Id
## http://localhost:5000/api/v1/subjects/:id
### curl --location --request Delete '{{url}}/api/v1/subjects/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
###    "name": "Computer Science"
### }'


# Delete subject by Id
## http://localhost:5000/api/v1/subjects/:id
### curl --location --request Delete '{{url}}/api/v1/subjects/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
	
### }'


## Tutor
#### Register for a lesson
## http://localhost:5000/api/v1/tutors/register
### curl --location --request Delete '{{url}}/api/v1/tutors/register' \
### --header 'Content-Type: application/json' \
### --data-raw '{
###    firstName,
###    lastName,
###    email,
###    lesson
### }'

# Get all tutors
## http://localhost:5000/api/v1/tutors/:id
### curl --location --request GET '{{url}}/api/v1/tutors/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
	
### }'

# Get a tutor
## http://localhost:5000/api/v1/tutors/:id
### curl --location --request GET '{{url}}/api/v1/tutors/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
	
### }'


# Delete Tutor by Id
## http://localhost:5000/api/v1/tutors/:id
### curl --location --request Delete '{{url}}/api/v1/tutors/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
	
### }'

# Update Tutor by Id
## http://localhost:5000/api/v1/tutors/:id
### curl --location --request PATCH '{{url}}/api/v1/tutors/:id' \
### --header 'Content-Type: application/json' \
### --data-raw '{
        firstName: Obi
### }'


## http://localhost:5000/api/v1/categories