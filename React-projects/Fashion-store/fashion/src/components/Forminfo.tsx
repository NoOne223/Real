// Forminfo.tsx
import React, { FormEvent, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Monster, Monster1, Monster2, Monster3, Monster4, 
  Monster5, Monster6, Monster7, Monster8, Monster9,
  Monster10, Monster11, Monster12, Monster13, Monster14,
  Monster15, Monster16, Monster17, Monster18, Monster19,
  Monster20,
} from '../assets/img/Image';
import { UserContext } from './User/UserContext';

interface ForminfoProps {
  role: string;
}

const Forminfo: React.FC<ForminfoProps> = ({ role }) => {
  const [selectedImage, setSelectedImage] = useState(Monster);
  const [avtBackgroundColor, setAvtBackgroundColor] = useState('#ffffff');
  const [showImageSelector, setShowImageSelector] = useState(false);
  const [customImage, setCustomImage] = useState<string | ArrayBuffer | null>(null);
  const [dob, setDob] = useState('');
  const [dobError, setDobError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const toggleImageSelector = () => {
    setShowImageSelector(!showImageSelector);
  };

  const avatars = [
    Monster, Monster1, Monster2, Monster3, Monster4, 
    Monster5, Monster6, Monster7, Monster8, Monster9,
    Monster10, Monster11, Monster12, Monster13, Monster14,
    Monster15, Monster16, Monster17, Monster18, Monster19,
    Monster20
  ];

  const selectRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * avatars.length);
    setSelectedImage(avatars[randomIndex]);
    setShowImageSelector(false);
  };

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setAvtBackgroundColor(randomColor);
  };

  const selectImage = (img: string) => {
    setSelectedImage(img);
    setShowImageSelector(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomImage(reader.result);
        if (reader.result) setSelectedImage(reader.result.toString());
        setShowImageSelector(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDob = event.target.value;
    setDob(newDob);
    setDobError('');
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 16);
    const selectedDate = new Date(dob);
    if (selectedDate >= minDate) {
      setDobError('You must 16 or higher');
      return;
    }
    const userData = {
    name: `${firstName} ${lastName}`,
    avatar: selectedImage
    };
    setUser(userData);
    navigate('/main', { state: { role } });
  };

  return (
    <div className='login-bg flex items-center h-screen'>
      <div className='mx-auto'>
        <form onSubmit={handleSubmit} className='info-form form bg-white flex flex-col gap-y-5 p-5 z-10 relative'>
          <div className='text-center'>
            <h2 className='uppercase text-white font-bold text-3xl'>Fill your information</h2>
          </div>
          <div className='flex'>
            <div className='img-area flex flex-col gap-y-5 items-center'>
              <div className='avt mx-auto relative' style={{ backgroundColor: avtBackgroundColor }}>
                <img className='w-full' src={selectedImage as string} alt='Selected Avatar' />
                <div className={`layout ${showImageSelector ? '' : 'hidden'}`} onClick={toggleImageSelector}>
                  <div className='avt-layout'>
                    <i className="fa-solid fa-wand-magic-sparkles text-white text-4xl"></i>
                  </div>
                </div>
              </div>
              <div className='flex gap-x-3'>
                <button 
                  type='button' 
                  className='change-avt border-2 border-solid p-2 border-black'
                  onClick={selectRandomImage}
                >
                  Change avt
                </button>
                <button type='button' className='change-bg border-2 border-solid p-2 border-black' onClick={generateRandomColor}>
                  Change background
                </button>
              </div>
              {showImageSelector && (
                <div className='select-img'>
                  <div className='grid-area grid grid-cols-5 gap-2'>
                    <div className='rounded-img cursor-pointer flex justify-center items-center border border-dashed border-gray-400'>
                      <label className='flex flex-col items-center justify-center cursor-pointer'>
                        <span className='text-2xl text-gray-400'><i className="fa-solid fa-plus"></i></span>
                        <input type='file' className='hidden' onChange={handleFileChange} />
                      </label>
                    </div>
                    {avatars.map((img, index) => (
                      <div key={index} className='rounded-img cursor-pointer' onClick={() => selectImage(img)}>
                        <img src={img} alt={`Avatar ${index}`} className='w-full' />
                        {selectedImage === img && <div className='selected-img'>Selecting</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className='info-area flex flex-col gap-4'>
              <div className='flex gap-4'>
                <div className='flex flex-col'>
                  <label>First name</label>
                  <input 
                    type='text' 
                    name='firstName' 
                    className='input-form' 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <label>Last name</label>
                  <input 
                    type='text' 
                    name='lastName' 
                    className='input-form' 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className='flex gap-4 justify-between'>
                <div className='flex flex-col'>
                  <label>Day of birth</label>
                  <input 
                    type='date' 
                    name='dob' 
                    className='input-form w-56' 
                    value={dob} 
                    onChange={handleDateChange} 
                  />
                  {dobError && <p className='text-red-500'>{dobError}</p>}
                </div>
                <div className='flex flex-col'>
                  <label>Gender</label>
                  <select name='gender' className='input-form h-12 w-56'>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-col'>
                <label>Address</label>
                <input type='text' name='address' className='input-form'/>
              </div>
              <div className='flex flex-col'>
                <label>Your phone number</label>
                <input type='text' name='phone' className='input-form' maxLength={10}/>
              </div>
              {role === 'admin' && (
                <>
                  <div className='flex flex-col'>
                    <label>Your ID</label>
                    <input type='text' name='id' className='input-form'/>
                  </div>
                  <div className='flex flex-col'>
                    <label>Company number</label>
                    <input type='text' name='companyNumber' className='input-form'/>
                    <p className='text-red-600'>Contact HR or manager to get company number.</p>
                  </div>
                </>
              )}
              <button type='submit' className='btn p-3 rounded-lg bg-black text-white'>Save</button>
            </div>
          </div>
        </form>
      </div>
      <div className='curtain'></div>
    </div>
  );
};

export default Forminfo;
