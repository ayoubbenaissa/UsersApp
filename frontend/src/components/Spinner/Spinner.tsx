import spinner from "../../../assets/icons-loading.png";

import "./styles.scss";

export const Spinner = ({waitingInfoText}: {waitingInfoText: string}) => {
    return (
        <div className="spinner-wrapper">
            <div className="waiting-info-text">{waitingInfoText}</div>
            <div className="spinner-wrapper">
                <img className="spinner-icon" src={spinner} alt="Loading ..." />
            </div>
        </div>
    )
};