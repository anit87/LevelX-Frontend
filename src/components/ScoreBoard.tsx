// import React from 'react'

type Props = {}

const ScoreBoard = (props: Props) => {
  console.log(props);

  return (
    <>
      <div className="col-md-12 px-lg-10 mb-8 mt-6">
        <div className="card border-top border-muted border-1 card-hover-with-icon" style={{ backgroundColor: 'rgba(20, 20, 20, 0.7)' }} >
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">

              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <img src="images/navi.png" alt="..." />
                </div>
                <p className="flex-grow-1 mx-3 text-light"> NAVI </p>
              </div>
              <div className="align-self-start d-flex align-items-center">
                <div>
                  <div className="d-flex gap-1 py-2">
                    <div style={{ height: '7px', width: '18px', backgroundColor: '#fff', borderRadius: '2px' }} />
                    <div style={{ height: '7px', width: '18px', backgroundColor: '#fff', borderRadius: '2px' }} />
                  </div>
                  <p className="mx-3 fs-1 text-light py-2" style={{fontSize:'25px'}} > 9 </p>
                </div>
                <div className="text-light text-center">
                  <p className="fs-2" >0:34</p>
                  <p className="fs-3 " >Day 1</p>
                  <p className="fs-3" >ESL Pro League Season 18</p>

                </div>
                <div>
                  <div className="d-flex gap-1 py-2">
                    <div style={{ height: '7px', width: '18px', backgroundColor: '#fff', borderRadius: '2px' }} />
                    <div style={{ height: '7px', width: '18px', backgroundColor: '#fff', borderRadius: '2px' }} />
                  </div>
                  <p className="mx-3 fs-1 text-light py-2"> 9 </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <img src="images/astr.png" alt="..." />
                </div>
                <p className="flex-grow-1 mx-3 text-light"> Astralis </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScoreBoard