export default function Jam(props) {
  return (
    <div className="jamNow text-center text-white">
      <h1>
        {props.jam}:{props.menit}.{props.jam > 12 ? "PM" : "AM"}
      </h1>
    </div>
  );
}
