# IP-Whitelist-Tracker-

## Technology Stack

### Back-end:
    Java 17
    Spring Boot framework
    REST API
    H2 database for database

### Front-end:
    Node.js
    React

### Version Control:
    Git

## IP Management by Application ID and Server:
        View all IP records in a table with basic information about each IP.
        View detailed information for each IP record.
        Search and sort IP records by various criteria such as Application ID, Server, and modification date.
        Add, edit, and delete IP records.
        Export IP data to an Excel file.

## User Roles and Permissions:
        Users are assigned specific Application IDs they can manage.
        User passwords are stored in text format for this exercise.
## Two user roles:
            Admin: CRUD operations on application_info and user management; read-only access to server info.
            User: CRUD operations on server info for their assigned Application IDs.
