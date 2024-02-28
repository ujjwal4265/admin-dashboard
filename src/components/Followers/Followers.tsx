// import './Followers.css';
// import AccessibilityIcon from '@mui/icons-material/Accessibility';
// import UpdateIcon from '@mui/icons-material/Update';
// const Followers = () => {
//   return (
//     <>
//       <div className="followers_main">
//         <p
//           style={{
//             padding: '20px',
//             background: 'red',
//             display: 'inline-block',
//             position: 'absolute',
//             top: '-17px',
//             left: '10px',
//             backgroundColor: '#3e90bc',
//             color: '#fff',
//             borderRadius: '5px',
//           }}
//         >
//           <AccessibilityIcon />
//         </p>
//         <p
//           style={{
//             position: 'absolute',
//             right: '9px',
//             top: '16px',
//             color: '#0000005c',
//           }}
//         >
//           Followers
//         </p>
//         <p
//           style={{
//             position: 'absolute',
//             right: '10px',
//             top: '42px',
//             fontSize: 'x-large',
//           }}
//         >
//           +245
//         </p>
//         <p
//           style={{
//             position: 'absolute',
//             left: '10px',
//             bottom: '12px',
//             color: '#000000a8',
//           }}
//         >
//           <hr style={{ position: 'absolute', width: '100%', height: '2px', top: '-12px', left: '10px' }} />
//           <span
//             style={{
//               position: 'absolute',
//               top: '-4px',
//             }}
//           >
//             <UpdateIcon />
//           </span>
//           <span
//             style={{
//               marginLeft: '32px',
//             }}
//           >
//             Just Updated
//           </span>
//         </p>
//       </div>
//     </>
//   );
// };

// export default Followers;


import React from 'react';
import './Followers.css';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import UpdateIcon from '@mui/icons-material/Update';

const Followers = () => {
  return (
    <div className="followers_main">
      <p className="accessibility_icon">
        <AccessibilityIcon />
      </p>
      <p className="followers_label">Followers</p>
      <p className="followers_count">+245</p>
      <div className="just_updated_section">
        <hr className="updated_hr" />
        <span className="update_icon">
          <UpdateIcon />
        </span>
        <span className="just_updated_text">Just Updated</span>
      </div>
    </div>
  );
};

export default Followers;
