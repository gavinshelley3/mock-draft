import { useState } from "react";
import { useDrop, useDrag, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ItemTypes } from "./Constants";

const tiers = ["S", "A", "B", "C", "D", "F"];

const DragAndDropPage = () => {
  const [cards, setCards] = useState([
    { id: 1, name: "Card 1", tier: null },
    { id: 2, name: "Card 2", tier: null },
    { id: 3, name: "Card 3", tier: null },
    { id: 4, name: "Card 4", tier: null },
    { id: 5, name: "Card 5", tier: null },
    { id: 6, name: "Card 6", tier: null },
  ]);

  const moveCard = (id, newTier) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, tier: newTier };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const Card = ({ id, name, tier }) => {
    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.CARD, // Add the type property
      item: { id, type: "CARD" }, // Define the type property
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: "CARD",
      type: "CARD", // Add the type property
      drop: () => moveCard(id, tier),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    });

    return (
      <div
        ref={drag}
        className="card"
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <div>{name}</div>
        {tier && <div>Tier: {tier}</div>}
        <div ref={drop} className="dropzone">
          {tier ? "Move here to change tier" : "Move here to assign tier"}
        </div>
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container">
        <h1>Drag and Drop Cards</h1>
        <div className="cards">
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              tier={card.tier}
            />
          ))}
        </div>
        <div className="tiers">
          {tiers.map((tier) => (
            <div key={tier} className="dropzone">
              {tier}
            </div>
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default DragAndDropPage;
