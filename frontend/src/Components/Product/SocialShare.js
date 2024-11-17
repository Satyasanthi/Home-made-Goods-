import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import {Container,Segment} from "semantic-ui-react";
import {FacebookShareButton,WhatsappShareButton} from "react-share";
import { FacebookIcon ,WhatsappIcon} from "react-share";
import { useDispatch } from 'react-redux';
const SocialShare = ({ productUrl }) => {
  const dispatch = useDispatch();
    
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Main Share Button */}
      <button onClick={toggleMenu}>
        <FontAwesomeIcon icon={faShare}/>Share
      </button>

      {/* Dropdown Menu */}
      {showMenu && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          backgroundColor: '#fff',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          padding: '10px',
          borderRadius: '4px',
          zIndex: 1000
        }}>
      <Container>
        <Segment>
          <FacebookShareButton url={productUrl}
          quote="Share the content"
          hashtag="#React">
            <FacebookIcon round={true} logoFillColor="white">
              {dispatch({ type: 'SET_Data', payload: false })}
            </FacebookIcon>
          </FacebookShareButton>
          <WhatsappShareButton title="Sharing ontent"
          url={productUrl}>
            <WhatsappIcon>{dispatch({ type: 'SET_Data', payload: false })}</WhatsappIcon>
          </WhatsappShareButton>
        </Segment>
      </Container>
    </div>

      )}
    </div>
  );
};

export default SocialShare;
