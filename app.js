 const notes=require('./notes')
 const chalk=require('chalk')
 const yargs=require('yargs')
 




// create add command line

yargs.command({
    command:'add',
    describe:'Add new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'



        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'

        }

    },
    handler(argv){
        notes.addNote(argv.title,argv.body)

        
    }

})

//  create remove command

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        }

    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// create read command

yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }

    },
    handler(argv){
        notes.readNote(argv.title)
        
    }
})


// crete list command

yargs.command({
    command:'list',
    describe:'List your notes',
    handler(){
        notes.listNotes()
    }
})



yargs.parse()






