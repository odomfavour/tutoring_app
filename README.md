# tutoring_app

#### Signup
## http://localhost:5000/api/v1/auth/signup
### curl --location --request POST '{{url}}/api/v1/auth/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
	"name": "ogochukwu",
	"email": "ogo@gmail.com",
	"role": "user",
	"password": "#R78sh45@f",
}'
#### Login
## http://localhost:5000/api/v1/signup
### curl --location --request POST '{{url}}/api/v1/login' \
--header 'Content-Type: application/json' \
--data-raw '{
	"email": "ulddsss@gmail.com",
	"password": "#R78sh45@f.com",
}'
####  create Categories
## http://localhost:5000/api/v1/categories
### curl --location --request POST '{{url}}/api/v1/categories' \
--header 'Content-Type: application/json' \
--data-raw '{
	"name": "Senior secondary Section",
	"description": "Senior class",
	
}'
#### Get categories
## http://localhost:5000/api/v1/auth/signup
### curl --location --request GET '{{url}}/api/v1/categories' \
--header 'Content-Type: application/json' \
--data-raw '{
	
}'
#### Get Category by Id
## http://localhost:5000/api/v1/categories/:id
### curl --location --request GET '{{url}}/api/v1/categories/:id' \
--header 'Content-Type: application/json' \
--data-raw '{
	
}'
#### Update Category by Id
## http://localhost:5000/api/v1/categories/:id
### curl --location --request PATCH '{{url}}/api/v1/categories/:id' \
--header 'Content-Type: application/json' \
--data-raw '{
	"name": "Primary Section",
}'
#### Delete Category by Id
## http://localhost:5000/api/v1/categories/:id
### curl --location --request Delete '{{url}}/api/v1/categories/:id' \
--header 'Content-Type: application/json' \
--data-raw '{
	
}'
#### Create subject
## http://localhost:5000/api/v1/subjects
### curl --location --request POST '{{url}}/api/v1/subjects' \
--header 'Content-Type: application/json' \
--data-raw '{
	"name": "Maths",
    "description": "whats new"
}'
#### Get all Subjects
## http://localhost:5000/api/v1/Subjects
### curl --location --request Get '{{url}}/api/v1/subjects' \
--header 'Content-Type: application/json' \
--data-raw '{
	
}'
#### Get Subject
## http://localhost:5000/api/v1/Subjects/:id
### curl --location --request GET '{{url}}/api/v1/subjects/:id' \
--header 'Content-Type: application/json' \
--data-raw '{
	
}'

#### Delete subject by Id
## http://localhost:5000/api/v1/categories/:id
### curl --location --request Delete '{{url}}/api/v1/subjects/:id' \
--header 'Content-Type: application/json' \
--data-raw '{
	
}'


## http://localhost:5000/api/v1/categories