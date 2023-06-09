import React, { useState, useRef } from "react";
import { BsFillHandIndexThumbFill } from "react-icons/bs"
import { useNavigate} from 'react-router-dom';
import { FaYoutubeSquare } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { TbBrandTwitter } from "react-icons/tb";
import { TbBrandTiktok } from "react-icons/tb";
import { AiFillYoutube } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { toast } from 'react-toastify'


function Home() {
  const [value, setValue] = useState();
  const [message, setMessage] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalBox, setModalBox] = useState(false);

  const inputRef = useRef();
  const modalRef = useRef();

  const navigate = useNavigate();

  setTimeout(() => {
    if (modalRef.current && modalBox == true) {
        modalRef.current.classList.add("modal-div-background");
        toast.success('Staked Successfully!')
        navigate('/job')
        // console.log(modalRef.current);
    }
  }, 3000);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleEmail = (e) => {
    if (inputRef.current.value == "") {
      setMessage("This field is required.");
    } else if (!inputRef.current.value.includes("@gmail.com")) {
      setMessage("Please enter a valid email address.");
    } else {
      window.location.reload();
      alert("Registerd Successfully!");
    }
    e.preventDefault();
  };

  const inputEmail = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="container">
      <div className="bot">
        <img className="image" src="images/mes.png" width="60" height="60" />
      </div>
      <div className="wrapper">
        <div className="first-row">
          <div className="icon-div">
            <FaYoutubeSquare size={19} />
            <span className="how-to">How to use JobCrypt</span>
          </div>
          <div>
            {" "}
            <FaExclamationCircle size={18} />
            <button className="button-click">
              Click here to install MetaMask!
            </button>
            <span className="need-crypto">Need Crypto?</span>
            <span className="text">Test net use faucet!!</span>
          </div>
        </div>
        <div className="second-row">
          <div className="job-logo">
            <img
              src="https://sepoliajobcrypt.on.fleek.co/media/jclogo.svg"
              width="50"
              height="50"
            />
            <div className="job-text">
              <p>Job</p>
              <p className="crypt">Crypt</p>
            </div>
          </div>
          <button className="button-post">Post a Job</button>
          <TbBrandTwitter className="twitter" size={20} />
          <FaDiscord className="discord" size={20} />
          <TbBrandTiktok className="tiktok" size={22} />
          <AiFillYoutube className="youtube" size={20} />
        </div>
        <div className="third-row">
          <div className="third-row-first">Employer</div>
          <div className="third-row-second">| Job Seeker</div>
        </div>
        <div className="fourth-row">
          <div className="fourth-row-text">
            Connect Web 3 to view the latest jobs!!
          </div>
          <div className="fourth-row-div">
            <p>Latest Jobs</p>
            <div>
              <FaExclamationCircle size={18} />
              <button className="button-stake" onClick={handleClick}>
                Click here to stake!
              </button>
              <span className="approve">Approve FIRST to stake</span>
            </div>
            <div className="not-stake">
              Not Staked- to appy for jobs, pleae stake: 1JCTUSDT
            </div>
          </div>
        </div>
        <div className='click-stake'>
            Note: Click the button above to Stake<span style={{color: 'black'}}> <BsFillHandIndexThumbFill /></span>
        </div>
        {showModal && (
          <div className="modal-div" ref={modalRef}>
            <div className={modalBox ? "modal-deactive" : "modal"}>
              <div 
               className="permit"
               style={{
                fontSize:'20px',
                fontWeight: 'bold'
               }}>
                Give Permission to access your JCTUSDT?
              </div>
              <div className="one">
                <img></img>
                <button 
                 style={{
                  fontSize:'20px',
                  border: '1px solid black',
                  padding: '10px 10px',
                  borderRadius: '10px',
                  marginTop: '10px'
                 }}
                 >Sepolia Eth Network</button>
                <img></img>
              </div>
              <div className="two">
                <div 
                 style={{
                  fontSize:'19px',
                  fontWeight: '600',
                  color:'lightseagreen',
                  marginTop:  '10px'
                 }}
                >Completed Account</div>
                <img></img>
              </div>
              <div className="three">
                <div></div>
                <div>0.3995SepoliaETH</div>
                <div>
                  <img></img>
                  <img></img>
                  <img></img>
                </div>
              </div>
              <div className="four">
                <div style={{
                  display: 'flex',
                  justifyContent: "space-between"
                }}>
                  <p>Transaction Fee</p>
                  <span>edit</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: "space-between"
                }}>
                  <p>Processing Fee</p>
                  <p style={{
                    fontWeight: 'bold'
                  }}>$1.00</p>
                </div>
              </div>
              <div className="six">
                <button
                  className='reject-button'
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                >
                  Reject
                </button>
                <button
                  className='confirm-button'
                  onClick={() => {
                    setModalBox(!modalBox);
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
            <div className={modalBox ? "show-loading" : "remove-loading"}>
              Please Wait...
            </div>
          </div>
        )}
        <div className="fifth-row">
          <div className="fifth-row-first">
            <p>Winner Browsers</p>
            <p>3000 - Filecoin</p>
            <p>Prize</p>
          </div>
          <div className="fifth-row-join">
            <img
              className="fifth-row-hack"
              src="images/hack.png"
              width="165"
              height="93"
            />
            <div>
              <p>Filecoin Next Steps</p>
              <p>Micro Grant -</p>
              <p>Awardee 2021</p>
            </div>
          </div>
          <img
            className="fifth-row-file"
            src="images/filecoin.png"
            width="500"
            height="140"
          />
        </div>
        <div className="sixth-row">
          <p className="sixth-row-first">Ready to start?</p>
          <p className="sixth-row-second">
            Get the latest jobs direct to your inbox
          </p>
          <div className="indicate-div">
            <p className="indicate-para">*</p>
            <p className="sixth-row-third">indicates required</p>
          </div>
          <div className="email-div">
            <p className="sixth-row-fourth">Email Address</p>
            <p className="email-para">*</p>
          </div>
          <form>
            <input
              className={
                message ? "border-red sixth-row-input" : "sixth-row-input"
              }
              type="email"
              placeholder="enter your email ..."
              value={value}
              onChange={inputEmail}
              ref={inputRef}
              // required='required'
            />
            {message && (
              <div
                style={{
                  textAlign: "start",
                  color: "#e85c41",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
              >
                {message}
              </div>
            )}
            <br />
            <button className="sixth-row-button" onClick={handleEmail}>
              Join Alert List
            </button>
          </form>
        </div>
        <div className="seventh-row">
          <div className="seventh-row-first">
            <p className="span">&copy; 2022 Job Crypt</p>
            <p>
              <span className="span">Framework by</span> Uisual
            </p>
            <p>
              <span className="span">Powered By</span> Open Block El
            </p>
          </div>
          <ul className="ul-div">
            <li>about</li> |<li>terms</li> |<li>privacy policy</li> |
            <li>cookie policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
