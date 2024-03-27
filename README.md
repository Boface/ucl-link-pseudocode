# UCL Link Microservices Architecture

This repository supplements the Software Engineering group report, presenting the microservices architecture for the UCL Link application.

## Project Structure

The project simulates the structure of microservices, each represented by pseudocode within the `./src` directory. Each service includes mock interactions with the database, Kafka event streams, and SQL queries via TypeORM.

### `./src`

- `/AuthenticationService` - Handles user authentication and authorization logic.
- `/UserService` - Manages user profiles and interactions functionality.
- `/EventService` - Coordinates event-related data and operations flow.
- `/ChatService` - Facilitates real-time messaging between users.
- `/FeedbackService` - Processes and stores user feedback.
- `/NotificationService` - Manages notification dispatch mechanisms.
- `/MatchingService` - Contains the matching algorithm and related operations.
- `/GroupService` - Handles group-related functionalities and data management.

### `./common`

- `/interfaces.ts` - Central TypeScript interfaces used throughout the microservices.

### `./kafka`

- `/kafkaConsumer.ts` - Pseudocode for Kafka consumer setup and message handling.
- `/kafkaProducer.ts` - Pseudocode for Kafka producer setup and event emitting.

### `./database`

- `/connection.ts` - Pseudocode representing the database connection setup.
- `/entities/user.entity.ts` - Pseudocode using TypeORM to define the user entity for PostgreSQL.

## Pseudocode

Each microservice folder contains pseudocode that outlines its proposed functionality. This code illustrates the system's conceptual structure and is not executable.

## Interfaces

The TypeScript interfaces located in `./common/interfaces.ts` define the core data structures and interfaces for inter-service communication.

## Setup

The content of this project is for conceptual review and understanding and is not designed to run as a working application. However, you can see some of the dependencies installed in `/package.json`.


---
**Note:** This README is purely for documentation purposes and represents a non-functional architecture mock-up.
