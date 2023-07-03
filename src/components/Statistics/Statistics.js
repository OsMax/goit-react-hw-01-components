import css from './statistics.module.css';
// import Prop from 'prop-types';

function getRandomHexColor() {
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
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage + '%'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
