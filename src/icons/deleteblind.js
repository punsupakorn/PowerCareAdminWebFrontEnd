import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={66}
      height={66}
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M54.656 8.25H43.313V6.187A6.187 6.187 0 0037.124 0h-8.25a6.187 6.187 0 00-6.188 6.188V8.25H11.345a5.156 5.156 0 00-5.156 5.156v4.125c0 1.14.923 2.063 2.062 2.063h49.5c1.14 0 2.063-.924 2.063-2.063v-4.125a5.156 5.156 0 00-5.157-5.156zM26.813 6.187c0-1.136.925-2.062 2.062-2.062h8.25c1.137 0 2.063.926 2.063 2.063V8.25H26.812V6.187zM10.101 23.719a.644.644 0 00-.643.675l1.701 35.712A6.18 6.18 0 0017.34 66h31.322a6.18 6.18 0 006.18-5.894l1.701-35.712a.644.644 0 00-.644-.675H10.101zm31.149 5.156a2.062 2.062 0 114.125 0v26.813a2.062 2.062 0 11-4.125 0V28.875zm-10.313 0a2.062 2.062 0 114.125 0v26.813a2.062 2.062 0 11-4.125 0V28.875zm-10.312 0a2.062 2.062 0 114.125 0v26.813a2.062 2.062 0 11-4.125 0V28.875z"
        fill="#DEDEDE"
      />
    </svg>
  );
}

export default SvgComponent;
