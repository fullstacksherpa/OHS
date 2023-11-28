import { useState, useEffect, useRef } from 'react';
import { contents } from '../constants';
const Document = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
      <div className='h-[95%] flex gap-4 w-full' id='document'>
        <div className="p-1  rounded-xl flex  flex-col  items-center gap-y-2 font-bold text-white border border-white w-1/4">
          {contents.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none w-full p-2 hover:bg-orange rounded-xl text-cneter focus:ring-2 focus:bg-orange/90 focus:text-white ${
                selectedTab === index ? 'ring-2 bg-orange text-white' : ''
              } `}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className='p-2 rounded-xl w-3/4 border border-white text-whitenp'>
          {contents.map((item, index) => (
            <div className={`${selectedTab === index ? '' : 'hidden'}`}  key={index}>
              {item.data}
            </div>
          ))}
        </div>
      </div>
  );
};

export default Document;