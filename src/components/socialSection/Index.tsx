// import React from 'react'
import Chat from "./Chat"

type Props = {}

const SocialSection = (props: Props) => {
    return (
        <>
            <div className="col-md-12 px-lg-10 mb-8 mt-6 ">
                <div className="card card-hover-with-icon" style={{ backgroundColor: 'rgba(22, 26, 28, 0.7)' }} >
                    <div className="card-body">
                        <div className="d-flex flex-column gap-4 align-items-center justify-content-center">

                            <div className="p-2 rounded" style={{ backgroundColor: '#c43b46', borderRadius: '2px' }}>
                                <ul className="nav nav-pills">
                                    <li className="nav-item mx-0">
                                        <a className="nav-link fs-4 text-light px-4 ISActiveTab" aria-current="page" href="#">Chat</a>
                                    </li>
                                    <li className="nav-item mx-0">
                                        <a className="nav-link fs-4 text-light px-4" href="#">Party</a>
                                    </li>
                                    <li className="nav-item mx-0">
                                        <a className="nav-link fs-4 text-light px-4" href="#">Friends</a>
                                    </li>
                                </ul>
                            </div>

                            <Chat/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SocialSection