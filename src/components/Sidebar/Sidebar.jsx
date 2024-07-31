import React, { useState } from 'react';
import leadlogo from '../../assets/lead-logo.svg';
import './Sidebar.css';

function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);
    const [showClockLabel, setShowClockLabel] = useState(false);
    const [showIconClose, setShowIconClose] = useState(false);
    const [showUserLabel, setShowUserLabel] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
      setShowClockLabel(!showClockLabel);
      setShowIconClose(!showIconClose);
      setShowUserLabel(!showUserLabel);
    };
  
    return (
        <div class="root_sideContainer">
            <div class={`root_sideNav_tekSideNavigation ${isOpen ? 'sideNav_Expand' : ''}`}>
                <div className="root_sideNav_logoPanel">
                    <div role="button" tabindex="-1" className="cursor-pointer root_iconAsBtn_container" onClick={toggleSidebar} id="fullViewToggle">
                        <div className={`root_sideNav_menuBtn full-height root_icon_size_m icon-nine-dots-menu ${showIconClose ? 'icon-close' : ''}`}></div>
                    </div>
                </div>
                <div id="favorite-apps-list" class="root_sideNav_favoriteApps root_sideNav_favoriteAppsCompact root_favoriteApps_favoriteAppsContainer" data-rbd-droppable-id="favoriteapps-droppable-false" data-rbd-droppable-context-id="0"></div>
                <div class="root_sideNav_profileContainer">
                    <div class="d-flex justify-content-center align-items-center m-b-16 root_profile_clockTile">
                        <img src={leadlogo} alt="Leads"></img>
                    </div>
                    <div class="root_userSentiment_userSentiment" role="button" tabindex="0">
                        <div class="root_icon_size icon-very-satisfied-sentiment" style={{color: 'rgb(0, 191, 165)'}}></div>
                    </div>
                    <div class="root_profile_clockWrapper">
                        <button id="employeeClock" type="button" class="root_profile_clockTile">
                            <div>
                                <div class="root_profile_clockedIn root_icon_size_xl icon-clock-out"></div>
                            </div>
                            <div class="root_profile_durationContainer">03:16 Hrs</div>
                        </button>
                        {showClockLabel && (
                        <span class="root_profile_clockLabel full-width" role="button" tabindex="-1">
                            <div sectiontype="" class="root_heading_h4 root_skeleton_heading root_profile_profileHeadingInfo" id="">Clock Me Out</div>
                        </span>
                        )}
                    </div>
                    <div class="root_profile_profileWrapper">
                        <div class="root_avatar_avatar">
                            <span title="Auction USER" class="ant-avatar root_avatar_avatarComponent root_profile_profileAvatar root_avatar_defaultBackground root_avatar_avatarSizeMedium ant-avatar-circle">
                                <span class="ant-avatar-string" style={{ transform: 'scale(1) translateX(-50%)' }}>DU</span>
                            </span>
                        </div>
                        {showClockLabel && (
                        <div class="root_profile_profileInfo root_profile_profileHeadingInfo full-width" role="button" tabindex="-1">
                            <div sectiontype="" class="root_heading_h4 root_skeleton_heading" id="">
                                <div id="antd-pro-ellipsis" class="root_ellipsis_ellipsis root_ellipsis_lineClamp">Dealer User</div>
                            </div>
                            <div class="root_content_blackNormalContent root_profile_roleLabel" size="5"><div id="antd-pro-ellipsis" class="root_ellipsis_ellipsis root_ellipsis_lineClamp">AuctionAdmin</div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                <div class="root_sideNav_bottom">
                    <div class="root_helperText_notificationText font-regular root_sideNav_digitalClock">10:18 AM</div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Sidebar;
