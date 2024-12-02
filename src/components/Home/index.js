import { useState } from 'react'
import ActionLauncherSection from '../ActionLauncherSection'
import AgentCardItem from '../AgentCardItem'
import AgentMessanger from '../AgentMessanger'
import AgentsTopHeader from '../AgentsTopHeader'
import AskCaturaSection from '../AskCaturaSection'
import CaseFavoriteSection from '../CaseFavoriteSection'
import Header from '../Header'
import Sidebar from '../Sidebar'

import './index.css'

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const onClickToggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    }

    return (
        <div className="app-container">

            <Sidebar isSidebarOpen={isSidebarOpen} />

            <div className="home-page-main-container">
                <Header onClickToggleSidebar={onClickToggleSidebar} />
                <div className="home-page-body-container">
                    <AgentsTopHeader />
                    <div className="home-page-sections">
                        <AgentCardItem />
                        <AgentMessanger />
                        <div className="home-advance-features-section">
                            <AskCaturaSection />
                            <ActionLauncherSection />
                            <CaseFavoriteSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home