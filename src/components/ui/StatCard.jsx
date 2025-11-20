const StatCard = ({ title, value }) => {
  return (
    <div className="stat-card">
      <p className="stat-card__title">{title}</p>
      <h3 className="stat-card__value">{value}</h3>
    </div>
  );
};

export default StatCard;
