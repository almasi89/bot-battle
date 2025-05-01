import React from 'react';

const BotCard = ({ bot, actionText, onActionClick, onDischargeClick }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>{bot.catchphrase}</p>
      <button onClick={onActionClick}>{actionText}</button>
      {onDischargeClick && (
        <button className="discharge-btn" onClick={onDischargeClick}>
          X
        </button>
      )}
    </div>
  );
};

export default BotCard;