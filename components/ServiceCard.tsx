"use client"
import React from 'react';
import styled from 'styled-components';

const ServiceCard = ({ icon, pill, title, desc }:{
  icon: React.ReactNode;
  pill: React.ReactNode;
  title: React.ReactNode;
  desc: string;
}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__shine" />
        <div className="card__glow" />
        <div className="card__icon-pill-row">
          <div className="card__icon">{icon}</div>
          <div className="card__pill">{pill}</div>
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
    padding: 2.5em 1.5em 2em 1.5em;
  }

  .card__icon-pill-row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5em;
    position: relative;
    z-index: 2;
  }
  .card__icon {
    font-size: 2.5rem;
    color: var(--card-accent);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card__pill {
    background: #53c926;
    color: #111;
    font-weight: 700;
    font-size: 1em;
    border-radius: 999px;
    padding: 0.4em 1.2em;
    box-shadow: 0 4px 16px 0 rgba(80,168,55,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
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
  }
  .card__title {
    color: var(--card-accent);
    font-size: 1.5em;
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
    font-size: 1.1em;
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
      min-height: 280px;
      padding: 2em 1em 1.5em 1em;
    }
    .card__icon {
      font-size: 2rem;
    }
    .card__title {
      font-size: 1.2em;
    }
    .card__desc {
      font-size: 1em;
    }
  }
  @media (max-width: 600px) {
    .card {
      min-height: 200px;
      padding: 1.2em 0.7em 1em 0.7em;
    }
    .card__icon {
      font-size: 1.5rem;
    }
    .card__title {
      font-size: 1em;
    }
    .card__desc {
      font-size: 0.95em;
    }
    .card__pill {
      font-size: 0.85em;
      padding: 0.3em 0.7em;
      max-width: 90vw;
      white-space: normal;
      word-break: break-word;
      text-align: center;
    }
  }
`;

export default ServiceCard; 