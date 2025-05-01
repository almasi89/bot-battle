import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, dischargeBot }) {
    return (
        <div>
            <h2>Bot Collection</h2>
            <div>
                {bots.map((bot) => (
                    <BotCard 
                        key={bot.id} 
                        bot={bot}
                        onClick={() => enlistBot(bot)}
                        inArmy={false}
                        dischargeBot={dischargeBot}
                    />
                ))}
            </div>
        </div>
    );
}

export default BotCollection;