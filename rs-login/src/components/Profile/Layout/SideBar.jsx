import React from "react";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="title-Menu">
        <h4>Menu</h4>
      </div>
      <ul className="list-unstyled">
        <li className="active">
          <a href="#">Thông tin cá nhân</a>
        </li>
        <li>
          <a href="#">Đổi mật khẩu</a>
        </li>
        <li>
          <a href="#">Lộ trình học</a>
        </li>
        <li>
          <a href="#">Thông tin thêm</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
