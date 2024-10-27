'use client';
import React, { useState, useEffect } from 'react';
import {
  User,
  Mail,
  MapPin,
  Phone,
  ShoppingCart,
  Clock,
  Edit,
  Clipboard,
  X
} from 'lucide-react';

const UserProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [editForm, setEditForm] = useState(null);

  const userId = localStorage.getItem('userID')||'ID-011222';

  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
    }
  }, [userId]);

  const fetchUserData = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${id}`);
      const data = await response.json();
      setUserInfo(data);
      setEditForm(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const updateUserData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editForm),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUserInfo(updatedUser);
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  if (!userInfo) {
    return <p>Loading user data...</p>;
  }

  const InfoRow = ({ icon, label, value }) => (
    <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
      <div className="text-gray-400">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-sm font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );

  const backgroundImageStyle = userInfo.backgroundPhoto
    ? { backgroundImage: `url(${userInfo.backgroundPhoto})` }
    : { backgroundImage: 'linear-gradient(to right, #6a11cb, #2575fc)' };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl m-6 shadow-md overflow-hidden">
      {/* Background Image or Gradient */}
      <div 
        className="relative h-32 bg-center bg-cover"
        style={backgroundImageStyle}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Profile section */}
      <div className="relative px-4 pt-16 pb-8">
        {/* Profile Picture */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <img
            src={userInfo.profilePicture || '/default-avatar.jpg'}
            alt={`${userInfo.name}'s profile`}
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
        </div>

        {/* User info */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">{userInfo.name}</h2>
          <span className="inline-block px-2 py-1 text-sm text-emerald-600 bg-emerald-50 rounded-full">
            Active
          </span>
        </div>

        {/* Info list */}
        <div className="space-y-1">
          <InfoRow 
            icon={<Clipboard size={20} />}
            label="Customer ID" 
            value={userInfo.id} 
          />
          <InfoRow 
            icon={<Mail size={20} />}
            label="E-mail" 
            value={userInfo.email} 
          />
          <InfoRow 
            icon={<MapPin size={20} />}
            label="Address" 
            value={userInfo.address} 
          />
          <InfoRow 
            icon={<Phone size={20} />}
            label="Phone Number" 
            value={userInfo.phone} 
          />
          <InfoRow 
            icon={<ShoppingCart size={20} />}
            label="Last Transaction" 
            value={userInfo.lastTransaction} 
          />
          <InfoRow 
            icon={<Clock size={20} />}
            label="Last Online" 
            value={userInfo.lastOnline} 
          />
        </div>

        {/* Edit button */}
        <button
          onClick={() => setIsEditing(true)}
          className="mt-6 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          <Edit size={16} />
          <span>Edit Information</span>
        </button>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white overflow-y-auto max-h-screen rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Edit Profile Information</h3>
              <button 
                onClick={() => setIsEditing(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={updateUserData} className="space-y-4">
              {Object.entries(editForm).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setEditForm({...editForm, [key]: e.target.value})}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center space-x-2"
                >
                  <Edit size={16} />
                  <span>Save Changes</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg flex items-center justify-center space-x-2"
                >
                  <X size={16} />
                  <span>Cancel</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileCard;
