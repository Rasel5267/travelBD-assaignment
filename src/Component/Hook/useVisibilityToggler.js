import React, { useState } from 'react';

const useVisibilityToggler = (component, visibility = false) => {
    const [visible, setVisible] = useState(() => visibility);
    return [visible ? component : null, () => setVisible((v) => !v)];
};

export default useVisibilityToggler;