import React from 'react';

const BandsintownWidget = ({ style = {}, displayLimit = 'all' } = {}) => {

    const markup = `
      <style type="text/css">

        .tour-section .bit-details-inner-wrapper {
          display: flex;
        }
        .tour-section .bit-details {
            min-width: 0 !important;
        }

        @media (max-width: 1050px) {
          .tour-section .bit-details-inner-wrapper {
            flex-direction: column;
          }
        }

        .tour-section .bit-details-inner-wrapper>a,
        .tour-section .bit-details-inner-wrapper>div>a,
        .tour-section .bit-details-inner-wrapper>div>a>div,
        .tour-section .bit-details-inner-wrapper>div>a.bit-details,
        .tour-section .bit-details-inner-wrapper>div>a.bit-details:first-child {
            min-width: 0;
            width: auto;
            flex: 1 auto !important;
        }

        .bit-widget.bit-layout-desktop .bit-date-wrapper,
        .bit-details-inner-wrapper>.bit-details>.bit-date-wrapper {
            min-width: 80px !important;
        }

        .tour-section .bit-date-wrapper,
        .tour-section .bit-widget.bit-layout-desktop .bit-date-wrapper,
        .tour-section .bit-widget.bit-layout-mobile .bit-date-wrapper,
        .tour-section .bit-widget.bit-layout-tablet .bit-date-wrapper
          min-width: 0 !important;
        }

        .tour-section .bit-widget-container .container {
          width: 100%;
          min-width: none;
        }

        .tour-section .bit-details-inner-wrapper .bit-details,
        .tour-section .bit-details-inner-wrapper .bit-location-under-tablet,
        .tour-section .bit-details-inner-wrapper .bit-titleWrapper {
          font-size: 19px;
          flex: 2;
          margin: 5px;
          text-align: center;
        }

        .bit-widget .bit-event .bit-rsvp-text,
        .bit-widget .bit-event .bit-offers-text {
          font-size: 18px;
          color: #ccc;
        }

        .tour-section .bit-upcoming-events-show-all-button {
          background-color: #1C90C9;
          color: white;
          margin: 30px auto;
          font-size: 18px;
        }

        .tour-section .bit-location-under-mobile,
        .tour-section .bit-location-under-tablet,
        .tour-section .bit-location {
          color: #1C90C9;
          font-size: 20px;
          font-weight: 800;
        }

      </style>
      <a class="bit-widget-initializer"

        data-artist-name="id_2156165"

        data-background-color="rgba(0,0,0,0.35)"
        data-separator-color="rgba(77,77,77,0.4)"
        data-text-color="rgba(250,250,250,1)"
        data-font="'rift', 'Helvetica Neue Condensed', 'Helvetica Condensed', 'Helvetica Neue', 'Helvetica', 'Arial Narrow'"
        data-auto-style="false"

        data-display-local-dates="false"
        data-local-dates-position="tab"
        data-display-past-dates="false"
        data-display-details="false"
        data-display-lineup="false"
        data-display-start-time="false"
        data-social-share-icon="false"
        data-display-limit="${displayLimit}"

        data-date-format="MMM. D, YYYY"
        data-date-orientation="horizontal"
        data-date-border-color="#08C3BA"
        data-date-border-width="1px"
        data-date-border-radius="10px"

        data-event-ticket-cta-size="small"
        data-event-ticket-text="BUY TICKETS"
        data-event-ticket-icon="false"
        data-event-ticket-cta-text-color="#1C90C9"
        data-event-ticket-cta-bg-color="rgba(42,42,42,0)"
        data-event-ticket-cta-border-color="#1C90C9"
        data-event-ticket-cta-border-width="0px"
        data-event-ticket-cta-border-radius="4px"

        data-sold-out-button-text-color="rgba(243,243,243,1)"
        data-sold-out-button-background-color="#9B9B9B"
        data-sold-out-button-border-color="rgba(195,8,8,1)"
        data-sold-out-button-clickable="false"

        data-event-rsvp-position="hidden"
        data-event-rsvp-cta-size="small"
        data-event-rsvp-text="SET REMINDER"
        data-event-rsvp-icon="false"
        data-event-rsvp-cta-text-color="#1C90C9"
        data-event-rsvp-cta-bg-color="rgba(42,42,42,0)"
        data-event-rsvp-cta-border-color="#1C90C9"
        data-event-rsvp-cta-border-width="0px"
        data-event-rsvp-cta-border-radius="4px"

        data-follow-section-position="hidden"
        data-follow-section-alignment="center"
        data-follow-section-header-text="Get updates on new shows, new music, and more."
        data-follow-section-cta-size="medium"
        data-follow-section-cta-text="FOLLOW"
        data-follow-section-cta-icon="true"
        data-follow-section-cta-text-color="#FFFFFF"
        data-follow-section-cta-bg-color="#08C3BA"
        data-follow-section-cta-border-color="#08C3BA"
        data-follow-section-cta-border-width="0px"
        data-follow-section-cta-border-radius="4px"

        data-play-my-city-position="hidden"
        data-play-my-city-alignment="Center"
        data-play-my-city-header-text="Don’t see a show near you?"
        data-play-my-city-cta-size="medium"
        data-play-my-city-cta-text="REQUEST A SHOW"
        data-play-my-city-cta-icon="true"
        data-play-my-city-cta-text-color="#FFFFFF"
        data-play-my-city-cta-bg-color="#08C3BA"
        data-play-my-city-cta-border-color="#08C3BA"
        data-play-my-city-cta-border-width="0px"
        data-play-my-city-cta-border-radius="4px"

        data-language="en"
        data-widget-width="100%"
        data-div-id=""
        data-app-id=""
        data-affil-code="undefined"
        data-bit-logo-position="bottomCenter"
        data-bit-logo-color="#CCCCCC">
      </a>
    `;

    return (
        <div className="tour-section" style={style} dangerouslySetInnerHTML={{ __html: markup }} />
    )
}

export default BandsintownWidget;
