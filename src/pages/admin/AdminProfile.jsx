import React, { useEffect, useState } from "react";
import "../user/Profile.css"
import { HiUserCircle } from "react-icons/hi2";
import { GrDocumentUpdate } from "react-icons/gr";
import { IoIosHelpCircleOutline } from "react-icons/io";
import {Link} from "react-router-dom";

const AdminProfile = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from session storage
    const storedUser = sessionStorage.getItem("user");

    if (storedUser) {
      // Parse the stored JSON string to get the user object
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

    return(
       <div className="profile-card-container">
          <div className="profile-section-cover">
            <div className="profile-image-content">
              <div className="image-cover"  style={{ backgroundColor: user?.iconColor || "#fff" }}><HiUserCircle size={200} color="#fff"/></div>
            </div>
          </div>
       <div className="card-profile-content">
          <div className="card-heading">
            <h3>My Account</h3>
            <button><GrDocumentUpdate size={17}/>Update</button>
          </div>
          <div className="card-body">
            <div className="admin-btns">
              <div className="ad-bt">
              <Link to="/add-project">Project</Link>
                <Link to="#">Categories</Link>
              </div>
                <div className="ad-bt">
                <Link to="#">Transactions</Link>
                <Link to="#">Users</Link>
                </div>
            </div>
          {user && ( 
          <form>
              <div className="form-body">
                <h6>USER INFORMATION</h6>
              <div className="form-section">
                  <div className="form-group">
                    <div className="col-6">
                    <label>Fullname</label>
                    <input type="text" placeholder={user.username || "N/A"} className="form-control"/>
                    </div>
                    <div className="col-6">
                    <label>Role</label>
                    <input type="text" placeholder={user.role || "N/A"} className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-6">
                    <label>Brand Name</label>
                    <input type="text" placeholder={user.brand || "N/A"} className="form-control"/>
                    </div>
                    <div className="col-6">
                    <label>Password</label>
                    <input type="text" placeholder={user.password || "N/A"} className="form-control"/>
                    </div>
                  </div>
                </div>
                </div>
              <hr/>
              <div className="form-body">
                <h6>CONTACT INFORMATION</h6>
                  <div className="form-section">
                    <div className="form-group">
                      <div className="col-6">
                      <label>Email</label>
                      <input type="text" placeholder={user.email || "N/A"} className="form-control"/>
                      </div>
                      <div className="col-6">
                      <label>Phone</label>
                      <input type="text" placeholder={user.phone || "N/A"} className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-6">
                      <label>Address</label>
                      <input type="text" placeholder={user.address || "N/A"} className="form-control"/>
                      </div>
                      <div className="col-6">
                      <label>Country</label>
                      <input type="text" placeholder={user.country || "N/A"} className="form-control"/>
                      </div>
                    </div>
                  </div>
                  </div>
              <hr/>
              <div className="form-body">
                <h6>NOTIFICATION</h6>
                  <div className="form-section">
                    <div className="form-group">
                      <div className="col-12">
                      <label>Projects</label>
                      <textarea type="text" placeholder="" className="form-control"/>
                      </div>
                    </div>
                  </div>
                  </div>
            </form>
             )}
            </div>
       </div>
       <div className="card-footer"><IoIosHelpCircleOutline size={20}/>Contact <a>support</a> for help</div>
       </div>
    );

};

export default AdminProfile;