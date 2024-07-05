# NOTES-APP-CLI
A simple notes app built with Node.js and Yargs, featuring CRUD operations and a web interface to display notes.

- This JavaScript module provides functionality for a note-taking application, including creating, retrieving, searching for, and deleting notes. It interacts with a database asynchronously to perform operations like inserting new notes, fetching all notes, filtering notes based on a search query, and removing specific or all notes though CLI.


## Features

- **Create Notes**: Easily add new notes with a title and body through the CLI.
- **Retrieve Notes**: Fetch all your notes or search for specific ones using keywords.
- **Update Notes**: Modify the contents of your existing notes.
- **Delete Notes**: Remove notes you no longer need, either one by one or all at once.
- **Web Interface**: View and manage your notes through a user-friendly web interface.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository: 

   ```bash
   git clone https://github.com/yourusername/NOTES-APP-CLI.git
   ```

2. Navigate to the project directory: 
   
   ```bash
   cd NOTES-APP-CLI
   ```

3. Install dependencies with npm or yarn:

    ```bash
    npm install
    ```

4. Adding Yargs:
   
   ```bash
    npm install yargs --save
    ```

### Usage
    
    To use the application, simply run the following command in your terminal:
    
- **Create a new note**
  ```bash
  note new <note>
  ```
- **Get all notes**
  ```bash
  note all
  ```
- **Get matching notes** 
  ```bash
  note find <filter>
  ```
- **Remove a note by id**
  ```bash
  note remove <id>
  ```
- **Launch website to see notes**
  ```bash
  note web [port]
  ```
- **Remove all notes**
  ```bash
  note clean
  ```
### Troubleshooting

- **Command Not Found**: If you encounter a `command not found` error when trying to run the `note` commands, ensure that you have properly installed the application and that your PATH environment variable includes the directory where the `note` command is located.


### Feedback and Contributions

  We welcome feedback and contributions to this project. If you have suggestions for improvements or encounter any issues, please open an issue on the project's GitHub repository. Contributions can be made in the form of pull requests.

### Acknowledgements

- Node.js Community: For providing an excellent platform for building command-line applications.
- Contributors: A big thank you to everyone who has contributed to making this project better.