export default function MyButton({ OnClick, id }) {
  const hourDiff = 23 - id;

  function getButtonLabel(hourDiff) {
    const date = new Date();
    date.setHours(date.getHours() - hourDiff);
    const hours = date.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHour = hours % 12 === 0 ? 12 : hours % 12;
    return `${displayHour} ${ampm}`;
  }

  function handleClick() {
    OnClick(hourDiff);
  }

  return (
    
      <button className="btn btn-outline-warning" onClick={handleClick}>
        {getButtonLabel(hourDiff)}
      </button>
  );
}
