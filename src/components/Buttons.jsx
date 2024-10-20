/* eslint-disable react/prop-types */
import "../styles/Buttons.css";

export const OutlineButton = ({ children, className = "" }) => {
  return <button className={`button outline ${className}`}>{children}</button>;
};

export const FilledButton = ({ children, className = "" }) => {
  return <button className={`button filled ${className}`}>{children}</button>;
};
