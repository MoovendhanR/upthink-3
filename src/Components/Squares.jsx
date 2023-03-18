
function Square({ value, onSquareClick }) {
    return (
        <>
        <center>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
        </center>
        </>
    );
  }

  export default Square;