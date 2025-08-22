import React, { useState } from 'react';
import { Calendar, Clock, User, Home, Briefcase, Users, Star, Phone } from 'lucide-react';

function App() {
  
  const [service, setService] = useState('Teeth Whitening');
  const [doctor, setDoctor] = useState('Dr. Anika Rahman');
  const [selectedDay, setSelectedDay] = useState(5);
  const [selectedTime, setSelectedTime] = useState('10:30 AM');

 
  const services = [
    'Teeth Whitening',
    'Dental Cleaning', 
    'Root Canal',
    'Dental Implants'
  ];

 
  const doctors = [
    'Dr. Anika Rahman',
    'Dr. Rafiq Hassan',
    'Dr. Fatima Ahmed',
    'Dr. Karim Chowdhury'
  ];

  
  const morningTimes = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'];
  const afternoonTimes = ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM'];
  const eveningTimes = ['3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'];
  const allTimes = [...morningTimes, ...afternoonTimes, ...eveningTimes];

  
  const julyDays = [
    { day: 'SUN', dates: [null, 7, 14, 21, 28] },
    { day: 'MON', dates: [1, 8, 15, 22, 29] },
    { day: 'TUE', dates: [2, 9, 16, 23, 30] },
    { day: 'WED', dates: [3, 10, 17, 24, 31] },
    { day: 'THU', dates: [4, 11, 18, 25, null] },
    { day: 'FRI', dates: [5, 12, 19, 26, null] },
    { day: 'SAT', dates: [6, 13, 20, 27, null] }
  ];


  function handleBooking() {
    alert('Appointment Booked!\n\n' +
          'Service: ' + service + '\n' +
          'Doctor: ' + doctor + '\n' + 
          'Date: July ' + selectedDay + ', 2024\n' +
          'Time: ' + selectedTime);
  }

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Arial, sans-serif',
      margin: '0',
      padding: '0',
      boxSizing: 'border-box'
    }}>
      
      {/* Left Sidebar - Navigation Menu */}
      <div style={{ 
        width: '280px',
        minWidth: '280px', 
        backgroundColor: 'white', 
        boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: '0'
      }}>
        
        {/* Logo/Title Area */}
        <div style={{ 
          padding: '25px 20px', 
          borderBottom: '1px solid #e9ecef'
        }}>
          <h1 style={{ 
            fontSize: '22px', 
            fontWeight: 'bold',
            color: '#2c3e50',
            margin: '0'
          }}>
            Smile Studio
          </h1>
        </div>
        
        {/* Menu Items */}
        <div style={{ flex: '1', paddingTop: '20px' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            padding: '15px 20px', 
            cursor: 'pointer',
            color: '#6c757d'
          }}>
            <Home size={20} style={{ marginRight: '12px' }} />
            <span>Home</span>
          </div>
          
          {/* Active Menu Item - Services */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            padding: '15px 20px', 
            backgroundColor: '#e3f2fd',
            borderRight: '4px solid #2196f3',
            color: '#2196f3',
            cursor: 'pointer'
          }}>
            <Briefcase size={20} style={{ marginRight: '12px' }} />
            <span style={{ fontWeight: '500' }}>Services</span>
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            padding: '15px 20px', 
            cursor: 'pointer',
            color: '#6c757d'
          }}>
            <Users size={20} style={{ marginRight: '12px' }} />
            <span>Doctors</span>
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            padding: '15px 20px', 
            cursor: 'pointer',
            color: '#6c757d'
          }}>
            <Star size={20} style={{ marginRight: '12px' }} />
            <span>Reviews</span>
          </div>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            padding: '15px 20px', 
            cursor: 'pointer',
            color: '#6c757d'
          }}>
            <Phone size={20} style={{ marginRight: '12px' }} />
            <span>Contact</span>
          </div>
        </div>
        
        {/* Profile Section at Bottom */}
        <div style={{ 
          padding: '20px', 
          borderTop: '1px solid #e9ecef' 
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            cursor: 'pointer',
            color: '#6c757d'
          }}>
            <User size={20} style={{ marginRight: '12px' }} />
            <span>Profile</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ 
        flex: '1',
        width: '100%',
        minWidth: '0',
        padding: '40px 50px', 
        overflowY: 'auto',
        backgroundColor: '#f8f9fa'
      }}>
        
        {/* Page Title */}
        <h2 style={{ 
          fontSize: '28px', 
          fontWeight: 'bold', 
          marginBottom: '30px',
          color: '#2c3e50'
        }}>
          Book an Appointment
        </h2>
        
        {/* Main Form Container */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '12px', 
          padding: '50px', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto'
        }}>
          
          {/* Service and Doctor Selection Row */}
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px', 
            marginBottom: '50px' 
          }}>
            
            {/* Service Dropdown */}
            <div style={{ flex: '1' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontSize: '16px', 
                color: '#495057',
                fontWeight: '500'
              }}>
                Service
              </label>
              <select 
                value={service}
                onChange={(e) => setService(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #dee2e6',
                  borderRadius: '8px',
                  fontSize: '16px',
                  backgroundColor: 'white',
                  color: '#495057'
                }}
              >
                {services.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            
            {/* Doctor Dropdown */}
            <div style={{ flex: '1' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontSize: '16px', 
                color: '#495057',
                fontWeight: '500'
              }}>
                Doctor
              </label>
              <select 
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '2px solid #dee2e6',
                  borderRadius: '8px',
                  fontSize: '16px',
                  backgroundColor: 'white',
                  color: '#495057'
                }}
              >
                {doctors.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Calendar Section */}
          <div style={{ marginBottom: '50px' }}>
            <div style={{ 
              textAlign: 'center', 
              marginBottom: '30px' 
            }}>
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold',
                color: '#2c3e50',
                margin: '0'
              }}>
                July 2024
              </h3>
            </div>
            
            {/* Calendar Table */}
            <table style={{ 
              width: '100%', 
              maxWidth: '600px',
              margin: '0 auto',
              borderCollapse: 'separate', 
              borderSpacing: '12px' 
            }}>
              
              {/* Days of Week Header */}
              <thead>
                <tr>
                  {julyDays.map(col => (
                    <th key={col.day} style={{ 
                      textAlign: 'center', 
                      fontSize: '14px', 
                      color: '#6c757d',
                      fontWeight: '600',
                      paddingBottom: '15px'
                    }}>
                      {col.day}
                    </th>
                  ))}
                </tr>
              </thead>
              
              {/* Calendar Dates */}
              <tbody>
                {[0, 1, 2, 3, 4].map(weekIndex => (
                  <tr key={weekIndex}>
                    {julyDays.map(col => {
                      const date = col.dates[weekIndex];
                      return (
                        <td key={col.day + weekIndex} style={{ textAlign: 'center' }}>
                          {date && (
                            <button
                              onClick={() => setSelectedDay(date)}
                              style={{
                                width: '55px',
                                height: '55px',
                                border: 'none',
                                borderRadius: '50%',
                                backgroundColor: selectedDay === date ? '#2196f3' : 'transparent',
                                color: selectedDay === date ? 'white' : '#495057',
                                cursor: 'pointer',
                                fontSize: '18px',
                                fontWeight: selectedDay === date ? 'bold' : 'normal'
                              }}
                              onMouseOver={(e) => {
                                if (selectedDay !== date) {
                                  e.target.style.backgroundColor = '#f1f3f4';
                                }
                              }}
                              onMouseOut={(e) => {
                                if (selectedDay !== date) {
                                  e.target.style.backgroundColor = 'transparent';
                                }
                              }}
                            >
                              {date}
                            </button>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Time Selection Section */}
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: 'bold', 
              marginBottom: '30px',
              color: '#2c3e50',
              textAlign: 'center'
            }}>
              Available Times on July {selectedDay}, 2024
            </h3>
            
            {/* Time Buttons Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
              gap: '15px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {allTimes.map(time => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  style={{
                    padding: '15px 12px',
                    border: selectedTime === time ? '2px solid #2196f3' : '2px solid #dee2e6',
                    borderRadius: '8px',
                    backgroundColor: selectedTime === time ? '#2196f3' : '#f8f9fa',
                    color: selectedTime === time ? 'white' : '#495057',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: selectedTime === time ? '600' : 'normal'
                  }}
                  onMouseOver={(e) => {
                    if (selectedTime !== time) {
                      e.target.style.backgroundColor = '#e9ecef';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (selectedTime !== time) {
                      e.target.style.backgroundColor = '#f8f9fa';
                    }
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Confirm Booking Button */}
          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={handleBooking}
              style={{
                padding: '18px 50px',
                backgroundColor: '#2196f3',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#1976d2';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#2196f3';
              }}
            >
              Confirm Booking
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;