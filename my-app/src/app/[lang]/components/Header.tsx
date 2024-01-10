'use client'
import { dictionary } from "@/content";

const Header = ({ params }: { params: { lang: string, onLanguageSwitch: () => void}}) => {

    return (
        <>
            <header className="app-header">

                <div className="header-action">
                    <span
                        className="navigation-language-header"
                        onClick={params.onLanguageSwitch}
                    >
                        <div className="language-header-translation">
                            {dictionary[params.lang]?.headerLanguage}
                        </div>

                    </span>
                </div>
            </header>
        </>
    );
};

export default Header;