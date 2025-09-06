"use client"
import styled from 'styled-components';

const ReviewCard = ({ name, title, text }: { name: string; title: string; text: string; }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__shine" />
        <div className="card__glow" />
        <div className="card__icon-quote">
          <svg className="quote-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 8A5.001 5.001 0 0 1 12 3v2a3 3 0 0 0-3 3c0 1.31.84 2.42 2.03 2.83A3.001 3.001 0 0 1 15 15v2a5.001 5.001 0 0 1-4.83-7H7.17z"/></svg>
        </div>
        <div className="card__content">
          <p className="card__text">{text}</p>
          <div className="card__footer">
            <div className="card__name">{name}</div>
            <div className="card__title">{title}</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100%;
  .card {
    --card-bg: #111;
    --card-accent: #53c926;
    --card-text: #fff;
    --card-shadow: 0 10px 24px -4px rgba(83, 201, 38, 0.10);
    width: 100%;
    min-height: 220px;
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
    align-items: center;
    justify-content: flex-start;
    padding: 1.5em 1.2em 1.2em 1.2em;
  }
  .card__icon-quote {
    width: 2.2em;
    height: 2.2em;
    color: var(--card-accent);
    margin-bottom: 0.7em;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  .quote-icon {
    width: 2em;
    height: 2em;
    display: block;
  }
  .card__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8em;
    width: 100%;
    position: relative;
    z-index: 2;
    flex: 1 1 auto;
    justify-content: center;
  }
  .card__text {
    color: #e5e7eb;
    font-size: 1.08em;
    font-weight: 500;
    margin: 0 0 0.7em 0;
    text-align: center;
    line-height: 1.5;
    min-height: 60px;
  }
  .card__footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2em;
  }
  .card__name {
    color: var(--card-accent);
    font-weight: 700;
    font-size: 1.08em;
    text-align: center;
  }
  .card__title {
    color: #bdbdbd;
    font-size: 0.98em;
    text-align: center;
    font-weight: 500;
  }
  .card__shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.45) 0%,
      rgba(255, 255, 255, 0) 100%
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
      rgba(46, 125, 50, 0.45) 0%,
      rgba(46, 125, 50, 0) 100%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 1;
    pointer-events: none;
  }
  .card:hover {
    transform: translateY(-10px) scale(1.025);
    box-shadow: 0 24px 48px -8px rgba(83, 201, 38, 0.18), 0 8px 16px -8px rgba(0,0,0,0.08);
    border-color: #53c92644;
  }
  .card:hover .card__shine {
    opacity: 1;
    animation: shine 3s infinite;
  }
  .card:hover .card__glow {
    opacity: 1;
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
      min-height: 180px;
      padding: 1.1em 0.7em 0.7em 0.7em;
    }
    .card__text {
      font-size: 1em;
    }
    .card__name {
      font-size: 1em;
    }
    .card__title {
      font-size: 0.93em;
    }
  }
  @media (max-width: 600px) {
    .card {
      min-height: 120px;
      padding: 0.7em 0.5em 0.5em 0.5em;
    }
    .card__text {
      font-size: 0.95em;
    }
    .card__name {
      font-size: 0.95em;
    }
    .card__title {
      font-size: 0.9em;
    }
  }
`;

export default ReviewCard; 