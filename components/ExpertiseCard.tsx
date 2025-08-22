"use client"
import styled from 'styled-components';

const ExpertiseCard = ({ img, title, desc }:{ img: string; title: string; desc: string; }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__shine" />
        <div className="card__glow" />
        <div className="card__image-wrapper">
          <img src={img} alt={title} className="card__image" loading="lazy" />
        </div>
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <hr className="card__divider" />
          <p className="card__desc">{desc}</p>
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
    padding: 0;
  }
  .card__image-wrapper {
    width: 100%;
    height: 160px;
    overflow: hidden;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom: 2px solid var(--card-accent);
    background: #181818;
    position: relative;
    z-index: 2;
  }
  .card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
  .card__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8em;
    width: 100%;
    position: relative;
    z-index: 2;
    flex: 1 1 auto;
    justify-content: center;
    padding: 1.5em 1.5em 1.2em 1.5em;
  }
  .card__title {
    color: var(--card-accent);
    font-size: 1.3em;
    font-weight: 800;
    margin: 0 0 0.2em 0;
    text-align: left;
    line-height: 1.2;
  }
  .card__divider {
    border: none;
    border-top: 1.5px solid #222;
    width: 100%;
    margin: 0.2em 0 0.5em 0;
  }
  .card__desc {
    color: #e5e7eb;
    font-size: 1.05em;
    font-weight: 500;
    margin: 0;
    text-align: left;
    line-height: 1.5;
  }
  .card__shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(83, 201, 38, 0.18) 50%,
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
      min-height: 220px;
    }
    .card__image-wrapper {
      height: 110px;
    }
    .card__title {
      font-size: 1.1em;
    }
    .card__desc {
      font-size: 0.98em;
    }
  }
  @media (max-width: 600px) {
    .card {
      min-height: 250px;
    }
    .card__image-wrapper {
      height: 150px;
    }
    .card__title {
      font-size: 1em;
    }
    .card__desc {
      font-size: 0.93em;
    }
    .card__content {
      padding: 0.8em 0.7em 0.7em 0.7em;
    }
  }
`;

export default ExpertiseCard; 