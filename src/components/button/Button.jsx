import { useState } from 'react';
import styles from './button.module.scss';

export const Button = ({
  text,
  color,
  background,
  borderColor,
  isDownload,
  href,
  src,
  target,
  hoverEffect,
  hoverDetails,
  className = '',
  onClick,
}) => {
  const buttonStyles = {
    color: color,
    background: background,
    border: `2.5px solid ${borderColor}`,
  };

  const [isClick, setIsClick] = useState(false);

  setTimeout(() => {
    setIsClick(false);
  }, 500);

  const handleClick = (e) => {
    setIsClick(true);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      className={`${className} ${!isClick ? styles[hoverDetails] : styles['onClick']
        }`}
      id={
        hoverEffect === 'purple'
          ? styles.hover_bg_purple
          : styles.hover_bg_white
      }
      style={buttonStyles}
      download={isDownload}
      target={target}
      onClick={handleClick}
    >
      <span>{text}</span>
      {src && <img src={src} alt='' />}
    </a>
  );
};
