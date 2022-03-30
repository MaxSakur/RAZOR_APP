import './styles.css';

export const CommonModal = ({ headerText = 'header', body, footer }) => {
  return (
    <div className="modal">
      <div className="modal_effects">
        <div className="modal_effects_lightspot" />
      </div>
      <div className="top_left with_center">
        <div className="dot" />
      </div>
      <div className="top_right">
        <div className="dot" />
      </div>
      <div className="bottom_right">
        <div className="dot" />
      </div>
      <div className="bottom_left">
        <div className="dot" />
      </div>
      <div className="inner_container">
        <div className="header">
          <p>{headerText}</p>
        </div>
        <div className="body">{body}</div>
        <div className="footer">{footer && footer}</div>
      </div>
    </div>
  );
};
