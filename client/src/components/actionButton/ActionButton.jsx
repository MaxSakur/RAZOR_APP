import './styles.css';

export const ActionButton = ({ children, onPress }) => {
  return <button onClick={() => onPress()}>{children}</button>;
};
