import "./User.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublishIcon from "@mui/icons-material/Publish";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.freeimages.com/images/large-previews/218/my-dog-cutter-1499799.jpg"
              alt=""
              className="userImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserName">Ajithkumar</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userTitle1">
            <span className="userShowTitlt">Account Details</span>
          </div>
          <div className="userShowInfo">
            <PermIdentityIcon className="userShowIcon" />
            <span className="userShowInfoTitle">Ajee006</span>
          </div>
          <div className="userShowInfo">
            <CalendarMonthIcon className="userShowIcon" />
            <span className="userShowInfoTitle">01-01-2023</span>
          </div>
          <span className="userShowTitlt">Contact Details</span>

          <div className="userShowInfo">
            <ContactPhoneIcon className="userShowIcon" />
            <span className="userShowInfoTitle">+917418388557</span>
          </div>
          <div className="userShowInfo">
            <MailOutlineIcon className="userShowIcon" />
            <span className="userShowInfoTitle">akxerox@mail.com</span>
          </div>
          <div className="userShowInfo">
            <HomeIcon className="userShowIcon" />
            <span className="userShowInfoTitle">
              Chennai | Tamil Nadu | India
            </span>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <div className="userUpdateTitleuploader">
            <form action="" className="userUpdateForm">
              <div className="userUpdateItem">
                <label>Username </label>
                <input
                  type="text"
                  placeholder="Ajeee"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label> Date </label>
                <input
                  type="date"
                  placeholder="akxerox@mail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Contact Number </label>
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email </label>
                <input
                  type="mail"
                  placeholder="Email"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="userUpdateInput"
                />
              </div>
            </form>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://images.freeimages.com/images/large-previews/415/brotherhood-at-sunset-1-1244631.jpg"
                  alt=""
                  className="userUpdateImg"
                />

                <label htmlFor="file">
                  <PublishIcon />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
