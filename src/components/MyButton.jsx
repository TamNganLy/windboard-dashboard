export default function MyButton({ OnClick, id, selectedHour }) {
  const hourDiff = 23 - id;
  const btnClass = `btn btn-outline-warning ${selectedHour === hourDiff ? "active" : ""}`;

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
    
      <button className={btnClass} onClick={handleClick}>
        {getButtonLabel(hourDiff)}
      </button>
  );
}
