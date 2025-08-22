"use client"
import styled from 'styled-components';

const WorkCard = ({ src }: { src: string }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__shine" />
        <div className="card__glow" />
        <div className="card__video-wrapper">
          <iframe
            src={src}
            title="Work Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="card__video"
            loading="lazy"
            style={{ aspectRatio: '9/16' }}
          ></iframe>
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
    --card-shadow: 0 10px 24px -4px rgba(83, 201, 38, 0.10);
    width: 100%;
    min-height: 600px;
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
    padding: 0;
  }
  .card__video-wrapper {
    width: 100%;
    height: 600px;
    background: #181818;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow: hidden;
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card__video {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
    background: #000;
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
      min-height: 320px;
    }
    .card__video-wrapper {
      height: 320px;
    }
  }
  @media (max-width: 600px) {
    .card {
      min-height: 90vw;
      max-height: 600px;
    }
    .card__video-wrapper {
      height: 90vw;
      max-height: 600px;
    }
  }
`;

export default WorkCard; 