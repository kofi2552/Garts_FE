import { useEffect, useState} from "react"
import {useLocation } from "react-router-dom";
import "./ConfirmPD.css"
import newRequest from "../../utils/newRequest";
import { Oval as Loader } from "react-loader-spinner";

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


  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdwn((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

          if (countdwn === 0) {
        clearInterval(countdownInterval);
  
        // After the countdown, initiate the download
        if (project && project?.projectFileUrl) {
          initiateDownload(project.projectFileUrl);
        }
  
        console.log("File download initiated", project?.projectFileUrl);
      }

    return () => clearInterval(countdownInterval);
  }, []);


  const extractFilenameFromUrl = (fileUrl) => {
  const urlParts = fileUrl.split('/');
  return urlParts[urlParts.length - 1];
};

const initiateDownload = async (fileUrl) => {
  try {
    setDownloadStatus('fileready');
    const response = await newRequest.get(`download/${extractFilenameFromUrl(fileUrl)}`, {
      responseType: 'blob',  // Set responseType to 'blob' to handle binary data
    });

    localStorage.setItem('downloadedFileUrl', fileUrl);
    // const file_location = localStorage.setItem("user", response.data.);
    // Create a Blob from the response data
    const blob = new Blob([response.data], { type: response.headers['content-type'] });

    // Create a link element and trigger a download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = extractFilenameFromUrl(fileUrl);
    link.click();

    // Clean up
    window.URL.revokeObjectURL(link.href);
    setDownloadStatus("success");
  } catch (error) {
    console.error('Error initiating download:', error);
    setDownloadStatus("error downloading");
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


  return (
    <>
      <section className="project-section-wrapper">
        <div className="project-container-fluid">
          {project?.isPaid ? (<h1>Asset purchased successfully</h1>) : (<h1>Download your free asset</h1>)}
          <div className="detail-container">
                    <div className="image-content">
                        <img src={project?.image} alt="" loading="lazy" />
                    </div>
                    <h2>{project?.title}</h2>
                    <div className='loading-states'>
                    {downloadStatus === 'downloading' && (
                        <div className="loader-group">
                        <div className="countdown-circle">{countdwn}</div>
                        <Loader type="Oval" color="#fff" height={90} width={90} />
                        </div>
                    )}
                    {downloadStatus === 'fileready' && (
                       <div className="loader-group">
                       <div className='flrdy-text'>almost ready..</div>
                       <Loader type="Oval" color="#fff" height={100} width={100} />
                       </div>
                    )}
                     {downloadStatus === 'success' && (
                        <>
                        <div className="download-success">
                        <IoCheckmarkDoneCircleOutline size={60} />
                        <div className="download-success">Download successful</div>
                        </div>

                        <div className="asset-info">
                        <p>We are preparing the file. Your download will begin shortly</p>
                        <div className="act-dwn">
                            If your download doesn't start automatically, click <a onClick={retryDownload}>here</a>
                        </div>
                        </div>
                        </>
                    )}
                     {downloadStatus === 'error' && (
                      
                       <div className='error'><strong>There was an error downloading the file.</strong> Reload the page and try again after 5 seconds..</div>
                     
                    )}
                    </div>
                   
            </div>
        </div>
      </section>
     
    </>
  );
};

export default ConfirmProDownload;
