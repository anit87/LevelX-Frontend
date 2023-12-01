// import React from 'react'
// type Props = {}

// const Dashboard = (props: Props) => {
//     return (
//         <div className="background-image">
//             <div className="image-container">
//                 {/* ScoreBoard*/}
//                 <div className="col-md-12 px-lg-10 mb-8 mt-6">

//                     <div className="card  border-top border-muted border-1  card-hover-with-icon">
//                         <div className="card-body">
//                             <div className="icon-shape icon-lg text-muted mb-3  card-icon">
//                                 Icon
//                             </div>
//                             <div className="d-flex align-items-center justify-content-between">
//                                 <div>
//                                     <h4 className="mb-0">Analtyics</h4>
//                                     <p className="mb-0 text-muted">2k Jobs</p>
//                                 </div>
//                                 <a href="#" className="text-inherit"> Icon </a>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Dashboard

import React from 'react';
import ScoreBoard from '../components/ScoreBoard';

const Dashboard = () => {
    return (
        <div className="background-image">
            <div className="image-container">
                <ScoreBoard />
            </div>
        </div>
    );
};

export default Dashboard;
