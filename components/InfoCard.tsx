"use client"
import styled from 'styled-components';

const InfoCard = ({ title, icon, color = '#53c926', items = [], accentcolor = '#53c926' }:
  { title: string; icon: React.ReactNode; color?: string; items?: { icon?: React.ReactNode; text: string; }[]; accentcolor?: string; }
) => {
  return (
    <StyledWrapper accentcolor={accentcolor}>
      <div className="card">
        <div className="card__shine" />
        <div className="card__glow" />
        <div className="card__header">
          <div className="card__icon" style={{ color }}>{icon}</div>
          <div className="card__title" style={{ color }}>{title}</div>
        </div>
        <ul className="card__list">
          {items.map((item, idx) => (
            <li key={idx} className="card__list-item">
              {item.icon && <span className="card__item-icon" style={{ color: accentcolor }}>{item.icon}</span>}
              <span className="card__item-text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ accentcolor?: string }>`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 0 auto 1.5rem auto;
  .card {
    --card-bg: #111;
    --card-accent: ${({ accentcolor }) => accentcolor || '#53c926'};
    --card-text: #fff;
    --card-shadow: 0 10px 24px -4px ${({ accentcolor }) => accentcolor || '#53c926'}33;
    width: 100%;
    max-width: 420px;
    min-height: 340px;
    height: 100%;
    background: var(--card-bg);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: var(--card-shadow);
    border: 1.5px solid #222;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2em 1.5em 1.5em 1.5em;
    margin: 0 auto;
  }
  .card__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.2em;
    z-index: 2;
  }
  .card__icon {
    font-size: 2.2em;
    margin-bottom: 0.3em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card__title {
    font-size: 1.3em;
    font-weight: 800;
    text-align: center;
    margin-bottom: 0.2em;
    line-height: 1.2;
  }
  .card__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.7em;
    z-index: 2;
    position: relative;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .card__list-item {
    display: flex;
    align-items: flex-start;
    gap: 0.7em;
    background: #fff1;
    border-radius: 10px;
    padding: 0.7em 1em;
    font-weight: 500;
    color: #fff;
    font-size: 1.08em;
    backdrop-filter: blur(2px);
  }
  .card__item-icon {
    font-size: 1.3em;
    flex-shrink: 0;
    margin-top: 0.1em;
  }
  .card__item-text {
    flex: 1;
    text-align: left;
    word-break: break-word;
  }
  .card__shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 40%,
      var(--card-accent, #53c926) 50%,
      rgba(255, 255, 255, 0) 90%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
    pointer-events: none;
  }
  .card__glow {
    position: absolute;
    inset: -10px;
    background: radial-gradient(
      circle at 50% 0%,
      var(--card-accent, #53c926)77 0%,
      rgba(46, 125, 50, 0) 100%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 1;
    pointer-events: none;
  }
  .card:hover {
    transform: translateY(-10px) scale(1.025);
    box-shadow: 0 24px 48px -8px var(--card-accent, #53c92644), 0 8px 16px -8px rgba(0,0,0,0.08);
    border-color: var(--card-accent, #53c92644);
  }
  .card:hover .card__shine {
    opacity: 0.4;
    animation: shine 3s infinite;
  }
  .card:hover .card__glow {
    opacity: 0.4;
  }
  @keyframes shine {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  @media (max-width: 900px) {
    .card {
      min-height: 220px;
      padding: 1.2em 0.7em 0.7em 0.7em;
      max-width: 95vw;
    }
    .card__icon {
      font-size: 1.7em;
    }
    .card__title {
      font-size: 1.1em;
    }
    .card__list-item {
      font-size: 1em;
    }
  }
  @media (max-width: 600px) {
    .card {
      min-height: 140px;
      padding: 0.8em 0.5em 0.5em 0.5em;
      max-width: 99vw;
    }
    .card__icon {
      font-size: 1.2em;
    }
    .card__title {
      font-size: 1em;
    }
    .card__list-item {
      font-size: 0.95em;
    }
  }
`;

export default InfoCard; 