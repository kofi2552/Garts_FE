import { useEffect, useState} from "react"
import {useLocation } from "react-router-dom";
import "./ConfirmPD.css"
import newRequest from "../../utils/newRequest";
import { Oval as Loader } from "react-loader-spinner";
import { BiError } from "react-icons/bi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const ConfirmProDownload = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const reference = queryParams.get("reference");
  const [countdwn, setCountdwn] = useState(10);
  const [project, setProject] = useState();
  const [downloadStatus, setDownloadStatus] = useState("downloading");

const sendPutRequest = async () => {
    try {
      console.log("reference:",reference);

      const response = await newRequest.post(`pay/verify_payment/${reference}`);

      console.log("response from back:", response.data);

      if (response.data.status === "success") {
        // If success, set project
        setProject(response.data.gigData);
      }
    } catch (error) {
      console.error("Error sending post request:", error);
    }
  };

  useEffect(() => {
    if (reference) {
      sendPutRequest();
    }
  }, [reference]);


  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdwn((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    if (countdwn === 0) {
      clearInterval(countdownInterval);

      if (project && project?.projectFileUrl) {
        initiateDownload(project.projectFileUrl);
      }
    }

    return () => clearInterval(countdownInterval);
  }, [countdwn, project]);

  const extractFilenameFromUrl = (fileUrl) => {
    console.log("File URL:", fileUrl);
    const urlParts = fileUrl.split('/');
    // console.log("URL Parts:", urlParts);
    return urlParts[urlParts.length - 1];
  };

  const initiateDownload = async (fileUrl) => {
    try {
        setDownloadStatus('fileready');
      const response = await newRequest.get(`download/${extractFilenameFromUrl(fileUrl)}`, {
        responseType: 'blob',
      });

      localStorage.setItem('downloadedFileUrl', fileUrl);

      const blob = new Blob([response.data], { type: response.headers['content-type'] });

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = extractFilenameFromUrl(fileUrl);
      link.click();

     
      window.URL.revokeObjectURL(link.href);
      setDownloadStatus('success');
    } catch (error) {
      console.error('Error initiating download:', error);
      setDownloadStatus('error');
    }
  };

  const retryDownload = () => {
    // Retrieve the fileUrl from local storage
    const fileUrl = localStorage.getItem('downloadedFileUrl');
  
    if (fileUrl) {
      // If fileUrl is found, initiate the download
      initiateDownload(fileUrl);
    } else {
      console.error('No file URL found in local storage');
    }
  };


  const urlencodedtext="Hello Gart, I have a challenge!"

  return (
    <>
      <section className="project-section-wrapper">
        <div className="project-container-fluid">
          <div className="project-container-fluid">
              <h1>Asset purchased successfully</h1>
              <div className="detail-container">
                    <div className="image-content">
                        <img src={project?.image} alt="" loading="lazy" />
                    </div>
                    <h2>{project?.title}</h2>
                    <div className='loading-states'>
                          {downloadStatus === 'downloading' && (
                            <>
                              <div className="loader-group">
                              <div className="countdown-circle">{countdwn}</div>
                              <Loader type="Oval" color="#fff" height={90} width={90} />
                              </div>
                              <p className="loading-text">Downloading...</p>
                              </>
                          )}
                          {downloadStatus === 'fileready' && (
                            <>
                            <div className="loader-group">
                            <div className='flrdy-text'>almost ready..</div>
                            <Loader type="Oval" color="#fff" height={100} width={100} />
                            </div>
                              <div className="asset-info">
                              <p>We are preparing the file. Your download will begin shortly</p>
                              </div>
                              </>
                          )}
                          {downloadStatus === 'success' && (
                              <>
                              <div className="download-success">
                              <IoCheckmarkDoneCircleOutline size={60} />
                              <div className="download-success">Download successful</div>
                              </div>
                                <div className="asset-info">
                                  <div className="act-dwn">
                                      If your download didn't start automatically, click <a onClick={retryDownload}>here</a>
                                  </div>
                                </div>
                              </>
                          )}
                          {downloadStatus === 'error' && (
                            <div className='error'><BiError size={40} />
                              <strong>There was an error downloading the file.</strong> Reload the page and try again after 5 seconds..
                              </div>
                          )}
                    </div>
            </div>
          </div>
                <div className="card-footer"><IoIosHelpCircleOutline size={20}/>Contact <a href={`https://wa.me/0209064593?text=${urlencodedtext}`}>support</a> for help</div>
        </div>
      </section>
     
    </>
  );
};

export default ConfirmProDownload;








  //   const countdownInterval = setInterval(() => {

  //     setCountdwn((prevCountdown) => prevCountdown - 1);
  //     // console.log(`Countdown: ${countdown}`);
  //     // countdown--;
  
  //     if (countdown === 0) {
  //       clearInterval(countdownInterval);
  
  //       // After the countdown, initiate the download
  //       if (project && project?.projectFileUrl) {
  //         initiateDownload(project.projectFileUrl);
  //       }
  
  //       console.log("File download initiated", project?.projectFileUrl);
  //     }
  //   }, 1000);
  
  //   // Cleanup the interval when the component unmounts
  //   return () => clearInterval(countdownInterval);
  // }, [countdwn, project]);


  // Function to extract filename from the URL

//   useEffect(() => {
//     const countdownInterval = setInterval(() => {
//       setCountdwn((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
//     }, 1000);

//           if (countdwn === 0) {
//         clearInterval(countdownInterval);
  
//         // After the countdown, initiate the download
//         if (project && project?.projectFileUrl) {
//           initiateDownload(project.projectFileUrl);
//         }
  
//         console.log("File download initiated", project?.projectFileUrl);
//       }

//     return () => clearInterval(countdownInterval);
//   }, [countdwn, project]);


//   const extractFilenameFromUrl = (fileUrl) => {
//     console.log("File URL:", fileUrl);
//   const urlParts = fileUrl.split('/');
//   return urlParts[urlParts.length - 1];
// };

// const initiateDownload = async (fileUrl) => {
//   try {
//     setDownloadStatus('fileready');
//     const response = await newRequest.get(`download/${extractFilenameFromUrl(fileUrl)}`, {
//       responseType: 'blob',  // Set responseType to 'blob' to handle binary data
//     });

//     localStorage.setItem('downloadedFileUrl', fileUrl);

//     // Create a Blob from the response data
//     const blob = new Blob([response.data], { type: response.headers['content-type'] });

//     // Create a link element and trigger a download
//     const link = document.createElement('a');
//     link.href = window.URL.createObjectURL(blob);
//     link.download = extractFilenameFromUrl(fileUrl);
//     link.click();

//     // Clean up
//     window.URL.revokeObjectURL(link.href);
//     setDownloadStatus("success");
//   } catch (error) {
//     console.error('Error initiating download:', error);
//     setDownloadStatus("error");
//   }
// };

// const retryDownload = () => {
//   // Retrieve the fileUrl from local storage
//   const fileUrl = localStorage.getItem('downloadedFileUrl');

//   if (fileUrl) {
//     // If fileUrl is found, initiate the download
//     initiateDownload(fileUrl);
//   } else {
//     console.error('No file URL found in local storage');
//   }
// };