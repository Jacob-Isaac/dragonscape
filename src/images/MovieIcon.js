import React from "react";

function MovieIcon(props) {
   return (
      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <g opacity="0.5" {...props}>
            <path d="M32.2534 30.4927L39.5834 33.4887C40.9754 34.0567 42.4994 33.0347 42.4994 31.5307V18.2527C42.4994 16.7487 40.9754 15.7247 39.5834 16.2927L32.2534 19.2887" stroke="white" strokeWidth="1.68616" strokeLinecap="round" strokeLinejoin="round" {...props} />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.608 38.7817H25.146C29.514 38.7817 32.254 35.9357 32.254 31.9057V17.8757C32.254 13.8457 29.526 10.9997 25.146 10.9997H12.608C8.226 10.9997 5.5 13.8457 5.5 17.8757V31.9057C5.5 35.9357 8.226 38.7817 12.608 38.7817Z" stroke="white" strokeWidth="1.68616" strokeLinecap="round" strokeLinejoin="round" {...props} />
         </g>
      </svg>
   );
}

export default MovieIcon;