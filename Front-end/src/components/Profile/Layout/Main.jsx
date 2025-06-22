import React, { useState } from "react";

const Main = () => {
  const [inputOn, setInputOn] = useState(true);
  // const [title,setTitle]=useState('');
  const inputEnable = () => {
    setInputOn(!inputOn);
  };
  return (
    <div className="content p-3">
      <div className="row">
        <h4>Thông tin cá nhân</h4>
      </div>
      <div className="row">
        <div className="col-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            alt="Ảnh đại diện"
            className="img-fluid rounded-circle"
          />
          <button className="btn btn-primary mt-2">Upload</button>
        </div>
        <div className="col-9">
          <ul className="list-group">
            <li className="list-group-item d-flex align-items-center">
              <label className="col-2" htmlFor="student-id">
                Mã sinh viên:{" "}
              </label>
              <input
                type="text"
                id="student-id"
                name="student-id"
                disabled={inputOn}
              />
            </li>
            <li className="list-group-item d-flex align-items-center">
              <label className="col-2" htmlFor="fullname">
                Họ và tên:{" "}
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                disabled={inputOn}
              />
            </li>
            <li className="list-group-item d-flex align-items-center">
              <label className="col-2" htmlFor="class-name">
                Tên lớp:{" "}
              </label>
              <input
                type="text"
                id="class-name"
                name="class-name"
                disabled={inputOn}
              />
            </li>
            <li className="list-group-item d-flex align-items-center">
              <label className="col-2" htmlFor="birth">
                Ngày sinh:{" "}
              </label>
              <input type="text" id="birth" name="birth" disabled={inputOn} />
            </li>
            <li className="list-group-item d-flex align-items-center">
              <label className="col-2" htmlFor="address">
                Địa chỉ:{" "}
              </label>
              <input
                type="text"
                id="address"
                name="address"
                disabled={inputOn}
              />
            </li>
            <li className="list-group-item d-flex align-items-center">
              <label className="col-2" htmlFor="email">
                Email:{" "}
              </label>
              <input type="email" id="email" name="email" disabled={inputOn} />
            </li>
          </ul>
          <button className="btn btn-success mt-3" onClick={inputEnable}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
