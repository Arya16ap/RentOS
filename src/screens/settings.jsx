import React, { useState } from 'react';
import { User, Mail, LogOut, Save, Settings, X, Sparkles, Home } from 'lucide-react';
import './settings.css';
export default function SettingsPage() {
  const [studentInfo, setStudentInfo] = useState({
    studentEmail: 'student@example.com',
    parentEmail: 'parent@example.com',
    teacherEmail: 'teacher@example.com',
    age: 15
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempInfo, setTempInfo] = useState({...studentInfo});
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleEdit = () => {
    setIsEditing(true);
    setTempInfo({...studentInfo});
  };

  const validateEmails = () => {
    const { studentEmail, parentEmail, teacherEmail } = tempInfo;
    
    if (!studentEmail || !parentEmail || !teacherEmail) {
      alert('All email fields are required!');
      return false;
    }

    if (studentEmail.toLowerCase() === parentEmail.toLowerCase()) {
      alert('Student email and Parent email cannot be the same!');
      return false;
    }
    
    if (studentEmail.toLowerCase() === teacherEmail.toLowerCase()) {
      alert('Student email and Teacher email cannot be the same!');
      return false;
    }
    
    if (parentEmail.toLowerCase() === teacherEmail.toLowerCase()) {
      alert('Parent email and Teacher email cannot be the same!');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(studentEmail) || !emailRegex.test(parentEmail) || !emailRegex.test(teacherEmail)) {
      alert('Please enter valid email addresses!');
      return false;
    }

    return true;
  };

  const handleSave = () => {
    if (validateEmails()) {
      setStudentInfo({...tempInfo});
      setIsEditing(false);
      alert('Settings saved successfully! ✨');
    }
  };

  const handleCancel = () => {
    setTempInfo({...studentInfo});
    setIsEditing(false);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout? 🚀')) {
      alert('Logging out... You will be redirected to the login page.');
      // window.location.href = '/login';
    }
  };

  return (
    
    <div className="min-h-screen relative overflow-hidden p-8" >
      {/* CSS Animation for gradient */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-30px) rotate(10deg); 
          }
        }
        @keyframes twinkle {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.4; 
            transform: scale(1.3); 
          }
        }
        @keyframes floatSlow {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
          }
          50% { 
            transform: translateY(-40px) translateX(20px); 
          }
        }
      `}</style>
      
      {/* Animated decorative elements */}


      <div className="relative z-10 space-y-10 flex flex-col items-center">
        
        {/* Header with ADHD Quest theme */}
        <div className="text-center mb-12">
          <div 
            className="inline-block bg-white px-12 py-8 transform transition-all duration-200"
            style={{ 
              borderRadius: '20px',
              border: '6px solid #FFD700',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
            }}
            onMouseEnter={() => setHoveredButton('header')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <h1 className="text-6xl font-black flex items-center justify-center gap-4" style={{
              color: '#FFD700',
              textShadow: '3px 3px 0px rgba(0, 0, 0, 0.2)',
              letterSpacing: '2px'
            }}>
              <Settings className="animate-spin" style={{animationDuration: hoveredButton === 'header' ? '2s' : '20s', color: '#FFD700'}} size={60} />
              SETTINGS SATELLITE
              <Sparkles style={{color: '#FFD700'}} size={50} />
            </h1>
          </div>
        </div>

        {/* Personal Information Card */}
        <div 
          className="bg-white p-10 relative transform transition-all duration-200"
          style={{ 
            borderRadius: '20px',
            border: '6px solid #FFD700',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            margin: '24px 0',
            width: '50%',
            minWidth: '600px'
          }}
        >
          {/* Animated corner sparkles */}
          <div className="absolute -top-4 -right-4 text-5xl animate-bounce" style={{animationDuration: '2s'}}>🌟</div>
          <div className="absolute -bottom-4 -left-4 text-5xl animate-bounce" style={{animationDuration: '2.5s'}}>🎨</div>
          
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-5xl font-black flex items-center gap-3" style={{
              color: '#FFD700',
              textShadow: '2px 2px 0px rgba(0, 0, 0, 0.15)'
            }}>
              <User style={{color: '#FFD700'}} size={48} />
              PERSONAL INFO
            </h2>
            {!isEditing ? (
              <button
                onClick={handleEdit}
                onMouseEnter={() => setHoveredButton('edit')}
                onMouseLeave={() => setHoveredButton(null)}
                className="px-10 py-5 text-white font-black text-2xl transform transition-all duration-200 active:scale-95"
                style={{
                  backgroundColor: '#FFD700',
                  borderRadius: '20px',
                  border: '4px solid #1a1a1a',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                  transform: hoveredButton === 'edit' ? 'scale(1.1)' : 'scale(1)',
                  letterSpacing: '1px'
                }}
              >
                ✏️ EDIT
              </button>
            ) : (
              <button
                onClick={handleCancel}
                onMouseEnter={() => setHoveredButton('cancel')}
                onMouseLeave={() => setHoveredButton(null)}
                className="px-10 py-5 text-white font-black text-2xl transform transition-all duration-200 flex items-center gap-3 active:scale-95"
                style={{
                  backgroundColor: '#6B7280',
                  borderRadius: '20px',
                  border: '4px solid #1a1a1a',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                  transform: hoveredButton === 'cancel' ? 'scale(1.1)' : 'scale(1)',
                  letterSpacing: '1px'
                }}
              >
                <X size={28} />
                CANCEL
              </button>
            )}
          </div>

          <div className="space-y-8">
            {/* Student Email */}
            <div 
              className="p-6 transition-all duration-200"
              style={{ 
                backgroundColor: '#E0F2FE',
                borderRadius: '16px',
                border: '4px solid #FFD700',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden'
              }}
            >
              <label className="block text-2xl font-black mb-4 flex items-center gap-3" style={{color: '#1a1a1a'}}>
                <Mail size={28} style={{color: '#1a1a1a'}} />
                🎓 STUDENT EMAIL
              </label>
              <input
                type="email"
                value={isEditing ? tempInfo.studentEmail : studentInfo.studentEmail}
                onChange={(e) => setTempInfo({...tempInfo, studentEmail: e.target.value})}
                disabled={!isEditing}
                className="w-full px-6 py-5 text-xl font-bold transition-all"
                style={{ 
                  borderRadius: '12px',
                  border: '3px solid #1a1a1a',
                  backgroundColor: isEditing ? 'white' : '#F3F4F6',
                  color: '#1a1a1a',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Parent Email */}
            <div 
              className="p-6 transition-all duration-200"
              style={{ 
                backgroundColor: '#F3E8FF',
                borderRadius: '16px',
                border: '4px solid #FFD700',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden'
              }}
            >
              <label className="block text-2xl font-black mb-4 flex items-center gap-3" style={{color: '#1a1a1a'}}>
                <Mail size={28} style={{color: '#1a1a1a'}} />
                👪 PARENT EMAIL
              </label>
              <input
                type="email"
                value={isEditing ? tempInfo.parentEmail : studentInfo.parentEmail}
                onChange={(e) => setTempInfo({...tempInfo, parentEmail: e.target.value})}
                disabled={!isEditing}
                className="w-full px-6 py-5 text-xl font-bold transition-all"
                style={{ 
                  borderRadius: '12px',
                  border: '3px solid #1a1a1a',
                  backgroundColor: isEditing ? 'white' : '#F3F4F6',
                  color: '#1a1a1a',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Teacher Email */}
            <div 
              className="p-6 transition-all duration-200"
              style={{ 
                backgroundColor: '#DCFCE7',
                borderRadius: '16px',
                border: '4px solid #FFD700',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden'
              }}
            >
              <label className="block text-2xl font-black mb-4 flex items-center gap-3" style={{color: '#1a1a1a'}}>
                <Mail size={28} style={{color: '#1a1a1a'}} />
                👨‍🏫 TEACHER EMAIL
              </label>
              <input
                type="email"
                value={isEditing ? tempInfo.teacherEmail : studentInfo.teacherEmail}
                onChange={(e) => setTempInfo({...tempInfo, teacherEmail: e.target.value})}
                disabled={!isEditing}
                className="w-full px-6 py-5 text-xl font-bold transition-all"
                style={{ 
                  borderRadius: '12px',
                  border: '3px solid #1a1a1a',
                  backgroundColor: isEditing ? 'white' : '#F3F4F6',
                  color: '#1a1a1a',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Age */}
            <div 
              className="p-6 transition-all duration-200"
              style={{ 
                backgroundColor: '#FED7AA',
                borderRadius: '16px',
                border: '4px solid #FFD700',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden'
              }}
            >
              <label className="block text-2xl font-black mb-4 flex items-center gap-3" style={{color: '#1a1a1a'}}>
                <User size={28} style={{color: '#1a1a1a'}} />
                🎂 AGE
              </label>
              <input
                type="number"
                value={isEditing ? tempInfo.age : studentInfo.age}
                onChange={(e) => setTempInfo({...tempInfo, age: parseInt(e.target.value) || 0})}
                disabled={!isEditing}
                min="5"
                max="100"
                className="w-full px-6 py-5 text-xl font-bold transition-all"
                style={{ 
                  borderRadius: '12px',
                  border: '3px solid #1a1a1a',
                  backgroundColor: isEditing ? 'white' : '#F3F4F6',
                  color: '#1a1a1a',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Warning Alert and Save Button */}
          {isEditing && (
            <div className="mt-10 space-y-6">
              <div 
                className="p-6 animate-pulse"
                style={{ 
                  backgroundColor: '#FEF3C7',
                  borderRadius: '16px',
                  border: '4px solid #FFD700',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl animate-bounce">⚠️</div>
                  <div>
                    <p className="text-2xl font-black mb-2" style={{color: '#1a1a1a'}}>
                      IMPORTANT REMINDER!
                    </p>
                    <p className="text-xl font-bold" style={{color: '#1a1a1a'}}>
                      All three email addresses must be different from each other.
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleSave}
                onMouseEnter={() => setHoveredButton('save')}
                onMouseLeave={() => setHoveredButton(null)}
                className="w-full px-10 py-6 text-white font-black text-3xl transform transition-all duration-200 flex items-center justify-center gap-4 active:scale-95"
                style={{
                  backgroundColor: '#FFD700',
                  borderRadius: '20px',
                  border: '4px solid #1a1a1a',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  transform: hoveredButton === 'save' ? 'scale(1.05)' : 'scale(1)',
                  letterSpacing: '2px'
                }}
              >
                <Save size={36} />
                SAVE CHANGES
                <Sparkles size={32} />
              </button>
            </div>
          )}
        </div>

        {/* Logout Card */}
        <div 
          className="bg-white p-10 relative transform transition-all duration-200"
          style={{ 
            borderRadius: '20px',
            border: '6px solid #FFD700',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            margin: '24px 0',
            width: '50%',
            minWidth: '600px'
          }}
        >
          <div className="absolute -top-4 -right-4 text-5xl animate-bounce" style={{animationDuration: '2.2s'}}>🚀</div>
          <h2 className="text-5xl font-black mb-8 flex items-center gap-4" style={{
            color: '#FFD700',
            textShadow: '2px 2px 0px rgba(0, 0, 0, 0.15)'
          }}>
            <LogOut size={48} style={{color: '#FFD700'}} />
            ACCOUNT ACTIONS
          </h2>
          <div style={{ overflow: 'hidden' }}>
            <button
              onClick={handleLogout}
              onMouseEnter={() => setHoveredButton('logout')}
              onMouseLeave={() => setHoveredButton(null)}
              className="w-full px-8 py-6 text-white font-black text-2xl transition-all duration-200 flex items-center justify-center gap-4 active:scale-95"
              style={{
                backgroundColor: '#EF4444',
                borderRadius: '20px',
                border: '4px solid #1a1a1a',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                letterSpacing: '2px',
                boxSizing: 'border-box'
              }}
            >
              <LogOut size={32} />
              LOGOUT
            </button>
          </div>
          <p className="text-xl font-bold mt-6 text-center" style={{color: '#1a1a1a'}}>
            👋 You will be redirected to the login page
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => alert('Navigate back to main dashboard')}
            onMouseEnter={() => setHoveredButton('back')}
            onMouseLeave={() => setHoveredButton(null)}
            className="px-12 py-6 bg-white font-black text-2xl transform transition-all duration-200 flex items-center gap-4 mx-auto active:scale-95"
            style={{
              borderRadius: '20px',
              border: '4px solid #FFD700',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
              color: '#FFD700',
              transform: hoveredButton === 'back' ? 'scale(1.1)' : 'scale(1)',
              letterSpacing: '1px'
            }}
          >
            <Home size={32} />
            BACK TO QUEST
          </button>
        </div>
      </div>
    </div>
  );
}
  
