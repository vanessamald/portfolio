import React from "react";

function Footer() {
    return (
            <div
            style={{
                transform: 'translateX(0em)',
                opacity: '1',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                height: '55px',
                display: 'flex',
                webkitBoxOrient: 'horizontal',
                webkitBoxDirection: 'normal',
                flexDirection: 'row',
                alignItems: 'center', 
                backgroundColor: 'transparent',
                paddingTop: '50px',
                paddingBottom: '100px',
                backgroundColor: 'rgb(249, 247, 241)',
                borderTop: '1px solid #272727' 
            }}
            >
                <div
                style={{
                    animation: 'marquee 12s linear infinite',
                    animationDelay: '2s',
                    display: 'inline-block',
                    paddingRight: '7px'
                }}>
                    <p
                    style={{
                        fontStyle: 'italic',
                        opacity: '0.7',
                        fontFamily: 'Ogg',
                        fontSize: '84px',
                        letterSpacing: '-10px',
                        textTransform: 'lowercase'
                    }}
                    >Now . Accepting . Freelance . Work </p> 
                </div>   
        </div>
    )
}

export default Footer;