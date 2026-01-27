import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submit,setsubmit]=useState([]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmit(prev=>[...prev,formData]);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Send Message
        </button>
        <button
        className="btn btn-secondary mt-3 w-100"
        onClick={() => navigate("/home")}
        >
            ← Back to Home
        </button>
        {submit.map((s)=>(<div>
                <h3>{s.name}</h3>
                <h3>{s.email}</h3>
                <h4>{s.message}</h4>
            </div>
            )   
        )}
      </form>
    </div>
  );
}
