const mongooseClient = require("mongoose");

mongooseClient.connect("mongodb+srv://babyyoda:Danav1ck1*@cluster0.wxr4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology:true},(err)=> {
  if(err)   console.log(err);
});

const NotesSchema = mongooseClient.Schema({
    title : String,
     description : String,
        
})

const Notes = mongooseClient.model("Notes", NotesSchema);

module.exports =Notes;