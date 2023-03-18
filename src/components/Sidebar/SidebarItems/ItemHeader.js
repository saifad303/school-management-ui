export default function ItemHeader({ title, subtitle }) {
  return (
    <div id="item-header">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
