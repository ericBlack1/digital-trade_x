// app/components/AuthForms.js
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AuthForms() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="w-[335px] ">
        {isLogin ? (
          <LoginForm onToggleAuth={() => setIsLogin(false)} />
        ) : (
          <SignUpForm onToggleAuth={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}

function LoginForm({ onToggleAuth }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "buyer",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        router.push(
          formData.role === "vendor" ? "/vendor/dashboard" : "/products"
        );
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full space-y-3">
      <div className="absolute left-0 top-0">
        <Image
          className=""
          src="/images/bubbleLeft.png"
          alt="bubble Left Decoration"
          width={227}
          height={213}
        />
      </div>
      <div className="absolute right-0 top-20  ">
        <Image
          src="/images/bubbleRight.png"
          alt="bubbleleft"
          width={72}
          height={213}
        />
      </div>
      <div className="relative -z-1">
        <h2 className="w-[200px] text-[50px]  font-bold text-left md:text-center  leading-10 ">
          Welcome back
        </h2>
        <p className="mt-5 text-[17px] text-left md:text-center text-gray-600">
          Login to your Account
        </p>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="mt-1 w-full px-3 py-2 border rounded-md"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            className="mt-1 w-full px-3 py-2 border rounded-md"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Login as</label>
          <select
            className="mt-1 w-full px-3 py-2 border rounded-md"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          >
            <option value="buyer">Buyer</option>
            <option value="vendor">Vendor</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#004CFF] text-white rounded-md hover:bg-blue-700">
          Log in
        </button>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <button
            onClick={onToggleAuth}
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

function SignUpForm({ onToggleAuth }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "buyer",
    // Vendor specific fields
    businessName: "",
    phoneNumber: "",
    idNumber: "",
    address: "",
    city: "",
    country: "",
    taxId: "",
    businessRegistrationNumber: "",
    businessType: "individual",
    bankAccountNumber: "",
    bankName: "",
  });
  const [error, setError] = useState("");
  const [isVendor, setIsVendor] = useState(false);

  // Update isVendor when role changes
  useEffect(() => {
    setIsVendor(formData.role === "vendor");
  }, [formData.role]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        router.push(
          formData.role === "vendor" ? "/vendor/dashboard" : "/products"
        );
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full space-y-6">
      <div className="absolute left-0 top-0">
        <Image
          className=""
          src="/images/bubbleLeft.png"
          alt="bubble Left Decoration"
          width={227}
          height={213}
        />
      </div>
      <div className="absolute right-0 top-20  ">
        <Image
          src="/images/bubbleRight.png"
          alt="bubbleleft"
          width={72}
          height={213}
        />
      </div>
      <div className="relative -z-1">
        <h2 className="w-[200px] text-[50px]  font-bold text-left md:text-center  leading-10 ">
          Create Account
        </h2>
        <p className="mt-5 text-[17px] text-left md:text-center text-gray-600">
          Join our marketplace
        </p>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Information Section */}
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Basic Information</h3>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 w-full px-3 py-2 border rounded-md"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="mt-1 w-full px-3 py-2 border rounded-md"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium">I want to</label>
            <select
              className="mt-1 w-full px-3 py-2 border rounded-md"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            >
              <option value="buyer">Shop on the platform</option>
              <option value="vendor">Sell on the platform</option>
            </select>
          </div>
        </div>

        {/* Vendor KYC Section */}
        {isVendor && (
          <div className="space-y-4 border-t pt-4">
            <h3 className="font-medium text-lg">Vendor Information</h3>

            <div>
              <label className="block text-sm font-medium">Business Name</label>
              <input
                type="text"
                required
                className="mt-1 w-full px-3 py-2 border rounded-md"
                value={formData.businessName}
                onChange={(e) =>
                  setFormData({ ...formData, businessName: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                required
                className="mt-1 w-full px-3 py-2 border rounded-md"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium">ID Number</label>
              <input
                type="text"
                required
                className="mt-1 w-full px-3 py-2 border rounded-md"
                value={formData.idNumber}
                onChange={(e) =>
                  setFormData({ ...formData, idNumber: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Country</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Full Address</label>
              <textarea
                required
                className="mt-1 w-full px-3 py-2 border rounded-md"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Business Type</label>
              <select
                className="mt-1 w-full px-3 py-2 border rounded-md"
                value={formData.businessType}
                onChange={(e) =>
                  setFormData({ ...formData, businessType: e.target.value })
                }
              >
                <option value="individual">
                  Individual/Sole Proprietorship
                </option>
                <option value="company">Registered Company</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Tax ID Number</label>
              <input
                type="text"
                required
                className="mt-1 w-full px-3 py-2 border rounded-md"
                value={formData.taxId}
                onChange={(e) =>
                  setFormData({ ...formData, taxId: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Bank Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                  value={formData.bankName}
                  onChange={(e) =>
                    setFormData({ ...formData, bankName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Bank Account Number
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                  value={formData.bankAccountNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      bankAccountNumber: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#004CFF] text-white rounded-md hover:bg-blue-700"
        >
          Sign up
        </button>
      </form>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={onToggleAuth}
            className="text-blue-600 hover:text-blue-500 font-medium"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
