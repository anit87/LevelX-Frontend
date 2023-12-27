import React from 'react'

type Props = {}

const Chat = (props: Props) => {
    return (
        <>
            <div className="rounded text-light d-flex gap-2 align-self-start" style={{ backgroundColor: '#48494c' }} >
                <p className="fs-4 m-1 px-2 ">Live Chat</p>
            </div>

            <div className="d-flex flex-column gap-1" style={{ width: '100%' }}>

                <div className="d-flex align-items-center gap-2 rounded text-light" style={{ width: '100%' }} >
                    <div className="fs-4 m-1 px-2 rounded-circle" style={{height:'40px', width:'40px', backgroundColor:'#247e70' }} />
                    <div className="rounded text-light d-flex flex-column">
                        <p className="fs-5 mb-0" style={{color:'#ed414e'}} >Nipun</p>
                        <p className="fs-6 mb-0">Hello Every One</p>
                        <p className="fs-6 mb-0">9</p>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-2 rounded text-light" style={{ width: '100%' }} >
                    <div className="fs-4 m-1 px-2 rounded-circle" style={{height:'40px', width:'40px', backgroundColor:'#247e70' }} />
                    <div className="rounded text-light d-flex flex-column">
                        <p className="fs-5 mb-0" style={{color:'#ed414e'}} >Nipun</p>
                        <p className="fs-6 mb-0">Hello Every One</p>
                        <p className="fs-6 mb-0">9</p>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-2 rounded text-light" style={{ width: '100%' }} >
                    <div className="fs-4 m-1 px-2 rounded-circle" style={{height:'40px', width:'40px', backgroundColor:'#247e70' }} />
                    <div className="rounded text-light d-flex flex-column">
                        <p className="fs-5 mb-0" style={{color:'#ed414e'}} >Nipun</p>
                        <p className="fs-6 mb-0">Hello Every One</p>
                        <p className="fs-6 mb-0">9</p>
                    </div>
                </div>

               
            </div>
        </>
    )
}

export default Chat