"use client"
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const FounderCard = ({ image, name, position, linkedin,bio }: { image: string; name: string; position: string; linkedin: string; bio: string; }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card__shine" />
        <div className="card__glow" />
        <div className="card__avatar-wrapper">
          <Image src={image} alt={name} height={128} width={128} className="card__avatar" loading="lazy" />
        </div>
        <div className="card__content">
          <div className="card__name">{name}</div>
          <div className="card__position">{position}</div>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card__linkedin"
            aria-label={`LinkedIn profile of ${name}`}
          >
            <FaLinkedin className="linkedin-icon" />
          </a>
          <div className="card__desc">{bio}</div>
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
    max-width: 380px;
    min-height: 480px;
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
    padding: 2.2em 1.5em 1.5em 1.5em;
  }
  .card__avatar-wrapper {
    width: 140px;
    height: 140px;
    margin: 0 auto 1.2em auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #181818;
    border: 4px solid var(--card-accent);
    box-shadow: 0 4px 16px rgba(83, 201, 38, 0.10);
    position: relative;
    z-index: 2;
  }
  .card__avatar {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    background: #f3f4f6;
  }
  .card__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
    width: 100%;
    position: relative;
    z-index: 2;
    flex: 1 1 auto;
    justify-content: center;
  }
  .card__name {
    color: var(--card-accent);
    font-size: 1.5em;
    font-weight: 800;
    margin: 0 0 0.1em 0;
    text-align: center;
    line-height: 1.2;
  }
  .card__position {
    color: #e5e7eb;
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 0.5em;
    text-align: center;
  }
  .card__linkedin {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.7em;
    height: 2.7em;
    background: #fff;
    border-radius: 50%;
    margin-bottom: 0.5em;
    color: #0077b5;
    box-shadow: 0 2px 8px 0 #53c92633;
    transition: background 0.2s, color 0.2s;
  }
  .card__linkedin:hover {
    background: var(--card-accent);
    color: #fff;
  }
  .linkedin-icon {
    width: 1.7em;
    height: 1.7em;
  }
  .card__desc {
    color: #bdbdbd;
    font-size: 1.08em;
    text-align: center;
    font-weight: 400;
    margin-top: 0.7em;
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
      max-width: 320px;
      padding: 1.2em 0.7em 0.7em 0.7em;
    }
    .card__avatar-wrapper {
      width: 90px;
      height: 90px;
    }
    .card__avatar {
      width: 76px;
      height: 76px;
    }
    .card__name {
      font-size: 1.2em;
    }
    .card__position {
      font-size: 1.05em;
    }
    .card__desc {
      font-size: 0.98em;
    }
  }
  @media (max-width: 600px) {
    .card {
      min-height: 180px;
      max-width: 90vw;
      padding: 0.8em 0.5em 0.5em 0.5em;
    }
    .card__avatar-wrapper {
      width: 160px;
      height: 160px;
    }
    .card__avatar {
      width: 160px;
      height: 160px;
    }
    .card__name {
      font-size: 1em;
    }
    .card__position {
      font-size: 0.95em;
    }
    .card__desc {
      font-size: 0.93em;
    }
  }
`;

export default FounderCard; 