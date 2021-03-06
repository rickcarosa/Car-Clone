import React from 'react';


export const Speedometer = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="95" height="51" style={{'transform': 'scale(0.8)', 'transformOrigin': '50% 100%'}}>
    
    <path fillRule="evenodd" fill="#fff" d="M94.992 48.114a47.051 47.051 0 0 0-12.157-31.578l-1.682-1.872C62.709-3.889 32.68-4.012 14.085 14.39A47.255 47.255 0 0 0 .057 48.197v2.796h9.271v-2.796h-3.64A41.512 41.512 0 0 1 16.36 20.421l2.803 2.542 1.847-2.096-2.801-2.488A41.702 41.702 0 0 1 46.222 6.475v5.337h2.802V6.363a41.746 41.746 0 0 1 28.011 11.989l-2.799 2.375 1.847 2.096 2.801-2.43a41.498 41.498 0 0 1 10.59 27.666h-3.755v2.794h9.273v-2.739z"/>
    </svg>
)

export const Secs = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 662" style={{'width': '60px', 'transform': 'translateY(-64.5px)', 'height': '674px'}}>
    
    <path d="M22.5 75.9l-9.3 2.5-1.9-7.2 13.9-4.3h6.4v51h-9v-42h-.1zM3.8 177.1l17.8-14.8c7.1-5.9 9.7-9.1 9.7-13.7 0-5-3.6-7.9-8.4-7.9-4.7 0-8 2.5-12 7.6l-6.4-4.9c5-6.8 9.8-10.6 19.1-10.6 10.1 0 17.1 6.1 17.1 15.1v.1c0 8-4.3 12.3-13.5 19.6l-10.6 8.7h24.6v7.8H3.8v-7zm-1 64.3l6.4-5.8c3.7 4.3 7.8 6.7 13.6 6.7 5.1 0 8.9-3 8.9-7.7v-.1c0-5-4.7-7.8-11.9-7.8h-4.2l-1.5-5.6 14-14.5H5.7v-7.7h34.2v6.7l-14.4 14.5c7.8 1 15.2 4.8 15.2 14.3v.1c0 9.3-7.4 16-18.1 16-9-.2-15.5-3.9-19.8-9.1zm24.8 63.3H1.5l-1.7-6.4 28.8-33.2h7.8v32.3h5.5v7.3h-5.5v11.4h-8.7l-.1-11.4zm0-7.3v-20l-17 20h17zM3.1 374.7l5.6-6.4c4.1 3.8 8.5 6.1 13.3 6.1 6.2 0 10.3-3.5 10.3-8.8v-.1c0-5.1-4.4-8.4-10.7-8.4-3.7 0-6.9 1-9.5 2.2l-5.5-3.5L8.1 331H39v7.9H15.9l-.8 11.9c2.4-.9 4.7-1.4 8.2-1.4 10.1 0 18 5.2 18 15.9v.1c0 10.3-7.7 17.1-19.2 17.1-7.9-.1-14.1-3.2-19-7.8zm5.8 68.9c-3.9-3.9-6.3-9.2-6.3-19.4v-.1c0-15.5 7.5-27.6 22.2-27.6 6.7 0 11.3 2.1 15.8 5.6l-4.9 6.9c-3.6-2.8-6.7-4.4-11.2-4.4-7.7 0-12 6.8-12.4 16.1 2.7-2.6 6.3-5.1 12.4-5.1 10.1 0 18.1 5.8 18.1 15.9v.1c0 10.1-8.4 17.2-19.2 17.2-6.5.1-11.1-1.9-14.5-5.2zM33.4 432v-.1c0-5.1-4.1-8.8-10.6-8.8-6.4 0-10.5 4-10.5 8.9v.1c0 5.1 4.2 9.1 10.7 9.1s10.4-4 10.4-9.2zm-2.7 39.3h-26v-7.8h36.4v6.7l-23.5 43.9H7.4l23.3-42.8zM2.5 566.4c0-6.2 3.5-10.1 9.3-12.5-4.4-2.2-7.5-5.6-7.5-11.3v-.1c0-7.7 7.6-13.7 18-13.7s18 5.9 18 13.7v.1c0 5.6-3.2 9-7.5 11.3 5.6 2.5 9.3 6.2 9.3 12.2v.1c0 9-8.4 14.7-19.7 14.7-11.4 0-19.9-5.8-19.9-14.5zm30.6-.6c0-4.7-4.7-7.8-10.9-7.8-6.1 0-10.9 3-10.9 7.7v.1c0 4.1 4.1 7.6 10.9 7.6s10.9-3.4 10.9-7.6zm-1.6-22.3c0-4-3.7-7.2-9.2-7.2s-9.2 3.2-9.2 7v.1c0 4.4 3.9 7.5 9.2 7.5 5.3 0 9.2-3.1 9.2-7.4zM3.9 641l5-6.8c3.9 3.3 7.4 4.8 11.8 4.8 7.6 0 12.2-6.6 12.5-15.9-2.6 3-6.6 5.4-12.1 5.4-11 0-18.3-6.3-18.3-16.1v-.1c0-9.9 7.8-17.5 19.3-17.5 6.5 0 10.7 1.8 14.3 5.4 3.8 3.8 6.3 9.3 6.3 19.3v.1c0 16.3-8.3 27.6-22.2 27.6-7.2-.1-12.2-2.6-16.6-6.2zm29-29.1c0-5.4-4.2-9.4-10.8-9.4-6.4 0-10.3 4.2-10.3 9.4v.1c0 5.3 4.1 9 10.6 9 6.6 0 10.5-4.2 10.5-9.1zM1.4 26.4v-.1C1.4 11.8 8.6.1 22.2.1c13.5 0 20.6 11.6 20.6 26v.1c0 14.5-7.2 26.2-20.8 26.2-13.6.1-20.6-11.5-20.6-26zm32 0v-.1c0-10-3.4-18.2-11.4-18.2s-11.2 8-11.2 18v.1c0 10 3.3 18.2 11.4 18.2 8 0 11.2-8 11.2-18z" fill="#fff"/></svg>
)

export const SecsTwo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 662" style={{'width': '60px', 'transform': 'translateY(-602.5px)', 'height': '674'}}>
    
    <path d="M22.5 75.9l-9.3 2.5-1.9-7.2 13.9-4.3h6.4v51h-9v-42h-.1zM3.8 177.1l17.8-14.8c7.1-5.9 9.7-9.1 9.7-13.7 0-5-3.6-7.9-8.4-7.9-4.7 0-8 2.5-12 7.6l-6.4-4.9c5-6.8 9.8-10.6 19.1-10.6 10.1 0 17.1 6.1 17.1 15.1v.1c0 8-4.3 12.3-13.5 19.6l-10.6 8.7h24.6v7.8H3.8v-7zm-1 64.3l6.4-5.8c3.7 4.3 7.8 6.7 13.6 6.7 5.1 0 8.9-3 8.9-7.7v-.1c0-5-4.7-7.8-11.9-7.8h-4.2l-1.5-5.6 14-14.5H5.7v-7.7h34.2v6.7l-14.4 14.5c7.8 1 15.2 4.8 15.2 14.3v.1c0 9.3-7.4 16-18.1 16-9-.2-15.5-3.9-19.8-9.1zm24.8 63.3H1.5l-1.7-6.4 28.8-33.2h7.8v32.3h5.5v7.3h-5.5v11.4h-8.7l-.1-11.4zm0-7.3v-20l-17 20h17zM3.1 374.7l5.6-6.4c4.1 3.8 8.5 6.1 13.3 6.1 6.2 0 10.3-3.5 10.3-8.8v-.1c0-5.1-4.4-8.4-10.7-8.4-3.7 0-6.9 1-9.5 2.2l-5.5-3.5L8.1 331H39v7.9H15.9l-.8 11.9c2.4-.9 4.7-1.4 8.2-1.4 10.1 0 18 5.2 18 15.9v.1c0 10.3-7.7 17.1-19.2 17.1-7.9-.1-14.1-3.2-19-7.8zm5.8 68.9c-3.9-3.9-6.3-9.2-6.3-19.4v-.1c0-15.5 7.5-27.6 22.2-27.6 6.7 0 11.3 2.1 15.8 5.6l-4.9 6.9c-3.6-2.8-6.7-4.4-11.2-4.4-7.7 0-12 6.8-12.4 16.1 2.7-2.6 6.3-5.1 12.4-5.1 10.1 0 18.1 5.8 18.1 15.9v.1c0 10.1-8.4 17.2-19.2 17.2-6.5.1-11.1-1.9-14.5-5.2zM33.4 432v-.1c0-5.1-4.1-8.8-10.6-8.8-6.4 0-10.5 4-10.5 8.9v.1c0 5.1 4.2 9.1 10.7 9.1s10.4-4 10.4-9.2zm-2.7 39.3h-26v-7.8h36.4v6.7l-23.5 43.9H7.4l23.3-42.8zM2.5 566.4c0-6.2 3.5-10.1 9.3-12.5-4.4-2.2-7.5-5.6-7.5-11.3v-.1c0-7.7 7.6-13.7 18-13.7s18 5.9 18 13.7v.1c0 5.6-3.2 9-7.5 11.3 5.6 2.5 9.3 6.2 9.3 12.2v.1c0 9-8.4 14.7-19.7 14.7-11.4 0-19.9-5.8-19.9-14.5zm30.6-.6c0-4.7-4.7-7.8-10.9-7.8-6.1 0-10.9 3-10.9 7.7v.1c0 4.1 4.1 7.6 10.9 7.6s10.9-3.4 10.9-7.6zm-1.6-22.3c0-4-3.7-7.2-9.2-7.2s-9.2 3.2-9.2 7v.1c0 4.4 3.9 7.5 9.2 7.5 5.3 0 9.2-3.1 9.2-7.4zM3.9 641l5-6.8c3.9 3.3 7.4 4.8 11.8 4.8 7.6 0 12.2-6.6 12.5-15.9-2.6 3-6.6 5.4-12.1 5.4-11 0-18.3-6.3-18.3-16.1v-.1c0-9.9 7.8-17.5 19.3-17.5 6.5 0 10.7 1.8 14.3 5.4 3.8 3.8 6.3 9.3 6.3 19.3v.1c0 16.3-8.3 27.6-22.2 27.6-7.2-.1-12.2-2.6-16.6-6.2zm29-29.1c0-5.4-4.2-9.4-10.8-9.4-6.4 0-10.3 4.2-10.3 9.4v.1c0 5.3 4.1 9 10.6 9 6.6 0 10.5-4.2 10.5-9.1zM1.4 26.4v-.1C1.4 11.8 8.6.1 22.2.1c13.5 0 20.6 11.6 20.6 26v.1c0 14.5-7.2 26.2-20.8 26.2-13.6.1-20.6-11.5-20.6-26zm32 0v-.1c0-10-3.4-18.2-11.4-18.2s-11.2 8-11.2 18v.1c0 10 3.3 18.2 11.4 18.2 8 0 11.2-8 11.2-18z" fill="#fff"/></svg>
)

export const Shadow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="33" style={{'transform': 'scale(0.75)', 'position': 'absolute', 'bottom': '-5px', 'left': '14px', 'height': '38px'}}>
    
    <path fillRule="evenodd" opacity=".2" fill="#fff" d="M65.931 32.851H.944C.944 15.173 15.496.835 33.439.835c17.941 0 32.492 14.338 32.492 32.016z"/>
    </svg>
)

export const Needle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="38" style={{'transform': 'rotate(90deg) scale(.8)', 'position': 'absolute', 'left': '53px', 'bottom': '-12px'}}>
    
    <path fillRule="evenodd" fill="#fff" d="M9.616 32.929c0 .033.004.065.004.098a4.172 4.172 0 0 1-.624 2.128 4.272 4.272 0 0 1-.919 1.123c-.705.604-1.578.93-2.548.985a4.925 4.925 0 0 1-.473.017c-.096-.001-.191-.011-.286-.018a4.632 4.632 0 0 1-1.107-.218 4.523 4.523 0 0 1-1.084-.487 4.048 4.048 0 0 1-1.72-2.238 4.156 4.156 0 0 1-.233-1.427c0-.02.003-.04.004-.06-.001-.061-.008-.119-.006-.181 0-.037.002-.073.006-.109L3.777 1.51C3.848.797 4.474.255 5.22.258c.744.002 1.368.551 1.437 1.265l2.961 31.155c.006.052.006.104.005.155-.001.033-.006.064-.007.096z"/>
    </svg>
)

export const Arrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 35">
    
    <path fill="none" stroke="#fff" strokeWidth="7" strokeMiterlimit="10" d="M2.7 3.4L29.9 30 57 3.4"/></svg>
)