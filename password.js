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
    const str = ``
	console.log(`  
    
    _____                    _____                    _____                    _____                    _____                    _____                    _____                            _____                    _____                   _______         
    /\    \                  /\    \                  /\    \                  /\    \                  /\    \                  /\    \                  /\    \                          /\    \                  /\    \                 /::\    \        
   /::\    \                /::\____\                /::\    \                /::\    \                /::\    \                /::\    \                /::\    \                        /::\    \                /::\    \               /::::\    \       
  /::::\    \              /:::/    /               /::::\    \              /::::\    \              /::::\    \              /::::\    \              /::::\    \                      /::::\    \              /::::\    \             /::::::\    \      
 /::::::\    \            /:::/    /               /::::::\    \            /::::::\    \            /::::::\    \            /::::::\    \            /::::::\    \                    /::::::\    \            /::::::\    \           /::::::::\    \     
/:::/\:::\    \          /:::/    /               /:::/\:::\    \          /:::/\:::\    \          /:::/\:::\    \          /:::/\:::\    \          /:::/\:::\    \                  /:::/\:::\    \          /:::/\:::\    \         /:::/~~\:::\    \    
/:::/__\:::\    \        /:::/    /               /:::/  \:::\    \        /:::/  \:::\    \        /:::/__\:::\    \        /:::/__\:::\    \        /:::/__\:::\    \                /:::/__\:::\    \        /:::/__\:::\    \       /:::/    \:::\    \   
\:::\   \:::\    \      /:::/    /               /:::/    \:::\    \      /:::/    \:::\    \      /::::\   \:::\    \       \:::\   \:::\    \       \:::\   \:::\    \              /::::\   \:::\    \      /::::\   \:::\    \     /:::/    / \:::\    \  
___\:::\   \:::\    \    /:::/    /      _____    /:::/    / \:::\    \    /:::/    / \:::\    \    /::::::\   \:::\    \    ___\:::\   \:::\    \    ___\:::\   \:::\    \            /::::::\   \:::\    \    /::::::\   \:::\    \   /:::/____/   \:::\____\ 
/\   \:::\   \:::\    \  /:::/____/      /\    \  /:::/    /   \:::\    \  /:::/    /   \:::\    \  /:::/\:::\   \:::\    \  /\   \:::\   \:::\    \  /\   \:::\   \:::\    \          /:::/\:::\   \:::\ ___\  /:::/\:::\   \:::\____\ |:::|    |     |:::|    |
/::\   \:::\   \:::\____\|:::|    /      /::\____\/:::/____/     \:::\____\/:::/____/     \:::\____\/:::/__\:::\   \:::\____\/::\   \:::\   \:::\____\/::\   \:::\   \:::\____\        /:::/__\:::\   \:::|    |/:::/  \:::\   \:::|    ||:::|____|     |:::|    |
\:::\   \:::\   \::/    /|:::|____\     /:::/    /\:::\    \      \::/    /\:::\    \      \::/    /\:::\   \:::\   \::/    /\:::\   \:::\   \::/    /\:::\   \:::\   \::/    /        \:::\   \:::\  /:::|____|\::/   |::::\  /:::|____| \:::\    \   /:::/    / 
\:::\   \:::\   \/____/  \:::\    \   /:::/    /  \:::\    \      \/____/  \:::\    \      \/____/  \:::\   \:::\   \/____/  \:::\   \:::\   \/____/  \:::\   \:::\   \/____/          \:::\   \:::\/:::/    /  \/____|:::::\/:::/    /   \:::\    \ /:::/    /  
\:::\   \:::\    \       \:::\    \ /:::/    /    \:::\    \               \:::\    \               \:::\   \:::\    \       \:::\   \:::\    \       \:::\   \:::\    \               \:::\   \::::::/    /         |:::::::::/    /     \:::\    /:::/    /   
\:::\   \:::\____\       \:::\    /:::/    /      \:::\    \               \:::\    \               \:::\   \:::\____\       \:::\   \:::\____\       \:::\   \:::\____\               \:::\   \::::/    /          |::|\::::/    /       \:::\__/:::/    /    
\:::\  /:::/    /        \:::\__/:::/    /        \:::\    \               \:::\    \               \:::\   \::/    /        \:::\  /:::/    /        \:::\  /:::/    /                \:::\  /:::/    /           |::| \::/____/         \::::::::/    /     
\:::\/:::/    /          \::::::::/    /          \:::\    \               \:::\    \               \:::\   \/____/          \:::\/:::/    /          \:::\/:::/    /                  \:::\/:::/    /            |::|  ~|                \::::::/    /      
 \::::::/    /            \::::::/    /            \:::\    \               \:::\    \               \:::\    \               \::::::/    /            \::::::/    /                    \::::::/    /             |::|   |                 \::::/    /       
  \::::/    /              \::::/    /              \:::\____\               \:::\____\               \:::\____\               \::::/    /              \::::/    /                      \::::/    /              \::|   |                  \::/____/        
   \::/    /                \::/____/                \::/    /                \::/    /                \::/    /                \::/    /                \::/    /                        \::/____/                \:|   |                   ~~              
    \/____/                  ~~                       \/____/                  \/____/                  \/____/                  \/____/                  \/____/                          ~~                       \|___|                                   
                                                                                                                                                                                                                                                             
    
    
    
    
    
    `)
    } else {
        input.split(' ');
    }

	// This line closes the connection to the command line interface.
	reader.close()

});