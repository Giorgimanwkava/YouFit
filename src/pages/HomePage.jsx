import React, { useRef } from 'react';
import LandingPage from '/src/components/LandingPage'
import Content from '/src/components/Content'
import Footer from '/src/components/Footer'


const HomePage = () => {
    const contentRef = useRef(null);

    const handleScrollToContent = () => {
        contentRef.current.scrollIntoView();
    };

    return (
        <div>
            <LandingPage onExploreClick={handleScrollToContent} />
            <Content ref={contentRef} />
            <Footer />
        </div>
    )
}

export default HomePage