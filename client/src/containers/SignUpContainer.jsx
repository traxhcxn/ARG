import React, { useState } from 'react';
import { BaseInput, PasswordInput } from '../components/Inputs';
import { AppButton } from '../components/Buttons';
import { Link } from 'react-router-dom';
import { adminSignUp } from '../services/adminServices';

function SignUpContainer() {

  const [adminSignUpData, setAdminSignUpData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    institution_name: '',
    password_create: '',
    password_confirm: ''
  });
  const [errors, setErrors] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    institution_name: '',
    password_create: '',
    password_confirm: ''
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  // Regex patterns
  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const phoneRegex = /^\d{0,10}$/;
  const institutionRegex = /^[A-Za-z ]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

  const onDataChange = (event) => {
    const { name, value } = event.target;
    setAdminSignUpData({ ...adminSignUpData, [name]: value });

    // Validate on change
    if (name === 'first_name') {
      if (!nameRegex.test(value)) {
        setErrors((prev) => ({ ...prev, first_name: 'First name can only contain letters and spaces.' }));
      } else {
        setErrors((prev) => ({ ...prev, first_name: '' }));
      }
    }
    if (name === 'last_name') {
      if (!nameRegex.test(value)) {
        setErrors((prev) => ({ ...prev, last_name: 'Last name can only contain letters and spaces.' }));
      } else {
        setErrors((prev) => ({ ...prev, last_name: '' }));
      }
    }
    if (name === 'email') {
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
      } else {
        setErrors((prev) => ({ ...prev, email: '' }));
      }
    }
    if (name === 'phone') {
      if (!phoneRegex.test(value)) {
        setErrors((prev) => ({ ...prev, phone: 'Phone number must be up to 10 digits.' }));
      } else {
        setErrors((prev) => ({ ...prev, phone: '' }));
      }
    }
    if (name === 'institution_name') {
      if (!institutionRegex.test(value)) {
        setErrors((prev) => ({ ...prev, institution_name: 'Institution name can only contain letters and spaces.' }));
      } else {
        setErrors((prev) => ({ ...prev, institution_name: '' }));
      }
    }
    if (name === 'password_create') {
      if (!passwordRegex.test(value)) {
        setErrors((prev) => ({ ...prev, password_create: 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.' }));
      } else {
        setErrors((prev) => ({ ...prev, password_create: '' }));
      }
    }
    if (name === 'password_confirm') {
      if (value !== adminSignUpData.password_create) {
        setErrors((prev) => ({ ...prev, password_confirm: "Passwords don't match." }));
      } else {
        setErrors((prev) => ({ ...prev, password_confirm: '' }));
      }
    }
  };

  const onSignUpButtonClicked = async () => {
    // Final validation before submit
    let valid = true;
    if (!nameRegex.test(adminSignUpData.first_name)) {
      setErrors((prev) => ({ ...prev, first_name: 'First name can only contain letters and spaces.' }));
      valid = false;
    }
    if (!nameRegex.test(adminSignUpData.last_name)) {
      setErrors((prev) => ({ ...prev, last_name: 'Last name can only contain letters and spaces.' }));
      valid = false;
    }
    if (!emailRegex.test(adminSignUpData.email)) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
      valid = false;
    }
    if (!phoneRegex.test(adminSignUpData.phone) || adminSignUpData.phone.length !== 10) {
      setErrors((prev) => ({ ...prev, phone: 'Phone number must be exactly 10 digits.' }));
      valid = false;
    }
    if (!institutionRegex.test(adminSignUpData.institution_name)) {
      setErrors((prev) => ({ ...prev, institution_name: 'Institution name can only contain letters and spaces.' }));
      valid = false;
    }
    if (!passwordRegex.test(adminSignUpData.password_create)) {
      setErrors((prev) => ({ ...prev, password_create: 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.' }));
      valid = false;
    }
    if (adminSignUpData.password_create !== adminSignUpData.password_confirm) {
      setErrors((prev) => ({ ...prev, password_confirm: "Passwords don't match." }));
      valid = false;
    }
    if (!valid) return;
    try {
      const userData = {
        first_name: adminSignUpData.first_name,
        last_name: adminSignUpData.last_name,
        email: adminSignUpData.email,
        phone: adminSignUpData.phone,
        institution_name: adminSignUpData.institution_name,
        password: adminSignUpData.password_confirm
      };

      const res = await adminSignUp(userData);
      setResponse(res);
      setMessage("SignUp Successful");
      setError(null);
      document.getElementById("signUpModal").showModal();
    } catch (err) {
      setError(err.message || "Failed to create User");
      setResponse(null);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-4 md:p-10 max-w-6xl mx-auto">
      {/* Left – Signup Form */}
      <div className="bg-white/80 rounded-3xl p-8 md:p-10 flex flex-col gap-5 justify-center shadow-xl border border-[#C0C9EE] text-[#1F2343] w-full max-w-md mx-auto">
        <h2 className="text-xl font-bold text-center">Sign up for your institution</h2>
        <BaseInput placeholder="First Name" className="w-full" name="first_name" value={adminSignUpData.first_name} onValueChange={onDataChange} />
        <span className="block text-xs text-red-500 text-left">{errors.first_name}</span>
        <BaseInput placeholder="Last Name" className="w-full" name="last_name" value={adminSignUpData.last_name} onValueChange={onDataChange} />
        <span className="block text-xs text-red-500 text-left">{errors.last_name}</span>
        <BaseInput placeholder="Email Address" className="w-full" name="email" value={adminSignUpData.email} onValueChange={onDataChange} />
        <span className="block text-xs text-red-500 text-left">{errors.email}</span>
        <BaseInput placeholder="Phone no." className="w-full" name="phone" value={adminSignUpData.phone} onValueChange={onDataChange} />
        <span className="block text-xs text-red-500 text-left">{errors.phone}</span>
        <BaseInput placeholder="Institution Name" className="w-full" name="institution_name" value={adminSignUpData.institution_name} onValueChange={onDataChange} />
        <span className="block text-xs text-red-500 text-left">{errors.institution_name}</span>
        <PasswordInput placeholder="Create Password" className="w-full" name="password_create" value={adminSignUpData.password_create} onValueChange={onDataChange} />
        <span className="block text-xs text-red-500 text-left">{errors.password_create}</span>
        <PasswordInput placeholder="Confirm Password" className="w-full" name="password_confirm" value={adminSignUpData.password_confirm} onValueChange={onDataChange} />
        <span className="block text-xs text-red-500 text-left">{errors.password_confirm}</span>
        <AppButton btnText="CREATE ACCOUNT" className={"w-full h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors"} onClick={onSignUpButtonClicked} />
        {/* Modal */}
        <dialog id="signUpModal" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box flex flex-col items-center">
            <h3 className="font-bold text-lg">Sign Up Successful!</h3>
            <div className="modal-action w-full flex justify-center">
              <form method="dialog">
                <Link to="/login">
                  <AppButton btnText="LOGIN" className={"w-[120px] h-[50px] bg-[#1F2343] text-white border-none hover:bg-[#8CCDEB] hover:text-[#1F2343] transition-colors"} />
                </Link>
              </form>
            </div>
          </div>
        </dialog>
        <hr className="bg-[#B2B2B2] h-1" />
        <div className="flex gap-1 justify-center text-[#1F2343]">
          <p>Not an admin?</p>
          <Link to="/sign-up/other-users" className="cursor-pointer underline">Sign Up Here</Link>
        </div>
      </div>
      {/* Right – Uni-directional Vertical Flow Chart */}
      <div className="bg-white/80 rounded-3xl p-8 md:p-10 flex flex-col justify-center items-center gap-6 border border-[#C0C9EE] shadow-xl w-full lg:w-1/2">
        <h2 className="text-xl font-bold text-center text-[#1F2343]">Admin & Staff Onboarding Flow</h2>
        <div className="flex flex-col gap-8 w-full max-w-md mx-auto">
          {/* Step 1 */}
          <div className="flex flex-row items-center gap-4">
            <Step number={1} />
            <div className="flex-1 text-left pl-2 text-sm font-medium">Admin signs up with email</div>
          </div>
          {/* Step 2 */}
          <div className="flex flex-row items-center gap-4">
            <Step number={2} />
            <div className="flex-1 text-left pl-2 text-sm font-medium">Admin logs in to dashboard</div>
          </div>
          {/* Step 3 */}
          <div className="flex flex-row items-center gap-4">
            <Step number={3} />
            <div className="flex-1 text-left pl-2 text-sm font-medium">Admin generates UUIDs for staff</div>
          </div>
          {/* Step 4 */}
          <div className="flex flex-row items-center gap-4">
            <Step number={4} />
            <div className="flex-1 text-left pl-2 text-sm font-medium">Staff sign up using provided UUID</div>
          </div>
        </div>
        <p className="text-xs text-center max-w-md text-[#1F2343] mt-4">
          The admin is the primary account holder—only they can create or revoke staff UUIDs. Staff must use a valid UUID during sign‑up to be linked to the institution.
        </p>
      </div>
    </div>
  );
}

// Helper Components
function Step({ number }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-gradient-to-br from-[#8CCDEB] via-[#C0C9EE] to-white text-[#1F2343] w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 border-[#C0C9EE] shadow">
        {number}
      </div>
    </div>
  );
}

function Arrow() {
  return <div className="hidden md:block w-10 h-px bg-gray-400" />;
}

export default SignUpContainer;
