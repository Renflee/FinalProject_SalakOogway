export default function Wallet(props) {
  return (
    <div className="wallet rounded m-auto mt-3 bg-light">
      <h5 className="text-center">Wallet</h5>
      <h5 className="text-center">${props.uang}</h5>
    </div>
  );
}
