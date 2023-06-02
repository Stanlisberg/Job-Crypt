import React, {useState}from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import { FaYoutubeSquare } from "react-icons/fa";
import { BsFillHandIndexThumbFill } from "react-icons/bs"
import { useNavigate} from 'react-router-dom';

function Job() {

  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true)
  }

  const handleModal = () => {
    setShowModal(false);
  }

  // ----------For date--------------
  const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
const day = currentDate.getDate();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const applyDate = `${day}/${month}/${year}`;
const applyTime = `${hours}:${minutes}:${seconds}`;

  return (
    <div className='job-container'>   
     <div>
      <button className='back' onClick={() => {navigate('/')}}>Go Back</button>
        <p><span><FaThumbsUp /></span>Staked (1 JCTUSDT) </p>
        <p>Connected Wallet: 0x08372c6e0b01876b8a4af71addc1853dab3101a5</p>
       
        <div className='job-first border'>
          <p style={{fontWeight: 'bold', fontSize: '17px'}}>web 3 Test Job</p>
          <p style={{fontWeight: 'bold', fontSize: '19px'}}>Job Crypt</p>
          <p>Job Crypt is a new innovative job board built entirely in Web3and hosted on the Blockchain</p>
        </div>
        <div className='job-second-div'>
            <div className='about'>
              <p style={{fontWeight: 'bold', fontSize: '17px'}}>About The Role</p>
              <p>The following is a test job that would be posted on jobCrypt main net</p>
              <p style={{fontWeight: 'bold', fontSize: '14px'}}>First posted: Thur Now 17 2022 07:25:24 GMT+0000 (GreenWich Mean Time)</p>
            </div>
            <div className='skills'>
              <p style={{fontWeight: 'bold', fontSize: '17px'}}>Key Skills</p>
              <p>Testing, Web3 BlockChain Discovery</p>
              <p 
                onClick={handleClick} 
                style={{
                  color: 'blue',
                  fontWeight: '500', 
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
                >Apply Details: hi@jobcrypt.com
                </p>
              <p><span><FaYoutubeSquare /></span>How to apply with job Crypt</p>
            </div>
        </div>
        <div className='apply-message' style={{color:'red'}}>
          Click the Apply Link above to apply<span style={{color:'black'}}> <BsFillHandIndexThumbFill /></span>
         </div>
        {showModal && (
          <div className={!showModal ? 'remove' : 'modal-div'}>
            <div className="job-modal">
              <div onClick={ handleModal } style={{textAlign: 'end', fontSize:'22px', fontWeight: 'bold', cursor: 'pointer'}}>x</div>
              <p style={{color: 'green', fontSize: '19px'}}>Applied Successfully!</p>
              <h2 style={{marginTop: '40px', fontSize:'26px'}}> Your Latest Job applications </h2>
              <div className='apply-div'>
                <div>
                  <p>Application Date</p>
                  <p>{applyDate}, {applyTime}</p>
                </div>
                <div>
                  <p>Title</p>
                  <p>Web 3 Test job</p>
                </div>
                <div>
                  <p>Link</p>
                  <p>hi@jobcrypt.com</p>
                </div>
                <div>
                  <p>Other Applicant</p>
                  <p>1</p>
                </div>
                <div>
                  <p>Status</p>
                  <p>OPEN</p>
                </div>
              </div>
            </div>
         </div>
        )}
        <div className='cate'>
             <p style={{fontWeight: 'bold', fontSize: '17px'}}>Job categories</p>
             <p>Testing, QA, Web3</p>
        </div>
      </div>
    </div>
  )
}

export default Job