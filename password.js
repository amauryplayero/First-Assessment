const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Welcome, please create a password longer than 10 characters ", function(input){
	input.split(' ');
	if (input.length <= 10) {
        console.log(`You need 10 characters or more.`,)
        
    } else if(input.length >= 10) {
	Password = input.split(' ');
    const str = String.raw`

        _        _                   _             _           _           _        
       / /\     /\_\               /\ \           /\ \        / /\        / /\      
      / /  \   / / /         _    /  \ \         /  \ \      / /  \      / /  \     
     / / /\ \__\ \ \__      /\_\ / /\ \ \       / /\ \ \    / / /\ \__  / / /\ \__  
    / / /\ \___\\ \___\    / / // / /\ \ \     / / /\ \_\  / / /\ \___\/ / /\ \___\ 
    \ \ \ \/___/ \__  /   / / // / /  \ \_\   / /_/_ \/_/  \ \ \ \/___/\ \ \ \/___/ 
     \ \ \       / / /   / / // / /    \/_/  / /____/\      \ \ \       \ \ \       
 _    \ \ \     / / /   / / // / /          / /\____\/  _    \ \ \  _    \ \ \      
/_/\__/ / /    / / /___/ / // / /________  / / /______ /_/\__/ / / /_/\__/ / /      
\ \/___/ /    / / /____\/ // / /_________\/ / /_______\\ \/___/ /  \ \/___/ /       
 \_____\/     \/_________/ \/____________/\/__________/ \_____\/    \_____\/        
                                                                                    
    
    
    `


	console.log(str)
    } else {
        input.split(' ');
    }

	// This line closes the connection to the command line interface.
	reader.close()

});
