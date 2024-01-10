import React from 'react';
import {dictionary} from "@/content";

interface CookieConsentProps {
    onDecision: (decision: boolean) => void; // Callback for user decision
    params: {
        lang: string;
    };
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onDecision, params }) => {
    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        onDecision(true);
    };

    const handleDeny = () => {
        localStorage.setItem('cookieConsent', 'denied');
        onDecision(false);
    };

    return (
        <div className="cm">
            <div className="c-inr">
                <div className="c-ttl">
                    {dictionary[params.lang]?.cookieNotice}
                </div>
                <div className="c-txt">
                    {dictionary[params.lang]?.cookieConsentMessage1}
                </div>
                <div className="c-txt">
                    {dictionary[params.lang]?.cookieConsentMessage2}
                </div>
            </div>
            <div className="c-bns">
                <button className="minimal-button c-bn c-accept" onClick={handleAccept}>
                    {dictionary[params.lang]?.cookieConsentAccept}
                </button>
                <button className="minimal-button c-bn c-reject" onClick={handleDeny}>
                    {dictionary[params.lang]?.cookieConsentDeny}
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
