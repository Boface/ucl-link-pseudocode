# UCL Link Microservices Architecture

This repository is a part of the supplemental material for the Software Engineering group report, detailing the microservices architecture for the UCL Link application.

## Project Structure

The project is organized into microservices, each represented by a separate folder within the `./src` directory. These microservices contain pseudocode to illustrate the key interactions with the database, the initiation of Kafka messaging, and the usage of TypeORM for handling SQL queries.

### `./src`

- `/AuthenticationService` - Handles user authentication and authorization.
- `/UserService` - Manages user profiles and interactions.
- `/EventService` - Coordinates event-related data and operations.
- `/ChatService` - Facilitates real-time messaging between users.
- `/FeedbackService` - Collects and processes user feedback.
- `/NotificationService` - Manages the dispatch of notifications.
- `/MatchingService` - Implements the logic for matching users.
- `/GroupService` - Manages group data and interactions.

### `./common`

- `/interfaces.ts` - Defines the main TypeScript interfaces used across the microservices.

## Pseudocode

The pseudocode included in each microservice is intended to demonstrate the intended functionality and flow of operations. This code serves as an outline for development and is not meant to be executed.

## Interfaces

The TypeScript interfaces that serve as the primary data structures and contracts for the microservices are located in `./common/interfaces.ts`. They provide a clear specification of the objects used within the system.

## Setup

Since the project contains pseudocode and is not intended to be run, there are no setup or installation steps. The
