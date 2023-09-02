import React from 'react';

interface Props {
  selectComponent: (index: number) => void;
}

const BottomBar: React.FC<Props> = ({ selectComponent }) => {
  return (
    <div className="fixed bottom-0 w-full flex justify-around items-center bg-blue-500 p-4 text-white">
      {['Button1', 'Button2', 'Button3', 'Button4', 'Button5'].map((button, index) => (
        <button key={index} onClick={() => selectComponent(index)}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default BottomBar;