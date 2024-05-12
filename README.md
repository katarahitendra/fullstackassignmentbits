# My Backend App Docker Compose Setup for the Fullstack Assignment 

This Docker Compose setup allows you to easily run your backend code in a Docker containerized environment.

## Prerequisites

Before you begin, ensure you have the following installed:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Usage

1. Clone this repository:

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2. Configure environment variables (if necessary):

    If your backend code requires environment variables, you can set them in a `.env` file in the root directory. For example:

    ```dotenv
    # Example .env file
    PORT=3000
    ```

3. Build and run the Docker containers:

    ```bash
    docker-compose up --build
    ```

    This command will build the Docker images and start the containers. You should see logs indicating that your backend server is running.

4. Access your backend API:

    Once the containers are running, your backend API should be accessible at the specified port (e.g., http://localhost:3000).

5. To stop the containers, press `Ctrl + C` in the terminal where Docker Compose is running, or run:

    ```bash
    docker-compose down
    ```
6. Import the Collection: 
   - Download the "HealthTrackerAssignment.postman_collection.json" file.
   - Open Postman.
   - Click on "Import" > "Import File".
   - Select the downloaded JSON file.
   
## Customization

- **Environment Variables**: Adjust the environment variables in the `.env` file to match your backend's configuration.
- **Dockerfile**: If your backend code requires specific dependencies or configurations, modify the `Dockerfile` accordingly.
- **docker-compose.yml**: Customize the Docker Compose configuration as needed, such as changing port mappings or adding additional services.

## Troubleshooting

- If you encounter any issues, refer to the Docker documentation or the documentation of the specific services used in your Docker Compose setup.
- Check the logs of the Docker containers for error messages that may indicate the cause of the problem.

