const fs=require('fs')
const chalk=require('chalk')

const addNote=(title,body)=>{


    const notes=loadNotes()
    const duplicates=notes.filter((note)=>note.title===title)
    

    if(duplicates.length===0){
        notes.push({
            title:title,
            body:body
        })
        
    
        saveNotes(notes)

    }else{
        console.log(chalk.red.inverse("This note is already exists"))
    }


}

const removeNote=(title)=>{
    const notes=loadNotes()
    const notesAfterRemove=notes.filter((note)=>note.title!==title)

    if(notes.length!==notesAfterRemove.length){
        saveNotes(notesAfterRemove)
    }else{
        console.log(chalk.red.inverse("No note found!"))
    }
}

const listNotes=()=>{
    const notes=loadNotes()
    if(notes.length===0){
        console.log(chalk.red.inverse('There are no notes'))
    }else{
        let i=0
        notes.forEach((note)=>{
            i++
            console.log(chalk.green(`${i}- ${note.title}`))

        })

    }
}

const readNote=(title)=>{
    const notes=loadNotes()
    let ISfound=false
    
    notes.forEach((note)=>{
        if(note.title===title){
            console.log(`title: ${note.title}\n body: ${note.body}`)
            ISfound=true

        }
    })
    if(!ISfound){
        console.log(chalk.red.inverse(" Note not foound!"))

    }
     
}

const saveNotes=(notes)=>{
    const datajson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',datajson)
}

const loadNotes=()=>{
    try{
        const databuffer=fs.readFileSync('notes.json')
        const datajson=databuffer.toString()
        return JSON.parse(datajson)

    }catch(e){
        return []
    }
}

module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}