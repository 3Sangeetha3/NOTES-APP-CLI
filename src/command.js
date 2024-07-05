import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { findNotes, getAllNotes, newNote, removeAllNotes, removeNote } from "/Users/sangeethajadamal/Documents/MERN/NOTES-APP-CLI/src/notes.js";
import { listNotes } from "/Users/sangeethajadamal/Documents/MERN/NOTES-APP-CLI/src/utils.js";


// const DB_PATH = new url('../db.json', import.meta.url).pathname;

// const insertDB = async(note) => {
//   const db = JSON.parse(await fs.readFile(DB_PATH, 'utf-8'));
//   console.log("db", db)
//   db.notes.push(note);
//   await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
// }

// const newNote = async (note, tags) => {
//   const newNote = {
//     tags, 
//     id: Date.now(),
//     content: note,
//   }
//   //insert to the db
//   await insertDB(newNote);
//   return newNote;
// }


yargs(hideBin(process.argv))
  .command(
    "new <note>",
    "Create a new note",

    (yargs) => {
      return yargs.positional("note", {
        type: "string",
        description: "The content of the note to create",
      });
    },

    async (argv) => {
      // console.log(argv);
      const tags = argv.tags ? argv.tags.split(",") : [];
      const note = await newNote(argv.note, tags);
      console.log("new note created: ", note);
    }
  )

  .option("tags", {
    alias: "t",
    type: "string",
    description: "tags to add to the note",
  })

  .command(
    "all",
    "get all notes",
    () => {},
    async (argv) => {
      // console.log(argv);
      const notes = await getAllNotes();
      listNotes(notes);
    }
  )

  .command(
    "find <filter>",
    "get matching notes",
    (yargs) => {
      return yargs.positional("filter", {
        type: "string",
        description: "the search keyword to filter the notes",
      });
    },

    async (argv) => {
      // console.log(argv);
      const notes = await findNotes(argv.filter);
      listNotes(notes);
    }
  )

  .command(
    "remove <id>",
    "remove a note by id",
    (yargs) => {
      return yargs.positional("id", {
        type: "number",
        description: "The id of the note u want to remove",
      });
    },

    async (argv) => {
      // console.log(argv);
      const id = await removeNote(argv.id);
      if(id) {
        console.log('Note removed: ', id)
      }else{
        console.log("Note not found")
      }
    }
  )

  .command(
    "web  [port]", "launch website to see notes",
    (yargs) => {
      return yargs.positional("port", {
        type: "number",
        description: "port to bind on",
        default: 5000,
      });
    },

    (argv) => {
      console.log(argv);
    }
  )

  .command(
    "clean", "remove all notes", () => {},
    async (argv) => {
      // console.log(argv);
      await removeAllNotes();
      console.log("All notes removed");
    }
  )

  .demandCommand(1)
  .parse();
