# Project Title: Veterinary Franchise Microservice POC

# Description:
A client has hired Compass to build a new microservice for their veterinary franchise. This microservice will be used by all the clinics they own for internal client and attendance management. The goal of this project is to build the proof of concept (POC) foundations for the veterinary franchise microservice. The POC will provide the sales and management team with a primary technical view of the client's needs and the capabilities of the microservice.

# Installation:
. Clone the repository:

   [git clone https://github.com/And3rs0nMenezes/Challenge001]

. Access the project directory:

   [cd /callenge001]

. Install project dependencies:

   [npm install] or [npm i]

. Start the microservice:
   [npm run dev]

# routs:
• [GET] /tutors -> Retrieves all tutors. Authentication required.
• [POST] /auth -> Authenticate the given user.
• [POST] /tutor -> Create a new tutor.
• [PUT] /tutor/:id -> Updates a tutor. Authentication required.
• [DELETE] /tutor/:id -> Deletes a tutor. Authentication required.
• [POST] /pet/:tutorId-> Creates a pet and adds it to a tutor. Authentication required.
• [PUT]/pet /:petId/tutor/:tutorId -> updates a pet's info. Authentication required.
• [DELETE] /pet/:petId/tutor/:tutorId -> deletes a pet from a tutor. Authentication required.

# Usage:
. Make sure the microservice is running.
. Access the microservice through the provided API endpoints.
. Refer to the API documentation for instructions on how to perform client and attendance management operations.

# creator
-[@AndersonMenezes](https://www.github.com/And3rs0nMenezes)

