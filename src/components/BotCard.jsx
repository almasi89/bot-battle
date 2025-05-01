import "../App.css"

function BotCard({ bot, onClick, dischargeBot, inArmy }) {
    const { name, health, damage, armor, bot_class, avatar_url } = bot
    
    return (
        <div className="bot-card">
            <img 
                src={avatar_url} 
                alt={name}
                className="bot-avatar"
            />
            <h2>Name: {name}</h2>
            <p>Health: {health}</p>
            <p>Damage: {damage}</p>
            <p>Armor: {armor}</p>
            <p>Class: {bot_class}</p>
            
            {inArmy ? 
                <button onClick={onClick} className="release-btn">
                    Release
                </button>
                :
                <button onClick={onClick} className="enlist-btn">
                    Enlist
                </button>
            }

            <button
                onClick={() => dischargeBot(bot.id)}
                title="Discharge"
                className="discharge-btn"
            >
                X
            </button>
        </div>
    )
}

export default BotCard