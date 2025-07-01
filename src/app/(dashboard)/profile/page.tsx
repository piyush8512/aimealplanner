"use client";
import React, { useState } from 'react';
import { User, Edit3, Target, AlertCircle, Save } from 'lucide-react';
import { mockUser } from '@/data/mockData';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(mockUser);

  const handleSave = () => {
    setUser(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(user);
    setIsEditing(false);
  };

  const addDietaryPreference = (preference: string) => {
    if (preference && !editForm.dietaryPreferences.includes(preference)) {
      setEditForm({
        ...editForm,
        dietaryPreferences: [...editForm.dietaryPreferences, preference]
      });
    }
  };

  const removeDietaryPreference = (preference: string) => {
    setEditForm({
      ...editForm,
      dietaryPreferences: editForm.dietaryPreferences.filter(p => p !== preference)
    });
  };

  const addAllergy = (allergy: string) => {
    if (allergy && !editForm.allergies.includes(allergy)) {
      setEditForm({
        ...editForm,
        allergies: [...editForm.allergies, allergy]
      });
    }
  };

  const removeAllergy = (allergy: string) => {
    setEditForm({
      ...editForm,
      allergies: editForm.allergies.filter(a => a !== allergy)
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <User className="h-8 w-8 text-emerald-600" />
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center space-x-2 bg-emerald-600 text-white rounded-lg py-2 px-4 hover:bg-emerald-700 transition-colors duration-200"
          >
            <Edit3 className="h-5 w-5" />
            <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
          </button>
        </div>
        <p className="text-gray-600 mt-2">Manage your preferences and goals</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Personal Information</h2>
            
            <div className="flex items-center space-x-6 mb-6">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-emerald-100"
              />
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{user.name}</h3>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Dietary Preferences */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Dietary Preferences</h2>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {(isEditing ? editForm : user).dietaryPreferences.map(preference => (
                  <span 
                    key={preference}
                    className="flex items-center space-x-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm"
                  >
                    <span>{preference}</span>
                    {isEditing && (
                      <button
                        onClick={() => removeDietaryPreference(preference)}
                        className="text-emerald-600 hover:text-emerald-800"
                      >
                        ×
                      </button>
                    )}
                  </span>
                ))}
              </div>
              
              {isEditing && (
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Add dietary preference"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addDietaryPreference((e.target as HTMLInputElement).value);
                        (e.target as HTMLInputElement).value = '';
                      }
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Allergies */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <AlertCircle className="h-6 w-6 text-red-600" />
              <h2 className="text-xl font-bold text-gray-900">Allergies & Restrictions</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {(isEditing ? editForm : user).allergies.map(allergy => (
                  <span 
                    key={allergy}
                    className="flex items-center space-x-2 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                  >
                    <span>{allergy}</span>
                    {isEditing && (
                      <button
                        onClick={() => removeAllergy(allergy)}
                        className="text-red-600 hover:text-red-800"
                      >
                        ×
                      </button>
                    )}
                  </span>
                ))}
              </div>
              
              {isEditing && (
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Add allergy"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addAllergy((e.target as HTMLInputElement).value);
                        (e.target as HTMLInputElement).value = '';
                      }
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Nutritional Goals */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Target className="h-6 w-6 text-emerald-600" />
              <h2 className="text-xl font-bold text-gray-900">Nutritional Goals</h2>
            </div>
            
            <div className="space-y-4">
              {Object.entries(isEditing ? editForm.goals : user.goals).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-700 capitalize">{key}:</label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={value}
                      onChange={(e) => setEditForm({
                        ...editForm,
                        goals: { ...editForm.goals, [key]: parseInt(e.target.value) }
                      })}
                      className="w-20 border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  ) : (
                    <span className="font-semibold text-gray-900">
                      {value}{key === 'calories' ? ' cal' : 'g'}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Save/Cancel Buttons */}
          {isEditing && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex space-x-3">
                <button
                  onClick={handleSave}
                  className="flex-1 flex items-center justify-center space-x-2 bg-emerald-600 text-white rounded-lg py-2 px-4 hover:bg-emerald-700 transition-colors duration-200"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 border border-gray-300 text-gray-700 rounded-lg py-2 px-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Account Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Recipes Rated:</span>
                <span className="font-semibold text-gray-900">47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Meals Planned:</span>
                <span className="font-semibold text-gray-900">124</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Days Active:</span>
                <span className="font-semibold text-gray-900">89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;