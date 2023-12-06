import './ManualComponent.css'
import read11 from '../../../images/read11.png'
import read22 from '../../../images/read22.png'
import readqr1 from '../../../images/readqr1.png'
import readqr2 from '../../../images/readqr2.png'
import readqr3 from '../../../images/readqr3.png'


export function ManualComponent() {
    return (
        <div className="row-manual">
            <div className="row">
                <label className="labl-manual">USER MANUAL</label>
            </div>
            <p className='about'>
                The instructions provide a detailed explanation of the 
                recommended way to use the NFC tag reading and QR code 
                scanning functions. The guidelines cover steps for effectively 
                utilizing these functions, ensuring users have a comprehensive 
                understanding of the process and achieve maximum efficiency in 
                harnessing these technologies. With the outlined procedures in 
                the instructions, users should be able to seamlessly navigate 
                the application, accomplishing their intended goals related to 
                food quality control.
            </p>
            <span className="br"></span>
            <div className="row2">
                <label className="labl">READ NFC</label>
            </div>
            <span className="br2"></span>
            <p className='about'>
                1. Click the "Read" button and bring the tag near the reader 
                behind your smartphone.
                <span className="br"></span>
            </p>
            <img src={read11} />

            <p className='about'>
                2. Hold the NFC tag close to the reader until the reading action 
                is completed and the appropriate message is displayed. Repeat the 
                action by clicking the "Read" button again.
                <span className="br"></span>
            </p>
            <img src={read22} />
            <span className="br"></span>

            <div className="row2">
                <label className="labl">READ QR CODE</label>
            </div>
            <span className="br2"></span>
            <p className='about'>
                1. Click the "Request Camera Permissions" button.
                <span className="br"></span>
            </p>
            <img src={readqr1} />

            <p className='about'>
                2. Select your camera from the dropdown menu, and then click 
                the "Start Scanning" button. 
                <span className="br"></span>
            </p>
            <img src={readqr2} />

            <p className='about'>
                3. Point the camera at the QR code to decode it, and wait for 
                the decoded product information to be displayed. You can also 
                turn on the camera flash by clicking the "Switch on torch" button 
                if the code is poorly visible. After decoding the QR code, you can 
                stop scanning by clicking the "Stop Scanning" button.
                <span className="br"></span>
            </p>
            <img src={readqr3} />
        </div>
    );
}