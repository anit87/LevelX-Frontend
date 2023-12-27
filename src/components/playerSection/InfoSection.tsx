// import React from 'react'
import "./InfoSection.css"

type Props = {}

const InfoSection = (props: Props) => {
  return (
    <>
      <div className="col-md-12 px-lg-10 mb-8 mt-6 ">
        <div className="card card-hover-with-icon" style={{ backgroundColor: 'rgba(22, 26, 28, 0.7)' }} >
          <div className="card-body">
            <div className="d-flex flex-column gap-4 align-items-center justify-content-center">

              <div className="p-2 rounded" style={{ backgroundColor: '#c43b46', borderRadius: '2px' }}>
                <ul className="nav nav-pills">
                  <li className="nav-item mx-0">
                    <a className="nav-link fs-4 text-light px-4 ISActiveTab" aria-current="page" href="#">Info</a>
                  </li>
                  <li className="nav-item mx-0">
                    <a className="nav-link fs-4 text-light px-4" href="#">Player</a>
                  </li>
                  <li className="nav-item mx-0">
                    <a className="nav-link fs-4 text-light px-4" href="#">Tournament</a>
                  </li>
                </ul>
              </div>
              <div className="rounded text-light d-flex gap-2 align-self-end" style={{ backgroundColor: '#48494c' }} >
                <p className="fs-4 m-1 px-2 ">K</p>
                <p className="fs-4 m-1 px-2 ">D</p>
                <p className="fs-4 m-1 px-2 ">A</p>
              </div>
              <div className="d-flex flex-column gap-1" style={{width: '100%'}}>
                <div className="d-flex justify-content-between gap-2 rounded text-light" style={{ backgroundColor: '#247e70', width: '100%' }} >
                  <p className="fs-4 m-1 px-2 ">Oxxx</p>
                  <img src="images/p1.png" alt='' />
                  <div className="rounded text-light d-flex gap-2 align-self-end">
                    <p className="fs-4 m-1 px-2 ">21</p>
                    <p className="fs-4 m-1 px-2 ">8</p>
                    <p className="fs-4 m-1 px-2 ">9</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-2 rounded text-light" style={{ backgroundColor: '#247e70', width: '100%' }} >
                  <p className="fs-4 m-1 px-2 ">Oxxx</p>
                  <img src="images/p1.png" alt='' />
                  <div className="rounded text-light d-flex gap-2 align-self-end">
                    <p className="fs-4 m-1 px-2 ">21</p>
                    <p className="fs-4 m-1 px-2 ">8</p>
                    <p className="fs-4 m-1 px-2 ">9</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-2 rounded text-light" style={{ backgroundColor: '#247e70', width: '100%' }} >
                  <p className="fs-4 m-1 px-2 ">Oxxx</p>
                  <img src="images/p1.png" alt='' />
                  <div className="rounded text-light d-flex gap-2 align-self-end">
                    <p className="fs-4 m-1 px-2 ">21</p>
                    <p className="fs-4 m-1 px-2 ">8</p>
                    <p className="fs-4 m-1 px-2 ">9</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-2 rounded text-light" style={{ backgroundColor: '#247e70', width: '100%' }} >
                  <p className="fs-4 m-1 px-2 ">Oxxx</p>
                  <img src="images/p1.png" alt='' />
                  <div className="rounded text-light d-flex gap-2 align-self-end">
                    <p className="fs-4 m-1 px-2 ">21</p>
                    <p className="fs-4 m-1 px-2 ">8</p>
                    <p className="fs-4 m-1 px-2 ">9</p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column gap-1" style={{width: '100%'}}>
                <div className="d-flex justify-content-between gap-2 rounded text-light" style={{ backgroundColor: '#80513c', width: '100%' }} >
                  <p className="fs-4 m-1 px-2 ">Oxxx</p>
                  <img src="images/p2.png" alt='' />
                  <div className="rounded text-light d-flex gap-2 align-self-end">
                    <p className="fs-4 m-1 px-2 ">21</p>
                    <p className="fs-4 m-1 px-2 ">8</p>
                    <p className="fs-4 m-1 px-2 ">9</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-2 rounded text-light" style={{ backgroundColor: '#80513c', width: '100%' }} >
                  <p className="fs-4 m-1 px-2 ">Oxxx</p>
                  <img src="images/p2.png" alt='' />
                  <div className="rounded text-light d-flex gap-2 align-self-end">
                    <p className="fs-4 m-1 px-2 ">21</p>
                    <p className="fs-4 m-1 px-2 ">8</p>
                    <p className="fs-4 m-1 px-2 ">9</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-2 rounded text-light" style={{ backgroundColor: '#80513c', width: '100%' }} >
                  <p className="fs-4 m-1 px-2 ">Oxxx</p>
                  <img src="images/p2.png" alt='' />
                  <div className="rounded text-light d-flex gap-2 align-self-end">
                    <p className="fs-4 m-1 px-2 ">21</p>
                    <p className="fs-4 m-1 px-2 ">8</p>
                    <p className="fs-4 m-1 px-2 ">9</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-2 rounded text-light" style={{ backgroundColor: '#80513c', width: '100%' }} >
                  <p className="fs-4 m-1 px-2 ">Oxxx</p>
                  <img src="images/p2.png" alt='' />
                  <div className="rounded text-light d-flex gap-2 align-self-end">
                    <p className="fs-4 m-1 px-2 ">21</p>
                    <p className="fs-4 m-1 px-2 ">8</p>
                    <p className="fs-4 m-1 px-2 ">9</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoSection