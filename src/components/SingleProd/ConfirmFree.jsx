import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import './ConfirmPD.css';
import newRequest from '../../utils/newRequest';
import { Oval as Loader } from 'react-loader-spinner';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { BiError } from "react-icons/bi";

const ConfirmFree = () => {
  const { id } = useParams();
  const [countdwn, setCountdwn] = useState(10);
  const [project, setProject] = useState();
  const [downloadStatus, setDownloadStatus] = useState('downloading');

  const { error } = useQuery({
    queryKey: ['gig', id],
    queryFn: () =>
      newRequest.get(`projects/single/${id}`).then((res) => {
        setProject(res.data);
        return res.data;
      }),
  });

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

  return (
    <>
      <section className="project-section-wrapper">
        { error ? (
            <div className="network_error">
              <BiError size={50} />
            Network error. Try again!
            </div>
        ) : (
          <div className="project-container-fluid">
            {project?.isPaid ? (
              <h1>Asset purchased successfully</h1>
            ) : (
              <h1>Download your free asset</h1>
            )}
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
                      
                       <div className='error'><strong>There was an error downloading the file.</strong> Reload the page and try again after 5 seconds..</div>
                     
                    )}
                    </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ConfirmFree;
