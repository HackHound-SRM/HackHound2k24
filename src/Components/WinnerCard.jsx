import "./WinnerCard.css";

const WinnerCard = () => {
  return (
    <div className="winners-container">
      <div className="winnercard two">
        <img src="Images/2nd-place.png" width="100px"></img>
        <h2>1st Runner-Up</h2>
        <p>₹15,000</p>
      </div>
      <div className="winnercard one">
        <img src="Images/winner-1.png" width="100px"></img>
        <h2>Winner</h2>
        <p>₹25,000</p>
      </div>
      <div className="winnercard three">
        <img src="Images/3rd-place.png" width="100px"></img>
        <h2>2nd Runner-Up</h2>
        <p>₹10,000</p>
      </div>
    </div>
  );
};

export default WinnerCard;
