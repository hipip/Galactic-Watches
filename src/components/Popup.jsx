import React, { useEffect, useState } from "react";

const Popup = ({ message, onClose, bgColor }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose && onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className="popup" style={{ backgroundColor: bgColor }}>
      {message}
    </div>
  );
};

export default Popup;
