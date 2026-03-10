import "./LinkButton.css";

const LinkButton = ({ label, url, description }) => {
  return (
    <a className="link-frame" href={url} target="_blank" rel="noreferrer">
      <div className="link-frame-inner">
        <div className="link-texts">
          <p className="link-label">{label}</p>
          <p className="link-caption">{description}</p>
        </div>

        <div className="link-go">Go</div>
      </div>
    </a>
  );
};

export default LinkButton;
