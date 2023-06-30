import './css/statistics.css';
import Prop from 'prop-types';

function getRandomHexColor() {
  //   return `#${Math.floor(Math.random() * 16777215)
  //     .toString(16)
  //     .padStart(6, 0)}`;
  const color = Math.floor(Math.random() * (200 - 150) + 150)
    .toString(16)
    .padStart(2, 0);
  return (
    '#' +
    Math.floor(Math.random() * (250 - 150) + 150)
      .toString(16)
      .padStart(2, 0) +
    '' +
    Math.floor(Math.random() * (250 - 150) + 150)
      .toString(16)
      .padStart(2, 0) +
    '' +
    Math.floor(Math.random() * (250 - 150) + 150)
      .toString(16)
      .padStart(2, 0)
  );
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <li
            key={stat.id}
            className="item"
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage + '%'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
