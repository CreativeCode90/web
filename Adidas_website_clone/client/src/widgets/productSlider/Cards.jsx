import './Cards.css'
const Cards = () => {
  const cards = [
    { id: 1, name: "Card 1" },
    { id: 2, name: "Card 2" },
    { id: 3, name: "Card 3" },
    { id: 4, name: "Card 4" },
    { id: 5, name: "Card 5" },
    { id: 6, name: "Card 6" },
  ];

  return (
    <div className="card-container">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          {card.name}
        </div>
      ))}
    </div>
  );
};

export default Cards;
