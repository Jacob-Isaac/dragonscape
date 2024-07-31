import React from "react";
import PropTypes from "prop-types";
import { StyledIframe, VideoResponsive } from "../../components/Video/styled";

const YoutubeEmbed = ({ embedId }) => (
  <VideoResponsive>
    <StyledIframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
    //   frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </VideoResponsive>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;