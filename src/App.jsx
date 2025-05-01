import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState('');
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => setBots(data))
      .catch(console.error);
  }, []);

  const handleEnlist = (bot) => {
    if (!enlistedBots.some(b => b.id === bot.id) &&
        !enlistedBots.some(b => b.bot_class === bot.bot_class)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const handleRelease = (botId) => {
    setEnlistedBots(enlistedBots.filter(b => b.id !== botId));
  };

  const handleDischarge = async (botId) => {
    try {
      await fetch(`http://localhost:8001/bots/${botId}`, { method: 'DELETE' });
      setBots(bots.filter(b => b.id !== botId));
      setEnlistedBots(enlistedBots.filter(b => b.id !== botId));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
    const sorted = [...bots].sort((a, b) => b[criteria] - a[criteria]);
    setBots(sorted);
  };

  const handleFilter = (className) => {
    const newFilters = filters.includes(className)
      ? filters.filter(f => f !== className)
      : [...filters, className];
    setFilters(newFilters);
  };

  const filteredBots = filters.length > 0
    ? bots.filter(bot => filters.includes(bot.bot_class))
    : bots;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bot Battlr</h1>
        <SortBar
          onSort={handleSort}
          onFilter={handleFilter}
          activeFilters={filters}
        />
      </header>

      <YourBotArmy
        bots={enlistedBots}
        onRelease={handleRelease}
        onDischarge={handleDischarge}
      />

      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onBack={() => setSelectedBot(null)}
          onEnlist={() => {
            handleEnlist(selectedBot);
            setSelectedBot(null);
          }}
        />
      ) : (
        <BotCollection
          bots={filteredBots}
          onSelect={setSelectedBot}
        />
      )}
    </div>
  );
}

export default App;