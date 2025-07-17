import React, { useState } from 'react';
import { X, User, Mail, Phone, MapPin, Edit2, Save } from 'lucide-react';
import { User as UserType } from '../types/product';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserType | null;
  onUpdateUser: (user: UserType) => void;
}

const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  user,
  onUpdateUser,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<UserType | null>(user);

  React.useEffect(() => {
    setEditedUser(user);
  }, [user]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (editedUser) {
      onUpdateUser(editedUser);
      setIsEditing(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    if (!editedUser) return;
    
    if (field.startsWith('address.')) {
      const addressField = field.split('.')[1];
      setEditedUser({
        ...editedUser,
        address: {
          ...editedUser.address,
          [addressField]: value,
        },
      });
    } else {
      setEditedUser({
        ...editedUser,
        [field]: value,
      });
    }
  };

  const defaultUser: UserType = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: {
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
    },
  };

  const currentUser = editedUser || defaultUser;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose} />
        
        <div className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">My Account</h2>
            <div className="flex items-center space-x-2">
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-1 px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  <Save className="h-4 w-4" />
                  <span>Save</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  <Edit2 className="h-4 w-4" />
                  <span>Edit</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Profile Picture */}
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{currentUser.name}</h3>
                <p className="text-gray-600">Customer since 2024</p>
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={currentUser.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-md">
                      <User className="h-4 w-4 text-gray-500" />
                      <span>{currentUser.name}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={currentUser.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-md">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span>{currentUser.email}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={currentUser.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-md">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>{currentUser.phone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Address Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={currentUser.address.street}
                      onChange={(e) => handleInputChange('address.street', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-md">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{currentUser.address.street}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={currentUser.address.city}
                      onChange={(e) => handleInputChange('address.city', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="p-2 bg-gray-50 rounded-md">{currentUser.address.city}</div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={currentUser.address.state}
                      onChange={(e) => handleInputChange('address.state', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="p-2 bg-gray-50 rounded-md">{currentUser.address.state}</div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={currentUser.address.zipCode}
                      onChange={(e) => handleInputChange('address.zipCode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="p-2 bg-gray-50 rounded-md">{currentUser.address.zipCode}</div>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={currentUser.address.country}
                      onChange={(e) => handleInputChange('address.country', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  ) : (
                    <div className="p-2 bg-gray-50 rounded-md">{currentUser.address.country}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;