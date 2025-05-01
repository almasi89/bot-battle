import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ bots, onRelease, onDischarge }) => {
  return (
    <div className="your-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {bots.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            actionText="Release"
            onActionClick={() => onRelease(bot.id)}
            onDischargeClick={() => onDischarge(bot.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;