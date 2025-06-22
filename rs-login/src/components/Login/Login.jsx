import { useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const studentId = useRef(null);
  const password = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentId != null && password != null) {
      if (
        document.getElementById("student-id").value == "admin" &&
        document.getElementById("password").value == "admin"
      )
        navigate("/profile");
      else {
        setError(!error);
      }
    }
  };
  return (
    <div className="container">
      <div className="headerLogin">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1557979547083-92NOCFN0R9EAX4XSWGZN/images.png"
          alt="STU Logo"
          className="logo"
        />
        <h1>Hệ Thống Hỗ Trợ Học Tập</h1>
        <p>Trường Đại học Công Nghệ Sài Gòn</p>
      </div>
      <div className="form-container">
        {error && (
          <div className="alert alert-error" id="error-message">
            <div className="alert-icon">!</div>
            <span>Thông tin đăng nhập không chính xác. Vui lòng thử lại.</span>
          </div>
        )}
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="student-id">Mã số sinh viên (MSSV)</label>
            <input
              type="text"
              id="student-id"
              name="student-id"
              className="form-control"
              placeholder="Nhập MSSV của bạn"
              ref={studentId}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="form-control"
              placeholder="Nhập mật khẩu"
              ref={password}
              required
            />
            <span
              className="toggle-password"
              id="toggle-password"
              onClick={togglePassword}
            >
              {showPassword ? "Ẩn" : "Hiện"}
            </span>
          </div>

          <div className="remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Lưu thông tin đăng nhập</label>
          </div>

          <button type="submit" className="btn">
            Đăng nhập
          </button>
        </form>
      </div>
      <div className="footer">
        <p>
          Quên mật khẩu? <a href="#">Nhấn vào đây</a>
        </p>
        <p style={{ marginTop: "8px" }}>
          © 2025 Trường Đại học Công Nghệ Sài Gòn
        </p>
      </div>
    </div>
  );
};

export default Login;
