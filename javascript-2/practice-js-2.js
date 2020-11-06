/*
    For this section of the assessment you will be putting together a cheat sheet for 
    common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "Git is installed on one's local computer system and will help one keep track of changes that have made to your programs/code."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "GitHub is the cloud-based storage system that will store all repositories created by Git on the local computer. It can serve as a backup if a computer crashes or if you want to view a previous version of a code. It will also allow you to view other people's code that has been pushed there (if it's public)."

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects 
    containing information about different git commands.  
    Each object should contain 'description' and 'code' properties.  
    The 'description' property 
    will be a string with a description of what that git command does.  
    The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

let init = {
    description: "tell Git to start watching all of the files in the directory where you run init",
    code: "git init"
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

let clone = {
    description: "once you've forked a repository, clone downloads a copy of that GitHub repository to your local system",
    code: "git clone *paste URL*"
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

let status = {
    description: "Displays which items in your current directory (working tree) have been modified since it was last tracked by Git",
    code: "git status"
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

let add = {
    description: "Add's a working tree to the staging area. It's the first step in pushing your code to GitHub.",
    code: "git add ."
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commit = {
    description: "Takes the code from the staging area and gets it ready to be pushed to GitHub. It's the second step (of 3) of pushing code to GitHub.",
    code: "git commit -m 'message to accompany the commit'"
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE

let addRemote = {
    description: "Creates a reference to a repository in GitHub (I'm still fuzzy on this one)",
    code: "git remote add origin *URL*"
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let push = {
    description: "The last step in uploading (pushing) your code to GitHub. Uploads it the repository as a replacement for the files/folders that were modified, while still keeping a copy of the old ones.",
    code: "git push"
}
