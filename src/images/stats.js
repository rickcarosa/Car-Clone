import React from 'react';

export const Speedometer = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="95" height="51" style={{'transform': 'scale(0.8)', 'transform-origin': '50% 100%'}}>
    
    <path fill-rule="evenodd" fill="#fff" d="M94.992 48.114a47.051 47.051 0 0 0-12.157-31.578l-1.682-1.872C62.709-3.889 32.68-4.012 14.085 14.39A47.255 47.255 0 0 0 .057 48.197v2.796h9.271v-2.796h-3.64A41.512 41.512 0 0 1 16.36 20.421l2.803 2.542 1.847-2.096-2.801-2.488A41.702 41.702 0 0 1 46.222 6.475v5.337h2.802V6.363a41.746 41.746 0 0 1 28.011 11.989l-2.799 2.375 1.847 2.096 2.801-2.43a41.498 41.498 0 0 1 10.59 27.666h-3.755v2.794h9.273v-2.739z"/>
    </svg>
)

export const Shadow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="33" style={{'transform': 'scale(0.75)', 'position': 'absolute', 'bottom': '-5px', 'left': '14px', 'height': '38px'}}>
    
    <path fill-rule="evenodd" opacity=".2" fill="#fff" d="M65.931 32.851H.944C.944 15.173 15.496.835 33.439.835c17.941 0 32.492 14.338 32.492 32.016z"/>
    </svg>
)

export const Needle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="38" style={{'transform': 'rotate(90deg) scale(.8)', 'position': 'absolute', 'left': '53px', 'bottom': '-12px'}}>
    
    <path fill-rule="evenodd" fill="#fff" d="M9.616 32.929c0 .033.004.065.004.098a4.172 4.172 0 0 1-.624 2.128 4.272 4.272 0 0 1-.919 1.123c-.705.604-1.578.93-2.548.985a4.925 4.925 0 0 1-.473.017c-.096-.001-.191-.011-.286-.018a4.632 4.632 0 0 1-1.107-.218 4.523 4.523 0 0 1-1.084-.487 4.048 4.048 0 0 1-1.72-2.238 4.156 4.156 0 0 1-.233-1.427c0-.02.003-.04.004-.06-.001-.061-.008-.119-.006-.181 0-.037.002-.073.006-.109L3.777 1.51C3.848.797 4.474.255 5.22.258c.744.002 1.368.551 1.437 1.265l2.961 31.155c.006.052.006.104.005.155-.001.033-.006.064-.007.096z"/>
    </svg>
)

export const Arrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 35">
    
    <path fill="none" stroke="#fff" stroke-width="7" stroke-miterlimit="10" d="M2.7 3.4L29.9 30 57 3.4"/></svg>
)